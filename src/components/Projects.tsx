// # File name: style.css
// # Student’s Name: Amanpreet Kaur
// # StudentID: 301308654
// # Date: 23rd February 2024

import Navbar from "./Navbar";
import { BiStar } from "react-icons/bi";

function Projects() {
    return (
        <>
        {/* displays the navbar component */}
        <Navbar/>

        {/* this section showcases some of my projects and link to the github page if user interested. Also each project has a banner if neccessary detail are to point out e.g. if project is pending, etc. */}
<section id="project" className="project">
      <div className="container">

        <div className="section-title">
            
          <h2>Projects</h2>
          <p>Explore a showcase of my diverse portfolio, ranging from web development ventures to IT training initative. Each project is a testament to my dedication, creativity, and expertise.</p>
        </div>

        <div className="row">
           <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
                <div className="box">
                  <span className="advanced">updated</span>
                  <h3>Custom Portfolio Website</h3>
                  <h4>3.1 <sup><BiStar/></sup><span> / rated</span></h4>
                  <ul>
                    <li>Interactive Portfolio Gallery</li>
                    <li>Customizable Template</li>
                    <li>Resposive Design</li>
                    <li>Social Media Intergration</li>
                    <li>SEO Optimization</li>
                  </ul>
                  <div className="btn-wrap">
                    <a href="#" className="btn-view">Check Now</a>
                  </div>
                </div>
              </div>
          <div className="col-lg-3 col-md-6">
            <div className="box ">
                <span className="advanced">Pending</span>
              <h3>Navyita Dress Store</h3>
              <h4>2.5 <sup><BiStar/></sup><span> / rated</span></h4>
              <ul>
                <li>Online marketplace</li>
                <li>Platform Independent</li>
                <li>SOE Optimized</li>
                <li className="na">Deployable Package</li>
                <li className="na">Debugged</li>
              </ul>
              <div className="btn-wrap">
                <a href="https://github.com/Aman98-kaur/navyita" target="_blank" className="btn-view">Check Now</a>
              </div>
            </div>
          </div>

          
          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <h3>Customer Service Improvement Program</h3>
              <h4>3.5 <sup><BiStar/></sup><span> / rated</span></h4>
              <ul>
                <li>Trainning Sessions</li>
                <li>Customer Service skills workshop</li>
                <li>Personalized Consulting Services</li>
                <li>Quick fixes to existing programs</li>
                <li>Cost Effective for Small Business and Retail Sector</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-view">Check Now</a>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mt-4 mt-lg-0">
            <div className="box">
              <h3>Restaurant Management Software</h3>
               <h4>4.7 <sup><BiStar/></sup><span> / rated</span></h4>
              <ul>
                <li>Order Management</li>
                <li>Inventory Tracking</li>
                <li>Employee Scheduling</li>
                <li>Tailor made for Restaurant</li>
                <li>Customizable</li>
              </ul>
              <div className="btn-wrap">
                <a href="#" className="btn-view">Check Now</a>
              </div>
            </div>
          </div>

         

        </div>

      </div>
    </section>
        </>
    );
}

export default Projects;
