import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 999;
`;

const Logo = styled.h1`
  font-size: 24px;
  text-transform: uppercase;
  font-weight: bold;
  color: red;
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Navbar = () => {
  return (
    <NavBar>
      <Logo onClick={() => window.location.reload()}>Moviefix</Logo>
    </NavBar>
  );
};

export default Navbar;
