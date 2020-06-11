import React from "react";
import { Button } from "semantic-ui-react";

export default class BlogShow extends React.Component {
  componentDidMount() {
    // axios.get('/blogs/this.props.match.params.id')
    console.log(this.props.location.state);
  }
  goHome = () => {
    this.props.history.push("/");
  };
  goBack = () => {
    this.props.history.goBack();
  };
  render() {
    return (
      <div>
        <p>{this.props.match.params.id}</p>
        <p>{this.props.location.state.title}</p>
        <p>{this.props.location.state.body}</p>
        <p>{this.props.location.state.key1}</p>
        <h1>BlogShow</h1>
        <Button onClick={this.goHome}>home</Button>
        <Button onClick={this.goBack}>Back</Button>
      </div>
    );
  }
}
