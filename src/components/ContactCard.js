import React from "react";
import './index.css';
import user from "../images/user.png";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
        //Desestruturação       
        const {id, name, email} = props;
        //Mas estou passando direto pela props.atributo declarado no componente
        return(
            <>
            <div key={props.contact.id} className="item" >
                         <img className="ui tiny image" src={user} alt="user" />
                         <div className="content">
                           <div className="header">{props.contact.name}</div>
                           <div>{props.contact.email}</div>                  
                         </div>
                         <div>
                         <i onClick={() => props.clickHandler(props.contact.id)} className="right trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>
                         <Link to={{ pathname: '/edit', state: {contact: props.contact} }} className="right edit alternate outline icon" style={{color:"blue", marginTop:"7px", marginLeft:"16px"}}>
                          <i className="right edit alternate outline icon" style={{color:"blue", marginTop:"7px"}}></i>
                         </Link>
                         </div> 
            </div>
            <div class="ui divider"></div>
            </>
        )
}

//, , state: {contact: props.editHandler}

export default ContactCard;
