import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Photo } from "../types";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  overflow-y: auto;
  padding: 24px;
`;

const Container = styled.div`
  max-width: 90vw;
  max-height: 90vh;
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2);
`;

const BackButton = styled.button`
  align-self: flex-start;
  background: transparent;
  border: 1px solid #555;
  color: #fff;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 16px;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

export const PhotoDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const photo = location.state?.photo as Photo;

  if (!photo)
    return (
      <Overlay>
        <p style={{ color: "white" }}>Photo not found</p>
      </Overlay>
    );

  return (
    <Overlay>
      <Container>
        <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
        <h2>{photo.alt}</h2>
        <Image src={photo.src.large2x} alt={photo.alt} />
        <p style={{ marginTop: "12px", color: "#ccc" }}>
          Photographer: {photo.photographer}
        </p>
      </Container>
    </Overlay>
  );
};
