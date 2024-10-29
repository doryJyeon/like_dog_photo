import { FaGithub } from 'react-icons/fa';
import styled from 'styled-components';

const TheFooter = () => {
  return (
    <Footer>
      <ul>
        <li>
          <a href="https://github.com/doryJyeon/like_dog_photo" target="_blank" rel="noopener noreferrer"><FaGithub /> Git Repository</a>
          <span>_2024.10.29</span>
        </li>
        <li>
          <a href="https://www.brandcrowd.com/" target="_blank" rel="noopener noreferrer">Logo &copy; Brandcrowd</a>
        </li>
      </ul>
    </Footer>
  );
}

const Footer = styled.footer`
  width: 100%;
  border-top: 1px solid lightgray;
  padding: 15px 0;
  color: #888;
  font-size: 1.6rem;
  text-align: center;

  & > ul > li > span {
    font-size: 1.3rem;
    margin-left: 3px;
    vertical-align: baseline;
  }
`

export default TheFooter;
