import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Homepage from './Components/Homepage';
import Product from './Components/Product';
import SearchResults from './Components/SearchResults';

function App() {
  const myStyle={
    backgroundImage: 
"url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" 
      element={
      <div style={myStyle} className='h-screen'>
        <Homepage />
      </div>}>
      </Route>
      <Route path='/search-results' element={<SearchResults />}></Route>
      {/* <Route path='/product' element={<Product />}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
