import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import axiosAPI from './api/contacts';

function Home() {

  const LOCAL_STORAGE_KEY = "contacts";

  const [contacts, setContacts] = useState(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []);
  
  //Init contacts
  //getALL
  const initContacts = async () => {
    const response = await axiosAPI.get("/contacts");
    console.log(response);
    console.log(response.data);
    return response.data;
  }


  //create
  const addContactHandler = async (contactValue) => {
    console.log(contactValue);
    //spread operator passa todos os dados mais os dados novos
    const newContact = {
      id: contactValue.name,
      ...contactValue
    }

    const response = await axiosAPI.post("/contacts", newContact);
    console.log(response);
    console.log(response.data);
    //verificar condição da api não salvar dado
      
    setContacts([...contacts,response.data]);
  
  }




  const removedContactHandler = async (id) => {
   
    await axiosAPI.delete(`/contacts/${id}`);
   
    //Remover localmente ou chamar uma função get para atualizar
    const newContactList = contacts.filter((contact) => {
       return contact.id !== id;   
    });

    setContacts(newContactList);
  }

  // APGAR OU NÂO ???
  const editContactHandler = async (contact) => {
   
    const response = await axiosAPI.put(`/contacts/${contact.id}`, contact);
    console.log(response.data);
    //Remover localmente ou chamar uma função get para atualizar
  
    //Processo para base de aprendizado mas no projeto real
    //Atualizar a lista de contados direto 
    //desestruturação
    const { id, name, email} = response.data;
    setContacts(
      contacts.map((element) => {
        return element.id === id ? {...response.data} : contact;
      })
    );
    
  }

  //Init component
  useEffect(() => {
    /*
    const initContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(initContacts) {
      setContacts(initContacts);
    }   */
    const getAllContacts = async () => {
      const allContacts = await initContacts();
      if(allContacts) setContacts(allContacts);
    } 
    
    getAllContacts();

  },[]);

  useEffect(() => {
    console.log("Passei aqui ao atualizar");
    //localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts))
 
 
  },[contacts]);

  /*
  const contacts = [
    {
      id: "1",
      name: "john",
      email: "john@gmail.com"
    },
    {
      id: "2",
      name: "roberto",
      email: "roberto@gmail.com"
    }
  ]; */

  return (
    <div className="ui container">
     <Header />
     <AddContact addContactHandler={addContactHandler} />
     <ContactList contacts={contacts} getContactId={removedContactHandler} editContactId={editContactHandler} />
    </div>
  );
}

export default Home;
