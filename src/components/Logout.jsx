import { signOut } from "firebase/auth"
import { auth } from "../firebase"
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    })
  }

  return (
    <div className="logout">
      <p>ログアウトする</p>
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Logout