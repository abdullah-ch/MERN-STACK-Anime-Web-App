import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Anime = (props) => (
  <tr>
    <td> {props.anime.animeName}</td>
    <td>
      <Link to={"/anime/edit/" + props.anime._id}>
        <button type="button" class="btn btn-primary">Edit</button>
      </Link> 
      <button
        type="button"
        class="btn btn-danger"
        onClick={() => {
          props.handleDelete(props.anime._id);
        }}
      >
        Delete
      </button>
    </td>
  </tr>
);

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
  handleDelete(id) {
    console.log("ID is ", id);
    axios
      .delete("http://localhost:4000/animes/delete/" + id)
      .then((res) => console.log(res.data));

    this.setState({
      animes: this.state.animes.filter((anime) => anime._id !== id),
    });
  }

  animeList() {
    return this.state.animes.map((animeObject) => {
      return (
        <Anime
          anime={animeObject}
          handleDelete={this.handleDelete}
          key={animeObject._id}
        />
      );
    });
  }

  render() {
    return (
      <div>
        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">Anime Name</th>
            </tr>
          </thead>
          <tbody>{this.animeList()}</tbody>
        </table>
      </div>
    );
  }
}
