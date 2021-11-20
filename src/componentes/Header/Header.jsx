import React from 'react';
import "./Header.css"
import "../About/About"
import { GlobalContext } from '../globalContext';

const Header = () => {

    const {setCurrentPagina, currentPagina} = React.useContext(GlobalContext)

    const handleClick = (event) => {
        let valor = event.target.getAttribute("data-index");
        setCurrentPagina(valor);
    }

    React.useEffect(() => {
        const arrayMenu = document.querySelectorAll(".options ul li a")
        arrayMenu.forEach((item, index) => {
            index === Number(currentPagina) ? item.classList.add("active-header") : item.classList.remove("active-header");
        })
    }, [currentPagina])

    return ( 

        <div className="header">
            <div className="logo">
            </div>
            <div className="options">
                <ul>
                    <li><a href="#" data-index="0"  onClick={handleClick}>About</a></li>
                    <li><a href="#" data-index="1" onClick={handleClick}>My Social Medias</a></li>
                    <li><a href="#" data-index="2" onClick={handleClick}>Contact</a></li>
                </ul>
            </div>
        </div>

     );
}
 
export default Header;