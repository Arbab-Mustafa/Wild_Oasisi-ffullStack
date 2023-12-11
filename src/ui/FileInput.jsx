import styled from "styled-components";

const FileInput = styled.input.attrs({ type: "file" })`
  font-size: 1.4rem;
  border-radius: var(--border-radius-sm);
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.8rem 1.2rem;
    margin-right: 1.2rem;
    border-radius: var(--border-radius-sm);
    border: none;
    color: var(--color-brand-50);
    background-color: var(--color-brand-600);
    cursor: pointer;
    transition: color 0.2s, background-color 0.2s;
    @media screen and (max-width: 768px) {
      padding: 0.6rem 0.9rem;
    }

    &:hover {
      background-color: var(--color-brand-700);
    }
  }
`;

export default FileInput;
