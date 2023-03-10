import React from 'react'
import OneDog from './oneDog'

const Dogs = ({data, onAdd, onRemove, idKorisnika}) => {
  return (
    <div className='all-dogs'>
      {data?.map((dog) => (
        <OneDog idKorisnika={idKorisnika}
          
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