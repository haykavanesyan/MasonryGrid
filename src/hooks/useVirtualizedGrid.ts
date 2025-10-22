import { useState, useEffect, useCallback } from "react";
import { Photo } from "../types";

export const useVirtualizedGrid = (photos: Photo[]): Photo[][] => {
  const [columns, setColumns] = useState<Photo[][]>([]);

  const getColumnWidth = useCallback(() => {
    const width = window.innerWidth;
    if (width < 600) return width / 2;
    if (width < 900) return width / 3;
    if (width < 1200) return width / 4;
    return width / 5;
  }, [window.innerWidth]);

  const calculateColumns = useCallback(() => {
    const columnWidth = getColumnWidth();
    const colCount = Math.max(Math.floor(window.innerWidth / columnWidth), 1);

    const newColumns: Photo[][] = Array.from({ length: colCount }, () => []);
    const colHeights = Array(colCount).fill(0);

    photos.forEach((photo) => {
      const scaledHeight = (photo.height / photo.width) * columnWidth;
      const shortestIndex = colHeights.indexOf(Math.min(...colHeights));
      newColumns[shortestIndex].push(photo);
      colHeights[shortestIndex] += scaledHeight;
    });

    setColumns(newColumns);
  }, [photos]);

  useEffect(() => {
    calculateColumns();
    window.addEventListener("resize", calculateColumns);
    return () => window.removeEventListener("resize", calculateColumns);
  }, [photos]);

  return columns;
};
