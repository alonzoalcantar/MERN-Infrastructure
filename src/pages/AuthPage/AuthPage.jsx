import LogInForm from '../../components/LogInForm/LogInForm';
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function AuthPage({ user, setUser }) {
  return (
    <main>
      <h1>AuthPage</h1>

      {/* {user ? ( */}
        
      {/* <> */}

        <LogInForm
        user={user} 
        setUser = {setUser}/>
      
      
      
      {/* </> */}
      {/* ) : ( */}
        <SignUpForm 
        setUser={setUser} 
        user={setUser}/>
      {/* )} */}
    </main>
  );
}