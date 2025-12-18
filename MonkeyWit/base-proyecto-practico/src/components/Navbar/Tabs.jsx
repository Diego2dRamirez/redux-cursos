import React from "react";
import { Tabs } from "antd";
import { Home } from "../../pages/Home";

const onChange = key => console.log(key);

const items = [
  {
    key: '1',
    label: 'Home',
    children: < Home />
  },

  {
    key: '2',
    label: 'Users',
    children: 'Content of Tab Pane 2'
  },
  {
    key: '3',
    label: 'Tab 3',
    children: 'Content of Tab Pane 3'
  },

]

const NavTabs = () => {
  return (
    <>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} style={{ color: "white" }} className="" />
    </>
  )
};

export { NavTabs };

