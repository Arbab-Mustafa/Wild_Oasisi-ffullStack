import styled, { css } from "styled-components";

const Form = styled.form`
  ${(props) =>
    props.type === "regular" &&
    css`
      padding: 2.4rem 4rem;

      /* Box */
      background-color: var(--color-grey-0);
      border: 1px solid var(--color-grey-100);
      border-radius: var(--border-radius-md);
    `}

  ${(props) =>
    props.type === "modal" &&
    css`
      width: 80rem;
      @media screen and (max-width: 768px) {
        width: auto;
        overflow-y: scroll;
        font-size: 1rem;
        padding: 1rem 0rem;
      }
    `}
    
    font-size: 1.4rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.type === "regular" &&
      css`
        padding: 1rem 0.9rem;
        width: auto;
        margin: auto;
      `}
  }
`;

Form.defaultProps = {
  type: "regular",
};

export default Form;
