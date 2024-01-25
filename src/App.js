import logo from './logo.svg';
import {create} from 'zustand'
import './App.css';
import Card1 from './Card1'
import Card2 from './Card2'
import myToken from './myToken';
import { createStore } from 'zustand';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

const useStore = create((set) => ({
  count: 0,
  cards: [], // To store favorited cards
  addCard: (card) => set((state) => ({ cards: [...state.cards, card] })),
  increment: () => set((state) => ({ count: state.count + 1 })),
}));

function CardCounter(){
  const {count, increment} = useStore();
  return(
    <div>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

function Controls(){
  const addCard = useStore((state) => state.addCard);

  const handleAddCard = () => {
    const cardToAdd = <myToken />

    addCard={cardToAdd};
  };
  return <button onClick={handleAddCard}>Add Card1</button>;
}

function App() {
  const {count, cards, addCard, increment} = useStore();
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <CardCounter />
          <Controls />

          <Link to="/"><Card1 /></Link>
          <Card2 />
          {useStore((state) => state.cards)}
          <myToken />
        </header>
      </div>
      <p>Count: {count}</p>
      <button onClick={addCard}><Card1 /></button>
      <button onClick={addCard}><Card2 /></button>
    </Router>
    
  );
}

export default App;
