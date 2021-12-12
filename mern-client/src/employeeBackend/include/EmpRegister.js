import { useState } from "react";
import {useHistory} from "react-router-dom";

const EmpRegister = () => {
  const [username, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [isLoading, setIsLoading]=useState(false);
  const history = useHistory();
 
  return (

    <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Employee | Registration Page</title>
    {/* Google Font: Source Sans Pro */}
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700&display=fallback" />
    {/* Font Awesome */}
    <link rel="stylesheet" href="../../plugins/fontawesome-free/css/all.min.css" />
    {/* icheck bootstrap */}
    <link rel="stylesheet" href="../../plugins/icheck-bootstrap/icheck-bootstrap.min.css" />
    {/* Theme style */}
    <link rel="stylesheet" href="../../dist/css/adminlte.min.css" />
    <div className="hold-transition register-page">
    <div className="register-box">
      <div className="register-logo">
        <a href="../../index2.html"><b>Employee</b>Registeration</a>
      </div>
      <div className="card">
        <div className="card-body register-card-body">
          <p className="login-box-msg">Employee of new Student</p>
          <form 
        onSubmit={(e)=>{
            e.preventDefault();
            const usertype = 'Employee';
            const status = 'Active';
            const user = { username, email, password,usertype ,status}
           
            fetch("http://localhost:5000/registeremployee",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(user),
            }).then((response)=>response.json())
            .then(data => 
              { 
                
                if(data.message === "Email already exists")
                {
                  alert(data.message);
                  history.push('/employee/empRegister');
                }
                else
                {
                  alert(data.message);
                  history.push('/employee/empLogin');
                }
               
              });
        }}
        >
            <div className="input-group mb-3">
              <input type="text" className="form-control" required placeholder="Full name" 
              value={username}
              onChange={(e)=>setName(e.target.value)}
              pattern="[a-zA-Z\s]+" title="Enter Only Alphabats" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-user" />
                </div>
              </div>
            </div>
            <div className="input-group mb-3">
              <input type="email" className="form-control" required placeholder="Email"
              value={email}
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
              <input type="password" className="form-control" required placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              pattern=".{6,}" title="Six or more characters" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>
{/* 
            <div className="input-group mb-3">
              <input type="password" className="form-control" required placeholder="Retype password" />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div> */}

            <div className="row">
              <div className="col-8">
                <div className="icheck-primary">
                  <input type="checkbox" id="agreeTerms" name="terms" required defaultValue="agree" />
                  <label htmlFor="agreeTerms">
                    I agree to the <a href="/#">terms</a>
                  </label>
                </div>
              </div>
              {/* /.col */}
              <div className="col-4">
                <button type="submit" className="btn btn-primary btn-block">Register</button>
              </div>
              {/* /.col */}
            </div>
          </form>
          <div className="social-auth-links text-center">
            <p>- OR -</p>
            <a href="/#" className="btn btn-block btn-primary">
              <i className="fab fa-facebook mr-2" />
              Sign up using Facebook
            </a>
            <a href="/#" className="btn btn-block btn-danger">
              <i className="fab fa-google-plus mr-2" />
              Sign up using Google+
            </a>
          </div>
          <a href="/employee/empLogin" className="text-center">I already have a membership</a>
        </div>
        {/* /.form-box */}
      </div>{/* /.card */}
    </div>
    </div>
    {/* /.register-box */}
    {/* jQuery */}
    {/* Bootstrap 4 */}
    {/* AdminLTE App */}
  </div>
    
  );
};

export default EmpRegister;