import API from './api/api';

function App() {

  API.get(`recipe/list`)
  .then(res => {
    console.log(res);
  })

  return (
    <div className="App">
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
