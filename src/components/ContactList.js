import React, { useEffect } from "react"
import ContactCard from "./ContactCard";

const ContactList = (props) => {
    
      /*.map((item) => {
       return (
        <div className="item">
            <div className="content">
              <div className="header">{item.name}</div>
              <div className="header">{item.email}</div>                  
            </div>
        </div>
       );
     }); */

    //quando inicia a aplicação
   
    console.log(props.contacts);

    /*
    const renderContacts =  props.contacts.map((item) => {
        return (
            <ContactCard info={item}/>
          );
    }); */

    /*

    <div className="ui celled items" >
                 <div className="ui divider"></div>
                 <div className="container-title">
                  <h2 style={{marginBottom:32,marginTop:32}}>Lista de Contatos</h2>    
                 </div>
                 {  renderContacts } 
                </div>

    */

     const deleteContactHandler  = (idValue) => {
        props.getContactId(idValue);
     };    
                
     return(
         <>
          {   
           (props.contacts.length > 0)  ?
<div className="ui celled items" >
<div className="ui divider"></div>
<div className="container-title">
 <h2 style={{marginBottom:32,marginTop:32}}>Lista de Contatos</h2>    
</div>
   {
    props.contacts.map((contact) => {
    return (
      <ContactCard contact={contact} clickHandler={deleteContactHandler} />
      );
    })
   }
</div>  :
<div className="ui celled list">
 Lista de Contatos - Sem registros no momento
</div> }
         </>
        );
}

export default ContactList;

/*
(props.contacts.length > 0)  ?
<div className="ui celled items" >
<div className="ui divider"></div>
<div className="container-title">
 <h2 style={{marginBottom:32,marginTop:32}}>Lista de Contatos</h2>    
</div>
   {
    props.contacts.map((item) => {
    return (
      <ContactCard info={item}/>
      );
    })
   }
</div>  :
<div className="ui celled list">
 Lista de Contatos - Sem registros no momento
</div> 
*/