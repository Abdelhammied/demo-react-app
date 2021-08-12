
import './App.css';
import axios from 'axios';

function App() {
  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
    withCredentials: true,
  })

  const login = async () => {
    let request = await api.post('/login', {
      email: "abdelhammied@gmail.com",
      password: 'password'
    })

    if (request.status !== 200) return;

    alert('User Is Now Authenticated, Kindly check the developer tools / application / cookies:)');
  };

  const fetchProfile = async () => {
    try {
      let { data } = await api.post(`/profile`);

      console.log(data);
    } catch (error) {
      alert('User is not authenticated, Please login')
    }
  };

  const logout = async () => {
    await api.post(`/logout`);

    alert('User Is Now Unauthenticated :)');
  };

  const style = {
    margin: " 5px",
    background: "white",
    border: "1px solid #333",
    padding: "10px"
  };

  return (
    <div>
      <button style={style} onClick={login}>Login</button>
      <button style={style} onClick={fetchProfile}>Fetch Profile [Should be authenticated]</button>
      <button style={style} onClick={logout}>Logout</button>
    </div>
  );
}

export default App;
