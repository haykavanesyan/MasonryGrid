import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  Suspense,
} from "react";
import styled from "styled-components";

import { fetchPhotos } from "../api/pexels";
import { Photo } from "../types";
import {
  SearchInputWrapper,
  SearchInputField,
} from "../components/SearchInput";
import { useDebounce } from "../hooks/useDebounce";

const MasonryGrid = React.lazy(() => import("../components/MasonryGrid"));
const InfiniteScroll = React.lazy(() => import("../components/InfiniteScroll"));

const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  padding-top: 60px;
`;

const EmptyState = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  font-size: 1.5rem;
  opacity: 0.85;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px 50px;
  border-radius: 16px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3);
`;

const Home = ({ invisible }: { invisible?: boolean }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [search, setSearch] = useState<string>("");
  const [error, setError] = useState<unknown>();

  const pageRef = useRef(1);
  const loadingRef = useRef(false);

  const debouncedSearch = useDebounce(search, 1000);

  const loadPhotos = useCallback(async (query: string, reset = false) => {
    if (loadingRef.current) return;
    loadingRef.current = true;

    try {
      const currentPage = reset ? 1 : pageRef.current;
      const newPhotos = await fetchPhotos(currentPage, query);

      setPhotos((prev) => (reset ? newPhotos : [...prev, ...newPhotos]));
      pageRef.current = currentPage + 1;
    } catch (e) {
      setError(e);
    } finally {
      loadingRef.current = false;
    }
  }, []);

  useEffect(() => {
    pageRef.current = 1;
    loadPhotos(debouncedSearch, true);
  }, [debouncedSearch, loadPhotos]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  if (error) {
    throw error;
  }

  return (
    <div style={{ display: invisible ? "none" : "block" }}>
      <Header>
        <SearchInputWrapper>
          <SearchInputField
            type="text"
            placeholder="Search photos..."
            value={search}
            onChange={handleSearchChange}
          />
        </SearchInputWrapper>
      </Header>

      <Content>
        {photos.length === 0 && !loadingRef.current && debouncedSearch ? (
          <EmptyState>No photos found 👀</EmptyState>
        ) : (
          <Suspense fallback={<div />}>
            <InfiniteScroll
              callback={() => loadPhotos(debouncedSearch)}
              loading={loadingRef.current}
            >
              <MasonryGrid photos={photos} />
            </InfiniteScroll>
          </Suspense>
        )}
      </Content>
    </div>
  );
};

export default Home;
