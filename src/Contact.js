import SideBar from "./Sidebar";
import "./Contact.css";
export default function Contact(){

return(
    <div className="Contactbg">
    <div className="container">
    <SideBar />
    <div className="Contact"> 
    <div className="Email">
    <form style={{flexDirection: "column",display: "flex",justifyContent: "center",alignItems: "center",}}>
        <label style={{color:"white",fontFamily: "Finlandica, sans-serif",marginBottom:"15px"}} for={"name"}>Name</label>
        <input type={"text"} name="name" id="name" required></input>
        <label className="changedInput" style={{color:"white",fontFamily: "Finlandica, sans-serif",margin:"15px 0px"}} for={"text"}>Your Message</label>
        <textarea type={"text"} name="text" id="text" required></textarea>
    <button className="button" type="submit">Submit</button>
    <button className="button" type="reset">Reset</button>
    </form>
    <div className="Gmail"><a href="mailto:hossamhusseinakairony@gmail.com">Contact Via Gmail</a></div>
    </div>
    </div>
    </div>
    </div>
)

}