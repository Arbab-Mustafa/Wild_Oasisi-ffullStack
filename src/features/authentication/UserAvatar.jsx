import styled from "styled-components";
import { useUser } from "./useUser";

const StyledUserAvatar = styled.div`
  display: flex;
  gap: 1.2rem;
  align-items: center;
  font-weight: 500;
  font-size: 1.4rem;
  color: var(--color-grey-600);
  @media screen and (max-width: 768px) {
    gap: 0.5rem;
    font-size: 0.9rem;
    flex-wrap: wrap;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 3.6rem;
  aspect-ratio: 1;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
  outline: 2px solid var(--color-grey-100);

  @media screen and (max-width: 768px) {
    width: 2.5rem;
  }
`;
const AvatarName = styled.span`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

function UserAvatar() {
  const { user } = useUser();
  const { fullName, avatar } = user.user_metadata;

  return (
    <StyledUserAvatar>
      <Avatar
        src={avatar || "default-user.jpg"}
        alt={`Avatar of ${fullName}`}
      />
      <AvatarName>{fullName}</AvatarName>
    </StyledUserAvatar>
  );
}

export default UserAvatar;
