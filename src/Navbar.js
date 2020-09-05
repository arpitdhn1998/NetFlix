import React,{ Component } from "react";
import  MenuItems  from "./MenuItems";
import "./Navbar.css";
class Navbar extends Component {
    render(){
        return(

            <nav className="navbarItems">
                <h1 className="navbarIcon">NETFLIX</h1>
                <div className="menu-item">
                    
                </div>
                <ul  className="Nav-menu">
                    { MenuItems.map((item) => (
                        <li><a className={item.cName} href={item.url}>{item.title}</a></li>


                    ))}
                    

                    
                </ul>
            </nav>
        )
    }
}

export default Navbar

