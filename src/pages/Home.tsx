import { useState, useEffect, useCallback } from "react";
import { MasonryGrid } from "../components/MasonryGrid";
import { fetchPhotos } from "../api/pexels";
import { Photo } from "../types";
import { InfiniteScroll } from "../components/InfiniteScroll";
import { SearchInputWrapper, SearchInputField } from "../components/SearchInput";
import { useDebounce } from "../hooks/useDebounce";

const Home = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [search, setSearch] = useState("nature");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const debouncedSearch = useDebounce(search, 1000);

  const loadPhotos = useCallback(
    async (query: string, reset = false) => {
      if (loading) return;
      setLoading(true);

      try {
        const currentPage = reset ? 1 : page;
        const newPhotos = await fetchPhotos(currentPage, query);

        setPhotos((prev) => (reset ? newPhotos : [...prev, ...newPhotos]));
        setPage(currentPage + 1);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    },
    [page, loading]
  );

  useEffect(() => {
    setPage(1);
    loadPhotos(debouncedSearch, true);
  }, [debouncedSearch]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      <SearchInputWrapper>
        <SearchInputField
          type="text"
          placeholder="Search photos..."
          value={search}
          onChange={handleSearchChange}
        />
      </SearchInputWrapper>

      <InfiniteScroll
        callback={() => loadPhotos(debouncedSearch)}
        loading={loading}
      >
        <MasonryGrid photos={photos} />
      </InfiniteScroll>
    </div>
  );
};

export default Home;
