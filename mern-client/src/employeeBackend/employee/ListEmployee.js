import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const ListEmployee = (props) => {
  const [employees, setEmployees] = useState([]);
  const history = useHistory();


  useEffect(() => {

    const myemployee = localStorage.getItem("MyEmployee");
    if(myemployee)
    {
     history.push('/employee/employeedata');
    }
    else
    {
     history.push('/empLogin');
    }


    LoadEmployees();
    },[]);


    const LoadEmployees = async () =>
    {
        const empdata = await axios.get("http://localhost:5000/employees");
        
        setEmployees(empdata.data.reverse());
    }

    const deleteEmployee = async id =>
    {
        alert(id);
        await axios.delete(`http://localhost:5000/delete-employee/${id}`);
        setEmployees(employees.filter(item => item._id !== id));
      
    
    }


  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Employee List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="/#">Home</a></li>
              <li className="breadcrumb-item active">Employee List</li>
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
                <h3 className="card-title">Employee List</h3>
              </div>
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>Contact No</th>
                      <th>Comapny Name</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   
                  {employees.map((emp, key) => {
            return <tr key={key} >
        
                <td>{emp.emp_name}</td>
                <td>{emp.emp_gender}</td>
                <td>{emp.emp_designation}</td>
                <td>{emp.emp_email}</td>
                <td>{emp.emp_contact}</td>
                <td>{emp.company_name}</td>
                <td><Link to={`/backend/editemployee/${emp._id}`}>Edit</Link></td>
                <td><a href='javascript:void(0)'  onClick={()=>deleteEmployee(emp._id)}>Delete</a></td>
        
      </tr>
    })}
               
                  </tbody>
                  <tfoot>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Designation</th>
                      <th>Email</th>
                      <th>Contact No</th>
                      <th>Comapny Name</th>
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

export default ListEmployee;
