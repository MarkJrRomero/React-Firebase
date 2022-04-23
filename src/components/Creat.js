import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

const Creat = () => {

  const [ Item1, setItem1 ] = useState('')
  const [ Item2, setItem2 ] = useState('')
  const [ Item3, setItem3 ] = useState('')
  const [ Item4, setItem4 ] = useState('')
  const [ Item5, setItem5 ] = useState('')
  const [ Item6, setItem6 ] = useState('')
  const [ Item7, setItem7 ] = useState('')

  const navigate = useNavigate()

  const itemsCollection = collection(db, "lista")

  const store = async (e) => {
    e.preventDefault()
    await addDoc( itemsCollection, {Item1: Item1, Item2: Item2, Item3: Item3, Item4: Item4, Item5: Item5, Item6: Item6, Item7: Item7  } )
    navigate('/')
  }
    
  return (
    <div className='container'>
    <div className='row'>

        <div className='col'>
            <h1>Agregar Items a la lista</h1>
             <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Item 1</label>
                    <input
                        value={Item1}
                        onChange={ (e) => setItem1(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>  

                <div className='mb-3'>
                <label className='form-label'>Item 2</label>
                    <input
                        value={Item2}
                        onChange={ (e) => setItem2(e.target.value)} 
                        type="text"
                        className='form-control'
                    />              
                </div>  

                <div className='mb-3'>
                <label className='form-label'>Item 3</label>
                    <input
                        value={Item3}
                        onChange={ (e) => setItem3(e.target.value)} 
                        type="text"
                        className='form-control'
                    />              
                </div>  

                <div className='mb-3'>
                <label className='form-label'>Item 4</label>
                    <input
                        value={Item4}
                        onChange={ (e) => setItem4(e.target.value)} 
                        type="text"
                        className='form-control'
                    />              
                </div>  

                <div className='mb-3'>
                <label className='form-label'>Item 5</label>
                    <input
                        value={Item5}
                        onChange={ (e) => setItem5(e.target.value)} 
                        type="text"
                        className='form-control'
                    />              
                </div>  

                <div className='mb-3'>
                <label className='form-label'>Item 6</label>
                    <input
                        value={Item6}
                        onChange={ (e) => setItem6(e.target.value)} 
                        type="text"
                        className='form-control'
                    />              
                </div>  

                <div className='mb-3'>
                <label className='form-label'>Item 7</label>
                    <input
                        value={Item7}
                        onChange={ (e) => setItem7(e.target.value)} 
                        type="text"
                        className='form-control'
                    />              
                </div>  

                <button type='submit' className='btn btn-primary m-4'>Guardar items en la lista</button>
             </form>   
        </div>
    </div>
</div> 
  )
}

export default Creat
