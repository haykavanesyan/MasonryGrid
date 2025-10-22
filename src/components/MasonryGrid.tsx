import { PhotoCard } from "./PhotoCard";
import { useVirtualizedGrid } from "../hooks/useVirtualizedGrid";
import { Photo } from "../types";
import styled from "styled-components";

const GridWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
`;

export const MasonryGrid = ({ photos }: { photos: Photo[] }) => {
  const columns = useVirtualizedGrid(photos, 300);

  return (
    <GridWrapper>
      {columns.map((col, i) => (
        <div key={i} style={{ flex: 1 }}>
          {col.map((photo) => (
            <PhotoCard key={photo.id} photo={photo} />
          ))}
        </div>
      ))}
    </GridWrapper>
  );
};