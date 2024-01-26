import logo from './logo.svg';
import React, { useRef, useEffect } from 'react';
import {create} from 'zustand'
import {persist} from "zustand/middleware"
import './App.css';
import Card1 from './Card1'
import Card2 from './Card2'
//import myToken from './myToken';
import { createStore } from 'zustand';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// Create component of the store
let store = (set) => ({
  cards:[],
  addCards: (card) => {
    set((state) => ({
      cards: [...state.cards, card],
    }));
  },
});

// presist the created state
store = persist(store, {name: "basket"})

// create the store
// create the store
const useStore = create(store);

// const useStore = create(set => ({
//   count: 0,
//   cards: [], // To store favorited cards
//   addCard: (card) => set(state => ({cards: [...state.cards, card] })),
//   removeCard: () => set(state => ({ count: state.count - 1 })),
// }));

function App() {
  const cards = useStore((state) => state.cards);
  const addCards = useStore(state => state.addCards);
  const inputRef = useRef();

  // Fetch the API
  const fetchData = async async =>{
    try {
      // Coin Market Cap API and key
      const API_KEY = '0cb61b43-fe49-42ce-8e3a-e030fb104f24';
      const API_URL = 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';
      const limitNum = 10;
      const response = await fetch(
        `${API_URL}?CMC_PRO_API_KEY=${API_KEY}&limit=${limitNum}`
      );

      if(!response.ok){
        throw new Error("Failed to fetch data from API");
      }
      const data = await response.json();
  
      // create card component
      const newCards = data.data.map((crypto) => (
        <div key={crypto.id}>
          <h3>{crypto.name}</h3>
          <p>Symbol: {crypto.symbol}</p>
          <p>Price: ${crypto.quote.USD.price}</p>
        </div>
      ));

      addCards(newCards);
    } catch(error){
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addCard = () => {
    addCards(inputRef.current.value);
    inputRef.current.value = "";
  };

  const removeCard = useStore(state => state.removeCard);
  const getCards = useStore(state => state.count);
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <Card1 />
          <Card2 />
          <h1> my favourite cards have {getCards}</h1>
          <input ref={inputRef} />
          <button onClick={addCard}>Add card 1</button>
          {cards.map((card, index) =>(
            <p key={index}>{card}</p>
          ))}
          <button onClick={addCard}>Add card 2</button>
          {cards.map((card) =>(
            <p key={card}>{card}</p>
          ))}
          <button onClick={removeCard}>Remove card 2</button>
          {cards.map((card) =>(
            <p key={card}>{card}</p>
          ))}
          <button onClick={removeCard}>Remove card 2</button>
          {cards.map((card) =>(
            <p key={card}>{card}</p>
          ))}
          {/* <button onClick={addCards}><Card2 /></button>
          <button onClick={removeCard}>Remove Card1</button>
          <button onClick={removeCard}>Remove Card2</button> */}

        </header>
      </div>
      
    // </Router>
    
  );
}

export default App;
