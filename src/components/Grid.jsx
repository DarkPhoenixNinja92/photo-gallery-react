import { Component } from "react";
import GridImage from "./GridImage";
import axios from "axios";

export default class Grid extends Component {
  state = {
    source: 'https://picsum.photos/v2/list?page=1&?limit=50/',
    url: null
};

async componentDidMount() {
    const res = await axios.get(this.state.source);
    this.setState({ url: res.data });
}

  render() {
    return (
        <div>
        {this.state.url ? (<div className="row">
        {this.state.url.map(img => (
            <GridImage
            key={img.id}
            name={img.author}
            url={this.url}
            />
        ))}
        </div>) : <h1>Loading</h1>}
        </div>
    );
  }
}
