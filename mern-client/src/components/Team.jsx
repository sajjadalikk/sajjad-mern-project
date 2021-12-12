export const Team = (props) => {
  return (
    <div id='team' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id='row'>
         
                <div className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src="img/team/01.jpg" alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>John Doe</h4>
                      <p>Director</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src="img/team/02.jpg" alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>Mike Doe</h4>
                      <p>Senior Designer</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src="img/team/03.jpg" alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>Jane Doe</h4>
                      <p>Senior Designer</p>
                    </div>
                  </div>
                </div>

                <div className='col-md-3 col-sm-6 team'>
                  <div className='thumbnail'>
                    {' '}
                    <img src="img/team/04.jpg" alt='...' className='team-img' />
                    <div className='caption'>
                      <h4>Karen Doe</h4>
                      <p>Project Manager</p>
                    </div>
                  </div>
                </div>
            
        </div>
      </div>
    </div>
  )
}
