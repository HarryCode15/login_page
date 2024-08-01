import "./App.css";

function App() {
  return (
    <div>
      <div className="login-card">
        <div className='logo-box' >
          <img src="./Login_logo.svg" alt="login logo" className="logo" />
          <h2>Sign In Page For Test</h2>
          <button>
          <img src="./google.png" alt="google" className='google-logo' />
          Sign In with Google
          </button>

          <button>
          <img src="./facebook.png" alt="facebook" className='google-logo' />
          Sign In with Facebook
          </button>

          <hr/>
          <span>OR</span>
        </div>
      </div>
    </div>
  );
}

export default App;
