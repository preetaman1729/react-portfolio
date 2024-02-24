// # File name: Home.tsx
// # Student’s Name: Amanpreet Kaur
// # StudentID: 301308654
// # Date: 23rd February 2024

import Navbar from "./Navbar";

function Home() {
    return (
        <>
        {/* displays the navbar component */}
        <Navbar/>

        <section id="hero" className="d-flex align-items-center">
    <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
      {/* Displays official name as the welcome message */}
      <h1>Amanpreet Kaur</h1>
      {/* my mission statement */}
      <h2>Carry forward to experience,gained and improved professionally in an environment that calls for challenges and be a part of a team in accomplishing corporate goals.</h2>
      {/* button linking to my about page */}
      <a href="/about" className="btn-about">About Me</a>
    </div>
  </section>

        </>
    );
}

export default Home;