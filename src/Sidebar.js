import { Link } from "react-router-dom";
import { useRef } from 'react';
import "./Sidebar.css";
import "./all.min.css";


function SideBar(){
let SideBar = useRef();
let Rotato = useRef();
return(
<div className="SideBar" ref={SideBar}>
<div className="SideContainer">
<ul>
    <li><Link to="/">Home</Link></li>
    <li><Link to="/About">About</Link></li>
    <li><Link to="/Contact">Contact</Link></li>
</ul>
<div className="content" onClick={(e) => {SideBar.current.classList.toggle("open"); Rotato.current.classList.toggle("rotato")}}>
<i className="fa-solid fa-gear" ref={Rotato}></i>
</div>
</div>
</div>   
)

}
export default SideBar