import React from 'react';

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    };
  }
  render() {
    const {props} = this;
    const {data} = this.state;
    return (
      <div>
        <h1>Post ID {props.match.params.postId}!</h1>
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    );
  }
}