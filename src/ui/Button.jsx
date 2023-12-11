import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.2rem;
    padding: 0.4rem 0.8rem;
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
  `,
  medium: css`
    font-size: 1.4rem;
    padding: 1.2rem 1.6rem;
    font-weight: 500;
    @media screen and (max-width: 868px) {
      font-size: 1rem;
      padding: 1rem 1.4rem;
    }
  `,
  large: css`
    font-size: 1.6rem;
    padding: 1.2rem 2.4rem;
    font-weight: 500;
  `,
};

const variations = {
  primary: css`
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);

    &:hover {
      background-color: var(--color-brand-700);
    }
  `,
  secondary: css`
    color: var(--color-grey-600);
    background: var(--color-grey-0);
    border: 1px solid var(--color-grey-200);

    &:hover {
      background-color: var(--color-grey-50);
    }
  `,
  danger: css`
    color: var(--color-red-100);
    background-color: var(--color-red-700);

    &:hover {
      background-color: var(--color-red-800);
    }
  `,
};

const Button = styled.button`
  border: none;
  border-radius: var(--border-radius-sm);
  box-shadow: var(--shadow-sm);

  ${(props) => sizes[props.size]}
  ${(props) => variations[props.variation]};

  /* media quer  */

  @media screen and (max-width: 768px) {
    ${(props) =>
      props.size === "large" &&
      css`
        font-size: 1rem;
        padding: 0.6rem 1rem;
      `};
    ${(props) =>
      props.size === "medium" &&
      css`
        font-size: 0.9rem;
        padding: 0.4rem 0.6rem;
      `}
    ${(props) =>
      props.size === "small" &&
      css`
        font-size: 0.8rem;
        padding: 0.4rem 0.5rem;
        width: max-content;
      `}
  }
`;

Button.defaultProps = {
  variation: "primary",
  size: "medium",
};

export default Button;
