// a. Click on the search tab latest trend suggestion box open 
// b. Implement faker api for showing data. 
// c. According to the filter data should update. 
// d. Click on the Wishlist colour should change to red 
// e. On hovering to the product view product button should be visible


import Homepage from './Components/Homepage';

function App() {
  const myStyle={
    backgroundImage: 
"url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80')",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
};
  return (
    <div style={myStyle} className='h-screen'>
      {/* <header className='h-14'>
        <h2>Header</h2>
      </header> */}
      <main>
        <Homepage />
      </main>
    </div>
  );
}

export default App;
