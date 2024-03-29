/**
 * @author Gustavo Molina <gusmol37@gmail.com>
 * @version 1.0.0 2022-06-30
 */


import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import Moment from 'moment';
import {
    guardarcontactoAction,
    editarcontactoAction,
    contactoeditarnullAction,
  } from "../action/contactoAction";

const RegistroContacto = () => {

    const [error, setError] = useState(false);
    const [selectedDate, setSelectedDate] = useState(Moment().format('YYYY-MM-DD'));
    const [input, setInput] = useState({
        id: "",
        fullname: "",
        phone: "",
        email: "",
        birthdate: selectedDate
    });

    const dispatch = useDispatch();

    const actualizarContacto = (con) => dispatch(editarcontactoAction(con));
    const agregarContacto = (con) => dispatch(guardarcontactoAction(con));
    const contactoeditarnull = () => dispatch(contactoeditarnullAction());

    const contactoeditar = useSelector(state => state.contacto.contactoeditar);
    const {fullname, phone, email} = input;
   
   /**
    * Cargar en blanco los campos
    */
    useEffect(()=>{
        setInput({
            id: "",
            fullname: "",
            phone: "",
            email: "",
        })
       
    }, [])

   /**
    * En caso de si hay un item por editar
    */
    useEffect(()=>{
        if(contactoeditar){
            const birth = Moment(contactoeditar.birthdate).format('YYYY-MM-DD');
            setSelectedDate(birth);
            setInput({
                id: contactoeditar.id,
                fullname: contactoeditar.fullname,
                phone: contactoeditar.phone,
                email: contactoeditar.email,
                birthdate: selectedDate
            })
        }
    }, [contactoeditar])

   /**
    * Para cargar valor de la fecha
    */
    useEffect(() => {
        setInput({
          ...input,
          birthdate: selectedDate
        })
     
      }, [selectedDate])

    const handleChange = (e)=>{
        setInput(
            {
                ...input,
                [e.currentTarget.name]: e.currentTarget.value
            }
        )
        setError(false);
    };
   /**
    * Estado de la fecha
    */
    const handleDateChange = (e) => {
        const birth = Moment(e.currentTarget.value).format('YYYY-MM-DD');
        setSelectedDate(birth);
    };

    const  onSubmit = (e) =>{
        e.preventDefault();
        if(fullname.trim() === "" || phone.trim() === "" || email.trim() === ""){
            setError(true);
            return;
        }

        if(contactoeditar){
            actualizarContacto(input);
        }else{
            agregarContacto(input);
        }
        limpiar();
    }

    const limpiar = () =>{
        setSelectedDate(Moment().format('YYYY-MM-DD'));
        setError(false);
        contactoeditarnull();
        setInput({
            id: "",
            fullname: "",
            phone: "",
            email: "",
            birthdate: selectedDate
        })
    }

    return ( 
        <div className="container">
            <h2>Registro contacto</h2>
            <form alignItems="center"
            >
                <div className="form-floating">
                    <input type="text" className="form-control" id="fullname" name="fullname" value={fullname} onChange={(e) => handleChange(e)}/>
                    <label for="floatingInput">Nombre completo</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="phone" name="phone" value={phone} onChange={(e) => handleChange(e)}/>
                    <label for="floatingInput">Telefono</label>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control" id="email" name="email" value={email} onChange={(e) => handleChange(e)}/>
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <input type="date" className="form-control" id="birthdate" name="birthdate" value={selectedDate} onChange={(e)=>handleDateChange(e)}/>
                    <label for="floatingInput">Fecha de nacimiento</label>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-12 col-lg-12">
                        <button type="button" className="btn btn-outline-secondary btn-sm" onClick={onSubmit}>{contactoeditar?"Actualizar ":"Guardar "}<span class="material-icons">save</span></button>
                    {/* </div>
                    <div className="col-xs-6 col-md-6 col-lg-6"> */}
                        <button type="button" className="btn btn-outline-danger btn-sm" onClick={limpiar}>Cancelar <span class="material-icons">cancel_presentation</span></button>
                    </div>
                </div>
            </form>
            {error &&(
                <div className="alert alert-danger" role="alert">
                    Todos los campos son obligatorios!
                </div>)}
        </div>
     );
}

export default RegistroContacto;
