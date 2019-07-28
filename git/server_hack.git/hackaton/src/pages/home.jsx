import React from "react";
import {  Link } from "react-router-dom";

class Home extends React.Component{
    render(){
        return (<nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tinkoff/">Tinkoff demo page</Link>
                </li>
                <li>
                    <Link to="/megafon/">Megafon demo page</Link>
                </li>
                <li>
                    <Link to="/test/">Пример теста</Link>
                </li>
            </ul>
        </nav>)
    }
}

export default Home