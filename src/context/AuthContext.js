import React, { useContext } from 'react';

export const AuthContext = React.createContext(null);

export const useSignup = () => {
  const { signup } = useContext(AuthContext);
  return signup;
};

export const useLogin = () => {
  const { login } = useContext(AuthContext);
  return login;
};

export const useCurrentUser = () => {
  const { currentUser } = useContext(AuthContext);
  return currentUser;
};

export const useAuthLoading = () => {
  const { loading } = useContext(AuthContext);
  return loading;
};

export const useUpdateUser = () => {
  const { update } = useContext(AuthContext);
  return update;
};
