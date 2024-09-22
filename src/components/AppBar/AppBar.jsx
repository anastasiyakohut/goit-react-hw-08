import { Navigation } from '../Navigation/Navigation';
import {UserMenu} from '../UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import {AuthNav} from '../AuthNav/AuthNav';
import {selectIsLoggedIn} from '../../redux/auth/authSelectors';
import css from '../AppBar/AppBar.module.css';
import SearchBox from '../../components/SearchBox/SearchBox'
import { useLocation } from 'react-router-dom';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const location = useLocation();

  return (
    <header className={css.header}>
      <Navigation />
      {location.pathname === '/contacts' && <SearchBox />}
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};