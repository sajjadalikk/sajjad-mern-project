import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory ,useParams} from "react-router-dom";

const EditEmployee = () => {
  // const [emp_name, setEmpName]=useState('');
  // const [emp_gender, setEmpGender]=useState('');
  // const [emp_designation, setDesignation]=useState('');
  // const [emp_email, setEmpEmail]=useState('');
  // const [emp_contact, setEmpCon]=useState('');
  // const [company_name, setComName]=useState('');
  // const [company_url, setComUrl]=useState('');
  // const [company_contact, setComCon]=useState('');
  // const [status, setStatus]=useState('');
  //const [isLoading, setIsLoading]=useState(false);
  //const history = useHistory();


  //const {id} = useParams();
  const history = useHistory();
   const [id, setId] = useState([]);
  const [employee,setEmployee] = useState({
    emp_name:"",
    emp_gender:"",
    emp_designation:"",
    emp_email:"",
    emp_contact:"",
    company_name:"",
    company_contact:"",
    company_url:"",
    status:"",
    
    
});

useEffect(() => {
  const getemployee = localStorage.getItem("MyEmployee");
  if(getemployee)
  {
   history.push(`/employee/addemployee`);
  }
  else
  {
   history.push('/empLogin');
  }

  
  LoadEmployee();
   },[]);

   const getemployee = localStorage.getItem("MyEmployee");
   var jsonData = JSON.parse(getemployee);     
   const idd =  jsonData._id; 
  const  user_id = idd;

 


const { emp_name,emp_gender,emp_designation,emp_email,emp_contact,company_name,company_contact,company_url,status } = employee;

const LoadEmployee = async () =>
{
    const empdata = await axios.get(`http://localhost:5000/employee/employeeedit/${user_id}`);
   

    if(empdata.data[0])
    {
      setEmployee(empdata.data[0]);
    }
    else
    {

    }

}

function onInputChange (e)
{
  const {name,value} = e.target;
  setEmployee({
    ...employee,
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
            <h1>Employee Form</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="/#">Home</a></li>
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
            const id = user_id;
            const employee = {emp_name,emp_gender,emp_designation,emp_email,emp_contact,company_name ,company_url,company_contact,status,user_id}
           
            fetch("http://localhost:5000/employee/updateemployee",
            {
                mode: 'cors',
                method: 'POST',
                headers: { 'Content-Type':'application/json' },
                body: JSON.stringify(employee),
            }).then((response)=>{
              alert("Information Updated")
                history.push('/employee/addemployee');
            })
        }}
        >
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter name" 
                      value={emp_name}
                      name="emp_name"
                      onChange={onInputChange}
                      pattern="[a-zA-Z\s]+" title="Enter Only Alphabats" />
                  </div>

                  

                  <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Select Gender</label>
                      <select className="form-control" required 
                       value={emp_gender}
                       name="emp_gender"
                       onChange={onInputChange}>
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
                    name="emp_designation"
                    onChange={onInputChange}
                    pattern="[a-zA-Z\s]+" title="Enter Only Alphabats" />
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Email</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Employee Email" 
                     value={emp_email} 
                     name="emp_email"
                     onChange={onInputChange}
                     pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                     title="Please Enter Valid Email" />
                  </div> 

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Employee Contact</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Employee Contact" 
                     value={emp_contact}
                     name="emp_contact"
                     onChange={onInputChange} 
                     pattern="[0-9]+" title="Enter only numeric values" />
                  </div> 

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Company Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Company Name" 
                     value={company_name}
                     name="company_name"
                     onChange={onInputChange} 
                     pattern="[a-zA-Z0-9\s]+" title="Enter Only aplha numeric values"/>
                </div>


                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Company Website</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Url" 
                     value={company_url} 
                     name="company_url"
                     onChange={onInputChange} />
                </div>

                  <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Company Contact No</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" required placeholder="Enter Company Contact No" 
                     value={company_contact}
                     name="company_contact"
                     onChange={onInputChange} 
                     pattern="[0-9]+" title="Enter only numeric values" />
                  </div>


                
                    <input type="hidden" className="form-control" id="" required 
                    value={idd} 
                    name="user_id"
                    onChange={onInputChange} />
               
              
                
         

               <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label>Select Status</label>
                      <select className="form-control" required 
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

export default EditEmployee;