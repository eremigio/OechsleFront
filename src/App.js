import React, { Fragment } from 'react'
import { Cliente } from './components/Cliente'
import { firebaseConfig } from './firebaseconfig'
import { initializeApp } from "firebase/app";
import { getFirestore,collection,setDoc,doc  } from 'firebase/firestore'
var x = (new Date()).getTimezoneOffset() * 300000; 
var localISOTime = (new Date(Date.now() - x)).toISOString();

  const app = initializeApp(firebaseConfig)
  const db = getFirestore(app)
  const clientesDatosOH = collection(db, "clientes")


function formularioReto (){   
    
        const onSubmit =  (datos)=> {
            setDoc(doc(clientesDatosOH, localISOTime), datos);
           
          }
        return <Cliente title='Registrar cliente' onSubmit={onSubmit}  />
   
    
}



export const App  = () => (
    
    formularioReto()

  )



