import React from 'react'
import s from './FormElements.module.css'

export const Textarea = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formElement} ${hasError && s.error}`}>
            <div>
                <textarea {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error

    return (
        <div className={`${s.formElement} ${hasError && s.error}`}>
            <div>
                <input {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Checkbox = ({input, meta, ...props}: any) => {

    const hasError = meta.touched && meta.error

    return (
        <div>
            <div>
                <input type='checkbox' {...input} {...props}/>
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}