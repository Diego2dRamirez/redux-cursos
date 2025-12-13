import React from 'react'
import { Card } from 'antd';
import { StarOutlined } from '@ant-design/icons';

const { Meta } = Card


function PokemonCard({ name, image, abilities }) {

  const allAbilities = abilities.map(ability => ability.ability.name).join(', ')

  return (
    <>
      <Card
        extra={<StarOutlined />}
        title={name}
        cover={
          <img src={image} alt={name} />
        }
      >

        <Meta
          description={allAbilities}
        />
      </Card>
    </>
  )
}


export { PokemonCard };
