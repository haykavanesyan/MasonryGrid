import React, { Suspense, memo } from "react";
import styled from "styled-components";

import { useVirtualizedGrid } from "../hooks/useVirtualizedGrid";
import { Photo } from "../types";

const PhotoCard = React.lazy(() => import("./PhotoCard"));

const GridWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px;
`;

const MasonryGrid = memo(({ photos }: { photos: Photo[] }) => {
  const columns = useVirtualizedGrid(photos, 300);

  return (
    <GridWrapper>
      {columns.map((col, i) => (
        <div key={i} style={{ flex: 1 }}>
          {col.map((photo) => (
            <Suspense fallback={<div />}>
              <PhotoCard key={photo.id} photo={photo} />
            </Suspense>
          ))}
        </div>
      ))}
    </GridWrapper>
  );
});

export default MasonryGrid;
