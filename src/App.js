import { useState } from 'react'
import data from './data'
import './App.css'
import './index'

function App() {
  
  return (
    <>
    {data.map(( ss, index) => (
      <div>
      <section>
          <h2 className="text-3xl font-bold">{ss.recipeName}</h2>
      </section>
      <section className="flex justify-center items-center my-8">
          <img src={ss.imageUrl} alt={ss.recipeName}/>
      </section>
      <section className='my-8'>
          <h3 className="text-3xl font-bold">Ingredients</h3>
          <p className='flex justify-center items-center'>{ss.ingredients}</p>
      </section>
      <section className='my-8'>
          <h3 className="text-3xl font-bold">About The Recipe</h3>
          <p>{ss.note}</p>
      </section>
      <section>
          <h3 className="text-3xl font-bold">Method Of Preparation</h3>
          <p>{ss.instruction}</p>
      </section>
     </div>
    ))}
     {/* </section> */}
    </>
  )
}

export default App
