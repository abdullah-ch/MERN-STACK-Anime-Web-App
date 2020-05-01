import React, { Component } from "react";
import axios from "axios";

export default class CreateAnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeName: "",
    };
    this.onChangeAnimeName = this.onChangeAnimeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeAnimeName(event) {
    this.setState({
      animeName: event.target.value,
    });
       console.log(" anime name is", this.state.animeName);
  }

  onSubmit(event) {
    event.preventDefault();
    const anime = {
      animeName: this.state.animeName,
    };
        console.log(anime);

    axios
      .post("http://localhost:4000/animes/add", anime)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));

    //window.location = "/anime";
  }
  render() {
    return (
      <div>
        <h1>Enter the Anime Name </h1>
        <form onSubmit={this.onSubmit}>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeAnimeName}
            value={this.state.animeName}
          />
          <br></br>
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Create Anime"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}
