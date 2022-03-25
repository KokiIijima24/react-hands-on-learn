import React, { useEffect, useState } from 'react'
import API from '../api/api'

function List({ data = [], renderEmpty }) {
  if (!data) return renderEmpty;
  return (
    <div>
      {data.map((item, i) => (
        <div class="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
          <div>
            <h2 class="text-gray-800 text-3xl font-semibold">{item.name}</h2>
            <p class="mt-2 text-gray-600">{item.description}</p>
          </div>
          <div class="flex items-stretch">
            <div className='flex-1 mt-4'><p>{item.rate}</p></div>
            <div className='flex-1 text-right mt-4'>
              <a href="#" class="text-xl font-medium text-indigo-500">Detail</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function RecipeList() {
  // ally, we use useState for managing state in our component, 
  // the benefit of using useState is whenever the state will be updated, 
  // react will re-render the component on its own without reloading the page.
  const [data, setData] = useState([]);

  // This a very useful hook, 
  // anything which will be passed to useEffect will run after the render is committed to the screen.
  useEffect(() => {
    API.get(`recipe/list`).then((res) => {
      console.log('response data:', res)
      setData(res.data)
    })
  }, [])

  return (
    <div>
      <h1 className='font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl'>RecipeList</h1>
      <List data={data} renderEmpty={<p>empty</p>} />
    </div>
  )
}

export default RecipeList