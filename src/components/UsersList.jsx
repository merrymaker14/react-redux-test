/* @flow */

import * as React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { mainColor, secondaryColor, mSize, sSize } from '../theme/variables';
import { fetchUsers } from '../redux/actions/users';
import Loader from './Loader';

const List = styled.ul`
  margin: 0 auto;
  padding: ${mSize};
  color: ${mainColor};

  li {
    margin-bottom: ${sSize};
    border: 1px solid ${mainColor};
    padding: ${sSize};
    background-color: ${secondaryColor};
  }
`;

type UsersListProps = { 
  onFetchUsers: () => {
    type: string;
  }, 
  users: Array<{
    id: number,
    name: string
  }>
};  

export const UsersList = (props: UsersListProps) => {
  const { onFetchUsers, users } = props;

  React.useEffect(() => {
    if (users.length === 0)
      onFetchUsers();
  }, []);

  return (
    <List>
      {
        users.length > 0 ? users.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))
          : <Loader />
      }
    </List>
  );
};

UsersList.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onFetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = ({ users }) => ({
  users
});

const mapDispatchToProps = dispatch => ({
  onFetchUsers: () => dispatch(fetchUsers()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
