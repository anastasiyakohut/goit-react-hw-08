import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/authOps';
import { selectUser } from '../../redux/auth/authSelectors';
import css from '../UserMenu/UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <button className={css.button} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};