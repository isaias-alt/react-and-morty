import React, { useState } from 'react'
import characters from './characters.css'

const Characters = ({characters = []}) => {

  const [search, setSearch] = useState('')

  return(
    <div className="row">
      <div className="form-outline mb-4" >
        <input
          type="search" 
          id="form" 
          className="form-control mb-4"
          placeholder="Search a character"
          onChange={event => {setSearch(event.target.value) }}
        />
        </div>  
      {characters.filter((item) => {
        if (search == ""){
          return item
        } else if (item.name.toLowerCase().includes(search.toLowerCase())){
          return item
        } else if (item.status.toLowerCase().includes(search.toLowerCase())){
          return item
        } else if (item.species.toLowerCase().includes(search.toLowerCase())){
          return item
        }
      }).map((item, index) => {
        return(
          <div key={ index } className="col mb-4">
            <div className="card" style={{minWidth: "100px"}}>
              <img src={ item.image } alt="" />
              <div className="card-body">
                <h6 className="card-title">{ item.name }</h6>
                <hr />
                <p>Status: { item.status }</p>
                <p>Specie: { item.species }</p>
                <p>Location: { item.location.name }</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Characters