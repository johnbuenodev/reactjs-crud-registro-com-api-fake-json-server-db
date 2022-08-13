import React from "react"

class AddContact extends React.Component {

      state = {
        name:'',
        email:''
      }
   
    salvar = (e) => {
        //evitar evento automatico do formulario
        e.preventDefault();
        if (this.state.name === "" && this.state.email === "") {
          alert("Todos os campos são obrigatorios!");
          return;
        } 
        if (this.state.name !== "" && this.state.email !== "") {
          //chamada a função que está no componente pai dentro do filho
          this.props.addContactHandler(this.state);
          this.setState({name: '', email:''});
          //alert("Salvo com sucesso!");
        }
        
        //alert("Testando: " + this.state.name + " - " +this.state.email);

    }

    render() {
        return(
            <div className="ui main" style={{marginTop:64}}>
                <h2>Add Contato</h2>
                <form className="ui form" onSubmit={this.salvar}>
                 <div className="field">
                  <label>Nome</label>
                  <input type="text" placeholder="Add o nome: Maria julia" value={this.state.name} name="name" onChange={(e) => this.setState({name:e.target.value})}/>
                 </div>
                 <div className="field">
                  <label>Email</label>
                  <input type="text" placeholder="Add o email: mariajulia@hotmail.com" value={this.state.email} name="email" onChange={(e) => this.setState({email:e.target.value})}/>
                 </div>
                 <button className="ui button blue">Adicionar</button>

                </form> 
            </div>
        )
    }
}

export default AddContact;