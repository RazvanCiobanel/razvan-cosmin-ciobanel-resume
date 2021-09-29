import React from 'react'
import styled from 'styled-components'


const MyLink = styled.a`
    text-decoration: none;
    color: #155171;;

    &:focus, &:hover, &:visited, &:active {
        text-decoration: none;
    }
`

const ResumeObj = () => {
    return (
        <div className="resume-obj">
            <div className="container">
                <p className="resume-p">Highly motivated Merchant Navy Third Officer, I completed <cite>Front End Developer</cite> Course at Codecool Romania. 
                I am eager to improve my front end developer skills in designing, building and testing user oriented and responsive web applications.
                </p>
                <br/>
                <hr/>
                <br/>
            </div>
            <div className="work-edu-container">
                <h2 className="header">Work experience</h2>
                <p className="period">May 2015 - January 2021</p>
                <p className="job-edu">Merchant Navy Third Officer - In charge with safety of navigation.</p>
                <ul className="skills">
                    <p>Skills gained :</p>
                    <li>Good team player with great comunication skills - as third officer I worked in multinational teams</li>
                    <li>I am adaptable and I integrate well in any team - every time I was going at sea I had other co-workers</li>
                    <li>Experience in organizing a team - during my shifts I was team leader</li>
                </ul>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="work-edu-container">
                <h2 className="header">Education</h2><br/>
                <p className="period">March 2021 - August 2021</p>
                <p className="job-edu">Front-end Developer Course at CodeCool Romania Bucharest</p>
                <ul className="skills">
                    <li>During this course I learned and worked with HML5, CSS3, JavaScript, Bootstrap and DOM Manipulation</li>
                    <li>I designed web application with JavaScript Framework, React JS. For styling I used CSS3 together with React-Bootstrat and Styled Components packages </li>
                    <li>I have learned and applied the principles of responsive web designed</li>
                    <li>I worked with automatic testing environments for testing React components, React testing Library</li>
                    <li>I learned and used HTTP methods for calling a REST API: GET, PUT, POST, PATCH, DELETE</li>
                    <li>Also during this course I enhanced some of my soft skills: creativity, problem solving, growth mindset</li>
                </ul><br/>
                <p className="period">October 2014 - January 2016</p>
                <p className="job-edu">Master Degree in Navigation and Naval Engineering at Constanta Maritime University</p><br/>
                <p className="period">October 2009 - July 2013</p>
                <p className="job-edu">Bachelor Degree in Navigation and Naval Engineering at Constanta Maritime University</p>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="projects">
                <h2>Projects</h2><br/>  
                <div>
                    <h2>WEATHER APPLICATION - <cite>My Weather</cite></h2>
                    <MyLink href="https://github.com/Sirius1402/weather-application"
                    target="_blank"
                    rel="noopener noreferrer">https://github.com/Sirius1402/weather-application</MyLink>
                    <p>
                    Weather website made with ReactJS and powered by WeatherAPI.com. 
                    It provides data for local weather, daily and hourly forecast and world-wide weather.
                    </p>
                </div> <br/>             
                <div>
                    <h2>CODECOOL TO DO LIST</h2>
                    <MyLink href="https://github.com/Sirius1402/Serverless-todo-app-http-methods"
                    target="_blank"
                    rel="noopener noreferrer">https://github.com/Sirius1402/Serverless-todo-app-http-methods</MyLink>
                    <p>A to do list done with ReactJS. 
                        In this project I have used the following HTTP request methods to a local server: GET, POST, PATCH, DELETE.
                    </p>
                </div><br/>
                <div>
                    <h2>CODECOOL REACT AND MORTY</h2>
                    <MyLink href="https://github.com/Sirius1402/React-and-Morty"
                    target="_blank"
                    rel="noopener noreferrer">
                    https://github.com/Sirius1402/React-and-Morty
                    </MyLink>
                    <p>A landing page about adult animated science fiction sitcom "Rick and Morty". 
                        Project is done with ReactJS and React-Bootstrap. 
                        In this project I have automatically tested some of the components with React Testing Library.</p>
                </div><br/>
                <div>
                    <h2>CODECOOL BOOK A TABLE</h2>
                    <MyLink href="https://github.com/Sirius1402/Book-a-table"
                    target="_blank"
                    rel="noopener noreferrer">https://github.com/Sirius1402/Book-a-table</MyLink>
                    <p>Landing page for a Pizza Restaurant with a form for booking a table. 
                        In the booking form there are validations for e-mail format and for date and time. 
                        The project is done with HTML5, CSS3 and JavaScript. Project is responsive
                    </p>
                </div><br/>
                
            </div>
        </div>
    )
}

export default ResumeObj
