import React, {Component} from 'react';
import CardList from '../CardList/CardList';
import Form from '../Form/Form';
class App extends Component {
  state={
    data:[]
  }
  render() {
    return (
      <div className="App">
        <Form/>
        <CardList/>
      </div>
    );
  }
}

export default App;
