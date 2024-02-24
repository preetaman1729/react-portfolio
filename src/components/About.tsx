// # File name: About.tsx
// # Student’s Name: Amanpreet Kaur
// # StudentID: 
// # Date: 23rd February 2024

import Navbar from "./Navbar";
import '../assets/style.css';
import { BiChevronRight,BiSmile,BiText,BiTime,BiAward } from 'react-icons/bi';

function About() {
  // ulr to pdf version of my resume
  const pdfUrl = "https://github.com/preetaman1729/react-portfolio/blob/main/public/resume.pdf";

    return (
        <>
        {/* displays the navbar component */}
        <Navbar/>
        
         {/* this section showcase my bio details and my image photo */}
        <section id="about" className="about">
      <div className="container">
     
       <div className="section-title">
          <h2>About Me</h2>
          <p>Passionate creator showcasing my journey through design code and creativity.</p>
        </div>

        <div className="row">
          <div className="image col-lg-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          <div className="col-lg-8 d-flex flex-column align-items-stretch">
            <div className="content ps-lg-4 d-flex flex-column justify-content-center">
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi"><BiChevronRight/></i> <strong>Name:</strong> <span>Amanpreet Kaur</span></li>
                    <li><i className="bi"><BiChevronRight/></i> <strong>Phone:</strong> <span>+1 437-667-6964</span></li>
                    <li><i className="bi"><BiChevronRight/></i> <strong>City:</strong> <span>Brampton, Canada</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi"><BiChevronRight/></i> <strong>Age:</strong> <span>26</span></li>
                    <li><i className="bi"><BiChevronRight/></i> <strong>Degree:</strong> <span>Graduate</span></li>
                    <li><i className="bi"><BiChevronRight/></i> <strong>Email:</strong> <span>preetaman1729@gmail.com</span></li>
                  </ul>
                </div>
              </div>
              <div className="row mt-n4">
                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    {/* <i className="bi bi-emoji-smile" style="color: #20b38e;"></i> */}
                    <i className="bi"><BiSmile/></i>
                    <span className="purecounter">232</span>
                    <p><strong>Happy Clients</strong>, delighted outcomes, lasting partnership.</p>
                  </div>
                </div>

                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    {/* <i className="bi bi-journal-richtextr" style="color: #8a1ac2;"></i> */}
                    <i className="bi"><BiText/></i>
                    <span className="purecounter">512</span>
                    <p><strong>Projects</strong> that spark joy, inspire progress, and exceed expectations</p>
                  </div>
                </div>

                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    {/* <i className="bi bi-clock" style="color: #2cbdee;"></i> */}
                    <i className="bi"><BiTime/></i>

                    <span className="purecounter">3</span>
                    <p><strong>Years of experience</strong> crafting excellence, honing skills, and delivering results.</p>
                  </div>
                </div>

                <div className="col-md-6 mt-5 d-md-flex align-items-md-stretch">
                  <div className="count-box">
                    {/* <i className="bi bi-award" style="color: #ffb459;"></i> */}
                    <i className="bi"><BiAward/></i>
                    <span className="purecounter">16</span>
                    <p><strong>Awards-winning</strong> innovation, recognized excellence, and celebrated achievements.</p>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>

      </div>
    </section>

    {/* this section displays my resume and also provides a link to allow visitors download the pdf version of it */}
    <section id="resume" className="resume">
      <div className="container">

        <div className="section-title">
            
          <h2>My Resume</h2>
          <p>Explore my journey, skills, and achievements captured in pixels. Find a copy of my resume <a href={pdfUrl} download>here</a>.</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="resume-title">Sumary</h3>
            <div className="resume-item pb-0">
              <h4>Amanpreet Kaur</h4>
              <p><em>Carry forward to experience,gained and improved professionally in an environment that calls for challenges and be a part of a team in accomplishing corporate goals.</em></p>
              <p>
              <ul>
                <li>50 Burgby Avenue, Brampton</li>
                <li>+1 437-667-6964</li>
                <li>preetaman1729@gmail.com</li>
              </ul>
              </p>
            </div>

            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>Health Informatics Technology</h4>
              <h5>2023</h5>
              <p><em>Centennial College, Toronto, Ontario, CAN</em></p>
              <p>Pursuing specialized education in Health Informatics Technology: blending healthcare expertise with cutting-edge technology to revolutionize patient care and data management.</p>
            </div>
            <div className="resume-item">
              <h4>Bachelor of Computer Applications</h4>
              <h5>2018</h5>
              <p><em>Punjabi University Pantiala, Punjab, IND</em></p>
              <p>Completed Bachelor of Computer Applications, equipping with a complehensive understanding of computer science fundamentals, programming languages, and application development.</p>
            </div>
            <div className="resume-item">
              <h4>Senior Secondary (Arts with Math)</h4>
              <h5>2015</h5>
              <p><em>Police DAV Public School, IND</em></p>
              <p>Pursued senior secondary education in Arts with Mathematics, combining analytical thinking with creative expression to foster a well-rounded academic foundation.</p>
            </div>
            <div className="resume-item">
              <h4>Matriculation</h4>
              <h5>2013</h5>
              <p><em>Police DAV Public School, IND</em></p>
              <p>Successfully completed matriculation, laying the groundwork for academic excellence with strong focus on fundamental subjects and holistic development.</p>
            </div>
          </div>
          <div className="col-lg-6">
            <h3 className="resume-title">Past Employment</h3>
            <div className="resume-item">
              <h4>Subway, Crew Member</h4>
              <h5>March 2022 - June 2023</h5>
              <p><em>Pantiala, Punjab, IND </em></p>
              <p>
              <ul>
                <li>Provided excellence customer service, took orders accurately, and addressed inquiries promptly at Subway in Patiala.</li>
                <li>Worked well with team members to keep the workplace organized during busy times. </li>
              </ul>
              </p>
            </div>
            <div className="resume-item">
              <h4>Learning Tools Pvt. Ltd., MIS cum IT Trainer</h4>
              <h5>February 2021 - February 2022</h5>
              <p><em>Pantiala, Punjab, IND </em></p>
              <p>
              <ul>
                <li>Conducted training sessions on Management Information System (MIS) and IT tools.</li>
                <li>Provided technical support for MIS software and systems to employees. </li>
                <li>Facilitated workshops to promote MIS awareness among employees</li>
              </ul>
              </p>
            </div>'
            <div className="resume-item">
              <h4>Hitec (Higher info-tech Education Center), MIS</h4>
              <h5>July 2018 - January 2021</h5>
              <p><em>Pantiala, Punjab, IND </em></p>
              <p>
              <ul>
                <li>Managed information systems at Hitec, ensuring smooth operation and efficient data management.</li>
                <li>Assisted in implementing and customizing MIS solutions to meet Hitec's specific needs. </li>
              </ul>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
        </>
    );
}

export default About;