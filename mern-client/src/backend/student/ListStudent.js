import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";

const ListStudent = ({props}) => {


  const [students, setStudents] = useState([]);
  const [search, setSeach] = useState("");
  const history = useHistory();

  useEffect(() => {
    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/backend/students');
    }
    else
    {
     history.push('/adminLogin');
    }


    LoadStudents();
    },[]);


    const LoadStudents = async () =>
    {
        const studentdata = await axios.get("http://localhost:5000/students");
        
        setStudents(studentdata.data.reverse());
    }


    
    const deleteStudent = async id =>
    {
        alert(id);
        await axios.delete(`http://localhost:5000/delete-student/${id}`);
        setStudents(students.filter(item => item._id !== id));
      
    }


  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Student List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Search By Student Name" 
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
                <h3 className="card-title">Student List</h3>
              </div>
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Gender</th>
                      <th>Education</th>
                      <th>Email</th>
                      <th>Contact</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                
                   
                  {students.filter((student) => {
                  if(search === "")
                  {
                    return student;
                  }
                  else if(student.stu_name.toLowerCase().includes(search.toLowerCase()))
                  {
                    return student;
                  }
                }).map((student, key) => (
                 <tr>
        
                <td>{student.stu_name}</td>
                <td>{student.stu_gender}</td>
                <td>{student.stu_education}</td>
                <td>{student.stu_email}</td>
                <td>{student.stu_contact}</td>
                
                <td><Link to={`/backend/editstudent/${student._id}`}>Edit</Link></td>
                <td><a href='javascript:void(0)'  onClick={()=>deleteStudent(student._id)}>Delete</a></td>
        
      </tr>
                  ))}
               
                  </tbody>
                  <tfoot>
                    <tr>
                    <th>Name</th>
                      <th>Gender</th>
                      <th>Education</th>
                      <th>Email</th>
                      <th>Contact</th>
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

export default ListStudent;
