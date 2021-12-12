import { useEffect,useState } from "react";
import {useHistory} from "react-router-dom";

const LoginEmp = ({updateEmployee}) => {
 
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const history = useHistory();

 useEffect(() => {
  const myemp = localStorage.getItem("MyEmployee");
  if(myemp)
  {
   history.push('/employee/dashboard');
  }
  else
  {
   history.push('/employee/empLogin');
  }
 });
 
  return (

    <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Employee | Log in</title>
  {/* Google Font: Source Sans Pro */}
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
  {/* Font Awesome */}
  <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
  {/* icheck bootstrap */}
  <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
  {/* Theme style */}
  <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
  <div className="hold-transition login-page">
  <div className="login-box">
    <div className="login-logo">
      <a href="../../index2.html"><b>Employee</b>Login</a>
    </div>
    {/* /.login-logo */}
    <div className="card">
      <div className="card-body login-card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form onSubmit={(e)=>{
            e.preventDefault();
            const usertype = 'Employee';
            const user = { email, password,usertype }
           
            fetch("http://localhost:5000/loginemployee",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(user),
            }).then(response => response.json())
            .then(data => 
              {
                if(data.message === "login successful")
                {
                  alert(data.message);
                  updateEmployee(data.user);
                  history.push('/employee/dashboard');
                }
                else
                {
                  alert(data.message)
                }
               
              });
           
        }}
        >
          <div className="input-group mb-3">
            <input type="email" className="form-control" placeholder="Email"  value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please Enter Valid Email" />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div className="input-group mb-3">
            <input type="password" className="form-control" placeholder="Password" value={password}
              onChange={(e)=>setPassword(e.target.value)}
              pattern=".{6,}" title="Six or more characters"
               />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-8">
              <div className="icheck-primary">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">
                  Remember Me
                </label>
              </div>
            </div>
            {/* /.col */}
            <div className="col-4">
              <button type="submit" className="btn btn-primary btn-block">Sign In</button>
            </div>
            {/* /.col */}
          </div>
        </form>
        <div className="social-auth-links text-center mb-3">
          <p>- OR -</p>
          <a href="/#" className="btn btn-block btn-primary">
            <i className="fab fa-facebook mr-2" /> Sign in using Facebook
          </a>
          <a href="/#" className="btn btn-block btn-danger">
            <i className="fab fa-google-plus mr-2" /> Sign in using Google+
          </a>
        </div>
        {/* /.social-auth-links */}
        {/* <p className="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p> */}
        <p className="mb-0">
          <a href="/employee/empRegister" className="text-center">Register a new membership</a>
        </p>
      </div>
      {/* /.login-card-body */}
    </div>
  </div>
  </div>
  {/* /.login-box */}
  {/* jQuery */}
  {/* Bootstrap 4 */}
  {/* AdminLTE App */}
</div>


    
  );
};

export default LoginEmp;