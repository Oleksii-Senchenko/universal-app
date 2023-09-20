import { Route, Routes } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import LoginForm from 'Pages/LoginForm/LoginForm';
import HomePage from 'components/HomePage/HomePage';
import SignIn from 'Pages/SignIn/SignIn';
import ContactsPage from 'Pages/ContactsPage/ContactsPage';
import PublickRoute from 'components/PublickRoute';
import PrivateRoute from 'components/PrivateRoute';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from 'redux/auth/operationsAuth';
import PageContainer from 'components/PageContainer/PageContainer';

export function App() {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getCurrentUser());
  });

  return (
    <PageContainer>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="signin"
            element={
              <PublickRoute component={SignIn} redirectTo="/phonebook" />
            }
          />

          <Route
            path="login"
            element={
              <PublickRoute component={LoginForm} redirectTo="/phonebook" />
            }
          />

          <Route
            path="phonebook"
            element={
              <PrivateRoute component={ContactsPage} redirectTo="/login" />
            }
          />
        </Route>
      </Routes>
    </PageContainer>
  );
}
