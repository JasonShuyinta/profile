import { Avatar, Divider } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import works from "./components/utils";

function App() {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Navbar />
      <div className="glass">
        <div className="center-align">
          <Avatar src="/img/Avatar.jpeg" alt="profile" className="avatar" />
          <div style={{ textAlign: "center" }}>
            <h1>Hello World!</h1>
            <div className="center-align">
              <code>BACKEND/CLOUD DEVELOPER </code>
            </div>
          </div>

          <div className="text-container">
            <p>
              My name is <b>Jason</b>, I'm a Web Developer and Cloud enthusiast
              with 3+ years of experience based in Italy.
            </p>
            <lord-icon
              src="https://cdn.lordicon.com/wjrtlwtp.json"
              trigger="loop"
              delay="2000"
              style={{ width: "150px", height: "150px" }}
            ></lord-icon>
            <p>
              I am driven by a deep passion for creating innovative solutions
              and bringing them to life through code. I pride myself on my
              strong problem-solving skills and find it rewarding to use my
              expertise to make a positive impact on the world around me.
            </p>
          </div>
          <Divider className="divider" />
          <div style={{ textAlign: "center" }}>
            <h2>Work</h2>
            {works.map((work) => (
              <Work
                name={work.name}
                description={work.description}
                link={work.link}
                imgSrc={work.imgSrc}
                key={work.description}
              />
            ))}
            <span>
              <small>
                <b>
                  More projects on &nbsp;
                  <a href="https://github.com/JasonShuyinta">Github</a>{" "}
                </b>
              </small>
            </span>
          </div>
          <Divider className="divider" />
          <div style={{ textAlign: "center" }}>
            <h2>About me</h2>
            <p>
              As a Computer Science graduate from Bologna, I have spent my
              entire life living in this wonderful city.
            </p>

            <p>
              I am currently working as a Senior Application Development Analyst
              at a consulting firm, where I specialize in backend development. I
              also have a good foundation Cloud Computing and DevOps practices.
            </p>

            <p>
              In my free time, I enjoy coding and always strive to become the
              best version of myself, both personally and professionally. I
              believe in using my skills and knowledge to help others whenever
              possible.
            </p>
            <lord-icon
              src="https://cdn.lordicon.com/meqqbzid.json"
              trigger="loop"
              delay="2000"
              style={{ width: "80px", height: "80px" }}
            ></lord-icon>
            <h4>Certifications</h4>
            <div className="certifications">
              <div>
                <img src="/assets/aws.png" alt="aws" className="certs" />
              </div>
              <div>
                <img src="/assets/gcp.png" alt="gcp" className="certs" />
              </div>
            </div>
            <h4>Technologies</h4>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
