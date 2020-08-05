import React, {useEffect,useState} from 'react'
import './Nav.css';


function Nav(){
    const [show,handleShow] = useState(false);
    
    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if (window.scrolly > 100){
                handleShow(true);
            }else handleShow(false);
        })
        return()=> {
            window.removeEventListener("scroll")
        }
       
    }, []);

    return(

        <div className= {`nav ${show && "nav_black"}`}>
            <img
                className = "nav_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1024px-Netflix_2015_logo.svg.png"   
                alt="Netflix Logo" 
            />

<img
                className = "nav_avatar"
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"   
                alt="Netflix Logo" 
            />
        </div>
    )
}

export default Nav