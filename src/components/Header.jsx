import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Wrapper>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;

  a {
    text-decoration: none;
    padding: 0.5rem;
    font-size: 2rem;
  }
  a:hover {
    color: blue;
  }

  margin-bottom: 2rem;
`;

export default Header;
