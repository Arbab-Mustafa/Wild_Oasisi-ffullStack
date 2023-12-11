import styled, { css } from "styled-components";

// const test = css`
//   text-align: center;
//   ${10 > 5 && "background-color: yellow"}
// `;

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2rem;
      font-weight: 600;
    `}
    
    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      font-weight: 500;
    `}
    
    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      text-align: center;
    `}
    
  line-height: 1.4;

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.as === "h4" &&
      css`
        font-size: 1.3rem;
      `}
    ${(props) =>
      props.as === "h1" &&
      css`
        font-size: 2rem;
        font-weight: 400;
        text-align: center;
      `}
      ${(props) =>
      props.as === "h3" &&
      css`
        font-size: 1rem;
        font-weight: 300;
      `}

      ${(props) =>
      props.as === "h2" &&
      css`
        font-size: 1.3rem;
        font-weight: 400;
      `}
  }
`;

export default Heading;
