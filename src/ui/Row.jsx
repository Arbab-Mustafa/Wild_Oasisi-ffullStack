import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
      @media screen and (max-width: 768px) {
        flex-direction: row;
      }
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: "vertical",
};

export default Row;
