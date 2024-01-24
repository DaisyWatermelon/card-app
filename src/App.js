import logo from './logo.svg';
import {create} from 'zustand'
import './App.css';
import Card1 from './Card1'
import Card2 from './Card2'
import myToken from './myToken';
import { createStore } from 'zustand';

const useStore = create<createStore>((set) =>({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 }))
}))

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
  return (
    <div className="App">
      <header className="App-header">
        <CardCounter />
        <Controls />
        
        <button onClick={increment}><Card1 /></button>
        <Card2 />
        {useStore((state) => state.cards)}
        <myToken />
      </header>
    </div>
  );
}

export default App;
