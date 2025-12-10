import React from 'react'
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Meta } = Card


function PokemonCard({name}) {
  return (
    <>
      <Card
        extra={<StarOutlined />}
        title={name}
        cover={
          <img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png' alt='Ditto' />
        }
      >

        <Meta
          description='fire, Magic'
        />
      </Card>
    </>
  )
}


export { PokemonCard };
