import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { CiCircleRemove } from "react-icons/ci";
import Uploader from "./../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  position: relative;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
  @media screen and (max-width: 890px) {
    gap: 0.2rem;
    padding: 3rem 0 1rem 0.5rem;
    width: 50%;
    height: 100vh;
    position: fixed;
    left: -100%;
    z-index: 9999;
    &.active {
      left: 0;
    }
  }
`;

const Menubar = styled.div`
  position: absolute;
  top: 1rem;
  left: 0.9rem;
  font-size: 2rem;
  padding: auto;
  @media screen and (min-width: 890px) {
    display: none;
  }
`;

function Sidebar() {
  const [navOpen, setIsOpen] = useState(false);
  function handleClickMenu() {
    setIsOpen(!navOpen);
  }
  return (
    <>
      <Menubar onClick={() => handleClickMenu()}>
        <IoMenu />
      </Menubar>
      <StyledSidebar className={navOpen ? "active" : ""}>
        <Menubar onClick={() => handleClickMenu()}>
          <CiCircleRemove />
        </Menubar>
        <Logo />
        <MainNav handleClickMenu={handleClickMenu} navOpen={navOpen} />
        <Uploader />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
