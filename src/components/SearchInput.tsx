import styled from "styled-components";

export const SearchInputWrapper = styled.div`
  position: sticky;
  top: 16px;
  display: flex;
  justify-content: flex-end;
  padding: 0 16px;
  z-index: 10;
`;

export const SearchInputField = styled.input`
  width: 250px;
  padding: 8px 16px;
  border-radius: 24px;
  border: 1px solid #ccc;
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
`;
