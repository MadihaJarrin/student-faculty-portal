import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <CircularProgress></CircularProgress>
    }
    return (
        <Route
        {...rest}
        render={({ location }) =>
            user.email ? (
                children
            ) : (
                <Navigate
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />
            )
        }
        />
    );
};

export default PrivateRoute;