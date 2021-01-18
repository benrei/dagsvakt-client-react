import React from 'react';
import { Drawer } from 'antd';
import { useHistory } from "react-router-dom";

const RightDrawer = (props)=> {
  console.log('UserDrawer')
  let history = useHistory();
  return (
      <Drawer
        title="Basic Drawer"
        placement="right"
        mask={true}
        maskClosable={true}
        closable={true}
        onClose={()=>{
          //history.push('.')
          history.goBack()
        }}
        visible={true}
        width="90%"
      >
      {props.children}
      </Drawer>
  );
}
export default RightDrawer;