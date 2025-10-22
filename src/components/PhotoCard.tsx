import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Photo } from "../types";

const Card = styled.div`
  img {
    width: 100%;
    display: block;
    border-radius: 8px;
  }
`;

const PhotoCard = memo(({ photo }: { photo: Photo }) => (
  <Card>
    <Link to={`/photo/${photo.id}`} state={{ photo }}>
      <img src={photo.src.medium} alt={photo.alt} />
    </Link>
  </Card>
));

export default PhotoCard;
