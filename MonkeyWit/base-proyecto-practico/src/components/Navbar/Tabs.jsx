import React from "react";
import { Tabs } from "antd";
import { Home } from "../../pages/Home";
import { Counter } from "../../pages/Counter";
import Users from "../../pages/Users";

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
    children: <Users />
  },
  {
    key: '3',
    label: 'Counter',
    children: <Counter />
  },

]

const NavTabs = () => {
  return (
    <>
      <Tabs defaultActiveKey="2" items={items} onChange={onChange} style={{ color: "white" }} className="" />
    </>
  )
};

export { NavTabs };

