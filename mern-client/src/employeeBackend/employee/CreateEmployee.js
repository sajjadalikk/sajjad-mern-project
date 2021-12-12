import { useState,useEffect } from "react";
import {useHistory} from "react-router-dom";

const CreateEmployee = () => {
  const [emp_name, setEmpName]=useState('');
  const [emp_gender, setEmpGender]=useState('');
  const [emp_designation, setDesignation]=useState('');
  const [emp_email, setEmpEmail]=useState('');
  const [emp_contact, setEmpCon]=useState('');
  const [company_name, setComName]=useState('');
  const [company_url, setComUrl]=useState('');
  const [company_contact, setComCon]=useState('');
  const [status, setStatus]=useState('');
  //const [isLoading, setIsLoading]=useState(false);
  const history = useHistory();

  useEffect(() => {

    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/employee/addEmployee');
    }
    else
    {
     history.push('/empLogin');
    }
     });


 
  return (

    <div>
  <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Employee Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href={() => false}>Home</a></li>
              <li className="breadcrumb-item active">Employee Form</li>
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
                <h3 className="card-title">Employee</h3>
              </div>
              <form onSubmit={(e)=>{
            e.preventDefault();
           
            const employee = {emp_name,emp_gender,emp_designation,emp_email,emp_contact,company_name ,company_url,company_contact,status}
          
            fetch("http://localhost:5000/createemployee",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(employee),
            }).then((response)=>{
                history.push('/backend/employees');
            })
        }}
        >
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter name" 
                      value={emp_name}
                      onChange={(e)=>setEmpName(e.target.value)} />
                  </div>

                  

                  <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Select Gender</label>
                      <select className="form-control" required 
                       value={emp_gender}
                       onChange={(e)=>setEmpGender(e.target.value)}>
                         <option value="">Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Designation</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Designation"
                    value={emp_designation}
                    onChange={(e)=>setDesignation(e.target.value)} />
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Employee Email" 
                     value={emp_email}
                     onChange={(e)=>setEmpEmail(e.target.value)} />
                  </div> 

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Contact</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Employee Contact" 
                     value={emp_contact}
                     onChange={(e)=>setEmpCon(e.target.value)} />
                  </div> 

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Company Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Company Name" 
                     value={company_name}
                     onChange={(e)=>setComName(e.target.value)} />
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Company Url</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Url" 
                     value={company_url}
                     onChange={(e)=>setComUrl(e.target.value)} />
                </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Company Contact No</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Company Contact No" 
                     value={company_contact}
                     onChange={(e)=>setComCon(e.target.value)} />
                  </div>
              
                
         

               <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Select Status</label>
                      <select className="form-control" required 
                      value={status}
                      onChange={(e)=>setStatus(e.target.value)}>
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

export default CreateEmployee;