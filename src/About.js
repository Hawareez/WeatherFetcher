import "./About.css";
import SideBar from "./Sidebar";

export default function About(){

return(
    <div className="Aboutbg">
    <div className="container">
    <SideBar />
    <div className="text">
    <h1>About</h1>
    <p>Information</p>
    <p>I Live in Egypt, Started Learning FrontEnd Web Development In The Start Of 2022 And I'm Comfortable Working With These Technologies</p>
    </div>
    <ul className="Tech">
        <li><i className="fa-brands fa-react"></i>React , React Router</li>
        <li><i className="fa-brands fa-html5"></i>Html</li>
        <li><i className="fa-brands fa-css3"></i>Css</li>
        <li><i className="fa-brands fa-js"></i>Javascript - EcmaScript 6</li>
        <li><i className="fa-brands fa-github"></i>Git , GitHub</li>
        <li><i className="fa-brands fa-figma"></i>Figma</li>
    </ul>
    </div>
    </div>
)

}