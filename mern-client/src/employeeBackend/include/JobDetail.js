import { useState,useEffect } from "react";
import axios from "axios";
import {useHistory ,useParams} from "react-router-dom";
import moment from "moment";

const JobDetail = () => {
 
const {id} = useParams();
const history = useHistory();
const [job,setJob] = useState({
  job_title:"",
  job_type:"",
  job_exp_type:"",
  job_salary_range:"",
  job_quantity:"",
  job_description:"",
  job_end_date:"",
  status:"",
  company_name:"",
  company_website:"",
  company_contact:""

});

useEffect(() => {
  LoadJob();
  },[]);

const { job_title,job_type ,job_exp_type ,job_salary_range ,job_quantity ,job_description ,job_end_date ,status,company_name ,company_website,company_contact } = job;

const LoadJob = async () =>
{
    const jobdata = await axios.get(`http://localhost:5000/jobedit/${id}`);
    setJob(jobdata.data);
}

  return (

  <div className="">
  <section className="content-header">
    <div className="container-fluid">
      <div className="row mb-2">
        <div className="col-sm-6">
          <h1>Job Detail</h1>
        </div>
        <div className="col-sm-6">
          <ol className="breadcrumb float-sm-right">
            <li className="breadcrumb-item"><a href="/#">Home</a></li>
            <li className="breadcrumb-item active">Job Detail</li>
          </ol>
        </div>
      </div>
    </div>
  </section>
  <section className="content">
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Job Detail</h3>
        <div className="card-tools">
          <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
            <i className="fas fa-minus" />
          </button>
          <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
            <div className="row">
              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Job Title</span>
                    <span className="info-box-number text-center text-muted mb-0">{job_title}</span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Job Type</span>
                    <span className="info-box-number text-center text-muted mb-0">{job_type}</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Job Level</span>
                    <span className="info-box-number text-center text-muted mb-0">{job_exp_type}</span>
                  </div>
                </div>
              </div>


              <div className="col-12 col-sm-3">
                <div className="info-box bg-light">
                  <div className="info-box-content">
                    <span className="info-box-text text-center text-muted">Total Jobs</span>
                    <span className="info-box-number text-center text-muted mb-0">{job_quantity}</span>
                  </div>
                </div>
              </div>

            </div>
            <div className="row">
              <div className="col-12">
                <h4>Job Detail</h4>
                <div className="post">
                  <div className="user-block">
                    <img className="img-circle img-bordered-sm" src="../../dist/img/user1-128x128.jpg" alt="user image" />
                    <span className="username">
                      <a href="/#">Salary Range</a>
                    </span>
                    <span className="description">{job_salary_range}</span>
                  </div>
                  <p>
                   {job_description}
                  </p>
                  <p>
                  <span className="description">Job Apply End Date  </span><a href="/#" className="link-black text-sm"><i className="fas fa-link mr-1" /> {moment(job_end_date).format("YYYY-MM-DD")}</a>
                  </p>
                </div>

              </div>
            </div>
          </div>
          <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
            <h3 className="text-primary"><i className="fas fa-paint-brush" /> {company_name}</h3>
            <p className="text-muted">Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
            <br />
            <div className="text-muted">
              <p className="text-sm">Company Website
                <b className="d-block"><a href={company_website}>{company_website}</a></b>
              </p>
              <p className="text-sm">Company Contact No
                <b className="d-block">{company_contact}</b>
              </p>
            </div>
            <h5 className="mt-5 text-muted">Company files</h5>
            <ul className="list-unstyled">
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Functional-requirements.docx</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-pdf" /> UAT.pdf</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-envelope" /> Email-from-flatbal.mln</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-image " /> Logo.png</a>
              </li>
              <li>
                <a href className="btn-link text-secondary"><i className="far fa-fw fa-file-word" /> Contract-10_12_2014.docx</a>
              </li>
            </ul>
            <div className="text-center mt-5 mb-3">
              <a href="http://localhost:3000/#jobs" className="btn btn-sm btn-primary">Back</a>
              <a href={`/applyjob/${id}`} className="btn btn-sm btn-warning">Apply Job</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
};

export default JobDetail;