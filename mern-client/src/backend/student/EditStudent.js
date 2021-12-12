import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory ,useParams} from "react-router-dom";
import moment from "moment";

const EditStudent = () => {

const {id} = useParams();
const history = useHistory();
const [student,setStudent] = useState({
  stu_name:"",
  stu_gender:"",
  stu_education:"",
  stu_email:"",
  stu_contact:"",
  stu_address:"",
  stu_dob:new Date().toString(),
  stu_linkedin:"",
  stu_github:"",
  status:""
});

useEffect(() => {
  const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push(`/backend/editstudent/${id}`);
    }
    else
    {
     history.push('/adminLogin');
    }
    
 LoadStudent();
  },[]);


  const { stu_name,stu_gender,stu_education,stu_email ,stu_contact ,stu_address,stu_dob ,stu_linkedin ,stu_github ,status  } = student;

const LoadStudent = async () =>
{
    const studentdata = await axios.get(`http://localhost:5000/studentedit/${id}`);
    setStudent(studentdata.data);
}

function onInputChange (e)
{
  const {name,value} = e.target;
  setStudent({
    ...student,
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
              <h1>General Form</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href={() => false}>Home</a></li>
                <li className="breadcrumb-item active">Student Form</li>
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
                  <h3 className="card-title">Student</h3>
                </div>
                <form  onSubmit={(e)=>{
            e.preventDefault();
            const updateid = `${id}`;
            const studentbody = {_id:updateid, stu_name,stu_gender,stu_education,stu_email,stu_contact,stu_address,stu_dob,stu_linkedin,stu_github,status }
          
            fetch("http://localhost:5000/updatestudent",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(studentbody),
            }).then((response)=>{
                history.push('/backend/students');
            })
        }}
        >
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter name"
                       value={stu_name}
                       name="stu_name"
                       onChange={onInputChange} />
                    </div>


                    <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Gender</label>
                        <select className="form-control" required 
                        value={stu_gender}
                        name="stu_gender"
                        onChange={onInputChange} >
                        <option value="">Select Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </select>
                      </div>
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Education</label>
                        <select className="form-control" required 
                        value={stu_education} 
                        name="stu_education"
                        onChange={onInputChange}
                        >
                        <option value="">Select Education</option>
                          <option>Matric</option>
                          <option>Intermediate</option>
                          <option>Bachelor</option>
                          <option>Masters</option>
                          <option>PHD</option>
                        </select>
                      </div>
                    </div>
                  </div>

  
                  <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email</label>
                      <input type="email" className="form-control" required id="exampleInputEmail1" placeholder="Enter email" 
                       value={stu_email} 
                       name="stu_email"
                       onChange={onInputChange} />
                    </div>


                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Contact No</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter contact no"  
                       value={stu_contact} 
                       name="stu_contact"
                       onChange={onInputChange}/>
                    </div>
  
  
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Address</label>
                      <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Enter address" 
                       value={stu_address} 
                       name="stu_address"
                       onChange={onInputChange}/>
                    </div>
  
                
                  <div className="form-group">
                  <label>Date Of Birth:</label>
                     <input type="date" className="form-control"  required  
                      value={moment(stu_dob).format("YYYY-MM-DD")} 
                       name="stu_dob"
                       onChange={onInputChange}/> 
                    </div>
                
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">LinkedIn Profile</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter linkedin profile"
                        value={stu_linkedin} 
                        name="stu_linkedin"
                        onChange={onInputChange} />
                    </div>
  
  
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Github Link</label>
                      <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter github link" 
                       value={stu_github} 
                       name="stu_github"
                       onChange={onInputChange}/>
                    </div>
  
                    <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group">
                        <label>Select Status</label>
                        <select className="form-control" 
                        value={status} 
                        name="status"
                        onChange={onInputChange}>
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

export default EditStudent;