import React from "react";

export default class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h2>Posts</h2>
      </div>
    );
  }
}

Services.defaultProps = {}