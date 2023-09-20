// import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { HeaderBGC, LogOut, TitleText } from './Header.styled';
import { logOut } from 'redux/auth/operationsAuth';

const Header = () => {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.auth.isLogin);

  return (
    <HeaderBGC>
      <TitleText>Phonebook</TitleText>
      {isLogin && (
        <LogOut
          onClick={() => {
            dispatch(logOut());
          }}
        >
          LogOut
        </LogOut>
      )}
    </HeaderBGC>
  );
};

export default Header;





