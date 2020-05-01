import React, { Component } from "react";
import axios from "axios";

export default class EditAnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      animeName: "",
    };

    this.onChangeId = this.onChangeId.bind(this);
    this.onEditAnimeName = this.onEditAnimeName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeId(event) {
    this.setState({
      id: event.target.value,
    });
    console.log("ID is ", this.state.id);
  }

  onEditAnimeName(event) {
    this.setState({
      animeName: event.target.value,
    });
    console.log("updated anime name is", this.state.animeName);
  }
  onSubmit(event) {
    event.preventDefault();
    const anime = {
      animeName: this.state.animeName,
    };

    axios
      .put("http://localhost:4000/animes/update/" + this.state.id, anime)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Enter the Anime ID </h1>
          <input
            className="form-control"
            type="text"
            onChange={this.onChangeId}
            value={this.state.id}
            placeholder="5eac782c2d299310a5e13543"
          />
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
