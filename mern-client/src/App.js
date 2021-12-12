// import logo from './logo.svg';
// import './App.css';
//import useFetch from './custom-hooks/useFetch'
//import empFetch from './custom-hooks/empFetch'
//import stuFetch from './custom-hooks/stuFetch'
//import jobFetch from './custom-hooks/jobFetch'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {useEffect, useState } from "react";

import Header from './backend/include/Header';
import Menu from './backend/include/Menu';
import Dashboard from './backend/include/Dashboard';
import Footer from './backend/include/Footer';
import Error from './backend/include/Error';


import  EmpHeader from './employeeBackend/include/Header';
import  EmpMenu from './employeeBackend/include/Menu';
import  EmpDashboard from './employeeBackend/include/Dashboard';
import  EmpFooter from './employeeBackend/include/Footer';

import CreateStudent from './backend/student/CreateStudent';
import StudentsList from './backend/student/ListStudent';
import EditStudent from './backend/student/EditStudent';

import CreateUser from './backend/users/CreateUser';
import UsersList from './backend/users/ListUser';
import EditUser from './backend/users/EditUser';


import UserList from './employeeBackend/users/ListUser';
import EditEmployeeLogin from './employeeBackend/users/EditUser';


import CreateEmployee from './backend/employee/CreateEmployee';
import EmployeesList from './backend/employee/ListEmployee';
import EditEmployee from './backend/employee/EditEmployee';




import EmployeeList from './employeeBackend/employee/ListEmployee';
import EditEmployeeInfo from './employeeBackend/employee/EditEmployee';
//import CreateEmployeeInfo from './employeeBackend/employee/CreateEmployee';

import CreateJob from './backend/jobs/CreateJob';
import JobsList from './backend/jobs/ListJob';
import EditJob from './backend/jobs/EditJob';
import ListApplicant from './backend/jobs/ListApplicants';
import ViewApplicantInfo from './backend/jobs/ViewApplicantInfo';


import CreateJobEmployee from './employeeBackend/jobs/CreateJob';
import JobsListEmployee from './employeeBackend/jobs/ListJob';
import EditJobEmployee from './employeeBackend/jobs/EditJob';
import ListApplicantEmployee from './employeeBackend/jobs/ListApplicants';
import EmpViewApplicantInfo from './employeeBackend/jobs/ViewApplicantInfo';


import Frontend from './frontend/Frontend';

import LoginAdmin from './backend/include/LoginAdmin';
import AdminRegister from './backend/include/AdminRegister';

import JobDetail from './backend/include/JobDetail';
import ApplyJob from './backend/include/ApplyJob';


import EmpRegister from './employeeBackend/include/EmpRegister';
import LoginEmp from './employeeBackend/include/LoginEmp';

//import Jobs from './components/jobs';
//import jobDetail from './components/jobDetail';


function App() {
 // const {data:users, isLoading, errMessage} = useFetch("http://localhost:5000/users");
 // const {data:employees, empisLoading, emperrMessage} = empFetch("http://localhost:5000/employees");
 // const {data:students, stuisLoading, stuerrMessage} = stuFetch("http://localhost:5000/students");
 // const {data:jobs, jobisLoading, joberrMessage} = jobFetch("http://localhost:5000/jobs");

  const [user, setLoginUser] = useState({});

  const [emp, setLoginEmployee] = useState({});

  useEffect(() => {
    setLoginUser(localStorage.getItem("MyUser"))
    setLoginEmployee(localStorage.getItem("MyEmployee"))
  },[])

  const updateUser = (user) => {
   
    localStorage.setItem("MyUser",JSON.stringify(user));
    setLoginUser(user);
  }


  const updateEmployee = (emp) => {
    localStorage.setItem("MyEmployee",JSON.stringify(emp));
    setLoginEmployee(emp);
  }

  return (
    <Router>
    
    <Switch>

        <Route exact  path="/">
        <Frontend/>
        </Route>

        <Route exact  path="/adminLogin">
        <LoginAdmin updateUser={updateUser}/>
        </Route>

        <Route exact  path="/adminRegister">
        <AdminRegister/>
        </Route>

       

        <Route exact  path="/backend/dashboard">
        <Header />
        <Menu/>
        <Dashboard/>
        <Footer/>
        </Route>

        <Route exact path="/backend/addUser">
        <Header/>
          <Menu/>
           <CreateUser/>
           <Footer/>
        </Route>


        <Route exact path="/backend/edituser/:id">
        <Header/>
          <Menu/>
           <EditUser/>
           <Footer/>
        </Route>



        <Route exact path="/backend/users">
        <Header/>
          <Menu/>
          <UsersList /> 
           <Footer/>
        </Route>

        <Route exact  path="/backend/addEmployee">
        <Header/>
          <Menu/>
            <CreateEmployee/>
            <Footer/>
        </Route>

        <Route exact path="/backend/employees">
        <Header/>
          <Menu/>
          <EmployeesList />
           <Footer/>
        </Route>


        <Route exact path="/backend/editemployee/:id">
        <Header/>
          <Menu/>
           <EditEmployee/>
           <Footer/>
        </Route>


        <Route exact  path="/backend/addStudent">
        <Header/>
          <Menu/>
            <CreateStudent/>
            <Footer/>
        </Route>

        <Route exact path="/backend/students">
        <Header/>
          <Menu/>
            <StudentsList />
           <Footer/>
        </Route>

        <Route exact path="/backend/editstudent/:id">
        <Header/>
          <Menu/>
           <EditStudent/>
           <Footer/>
        </Route>


        <Route exact path="/backend/addjob">
        <Header/>
          <Menu/>
           <CreateJob/>
           <Footer/>
        </Route>



        <Route exact path="/backend/jobs">
        <Header/>
          <Menu/>
           <JobsList />
           <Footer/>
        </Route>


        <Route exact path="/backend/editjob/:id">
        <Header/>
          <Menu/>
           <EditJob/>
           <Footer/>
        </Route>

        <Route exact path="/viewjob/:id">
           <JobDetail/>
        </Route>

        <Route exact path="/applyjob/:id">
           <ApplyJob/>
        </Route>


        <Route exact path="/applyjob/:id">
           <ApplyJob/>
        </Route>

        <Route exact path="/backend/jobapplicants">
        <Header/>
          <Menu/>
           <ListApplicant />
           <Footer/>
        </Route>


        <Route exact path="/backend/viewapplicant/:id">
        <Header/>
        <Menu/>
           <ViewApplicantInfo />
           <Footer/>
        </Route>



    

























        <Route exact  path="/employee/empRegister">
        <EmpRegister/>
        </Route>

        <Route exact  path="/employee/empLogin">
        <LoginEmp  updateEmployee={updateEmployee}/>
        </Route>


        <Route exact  path="/employee/dashboard">
        <EmpHeader />
        <EmpMenu/>
        <EmpDashboard/>
        <EmpFooter/>
        </Route>

        
        
        <Route exact path="/employee/addemployee">
        <EmpHeader />
          <EmpMenu/>
          <EditEmployeeInfo/>
           <Footer/>
        </Route> 



        <Route exact path="/employee/logininfo">
        <EmpHeader />
          <EmpMenu/>
          <UserList /> 
           <Footer/>
        </Route>



        <Route exact path="/employee/employeedata">
        <EmpHeader />
          <EmpMenu/>
          <EmployeeList />
           <Footer/>
        </Route>
       

        <Route exact path="/employee/editlogin/:id">
        <EmpHeader />
          <EmpMenu/>
           <EditEmployeeLogin/>
           <Footer/>
        </Route>

        <Route exact path="/employee/addjob">
        <EmpHeader />
          <EmpMenu/>
           <CreateJobEmployee/>
           <Footer/>
        </Route>



        <Route exact path="/employee/jobs">
        <EmpHeader />
          <EmpMenu/>
           <JobsListEmployee />
           <Footer/>
        </Route>


        <Route exact path="/employee/editjob/:id">
        <EmpHeader />
          <EmpMenu/>
           <EditJobEmployee/>
           <Footer/>
        </Route>

        <Route exact path="/employee/jobapplicants">
        <EmpHeader />
          <EmpMenu/>
           <ListApplicantEmployee />
           <Footer/>
        </Route>

        <Route exact path="/employee/viewapplicant/:id">
        <EmpHeader />
          <EmpMenu/>
           <EmpViewApplicantInfo />
           <Footer/>
        </Route>

        


        <Route path="*">
             <Error/>
       </Route>

        </Switch>

    </Router>
  );
}

export default App;
