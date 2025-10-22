import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  position: sticky;
  top: 16px;
  display: flex;
  justify-content: flex-end;
  padding: 18px;
  z-index: 10;

  @media (max-width: 600px) {
    width: 100%;
    justify-content: center; /* optional: center it on small screens */
  }
`;

export const SearchInputField = styled.input`
  width: 350px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid transparent;
  outline: none;
  font-size: 16px;
  transition: all 0.2s ease;

  &:focus {
    border-color: #0077ff;
    box-shadow: 0 0 8px rgba(0, 119, 255, 0.3);
  }

  &::placeholder {
    color: #aaa;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;
