import './App.css'

import NavigationBar from './components/NavigationBar'
import larrie from './assets/Larrie.jpg'
import Circular from './components/Circular'

function App() {
 

  return (
    <>
      <NavigationBar/>
      
    <div className='main-content'>
        <div className='profile-odd' id='firstID'>
          <h1>Hello there!</h1>
          <p>
            I'm not your average Full Stack Web Developer; I bring the magic of React.js, Node.js, MongoDB, and MSSQL to the digital realm! With my skills, I can make your web applications dance and sing like never before.

            Picture this: dynamic user interfaces that are so responsive, they practically read your mind. And with my knack for developing RESTful APIs, data flow becomes smoother than a salsa dancer on a Saturday night.

            But wait, there's more! I'm not just a coding wizard—I'm also a master of database management. I ensure data integrity and security like a superhero guarding their secret lair.

            So, let's cut to the chase: if you want a Full Stack Web Developer who brings the perfect blend of technical expertise and a wicked sense of humor, look no further. Together, we'll create web applications that'll have your users grinning from ear to ear.

            Now, who said coding couldn't be fun?
            <br/>
            <br/>

            Cheers,
            <br/>
            Larrie I. Adriano
            <br/>
            B.S. Computer Science (2013 University of the East)
          </p>

          <div className="img-container">
            <div className="img-profile"></div>
            <div className="img-profile"></div>
            <img className='img-profile' src={larrie}/>
          </div>

        </div>

        <div className='profile-even' id='secondID'>
          <h1>Less is more</h1>
          <p>In the realm of development, being updated with the latest tech is like being a human GPS navigating through a labyrinth of ever-changing routes</p>
  
          <div className='profile-icons'>         
              <Circular />
          </div>
        
        </div>

        <div className='profile-odd' id='thirdID'>
          <h1>Job Experiences</h1>
          <p>Coming Soon...</p>
        </div>

        <div className='profile-even' id='fourthID'>
          <h1>Projects</h1>
          <p>Coming Soon...</p>
        </div>
    </div>

    </>
  )
}

export default App;
