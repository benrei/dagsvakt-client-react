import React from "react";
import { Comment, Tooltip, List } from "antd";
import moment from "moment";

const ServiceCellRenderer = ({ service }) => {
  console.log(service);
  return (
    <div>
      <Tooltip title={moment.unix(service.time).format("YYYY-MM-DD HH:mm")}>
        <span>Utført service: {moment.unix(service.time).fromNow()}</span>
      </Tooltip>
      <List
        className="comment-list"
        itemLayout="horizontal"
        dataSource={service.comments}
        renderItem={item => (
          <li>
            <Comment
              author={item.userId}
              content={item.message}
              datetime={
                <Tooltip
                  title={moment.unix(item.time).format("YYYY-MM-DD HH:mm")}
                >
                  <span>{moment.unix(item.time).fromNow()}</span>
                </Tooltip>
              }
            />
          </li>
        )}
      />
    </div>
  );
};

export default ServiceCellRenderer;
