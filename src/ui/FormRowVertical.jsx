import styled from "styled-components";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
  @media screen and (max-width: 768px) {
    gap: 0.3rem;
    padding: 0.7rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-weight: 300;
    font-size: 1rem;
  }
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

function FormRowVertical({ label, error, children }) {
  return (
    <StyledFormRow>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}

export default FormRowVertical;
