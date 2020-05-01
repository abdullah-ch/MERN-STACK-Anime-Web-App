import React, { Component } from "react";
import axios from "axios";

export default class AnimeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animes: [],
    };
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    axios
      .get("http://localhost:4000/animes/")
      .then((res) => {
        console.log(res.data);
        this.setState({ animes: res.data });
        console.log(this.state.animes);
      })
      .catch((err) => console.log(err));
  }
  handleDelete(event) {
    const id = event.target.value;
    console.log("ID is ", event.target.value);
    axios
      .delete("http://localhost:4000/animes/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      animes: this.state.animes.filter((anime) => anime._id !== id),
    });
  }
  render() {
    return (
      <div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Anime Name</th>
            </tr>
          </thead>
          <tbody>
            {this.state.animes.map((anime) => (
              <tr key={anime._id}>
                <td>{anime._id}</td>
                <td>{anime.animeName}</td>
                <button
                  type="button"
                  class="btn btn-danger"
                  onClick={this.handleDelete}
                  value={anime._id}
                >
                  Delete
                </button>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
