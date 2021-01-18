import React from "react";
import { Comment, Tooltip, Avatar } from "antd";
import moment from "moment";

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  renderComments = (comments = []) => {
    const now = Date.now();
    return comments.map(comment => (
      <Comment
        author={
          <div>
            {comment.name}
            <br />
            {comment.email}
          </div>
        }
        avatar={
          <Tooltip title={comment.email}>
            <Avatar src="" alt={comment.name} />
          </Tooltip>
        }
        content={<p>{comment.body}</p>}
        datetime={
          <Tooltip title={moment(now).format("YYYY-MM-DD HH:mm:ss")}>
            <span>{moment(now).fromNow()}</span>
          </Tooltip>
        }
      />
    ));
  };
  render() {
    const { props } = this;
    const { data } = this.state;
    return (
      <div>
        <h1>Comments with postId: {props.match.params.postId}!</h1>
        {this.renderComments(data)}
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
      </div>
    );
  }
}
