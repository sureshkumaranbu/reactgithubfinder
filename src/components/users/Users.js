import React, {Component, useContext} from 'react';

import GithubContext from '../context/github/githubContext';
import PropTypes from 'prop-types';
import Spinner from '../layout/Spinner';
import UserItem from './UserItem';

const Users = () => {

    const githubContext = useContext(GithubContext);

    const { loading, users } = githubContext;

    if(loading) {
       return <Spinner />
    }else {
        return (
            <div style={userStyle}>
                {users.map((user)=> (
                    <UserItem key={user.id} user={user}/>
                    // <div>{user.name}</div>
                ))}
            </div>
            )
    }
    
}

// Users.propTypes = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired
// }
const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}
export default Users;