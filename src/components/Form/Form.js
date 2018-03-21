import React from 'react';

class Form extends React.Component {
  state = {
    username: ''
  }
  handleUser = (event) => {
    event.preventDefault();
  }
  render() {
    return (
      <form className="form-component" onSubmit={this.addUser}>
        <input
          value={this.state.username}
          onChange={(event) => {
          this.setState({username: event.target.value})
        }}/>
        <button>Add User</button>
      </form>
    )
  }
}

export default Form;