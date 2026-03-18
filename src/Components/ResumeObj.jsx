import React from "react";
import styled from "styled-components";

const MyLink = styled.a`
  text-decoration: none;
  color: #155171;

  &:focus,
  &:hover,
  &:visited,
  &:active {
    text-decoration: none;
  }
`;

const ResumeObj = () => {
  return (
    <div className="resume-obj">
      <div className="container">
        <p className="resume-p">
          Highly motivated engineer, I completed the{" "}
          <cite>Front End Developer Course</cite> at
          Codecool Romania. I am eager to improve my front
          end developer skills in designing, built ing and
          testing user-oriented and responsive web
          applications.
        </p>
        <hr />
      </div>
      <div className="work-edu-container">
        <h2 className="header">Work experience</h2>
        <p className="period">December 2023 - Present</p>
        <p className="job-edu">
          Game Presenter, at Arrise Live SRL
        </p>
        <ul className="skills">
          <p>Skills gained:</p>
          <li>
            Conduct live roulette games according to company
            procedures, gaming standards, and compliance
            requirements;
          </li>
          <li>
            Ensure smooth table functionality and
            uninterrupted game flow;
          </li>
          <li>
            Respond promptly to table calls and operational
            incidents to minimize downtime;
          </li>
          <li>
            Maintain up-to-date knowledge of procedures,
            game rules, and promotions;
          </li>
          <li>
            Work closely with supervisors and operational
            teams to ensure studio efficiency;
          </li>
          <li>
            Demonstrate professionalism, accuracy, and
            composure in a high-pressure live environment;
          </li>
          <li>
            Support colleagues and contribute to a
            cooperative and performance-oriented team
            culture.
          </li>
        </ul>
        <p className="period">May 2015 - June 2023</p>
        <p className="job-edu">
          Merchant Navy Third Officer - In charge with
          safety of navigation.
        </p>
        <ul className="skills">
          <p>Skills gained:</p>
          <li>
            Managed maintenance and operational readiness of
            life-saving appliances and fire-fighting
            equipment;
          </li>
          <li>
            Ensured safety of navigation during navigational
            watch in compliance with procedures and maritime
            regulations;
          </li>
          <li>
            Performed GMDSS watchkeeping and maintained
            accurate operational communication;
          </li>
          <li>
            Assisted the Captain with pre-arrival and
            arrival documentation and reporting;
          </li>
          <li>
            Reported incidents, observations, and
            equipment-related issues clearly and accurately;
          </li>
          <li>
            Supported safe and efficient vessel operations
            in a highly regulated environment;
          </li>
          <li>
            Worked collaboratively with senior officers and
            crew, maintaining discipline, communication, and
            procedural compliance;
          </li>
          <li>
            Demonstrated leadership, responsibility, and
            effective decision-making under pressure.
          </li>
        </ul>
      </div>
      <hr />
      <div className="work-edu-container">
        <h2 className="header">Education</h2>
        <p className="period">March 2021 - August 2021</p>
        <p className="job-edu">
          Front-end Developer Course at CodeCool Romania
          Bucharest
        </p>
        <ul className="skills">
          <li>
            During this course I learned and worked with
            HTML5, CSS3, JavaScript, Bootstrap and DOM
            Manipulation;
          </li>
          <li>
            I designed web applications with JavaScript
            Framework, React JS. For styling I used CSS3
            together with React-Bootstrap and Styled
            Components packages;
          </li>
          <li>
            I learned and applied the principles of
            responsive web design;
          </li>
          <li>
            I worked with automatic testing environments for
            testing React components, React Testing Library;
          </li>
          <li>
            I learned and used HTTP methods for calling a
            REST API: GET, PUT, POST, PATCH, DELETE;
          </li>
          <li>
            Also during this course I enhanced some of my
            soft skills: creativity, problem solving, growth
            mindset.
          </li>
        </ul>
        <p className="period">
          October 2014 - January 2016
        </p>
        <p className="job-edu">
          Master Degree in Navigation and Naval Engineering
          at Constanta Maritime University
        </p>
        <br />
        <p className="period">October 2009 - July 2013</p>
        <p className="job-edu">
          Bachelor Degree in Navigation and Maritime and
          Inland Waterway Transport at Constanta Maritime
          University
        </p>
      </div>
      <hr />
      <div className="projects">
        <h2 className="projects__header">Projects</h2>
        <div className="project-container">
          <h2>
            WEATHER APPLICATION - <cite>My Weather</cite>
          </h2>
          <MyLink
            href="https://github.com/RazvanCiobanel/weather-application"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/RazvanCiobanel/weather-application
          </MyLink>
          <p>
            Weather website made with ReactJS and powered by
            WeatherAPI.com. It provides data for local
            weather, daily forecasts and world-wide weather.
            It is served by an ExpressJS backend build by
            me.
          </p>
        </div>
        <div className="project-container">
          <h2>E-COMMERCE PLATFORM</h2>
          <MyLink
            href="https://github.com/RazvanCiobanel/e-commerce-platform"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/RazvanCiobanel/e-commerce-platform
          </MyLink>
          <p>
            This repository simulates an e-commerce
            platform.You can add products to the shopping
            cart, increase and decrease the amount of
            products in the shopping cart, remove products
            from the shopping cart, and change currency.
          </p>
          <p>
            It uses a GraphQL backend. For your information
            the backend is not done by me.
          </p>
          <p>
            The frontend is done by me, in React Js, with
            class components. To manage the global state of
            application I used redux. Other libraries used
            for this repository:@apollo/client; dompurify;
            graphql; graphql-config; react-redux;
            react-router-dom; redux-persist; redux-thunk;
            styled-components; weak-key; reselect;
          </p>
        </div>

        <div className="project-container">
          <h2>OPEN SOURCE HACKTOBERFEST 2023</h2>
          <MyLink
            href="https://github.com/RazvanCiobanel/file-io"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/RazvanCiobanel/file-io
          </MyLink>
          <p>
            I participated at Hacktoberfest 2023 as member
            of{" "}
            <MyLink
              href="https://zerotomastery.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              ZTM Academy
            </MyLink>
            . This project is a backend written in Node.Js
            which can read Spotify data from a CSV file and
            perform the following tasks: can identify the
            number of songs in the file and can identify the
            number of songs in the key of E. To view my
            contribution clone the repository and open
            "RazvanCiobanel" folder from "submissions"
            folder. After that run in the terminal "node
            index.js" command.
          </p>
        </div>
        <hr />
      </div>
      <div className="projects">
        <h2 className="projects__header">
          Digital skills :
        </h2>
        HTML, JavaScript and CSS | NodeJS, ExpressJS,
        ReactJS | Bootsrap | React Hooks, React Router &
        React Redux | Redux state library | Web
        applications(HTML+CSS+Javascript+Express+Node+Mongo)
        | GIT Hub | Rest API | GraphQL APIs | Apollo Client
        | Visual Studio - Visual Studio Code |
        Styled-Components | GIT Hub Pages | Redux Toolkit
      </div>
      <div className="projects">
        <h2 className="projects__header">Skills :</h2>
        Live Casino Operations | Roulette Game and Blackjack
        Game Procedures| Incident Reporting and Resolution |
        Studio and Table Support | Compliance and Standards
        | Team Coordination | Communication Skills |
        Operational Discipline | Microsoft Office | PC
        Skills | Working Under Pressure | English
        Communication B1 level| Documentation and Reporting
        | Safety and Risk Awareness
      </div>
    </div>
  );
};

export default ResumeObj;
