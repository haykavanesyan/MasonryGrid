import { useState, useEffect } from "react";
import { Photo } from "../types";

export const useVirtualizedGrid = (
  photos: Photo[],
  columnWidth: number,
): Photo[][] => {
  const [columns, setColumns] = useState<Photo[][]>([]);

  const calculateColumns = () => {
    const colCount = Math.max(Math.floor(window.innerWidth / columnWidth), 1);
    const newColumns: Photo[][] = Array.from({ length: colCount }, () => []);
    const colHeights: number[] = Array(colCount).fill(0);

    photos.forEach((photo) => {
      const scaledHeight = (photo.height / photo.width) * columnWidth;

      const shortestColIndex = colHeights.indexOf(Math.min(...colHeights));

      newColumns[shortestColIndex].push(photo);
      colHeights[shortestColIndex] += scaledHeight;
    });

    setColumns(newColumns);
  };

  useEffect(() => {
    calculateColumns();
    window.addEventListener("resize", calculateColumns);
    return () => window.removeEventListener("resize", calculateColumns);
  }, [photos]);

  return columns;
};
