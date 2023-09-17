import { UserContext } from './UserContext';
import { useContext } from 'react';

const User = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    setUser({
      name: 'Rohit',
      email: 'Rohit@example.com',
    });
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogOut}>LogOut</button>
      <div>{user?.name ? `UserName : ${user.name}` : 'Guest'}</div>
      <div>{user?.email ? `Email : ${user.email}` : 'NoEmail'}</div>
    </div>
  );
};
export default User;
