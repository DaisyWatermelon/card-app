import logo from './logo.svg';
import React, { useRef } from 'react';
import {create} from 'zustand'
import {persist} from "zustand/middleware"
import './App.css';
import Card1 from './Card1'
import Card2 from './Card2'
//import myToken from './myToken';
import { createStore } from 'zustand';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Card from './Card1';

const useStore = create(set => ({
  count: 0,
  cards: [], // To store favorited cards
  addCard: (card) => set(state => ({cards: [...state.cards, card] })),
  removeCard: () => set(state => ({ count: state.count - 1 })),
}));

function App() {
  const cards = useStore((state) => state.cards);
  const addCards = useStore(state => state.addCard);
  const inputRef = useRef();
  const addCard = () =>{
    addCards(inputRef.current.value);
    inputRef.current.value = "";
  };
  // const addCard = () =>{
  //   addCards(<Card1/>);
  // };
  const removeCard = useStore(state => state.removeCard);
  // const getCards = useStore(state => state.count);
  return (
    // <Router>
      <div className="App">
        <header className="App-header">
          <Card1 />
          <Card2 />
          <h1> my favourite card</h1>
          <input ref={inputRef} />
          <button onClick={addCards}>Add card 1</button>
          {cards.map((card) =>(
            <p key={card}>{card}</p>
          ))}
          <button onClick={addCards}>Add card 2</button>
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
