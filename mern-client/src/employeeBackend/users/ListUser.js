import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";



const ListUser = (props) => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

 
  useEffect(() => {
    const myemployee = localStorage.getItem("MyEmployee");
    if(myemployee)
    {
     history.push('/employee/logininfo');
    }
    else
    {
     history.push('/employee/empLogin');
    }

    LoadUsers();
    },[]);
    const getemployee = localStorage.getItem("MyEmployee");
    var jsonData = JSON.parse(getemployee);     
     const id =  jsonData._id;        

    const LoadUsers = async () =>
    {
      const userdata = await axios.get(`http://localhost:5000/useredit/${id}`);
     
        setUsers(userdata.data);
    }


    
    // const deleteUser = async id =>
    // {
    //     alert(id);
    //     await axios.delete(`http://localhost:5000/delete-user/${id}`);
    //     setUsers(users.filter(item => item._id !== id));
    
    // }


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
              <li className="breadcrumb-item"><a href="/#">Home</a></li>
              <li className="breadcrumb-item active">Users List</li>
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
                    
                    </tr>
                  </thead>
                  <tbody>
                
                   
                  
             <tr  >
        
                <td>{users.username}</td>
                <td>{users.email}</td>
                <td>{users.usertype}</td>
                <td>{users.status}</td>
            
                 <td><Link to={`/employee/editlogin/${users._id}`}>Edit</Link></td>
                 
               
        
             </tr>
                 
               
                  </tbody>
                  <tfoot>
                    <tr>
                    <th>Name</th>
                      <th>Email</th>
                      <th>User type</th>
                      <th>Status</th>
                      <th>Edit</th>
                     
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
