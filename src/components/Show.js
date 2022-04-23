import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

const Show = () => {
    
    const [lista, setItem] = useState( [] )

    const itemsCollection = collection(db, "lista")

    const getItems = async ()   => {
        const data = await getDocs(itemsCollection)

        setItem(
            data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
        )

       }

       const deleteItem = async (id) => {
        const itemDoc = doc(db, "lista", id)
        await deleteItem(itemDoc)
        getItems()
       }

       const confirmDelete = (id) => {
        MySwal.fire({
          title: '¿Elimina el producto?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {  
            deleteItem(id)               
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )
          }
        })    
      }

      useEffect( () => {
        getItems()
      }, [] )

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="d-grid gap-2">
            <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>    
          </div>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Item1</th>
                <th>Item2</th>
                <th>Item3</th>
                <th>Item4</th>
                <th>Item5</th>
                <th>Item6</th>
                <th>Item7</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { lista.map( (lista) => (
                <tr key={lista.id}>
                  <td>{lista.Item1}</td>
                  <td>{lista.Item2}</td>
                  <td>{lista.Item3}</td>
                  <td>{lista.Item4}</td>
                  <td>{lista.Item5}</td>
                  <td>{lista.Item6}</td>
                  <td>{lista.Item7}</td>
                  <td>
                    <Link to={`/edit/${lista.id}`} className="btn btn-light"><i className="fa-solid fa-pencil"></i></Link>
                    <button onClick={ () => { confirmDelete(lista.id) } } className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default Show
