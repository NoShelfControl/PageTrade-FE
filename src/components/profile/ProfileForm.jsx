import React, { Component } from 'react';

export default class Profile extends Component {
  state = {
    name: '',
    bio: '',
    currentRead: '',
    finalName: '',
    finalBio: '',
    finalCurrentRead: ''
  };

  handleNameChange = (e) => {
    this.setState({ name: e.target.value })
  }

  handleBioChange = (e) => {
    this.setState({ bio: e.target.value })
  }

  handleCurrentReadChange = (e) => {
    this.setState({ currentRead: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      finalName: this.state.name,
      finalBio: this.state.bio,
      finalCurrentRead: this.state.currentRead
    });
  }

  render() {
    return (
      <section>
        <div>
          <div>{this.state.finalName}</div>
          <div>{this.state.finalBio}</div>
          <div>{this.state.finalCurrentRead}</div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            placeholder="User Name"
            onChange={this.handleNameChange}
          />
          <input
            type="text"
            name="bio"
            value={this.state.bio}
            placeholder="Bio"
            onChange={this.handleBioChange}
          />
          <input
            type="text"
            name="currentRead"
            value={this.state.currentRead}
            placeholder="Currently Reading"
            onChange={this.handleCurrentReadChange}
          />
          <button>Edit Profile</button>
        </form>
      </section>
    );
  }
}
