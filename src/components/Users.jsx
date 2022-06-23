import { useEffect, useState } from 'react';

import styled from '@emotion/styled';

import request from '../apis/request';

export default function Users() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    async function fetchUsers() {
      const users = await request('users');
      setUsers(users);
    }

    fetchUsers();
  }, []);

  if (users === null) {
    return null;
  }

  return (
    <Wrapper>
      <h1>USERS</h1>
      {users.map((user) => (
        <UserWrapper>
          <UserCircle>{user.id}</UserCircle>
          <UserInfo>
            <span>id: {user.id}</span>
            <span>name: {user.name}</span>
            <span>phone: {user.phone}</span>
            <span>username: {user.username}</span>
            <span>website: {user.website}</span>
          </UserInfo>
        </UserWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  /* width: 100%; */
  /* margin: 0 auto; */
  /* margin-top: 1rem; */

  h1 {
    text-align: center;
    font-size: 3rem;
  }
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 0;

  padding: 0.5rem;

  border: 1px solid black;

  &:hover {
    cursor: pointer;
  }
  margin-bottom: 1rem;
`;

const UserCircle = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #dfdfdf;
  background-color: #dfdfdf;
  border-radius: 50%;
  margin-right: 1rem;
  text-align: center;
  line-height: 200px;
  font-size: 5rem;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;

  & > span {
    padding: 0.2rem;
    font-size: 1.5rem;
  }
`;
