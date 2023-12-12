import { Component } from "react";

export default class GridImage extends Component {
    state = {
        imageUrl: ''
    }
    componentDidMount() {
        const imageUrl = `https://picsum.photos/seed/${Math.floor(Math.random() * 101)}`;
        this.setState({imageUrl});
    }

  render() {
    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card">
                <div className="card-body mx-auto">
                    <img src={`${this.state.imageUrl}/500`} />
                </div>
            </div>
        </div>
    )
  }
}
