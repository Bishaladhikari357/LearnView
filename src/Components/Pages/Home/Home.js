import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Home.css';
import homeb1 from '../../../Images/homeb1.png';
import homeb2 from '../../../Images/homeb2.png'
import student1 from '../../../Images/student1.png'
import student2 from '../../../Images/student2.png'

function Home() {
  return (
    <>
      
    <div className="container">
      <div className='sub-container1'>
        <div className="partition1">
          <h1>Learn & Grow with Buddha</h1>
          <p>Our platform serves as a dynamic hub, providing a wide
            range of tools, resources, and support systems
            designed to guide students toward academic excellence.
          </p>
          <div className='readh'>
            <Link to="/read"> {/* Use Link component for navigation */}
              <button>Read More</button>
            </Link>
          </div>
        </div>
        <div className="partition2">
          <img src={homeb1} alt="Banner" />
        </div>
      </div>
<hr></hr>
      <div className="sub-container2">
        <div className="image2">
          <img src={homeb2} alt="" />
        </div>
        <div className="image-explain">
          <h2>Study Materials</h2>
          <p>
            In educational courses, various materials are used to facilitate learning and engagement. Textbooks and academic
            journals provide basic knowledge and advanced insights into
            specific topics. Digital resources, including online articles,
            e-books, and educational videos, provide accessible and
            up-to-date information. Laboratory equipment and
            materials, such as chemicals, samples, and measuring instruments,
            are essential for hands-on experiments in science courses.
            Visual aids such as slides, diagrams, and charts help illustrate
            complex concepts. In addition, interactive tools such as
            educational software, simulations, and learning management
            systems (LMS) enhance the learning experience by enabling
            practical applications and assessments. These materials
            collectively support diverse learning styles and contribute
            to a comprehensive educational experience
          </p>
        </div>
      </div>

      <div className="sub-container3">
        <h1>What Our Students Say</h1>
        <div className="students">
          <div className="student1">
            <img src={student1} alt="image of student 1" />
            <p>"As a college student, I find this website incredibly useful. 
              The notes are well-organized by subject and topic, and they go into the
               right amount of detail. It's especially helpful for complex subjects
               like organic chemistry and calculus. The sample problems and solutions 
               are a great bonus."<br/><br/>

- Bishal Adhikari
               </p>
          </div>
          <div className="student2">
            <img src={student2} alt="image of student 2" />
            <p>"This site has been a great companion for my online courses. The notes complement the course materials perfectly and offer additional explanations that make difficult topics easier to grasp. 
              The website's easy navigation and search function help me quickly find 
              what I need."<br/><br/>

              - Sabina Khanal
              </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Home;
