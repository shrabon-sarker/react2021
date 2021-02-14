import { Component } from 'react';
//imput components
// import Com from './components/index'
// import Inputs from './components/inputs'
// import UncontrolledForm from './components/inputs/uncontrolledForm'

// import ControlledForm from "./components/inputs/controlForm";
// import ReactForm from "./components/inputs/ReactForm";
// import Formarea from "./components/form";
import SiginUp from "./components/siginup-form";
//import SlitForm from "./components/splitForm";

class App extends Component {

  state = {
    users : []
  }

  createUsers = (item) => {
    item.id = new Date().getTime().toString();
    this.setState ({
      users: [...this.state.users, item]
    })
  }


  render(){
    return (
      <div className="App">
      <SiginUp createUsers={this.createUsers} />

      <div>
        <h3>All registered Users</h3>
        <ul className="list-gorup">
          {this.state.users.map((item) => (<li key={item.id} className='list-group-item'>
            {item.name} = {item.email}
          </li>))}
        </ul>
      </div>
      </div>
    );
  }
}
export default App;
