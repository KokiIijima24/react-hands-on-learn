import { BrowserRouter, Routes, Route } from 'react-router-dom'

import API from './api/api'
import RecipeList from './pages/RecipeList'
import { PageLayout } from './components/PageLayout'
import Home from './pages/Home'

const Pages = () => {
  return (
    <Routes>
      <Route path='*' element={<Home />} />
      <Route path='recipe-list' element={<RecipeList />} />
      <Route path='' element={<Home />} />
    </Routes>
  )
}

function App() {
  API.get(`recipe/list`).then((res) => {
    console.log(res)
  })

  return (
    <div className='App'>
      <BrowserRouter>
        <PageLayout>
          <Pages />
        </PageLayout>
      </BrowserRouter>
    </div>
  )
}

export default App
