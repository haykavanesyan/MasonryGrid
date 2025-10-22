import styled from "styled-components";
import { Photo } from "../types";
import { Link } from "react-router-dom";

const Card = styled.div`
  margin: 8px;
  img {
    width: 100%;
    display: block;
    border-radius: 8px;
  }
`;

export const PhotoCard = ({ photo }: { photo: Photo }) => (
  <Card>
    <Link to={`/photo/${photo.id}`} state={{ photo }}>
      <img src={photo.src.medium} alt={photo.alt} />
    </Link>
  </Card>
);