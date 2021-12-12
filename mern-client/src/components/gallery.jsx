import { Image } from "./image";

export const Gallery = (props) => {
  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className='row'>

          <div className='portfolio-items'>
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/01-large.jpg" smallImage="img/portfolio/01-small.jpg" />
                </div>
          
      
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/02-large.jpg" smallImage="img/portfolio/02-small.jpg" />
                </div>
        
         
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/03-large.jpg" smallImage="img/portfolio/03-small.jpg" />
                </div>
         
         
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/04-large.jpg" smallImage="img/portfolio/04-small.jpg" />
                </div>
        

          
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/05-large.jpg" smallImage="img/portfolio/05-small.jpg" />
                </div>
          

         
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/06-large.jpg" smallImage="img/portfolio/06-small.jpg" />
                </div>
          

        
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/07-large.jpg" smallImage="img/portfolio/07-small.jpg" />
                </div>
          

         
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/08-large.jpg" smallImage="img/portfolio/08-small.jpg" />
                </div>
      

       
                <div className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title="Project Title" largeImage="img/portfolio/09-large.jpg" smallImage="img/portfolio/09-small.jpg" />
                </div>
          </div>

          


        </div>
      </div>
    </div>
  )
}
