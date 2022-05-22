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
          Highly motivated Merchant Navy Third Officer, I
          completed <cite>Front End Developer Course</cite>{" "}
          at Codecool Romania. I am eager to improve my
          front end developer skills in designing, building
          and testing user-oriented and responsive web
          applications.
        </p>
        <br />
        <hr />
        <br />
      </div>
      <div className="work-edu-container">
        <h2 className="header">Work experience</h2>
        <p className="period">May 2015 - January 2021</p>
        <p className="job-edu">
          Merchant Navy Third Officer - In charge with
          safety of navigation.
        </p>
        <ul className="skills">
          <p>Skills gained:</p>
          <li>
            Good team player with great communication skills
            - as a third officer I worked in multinational
            teams;
          </li>
          <li>
            I am adaptable and I integrate well into any
            team - every time I was going at sea I had other
            co-workers;
          </li>
          <li>
            Experience in organizing a team - during my
            shifts I was team leader.
          </li>
          <li>
            Problem-solving and decision-making skills - I
            had to make decisions in a very dynamic
            environment
          </li>
        </ul>
      </div>
      <br />
      <hr />
      <br />
      <div className="work-edu-container">
        <h2 className="header">Education</h2>
        <br />
        <p className="period">March 2021 - August 2021</p>
        <p className="job-edu">
          Front-end Developer Course at CodeCool Romania
          Bucharest
        </p>
        <ul className="skills">
          <li>
            During this course I learned and worked with
            HML5, CSS3, JavaScript, Bootstrap and DOM
            Manipulation;
          </li>
          <li>
            I designed web applications with JavaScript
            Framework, React JS. For styling I used CSS3
            together with React-Bootstrat and Styled
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
        <br />
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
      <br />
      <hr />
      <br />
      <div className="projects">
        <h2>Projects</h2>
        <br />
        <div>
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
            weather, daily and hourly forecasts and
            world-wide weather. It is served by an ExpressJS
            backend build by me. The project is ready to be
            deployed.
          </p>
        </div>{" "}
        <br />
        <div>
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
            products in the shopping cart, romove products
            from the shopping cart, and change currency.
          </p>
          <p>
            It uses a GraphQL backend. For your information
            the backend is not done by me.
          </p>
          <p>
            The frontend is done by me, in ReactJs, with
            class components. To manage the global state of
            application I used redux. Other libraries used
            for this repository:@apollo/client; dompurify;
            graphql; graphql-config; react-redux;
            react-router-dom; redux-persist; redux-thunk;
            styled-components; weak-key; reselect;
          </p>
        </div>
        <br />
        <div>
          <h2>MERN STACK APPLICATION</h2>
          <MyLink
            href="https://github.com/RazvanCiobanel/Dr-John-Doe"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://github.com/RazvanCiobanel/Dr-John-Doe
          </MyLink>
          <p>
            MERN web application. It simulates a
            presentation website. As special functionality
            you can choose between two languages: english
            and romanian. To build the application I used
            MongoDB, Express, React and Redux. The webiste
            is responsive at 768px.
          </p>
        </div>
        <br />
      </div>
    </div>
  );
};

export default ResumeObj;
