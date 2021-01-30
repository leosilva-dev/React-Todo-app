import React, {useContext} from 'react'
import {TodoContext} from '../contexts/TodoContext'
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers'
import * as yup from 'yup'
import {TodoContextType} from '../contexts/TodoContextType'


const AddTodo = () => {
    return (
        <div>
            <h1>Novo Todo</h1>
        </div>
    )
}

export default AddTodo
