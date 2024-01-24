import React from 'react'
import {create} from 'zustand'

const useStore = create((set) =>({
    cards: 2,
    increasePopulation: () => set((state) => ({ cards: state.cards + 1 }))
}))

function CardCounter(){
    const cards = useStore((state) =>state.cards)
    return <h1>{cards} around here...</h1>
}

function Controls(){
    const increasePopulation = useStore((state) => state.increasePopulation)
    return <button onClick={increasePopulation}>Add card</button>
}

export default function myToken() {
    
  return (
    <div>myToken</div>
  )
}
