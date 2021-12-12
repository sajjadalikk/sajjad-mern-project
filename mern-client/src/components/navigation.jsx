export const Navigation = (props) => {
  return (
    <div id="page-top" data-spy="scroll" data-target=".navbar-fixed-top">
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            Logo
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>

          <li>
              <a href='/adminLogin' className='page-scroll'>
                Admin Loin
              </a>
            </li>

            <li>
              <a href='#features' className='page-scroll'>
                Features
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>

            <li>
              <a href='/employee/empLogin' className='page-scroll'>
                Emp Login
              </a>
            </li>
            <li>
              <a href='/employee/empRegister' className='page-scroll'>
                Emp Register
              </a>
            </li>


            {/* <li>
              <a href='/adminLogin' className='page-scroll'>
                Login
              </a>
            </li>
            <li>
              <a href='/adminRegister' className='page-scroll'>
                Register
              </a>
            </li> */}

             <li>
              <a href='#jobs' className='page-scroll'>
                Jobs
              </a>
            </li>




            

           
          </ul>
        </div>
      </div>
    </nav>
    </div>
  )
}
