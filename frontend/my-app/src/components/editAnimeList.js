import React, { Component } from "react";
import axios from "axios";

export default class EditAnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animeName: "",
    };

    this.onEditAnimeName = this.onEditAnimeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onEditAnimeName(event) {
    this.setState({
      animeName: event.target.value,
    });
  }
  onSubmit(event) {
    event.preventDefault();
    const anime = {
      animeName: this.state.animeName,
    };

    console.log("The ID is ", this.props.match.params._id);
    const path = window.location.pathname.split("/");
    const id = path[path.length - 1];

    axios
      .put("http://localhost:4000/animes/update/" + id, anime)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Enter the Anime Name </h1>
          <br></br>
          <input
            className="form-control"
            type="text"
            onChange={this.onEditAnimeName}
            value={this.state.animeName}
            placeholder="Some Name"
          />
          <br></br>
          <div className="form-group">
            <br></br>
            <input
              type="submit"
              value="Edit Anime"
              className="btn btn-primary"
              onSubmit={this.onSubmit}
            />
          </div>
        </form>
      </div>
    );
  }
}
