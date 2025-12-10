import React from 'react'
import { Input } from 'antd';

function Search() {
  return (
    <div>
      <Input.Search placehorder="Buscar..." />
    </div>
  )
}

export { Search };