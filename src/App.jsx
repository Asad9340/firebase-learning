import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from './firebase/firebase.config'

const auth = getAuth(app);
const googleProvider =new GoogleAuthProvider();
function App() {
  const handleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const logUser = result.user;
        console.log(logUser);
    } )
      .catch((error) => {
        console.log(error);
    })
  };

  return (
    <>
      <h1>Firebase + React</h1>
      <button onClick={handleSignIn}>Google Sign In</button>
    </>
  );
}

export default App;
