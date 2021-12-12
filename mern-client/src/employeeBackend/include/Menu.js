import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Menu extends Component {
    render() {
        return (
          <div>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
    {/* Brand Logo */}
    <Link to="index3.html" className="brand-link">
      <img src="http://localhost:3000/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </Link>
    {/* Sidebar */}
    <div className="sidebar">
      {/* Sidebar user panel (optional) */}
      <div className="user-panel mt-3 pb-3 mb-3 d-flex">
        <div className="image">
          <img src="http://localhost:3000/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
        </div>
        <div className="info">
        <a href="javascript:void(0)" className="d-block">Alexander Pierce</a>
        </div>
      </div>
      {/* Sidebar Menu */}
      <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          {/* Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library */}
          <li className="nav-item has-treeview menu-open">
          <a href="javascript:void(0)" className="nav-link active">
              <i className="nav-icon fas fa-tachometer-alt" />
              <p>
                Dashboard
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/backend/dashboard" className="nav-link active">
                  <i className="far fa-circle nav-icon" />
                  <p>Home</p>
                </Link>
              </li>
            
            </ul>
          </li>
          
          <li className="nav-item has-treeview">
          <a href="javascript:void(0)" className="nav-link">
              <i className="nav-icon fas fa-copy" />
              <p>
                Login Information
                <i className="fas fa-angle-left right" />
                <span className="badge badge-info right">6</span>
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/employee/logininfo" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>User Login Detail</p>
                </Link>
              </li>
            </ul>
          </li>


          <li className="nav-item has-treeview">
          <a href="javascript:void(0)" className="nav-link">
              <i className="nav-icon fas fa-chart-pie" />
              <p>
                Employee Information
                <i className="right fas fa-angle-left" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/employee/addemployee" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Employee Data</p>
                </Link>
              </li>
             
            </ul>
          </li>
          
          <li className="nav-item has-treeview">
          <a href="javascript:void(0)" className="nav-link">
              <i className="nav-icon fas fa-edit" />
              <p>
               Jobs
                <i className="fas fa-angle-left right" />
              </p>
            </a>
            <ul className="nav nav-treeview">
              <li className="nav-item">
                <Link to="/employee/addjob" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Add Job</p>
                </Link>
              </li>
              <li className="nav-item">
              <Link to="/employee/jobs" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Job List</p>
                  </Link>
              </li>

              <li className="nav-item">
                <Link to="/employee/jobapplicants" className="nav-link">
                  <i className="far fa-circle nav-icon" />
                  <p>Job Applicants</p>
                </Link>
              </li>
              
            </ul>
          </li>
        
        </ul>
      </nav>
      {/* /.sidebar-menu */}
    </div>
    {/* /.sidebar */}
  </aside>
</div>

        )
    }
}
