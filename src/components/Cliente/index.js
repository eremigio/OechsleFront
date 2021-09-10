import React, { Fragment, useState } from 'react'
import { Form, Input, Button,Table } from './styles'


import  LecturaCliente from './LecturaCliente';
const clienteInputValue = initialValue => {
    const [value,setValue] = useState(initialValue)
    const onChange = e => setValue(e.target.value)
    return (value,onChange)
}



     
export const Cliente = ({ onSubmit, title }) => {
   
    const  nombre =  clienteInputValue('')
    const  apellido = clienteInputValue('')
    const  fechaNacimiento = clienteInputValue('')
    
    const handleSubmit = (event) => {
        event.preventDefault()
        onSubmit({
            nombre:  event.target.nombre.value,
            apellido: event.target.apellido.value,
            fechaNacimiento: event.target.fechaNacimiento.value
          })       
         
      }
   return  <Fragment>
            <h2>{title}</h2>  
                <Form onSubmit={ handleSubmit }>
                    <Input placeholder='Edinson' name="nombre" value={ nombre.value } onChange= {nombre.onChange}/>
                    <Input placeholder='Remigio' name="apellido" value={ apellido.value } onChange=  {apellido.onChange}/>
                    <Input name="fechaNacimiento" value={ fechaNacimiento.value } onChange=  {fechaNacimiento.onChange}/>
                    <Button>Cargar</Button>
                </Form>
                <br />
                <LecturaCliente />
            </Fragment>
            
             
}