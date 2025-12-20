import React from 'react'
import { Card } from 'antd';
import { Flex } from 'antd';

const { Meta } = Card;

function UsersCards({ users }) {

  return (
    <Flex wrap='wrap' gap='large' justify='center'>
      {
        users.map(user => (
          <Card
            key={user.name.first}
            hoverable
            style={{ width: 240 }}
            cover={
              <img
                draggable='true'
                alt={user.name.first}
                src={user.picture.large}
              />
            }
          >
            <Meta title={user.name.first} description={user.email} />
          </Card>
        )
        )
      }
    </Flex>
  )
}

export { UsersCards };