import React from 'react'
import OneDog from './oneDog'

const Dogs = ({dogs, onAdd, onRemove}) => {
  return (
    <div className='all-dogs'>
      {dogs.map((dog) => (
        <OneDog
          key={dog.id}
          dog={dog}
          onAdd={onAdd}
          onRemove={onRemove}
        />
        ))}
    </div>
  )
}

export default Dogs