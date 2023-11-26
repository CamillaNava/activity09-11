import logo from './logo.svg';
import './App.css';
import 'boxicons';
import {design} from "./myStyle/Style";
const App = () => {
  const InputStyle = {
    fontSize: "20px",
    border: "2px solid #000000",
    padding: "10px 20px",
    borderRadius: "10px",
  };
  return (
        <div style={{ marginTop: "120px", border: "4px solid", margin: "auto", width: "30%", padding: "10px",
        textAlign: "center", borderRadius: "15px", backgroundColor: "white",}}>
            <div>
              <h1> Login Form</h1>
              <input 
                type="email"
                placeholder="Email"
                style={InputStyle}
              />
              <br />
              <br/>
              <input 
                type="password"
                placeholder="Password"
                style={InputStyle}
              />
            </div>
            <a href="#">Forgot Password?</a>
            <br></br>
            <br></br>
            <button style={design.Login}>
              Login
            </button>
            <p>-or-</p>
            <button style={design.SignUp}>
              Sign Up
            </button>
            <br></br>
            <br></br>
            <center>
            <button style={design.Google}>
              <box-icon type='logo' name='google' color='white' size='sm'></box-icon>
              <span style={{ marginTop: "3px", marginLeft: "5px" }} > Log in with Google </span>
            </button>
            <button style={design.Facebook}>
              <box-icon type='logo' name='facebook-circle' color='white' size='sm'></box-icon>
              <span style={{ marginTop: "3px", marginLeft: "5px" }} > Log in with Facebook</span>
            </button>
            </center>
        </div>
  )
}
export default App;

