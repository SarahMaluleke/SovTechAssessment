import React from "react";
import "../designs/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Miriam Sarah Maluleke</h2>
        <h3>Please navigate through and get to know me</h3>
        <div className="prompt">
          <p>I am a final year student at the VAAL UNIVERSITY OF TECHNOLOGY currently registered in the last module of the course,
            to graduate the following year 2023 April.
          </p>
        </div>
        <div>
          <h2>Why I should be hired by SovTech?</h2>
          <h3>I believe in Sovtech #spex and I would blend with the company on the Go!.
            I am a very hardworking individual,disciplined ,eager to learn and a problem
            solver.I possess great people and communication skills along with being innovative
            and creative.I want to grow in the mentorship of SovTech proffessionalsand grasp
            all I can and hopefully excel in the industry,also ready to work with real life
            projects to expand and experience this exciting industry.#Results,#Tech and #Worldclass
            spex makes me excited to want to be a part of such a an amazing and award-winning
            company as these spex proves that SovTech is here to grow,innovate,change and move 
            Africa forwad the technology industry. 
          </h3>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> What UNIVERSITY taught me!</h2>
            <span>
              HTML, CSS, React Native, Flutter, NPM,
              Java, SQL, MySQL,AI in Python, PHP, Introduction to AI, Data Analysis with R,
              Big Data Immerging Technologies, Business and Infomatics skills, Foundation Syllabus of ISTQB
            </span>
          </li>
          <li className="item">
            <h2>Self taught skills!</h2>
            <span>
              ReactJS, Python
            </span>
            <h4>...and hoping to learn more</h4>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;