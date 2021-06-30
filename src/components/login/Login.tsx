import React from 'react'
import {reduxForm, InjectedFormProps} from "redux-form";
import {Field} from "redux-form";
import {Input} from "../common/form-elements/FormElements";
import {maxLength10, required} from "../../utils/validators/validators";

type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}
                       name={'login'}
                       component={Input}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength10]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}
                /> remember me
            </div>
            <div>
                <button>login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'  // уникальное имя для формы
})(LoginForm)

export const Login = () => {

    const onSubmit = (formData: FormDataType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

