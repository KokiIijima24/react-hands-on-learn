import React from 'react'
import API from '../api/api'

function RecipeList() {
  API.get(`recipe/list`).then((res) => {
    console.log(res)
  })

  return (
    <div>RecipeList</div>
  )
}

export default RecipeList