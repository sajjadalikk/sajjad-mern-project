import { useState,useEffect } from "react";

import {useHistory} from "react-router-dom";

const CreateUser = () => {
  const [username, setName]=useState('');
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const [status, setStatus]=useState('');
//  const [isLoading, setIsLoading]=useState(false);
  const history = useHistory();

  useEffect(() => {

    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/backend/addUser');
    }
    else
    {
     history.push('/adminLogin');
    }
     });
 
  return (

    <div>
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>User Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href={() => false}>Home</a></li>
              <li className="breadcrumb-item active">User Form</li>
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6">
            <div className="card card-primary">
              <div className="card-header">
                <h3 className="card-title">User</h3>
              </div>
              <form  onSubmit={(e)=>{
            e.preventDefault();
            const usertype = 'Employee';
          //  const hashPassword =  bcrypt.hashSync(password, 10);
            const user = { username, email, password,usertype,status }
            
            fetch("http://localhost:5000/registeremployee",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(user),
            }).then((response)=>{
                history.push('/backend/users');
            })
        }}
        >
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter name"  
                     value={username}
                     onChange={(e)=>setName(e.target.value)} />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-user" />
                       </div>
                     </div>
                  </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" required placeholder="Enter email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>

                            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" value={password}
              onChange={(e)=>setPassword(e.target.value)} />
              <div className="input-group-append">
                <div className="input-group-text">
                  <span className="fas fa-lock" />
                </div>
              </div>
            </div>

              
                
            

            <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Select Status</label>
                      <select className="form-control" required id="status"
                        value={status}
                        onChange={(e)=>setStatus(e.target.value)} >
                        <option value="">Select Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                    </div>
                  </div>
                </div>

               
                </div>
                <div className="card-footer">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

    
  );
};

export default CreateUser;