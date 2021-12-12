import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";



const ListUser = (props) => {
  const [users, setUsers] = useState([]);
  const [search, setSeach] = useState("");
  const history = useHistory();


  useEffect(() => {
    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/backend/users');
    }
    else
    {
     history.push('/adminLogin');
    }

    LoadUsers();
    },[]);


    const LoadUsers = async () =>
    {
        const userdata = await axios.get("http://localhost:5000/users");
        
        setUsers(userdata.data.reverse());
    }


    
    const deleteUser = async id =>
    {
        alert(id);
        await axios.delete(`http://localhost:5000/delete-user/${id}`);
        setUsers(users.filter(item => item._id !== id));
    
    }


  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Users List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              {/* <li className="breadcrumb-item"><a href="/#">Home</a></li>
              <li className="breadcrumb-item active">Users List</li> */}

<input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Search By Name" 
                       value={search}
                        onChange={(e)=>setSeach(e.target.value)} />
            </ol>
          </div>
        </div>
      </div>
    </section>
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Users List</h3>
              </div>
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Email</th>
                      <th>User type</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   
                  {users.filter((user) => {
                  if(search === "")
                  {
                    return user;
                  }
                  else if(user.username.toLowerCase().includes(search.toLowerCase()))
                  {
                    return user;
                  }
                }).map((user, key) => (
             <tr>
        
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.usertype}</td>
                <td>{user.status}</td>
            
                 <td><Link to={`/backend/edituser/${user._id}`}>Edit</Link></td>
                 <td><a href='javascript:void(0)'  onClick={()=>deleteUser(user._id)}>Delete</a></td>
               
        
             </tr>
                   ))} 
               
                  </tbody>
                  <tfoot>
                    <tr>
                    <th>Name</th>
                      <th>Email</th>
                      <th>User type</th>
                      <th>Status</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>


  );
};

export default ListUser;
