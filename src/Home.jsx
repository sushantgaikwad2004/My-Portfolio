import React from "react";

const Home = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector(".card-container");
    aboutSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSkills = () => {
    const skillsSection = document.querySelector(".skills");
    skillsSection.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const footerSection = document.querySelector(".footer");
    footerSection.scrollIntoView({ behavior: "smooth" });
  };

  const downloadResume = () => {
    console.log("Downloading resume...");
    // Replace 'path_to_your_resume.pdf' with the actual path to your PDF resume
    const resumeUrl =
      './assets\Coursera KT9X73F36YYY.pdf';
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.setAttribute("download", "Sushant_Gaikwad_Resume.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo"></a>

        <nav className="navbar">
          <a href="#">Home</a>
          <a onClick={scrollToAbout}>About</a>
          <a onClick={scrollToSkills}>Skills</a>
          <a onClick={scrollToContact}>Contact</a>
        </nav>
      </header>
      <section className="home">
        <div className="home-content">
          <h3>Heloo Its Me</h3>
          <h1>Sushant Gaikwad</h1>
          <h3>
            And I am a Computer Computer Engineering Student
            <span className="text"></span>
          </h3>
          <p className="pol">
            As a Computer Engineering enthusiast and K.K Wagh Polytechnic
            alumnus,I have previously interned at Sumago Infotech Pvt I have
            experience in C++, Python, DSA, Full Stack Development,
            Kootiln,Java. and am currently pursuing Computer Engineering at
            Sinhagad. Passionate about solving complex problems and learning new
            technologies, I am open to exciting opportunities.
          </p>
          <p className="pok"> </p>
          <div className="home-sci">
            <a href="https://www.instagram.com/sushant__1106?igsh=ODl6NndyaXFkam9x">
              <i class="bx bxl-instagram"></i>
            </a>
            <a href="https://github.com/sushantgaikwad2004">
              <i class="bx bxl-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/sushant-gaikwad-4719032b2/">
              <i class="bx bxl-linkedin-square"></i>
            </a>
            <a href="mailto:sushantgaikwad287@gmail.com">
              <i class="bx bx-envelope"></i>
            </a>
          </div>
          <a onClick={downloadResume} className="btn-box">
            Download My Resume
          </a>
        </div>
      </section>
      <div className="card-container">
        <div className="background-image"></div>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        <ul>
          <li>Java</li>
          <li>Kotlin</li>
          <li>Full Stack Development</li>
          <li>Python</li>
          <li>C++</li>
        </ul>
      </div>

      <footer className="footer">
        <div className="loader">
          <span className="loader-text">
            Contatct Me <i class="bx bxs-hand-down"></i>
          </span>
        </div>
        <div className="container">
          <div className="container_terminal"></div>
          <div className="terminal_toolbar">
            <div className="butt">
              <button className="btn btn-color"></button>
              <button className="btn"></button>
              <button className="btn"></button>
            </div>
            <p className="user">User Information</p>
          </div>
          <div className="terminal_body">
            <form
              id="user_form"
              action="https://api.web3forms.com/submit"
              method="post"
              className="contact-left"
            >
              <div className="terminal_promt">
                <input
                  type="hidden"
                  name="access_key"
                  value="65d81da1-382a-4798-b186-f4339a95a29e"
                />
                <span className="terminal_user">Enter@name:~</span>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="terminal_promt">
                <span className="terminal_user">Enter@Email:~</span>
                <input
                  type="email"
                  className="contact-inputs"
                  id="email"
                  name="email"
                  required
                />
              </div>
              <div className="terminal_promt">
                <span className="terminal_user">Enter@Subject:~</span>
                <input
                  type="text"
                  className="contact-inputs"
                  id="subject"
                  name="subject"
                  required
                />
              </div>
              <div className="terminal_promt">
                <span className="terminal_user">Enter@Message:~</span>
                <textarea
                  id="message"
                  className="contact-inputs"
                  name="message"
                  required
                ></textarea>
              </div>
              <div className="terminal_promt">
                <button type="submit" id="submitBtn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;
