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

const Colume = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 8px;
`;

const MasonryGrid = memo(({ photos }: { photos: Photo[] }) => {
  const columns = useVirtualizedGrid(photos);

  return (
    <GridWrapper>
      {columns.map((col, i) => (
        <Colume key={i}>
          {col.map((photo) => (
            <Suspense fallback={<div />}>
              <PhotoCard key={photo.id} photo={photo} />
            </Suspense>
          ))}
        </Colume>
      ))}
    </GridWrapper>
  );
});

export default MasonryGrid;
