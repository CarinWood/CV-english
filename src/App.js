import "./App.css";
import image from "../src/assets/img/red.jpg";
import { AiOutlinePhone } from "react-icons/ai";
import { BsHouseDoor, BsGithub, BsLinkedin, BsFillBriefcaseFill } from "react-icons/bs";
import { MdOutlineMailOutline, MdOutlineWork } from "react-icons/md";
import { IoSchoolSharp } from "react-icons/io5";
import molndal from "../src/assets/img/campusmolndal_logo_RGB.png";
import handels from "../src/assets/img/university-gothenburg.png";
import ResponsiveNav from "./components/responsiveNav/ResponsiveNav";
import brights from './assets/img/brights.jpeg';
import swedish from './assets/img/swedish.png'
import english from './assets/img/english.png'
import german from './assets/img/german.png'

function App() {
  return (
    <>
      <ResponsiveNav />
      <div className="container" id="home">
        <section className="left-side">
          <img className="profile-image" src={image} alt="" />
          <h1 className="about-heading" id="about">
            About Me
          </h1>
          <article className="about-text">
            l'm a logical and results-driven full stack developer. I program in Java, JavaScript and TypeScript.
            <br />
            <br />
            I also have a Master's degree in Business and Economics and have
            worked in various roles as an economist.
            <br />
            <br />
            I'm interested in the entire full stack spectrum and would love to
            work on ambitious projects together with positive people
          </article>
          <div className="divider"></div>

          <h1 className="contact-heading">SKILLS</h1>
          <div className="skill-lists-container">
            <article className="frontend-list">
              <ul className="frontend">
                <li className="list-item">HTML</li>
                <li className="list-item">CSS</li>
                <li className="list-item">JavaScript</li>
                <li className="list-item">TypeScript</li>
                <li className="list-item">Java</li>
                <li className="list-item">C#</li>
                <li className="list-item">React</li>
                <li className="list-item">Phaser</li>
                <li className="list-item">UX/UI</li>
                <li className="list-item">API</li>
                <li className="list-item">RestAPI</li>
                <li className="list-item">Axios</li>
                <li className="list-item">Express</li>
               
              </ul>
            </article>

            <article className="backend-list">
              <ul className="backend">
                <li className="list-item">Spring Boot</li>
                <li className="list-item">MVC</li>
                <li className="list-item">JPA</li>
                <li className="list-item">JDBC</li>
                <li className="list-item">SQL</li>
                <li className="list-item">MERN</li>
                <li className="list-item">Mongoose</li>
                <li className="list-item">MongoDB</li>
                <li className="list-item">GraphQL</li>
                <li className="list-item">Apollo</li>
                <li className="list-item">Contentful</li>
                <li className="list-item">SASS</li>
                <li className="list-item">Node.js</li>
              </ul>
            </article>
          </div>
          <div className="divider"></div>
          <h1 className="language-heading">Languages</h1>
          <article className="about-text languages">
              <img src={swedish} alt="" className="swe-flag"/>
                  <span>Swedish: fluent</span>
            </article>
          <article className="about-text languages">
            <img src={english} alt="" className="swe-flag"/>
                  <span>English: fluent</span>
          </article>
          <article className="about-text languages">
            <img src={german} alt="" className="swe-flag"/>
                  <span>German: good</span>
          </article>

          <div className="divider"></div>

          <h1 className="contact-heading">CONTACT</h1>

          <article className="phone">
            <AiOutlinePhone className="phone-icon" />
            0736-009506
          </article>

          <article className="house">
            <BsHouseDoor className="house-icon" />
            Norra Ågatan 3, 416 49 Gothenburg
          </article>

          <article className="email">
            <MdOutlineMailOutline className="email-icon" />
            carin.wood.85@gmail.com
          </article>
          <div className="divider2"></div>

          <h1 className="follow-heading">FOLLOW ME</h1>
          <div className="follow-me-container">
            <article className="github">
              <a href="https://github.com/CarinWood" target="_blank">
                <BsGithub className="github-icon" />
              </a>
              <a className="tag" href="https://github.com/CarinWood">
                <p className="github-text">GitHub</p>
              </a>
            </article>
            <article className="linkedin">
              <a href="https://www.linkedin.com/in/carin-wood/" target="_blank">
                <BsLinkedin className="linkedin-icon" />
              </a>
              <a
                className="tag"
                target="_blank"
                href="https://www.linkedin.com/in/carin-wood/"
              >
                <p className="linkedin-text">LinkedIn</p>
              </a>
            </article>
            <article className="portfolio">
              <a href="https://carinwood-gaming-portfolio.vercel.app/" target="_blank">
                <BsFillBriefcaseFill className="linkedin-icon" />
              </a>
              <a
                className="tag"
                target="_blank"
                href="/https://carinwood-gaming-portfolio.vercel.app/"
              >
                <p className="portfolio-text">Portfolio</p>
              </a>
            </article>
          </div>
        </section>

        <section className="right-side">
          <header className="header">
            <p className="carin">CARIN WOOD</p>
            <p className="fullstack">Fullstack Developer</p>
          </header>

          <div className="div3"></div>

          <section id="education" className="education">
            <div className="education-div">
              <IoSchoolSharp className="school-icon" />
              <p className="edu-heading">Education</p>
              <div className="div"></div>
            </div>

            <article className="boras">
              <div className="image-container">
                <img  src={brights} alt="" className="brights-logo" />
              </div>
              <div className="campus-div">
                <p className="school-title">Java - accelerated learning program</p>
                <p className="edu-subtext">
                 Java, Spring Boot, Thymeleaf, SQL, RestAPI, Agile Methodologies, MVC, Git, Java, Object-Oriented Programming (OOP), HTML, CSS, JavaScript
                </p>
              </div>
            </article>
            <article className="boras">
              <div className="image-container">
                <img src={molndal} alt="" className="edu-image molndal-image" />
              </div>
              <div className="campus-div">
                <p className="school-title">Web Developer</p>
                <p className="edu-subtext">
                  HTML, CSS, JavaScript, TypeScript, React, Node, SQL, NoSQL,
                  MongoDB, Mongoose, UX/UI, MERN, API, RestAPI, Express
                </p>
              </div>
            </article>

            <article className="handels">
              <div className="image-container">
                <img src={handels} alt="" className="business" />
              </div>
              <div className="campus-div">
                <p className="school-title">
                  Degree of Master of Science in Business Administration
                </p>
                <p className="edu-subtext">
                  Business Administration, Statistics, Economics, Introduction
                  to Law, Economic History, English
                  <br />
                  <br />
                  Marketing - Bachelor Course
                  <br />
                  Accounting - Master Course
                </p>
              </div>
            </article>
          </section>

          <div className="div3"></div>

          <section className="work">
            <div className="work-div">
              <MdOutlineWork className="work-icon" />
              <p className="work-heading">Work experience</p>
              <div className="second-div"></div>
            </div>

            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Academic Work</p>
                <p className="work-year">2023</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">IT-consultant</p>
                <p className="work-subtext">
                I was hired as a Java-developer to do consultant work for Academic Work's customer
                </p>
              </div>
            </article>
        
            <article className="police">
              <div className="police-heading">
                <p className="polismynd">GetIT Nordic</p>
                <p className="work-year">2022</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Developer internship</p>
                <p className="work-subtext">
                During my internship at GetIT Nordic, I was tasked with building a sales page for their GetHub application.
                <p className="work-subtext_2"><a target="_blank" href="https://gethub.se/">https://gethub.se</a></p>
                <p className="work-subtext_2">Skills: Contentful (headless CMS), GraphQL, Apollo, Next.js, TypeScript</p>
                  
                </p>
              </div>
            </article>
            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Polismyndigheten</p>
                <p className="work-year">2018</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Investigator/Administrator</p>
                <p className="work-subtext">
                  Gather material in ongoing investigations. Register and
                  journalize records. Gather and put together information from
                  different authorities and register. Process obtained
                  surveillance films.
                </p>
              </div>
            </article>
            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Försäkringskassan</p>
                <p className="work-year">2017 - 2018</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Administrator</p>
                <p className="work-subtext">
                  Calculate yearly income for sick pay insurance. Make decisions
                  and communicate decisions to insured people.
                </p>
              </div>
            </article>

            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Nordea</p>
                <p className="work-year">2016 - 2017</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">Bank Administrator</p>
                <p className="work-subtext">
                  Consulting assignment at Nordea's backoffice. Administration
                  of bank services, for example handle retirement savings,
                  trading with funds, open and repurchase capital insurances.
                </p>
              </div>
            </article>

            <article className="police">
              <div className="police-heading">
                <p className="polismynd">Akzo Nobel</p>
                <p className="work-year">2015</p>
              </div>
              <div className="work-text-div">
                <p className="work-text-heading">accounting clerk</p>
                <p className="work-subtext">
                  Consulting assignment at the finance department. Accounting of
                  supplier's invoices in SAP
                </p>
              </div>
            </article>
          </section>
        </section>
      </div>
    </>
  );
}

export default App;
