import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory ,useParams} from "react-router-dom";

const EditUser = () => {



  // const [user, setUser] = useState([]);
  // const [username, setName]=useState();
  // const [email, setEmail]=useState();
  // const [password, setPassword]=useState();
  // const [status, setStatus]=useState();
//  const [isLoading, setIsLoading]=useState(false);
  

const {id} = useParams();
const history = useHistory();
const [user,setUser] = useState({
  username:"",
  email:"",
  password:"",
  status:""

});

useEffect(() => {

  const myemployee = localStorage.getItem("MyEmployee");
  if(myemployee)
  {
   history.push(`/employee/editlogin/${id}`);
  }
  else
  {
   history.push('/empLogin');
  }

  
 LoadUser();
  },[]);

const { username,email,password,status } = user;

const LoadUser = async () =>
{
    const userdata = await axios.get(`http://localhost:5000/useredit/${id}`);
    setUser(userdata.data);
}

function onInputChange (e)
{
  const {name,value} = e.target;
  setUser({
    ...user,
    [name]: value
  });
 
}


  return (

    <div>
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>User Update</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href={() => false}>Home</a></li>
              <li className="breadcrumb-item active">User Update</li>
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
           // const usertype = 'Employee';
           const updateid = `${id}`;
          
            const userbody = { _id:updateid, username, email,password,status }
            
            fetch("http://localhost:5000/updateuser",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(user),
            }).then((response)=>{
              history.push('/employee/logininfo');
            })
        }}
        >
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter name"  
                     value={username}
                     name="username"
                     onChange={onInputChange}
                     pattern="[a-zA-Z\s]+" title="Enter Only Alphabats" />
                     <div className="input-group-append">
                       <div className="input-group-text">
                         <span className="fas fa-user" />
                       </div>
                     </div>
                  </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" required placeholder="Enter email" value={email}
                    name="email"
                    onChange={onInputChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please Enter Valid Email"/>
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope" />
                      </div>
                    </div>
                  </div>


                  <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" id="exampleInputPassword1" required placeholder="Password" value={password}
              name="password"
              onChange={onInputChange} 
              pattern=".{6,}" title="Six or more characters"  />
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
                        name="status"
                        onChange={onInputChange} >
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

export default EditUser;