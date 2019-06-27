import {
    CLEAR_USERS,
    GET_REPOS,
    GET_USER,
    SEARCH_USERS,
    SET_LOADING
} from '../types';
import React, { useReducer } from 'react';

import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import axios from 'axios';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production') {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //Search Users

    const searchUsers = async (search) => {
        setLoading();
        const res = await axios.get(`https://api.github.com/search/users?q=${search}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        
        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
        // setUsers(res.data.items);
        // setLoading(false);
    
      }

    //Get user
    const getUser = async (userName)=> {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }
    //get Repos
    const getUserRepos = async (userName)=> {
        setLoading(true);
        const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${githubClientId}&client_secret=${githubClientSecret}`);
        
        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
        
    }

    //clear users
    const clearUsers = () => dispatch({type: CLEAR_USERS});
    //set Loading

    const setLoading = () => dispatch({ type: SET_LOADING});
    
    return <GithubContext.Provider
        value = {{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState;