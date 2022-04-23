import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { getDoc, updateDoc, doc } from "firebase/firestore"
import { db } from "../firebaseConfig/firebase"

const Edit = () => {

  const [ Item1, setItem1 ] = useState('')
  const [ Item2, setItem2 ] = useState('')
  const [ Item3, setItem3 ] = useState('')
  const [ Item4, setItem4 ] = useState('')
  const [ Item5, setItem5 ] = useState('')
  const [ Item6, setItem6 ] = useState('')
  const [ Item7, setItem7 ] = useState('')

  const navigate = useNavigate()    
    const {id} = useParams()

    const update = async (e) => {
      e.preventDefault()
      const item = doc(db, "lista", id)
      const data = {Item1: Item1, Item2: Item2, Item3: Item3, Item4: Item4, Item5: Item5, Item6: Item6, Item7: Item7}
      await updateDoc(item, data)
      navigate('/')
  }

  const getItemById = async (id) => {
    const item = await getDoc( doc(db, "lista", id) )
    if(item.exists()) {
        setItem1(item.data().Item1)    
        setItem2(item.data().Item2)
        setItem3(item.data().Item3)
        setItem4(item.data().Item4)
        setItem5(item.data().Item5)
        setItem6(item.data().Item6)
        setItem7(item.data().Item7)
    }else{
        console.log('El Item no existe')
    }
}
 
useEffect( () => {
  getItemById(id)
}, [])

  return (
    <div className='container'>
    <div className='row'>
        <div className='col'>
            <h1>Editar Items</h1>
             <form onSubmit={update}>

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
                <button type='submit' className='btn btn-primary m-4'>Actualizar Items</button>
             </form>   
        </div>
    </div>
</div> 
  )
}

export default Edit
