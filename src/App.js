import { Avatar, Divider, Grid, Tooltip } from "@mui/material";
import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { works, technologies } from "./components/utils";

function App() {
  return (
    <div>
      <Navbar />
      <div className="glass">
        <div id="home" className="center-align">
          <Avatar
            src="https://monsterimagesaws.s3.eu-central-1.amazonaws.com/assets/Avatar.jpeg"
            alt="profile"
            className="avatar"
          />
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
        </div>
        <Divider className="divider" />
        <div id="work">
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "3rem" }}>
              <h2>WORK</h2>
            </div>
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
        </div>

        <Divider className="divider" />
        <div id="about">
          <div style={{ textAlign: "center" }}>
            <div style={{ marginBottom: "3rem" }}>
              <h2>ABOUT ME</h2>
            </div>
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

            <div style={{ marginBottom: "3rem" }}>
              <h4>Certifications</h4>
            </div>
            <div className="certifications">
              <div>
                <img
                  src="https://monsterimagesaws.s3.eu-central-1.amazonaws.com/assets/aws.png"
                  alt="aws"
                  className="certs"
                />
              </div>
              <div>
                <img
                  src="https://monsterimagesaws.s3.eu-central-1.amazonaws.com/assets/gcp.png"
                  alt="gcp"
                  className="certs"
                />
              </div>
            </div>
            <div style={{ marginBottom: "3rem" }}>
              <h4>Technologies</h4>
            </div>
            <Grid container>
              {technologies.map((tech) => (
                <Technologies name={tech.name} img={tech.img} key={tech.name} />
              ))}
            </Grid>
          </div>
        </div>

        <Divider className="divider" />
        <div id="contacts">
          <div className="center-align">
            <div style={{ marginBottom: "3rem" }}>
              <h2>CONTACTS</h2>
            </div>
            <div className="contacts-container">
              <img
                src="https://monsterimagesaws.s3.eu-central-1.amazonaws.com/assets/ig.png"
                alt="ig"
                className="contacts"
              />
              <img
                src="https://monsterimagesaws.s3.eu-central-1.amazonaws.com/assets/linkedin.png"
                alt="linkedin"
                className="contacts"
              />
              <img
                src="https://monsterimagesaws.s3.eu-central-1.amazonaws.com/assets/git.png"
                alt="git"
                className="contacts"
              />
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem" }}>
              <h4>
                Let's get in touch and create something for the people or even
                just for fun!
              </h4>
            </div>
            <div style={{ display: "flex" }}>
              <lord-icon
                src="https://cdn.lordicon.com/kjkiqtxg.json"
                trigger="loop"
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
              <lord-icon
                src="https://cdn.lordicon.com/zeabctil.json"
                trigger="loop"
                delay="2000"
                style={{ width: "100px", height: "100px" }}
              ></lord-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

export const Technologies = ({ name, img }) => {
  return (
    <Grid xs={6} item style={{ padding: "1rem 0" }}>
      <Tooltip title={name} placement="top">
        <img src={img} alt={name} className="techlogo" />
      </Tooltip>
    </Grid>
  );
};
