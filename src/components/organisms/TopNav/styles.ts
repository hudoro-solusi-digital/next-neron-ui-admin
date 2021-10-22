import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  background-color: white;
  @media (max-width: 768px) {
    position: sticky;
    top: 0;
    z-index: 98;
  }
`;
