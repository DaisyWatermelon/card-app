import logo from './logo.svg';
import {create} from 'zustand'
import './App.css';
import Card1 from './Card1'
import Card2 from './Card2'
//import myToken from './myToken';
import { createStore } from 'zustand';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const useStore = create(set => ({
  count: 0,
  cards: [], // To store favorited cards
  addCard: () => set(state => ({ count: state.count + 1 })),
  removeCard: () => set(state => ({ count: state.count - 1 })),
}));

// function CardCounter(){
//   const {count, increment} = useStore();
//   return(
//     <div>
//       <button onClick={increment}>Increment</button>
//     </div>
//   )
// }

// function ControlsCard1(){
//   const addCard = useStore((state) => state.addCard);

//   const handleAddCard = () => {
//     const cardToAdd = <myToken />

//     addCard={cardToAdd};
//   };
//   return <button onClick={handleAddCard}><Card1 /></button>;
// }

// function ControlsCard2(){
//   const addCard = useStore((state) => state.addCard);

//   const handleAddCard = () => {
//     const cardToAdd = <myToken />

//     addCard={cardToAdd};
//   };
//   return <button onClick={handleAddCard}><Card2 /></button>;
// }

// function myToken(){
//   const getCards = useStore(state => state.card);
//   return (
//     <div>
//         <h1>My favourite token list</h1>
//         <h2>
//           {getCards}
//         </h2>
//     </div>
//   )
//}

function App() {
  const addCard = useStore(state => state.addCard);
  const removeCard = useStore(state => state.removeCard);
  const getCards = useStore(state => state.count);
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          {/* <CardCounter /> */}
          {/* <ControlsCard1 />
          <ControlsCard2 /> */}
          {/* <Link to="/"><Card1 /></Link>
          <Link to="/"><Card2 /></Link>
          <Link to="/myToken"><myToken /></Link> */}
          <h1>{getCards} my favourite card</h1>
          <button onClick={addCard}><Card1 /></button>
          <button onClick={addCard}><Card2 /></button>
          <button onClick={removeCard}>Remove Card1</button>
          <button onClick={removeCard}>Remove Card2</button>

        </header>
      </div>
      
    // </Router>
    
  );
}

export default App;
