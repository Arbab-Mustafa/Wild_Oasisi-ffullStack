import styled from "styled-components";

const TableOperations = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    gap: 0.8rem;
    justify-content: center;
  }
  @media screen and (min-width: 889px) and (max-width: 1260px) {
    flex-wrap: wrap;
  }
`;

export default TableOperations;
