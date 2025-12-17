import React from 'react'
import { Card } from 'antd';
import { StarButton } from './StarButton';
import { useDispatch } from 'react-redux';
import { setFavorite } from '../actions';

const { Meta } = Card


function PokemonCard({ name, image, abilities, types, id, favorite }) {
  const dispatch = useDispatch();

  const allAbilities = abilities.map(ability => ability.ability.name).join(', ');
  const typesString = types.map(type => type.type.name).join(', ')

  const handleOnFavorite = () => [
    dispatch(setFavorite({ pokemonId: id }))
  ]

  return (
    <>
      <Card
        extra={<StarButton isFavorite={favorite} onClick={handleOnFavorite} />}
        title={name}
        cover={
          <img src={image} alt={name} />
        }
      >

        <Meta
          description={allAbilities}
        />
        <Meta description={typesString} className='red-1'/>
      </Card>
    </>
  )
}


export { PokemonCard };
// Funcionalidad de Favoritos en Aplicación de Pokémon con Redux