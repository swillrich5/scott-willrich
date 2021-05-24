import React from 'react'
import DownloadLink from "react-download-link";

const About = () => {
  return (
    <div className="row py-5">
        <div className="container col-md-6 col-lg-4 py-2 about-container">
            <div className="mx-auto">
                <h2 className="mt-3 mb-4">Hi, I'm Scott!</h2>
                <img className="rounded-circle d-block mx-auto mb-3" src="images/Scott.jpg" alt="" />
                <p className="px-3 text-justify">
                    After a career in Information Technology Management, 
                    I am seeking a position as a Full Stack Web Developer.  
                    I am currently pursuing an intensive Web Development Coding 
                    Certificate at the University of Texas.  While challenging, 
                    it's been the most fun I've had in a long time.  The experience 
                    I’m gaining in HTML, CSS, JavaScript, SQL/NOSQL databases, and 
                    React combined with my earlier degree in Computer Science and my 
                    experience in IT management give me the opportunity to grow and 
                    become a valuable asset. 
                </p>
                <p className="px-3 text-justify">I'm actively seeking employment in an internship or junior developer role, 
                    so please check out my LinkedIn profile, my GitHub repo, and my resume at the links below.</p>
                <div className="d-flex justify-content-around mb-3">
                    <a href="https://www.linkedin.com/in/scott-willrich"><i className="fab fa-linkedin fa-5x"></i></a>
                    <a href="https://github.com/swillrich5"><i className="fab fa-github fa-5x"></i></a>
                    <DownloadLink
                        label={<i className='far fa-address-card fa-5x' style={{color: "#D4F1F1"}}></i>}
                        filename="ScottWillrichResume.pdf"
                        exportFile={() => Promise.resolve("My cached data")}
                    />
                </div>   
            </div>
        </div>
    </div>


  )
}

export default About;