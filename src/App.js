import "./App.css";

function App() {
  return (
    <div>
      <div className="login-card">
        <div className='logo-box' >
          <img src="./Login_logo.svg" alt="login logo" className="logo" />
          <h2>Sign In Page For Test</h2>
          <button className='btn-login-opt'>
          <img src="./google.png" alt="google" className='google-logo' />
          Sign In with Google
          </button>

          <button className='btn-login-opt'>
          <img src="./facebook.png" alt="facebook" className='google-logo' />
          Sign In with Facebook
          </button>

          <hr/>
          <span>OR</span>

          <form>
            <input type='text' placeholder='Phone email or username' className='btn-next' />
            <button className='btn-next'><span>Next</span></button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
