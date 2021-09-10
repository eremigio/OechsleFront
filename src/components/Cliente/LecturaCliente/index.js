'use strict';
import React, { Component, Fragment,useState, useEffect  } from 'react'
import { Table } from '../../Cliente/styles'
import { firebaseConfig } from '../../../firebaseconfig'
import { initializeApp } from "firebase/app";
import { getFirestore,collection ,getDocs  } from 'firebase/firestore'
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const lista = [];
const clientesDatosOH = collection(db, "clientes")

      function LecturaCliente() {
        const [fetchedData, setFetchedData] = useState([]);
        useEffect(() => {
          const getData = async () => {
            const citySnapshot = await getDocs(clientesDatosOH);
            citySnapshot.forEach(response => {
              
                lista.push(<tr><td>{response.data().nombre}</td><td>{response.data().apellido}</td><td>{response.data().fechaNacimiento}</td></tr>)
            });
            setFetchedData(lista);  
          };
          getData();
        }, []);
      
        
      
        return (
          <div>
            <h1>Listado</h1>
            <Table>
                <thead>
                    <tr>
                        <td>Nombre</td>
                        <td>Apellido</td>
                        <td>fecha</td>
                    </tr>
                </thead>
                <tbody>
                   {fetchedData}
                </tbody>
            </Table>
          
          </div>
        );
      }         
export default LecturaCliente;
