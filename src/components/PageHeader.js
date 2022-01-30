import React from "react";
import { HEADER } from '../styles'
import logo from '../assets/images/logo.png'
import avatar from '../assets/images/avatar.png'


export default function PageHeader(props) {
    return (
        <HEADER blackHeader={props.blackHeader}>
            <div>
                <a href="/">
                    <img src={logo} alt="logo"></img>
                </a>
            </div>
            <div>
                <a href="/">
                    <img src={avatar} alt="avatar"></img>
                </a>
            </div>
        </HEADER>
    )
}