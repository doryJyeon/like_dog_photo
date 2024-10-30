import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const TheHeader = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <Headers>
      <Link to="/"><LogoImg src="/images/logo.png" alt="logo" /></Link>
      <Menus>
        <Link to="/" className={`${path === "/" && "active"}`}>Random</Link>
        <Link to="/breed" className={`${path === "/breed" && "active"}`}>Breed</Link>
        <Link to="/liked" className={`${path === "/liked" && "active"}`}>Liked</Link>
      </Menus>
    </Headers>
  );
}

const Headers = styled.header`
  width: 100%;
  padding: 15px 2.85vw 0;
  box-sizing: border-box;
  border-bottom: 2px solid lightgray;
  box-shadow: 0 2px 5px #333333ef;
  font-size: 1.8rem;
  color: #666;
  background-color: #fff;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
`
const LogoImg = styled.img`
  display: block;
  margin: 0 auto;
  height: 82px;
`
const Menus = styled.nav`
  height: 30px;

  > a {
    margin-right: 15px;
    transition: color .18s;

    &:hover, &:active {
      color: #333;
    }

    &.active {
      color: crimson;
    }
  }
`
export default TheHeader;
