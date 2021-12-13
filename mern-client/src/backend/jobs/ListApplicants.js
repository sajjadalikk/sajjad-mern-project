import { Link } from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory} from "react-router-dom";
//import $ from 'jquery';

const ListApplicants = ({prop}) => {

  const [applicants, setApplicants] = useState([]);
  const [search, setSeach] = useState("");
  const history = useHistory();
  useEffect(() => {

    const myuser = localStorage.getItem("MyUser");
    if(myuser)
    {
     history.push('/backend/jobapplicants');
    }
    else
    {
     history.push('/adminLogin');
    }


    LoadApplicants();
    },[]);

    const LoadApplicants = async () =>
    {
        const applicantsdata = await axios.get("http://localhost:5000/jobapplicants");
      
        setApplicants(applicantsdata.data.reverse());
    }


    
 


  return (
    <div className="content-wrapper">
    <section className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1>Applicants List</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
            <input type="text" className="form-control" required id="exampleInputEmail1" placeholder="Search By Applicant Name" 
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
                <h3 className="card-title">Applicants List</h3>
              </div>
              <div className="card-body">
                <table id="example1" className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>Applicant First Name</th>
                      <th>Applicant Last Name</th>
                      <th>Applicant Email</th>
                      <th>Applicant Contact No</th>
                      <th>Applicant LinkedIn</th>
                     
                      <th>View Detail</th>
                   
                    </tr>
                  </thead>
                  <tbody>
                
                   
                  
                {applicants.filter((applicant) => {
                  if(search === "")
                  {
                    return applicant;
                  }
                  else if(applicant.applicant_name.toLowerCase().includes(search.toLowerCase()))
                  {
                    return applicant;
                  }
                }).map((applicant, key) => {
                  return <tr key={key} >
        
                <td>{applicant.applicant_name}</td>
                <td>{applicant.applicant_github}</td>
                <td>{applicant.applicant_email}</td>
                <td>{applicant.applicant_contact}</td>
                <td>{applicant.applicant_linkedin}</td>
                <td>{applicant.applicant_github}</td>
                
                <td><Link to={`/backend/viewapplicant/${applicant._id}`}>View Detail</Link></td>
                
        
      </tr>
    })}
               
                  </tbody>
                  <tfoot>
                    <tr>
                    <th>Applicant First Name</th>
                    <th>Applicant Last Name</th>
                      <th>Applicant Email</th>
                      <th>Applicant Contact No</th>
                      <th>Applicant LinkedIn</th>
                      <th>View Detail</th>
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

export default ListApplicants;



