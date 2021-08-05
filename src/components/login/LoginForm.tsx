import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Input} from "../common/form-elements/FormElements";
import {maxLength100, required} from "../../utils/validators/validators";
import s from "./Login.module.css";
import {Button} from "../common/buttons/Button";
import {FormType} from "./Login";

type OwnPropsType = {
    captchaUrl: string | null
}

const LoginForm: React.FC<InjectedFormProps<FormType, OwnPropsType> & OwnPropsType> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'email'}
                       name={'email'}
                       component={Input}
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <Field placeholder={'password'}
                       name={'password'}
                       component={Input}
                       validate={[required, maxLength100]}
                />
            </div>
            <div>
                <Field component={Input}
                       name={'rememberMe'}
                       type={'checkbox'}
                /> remember me
            </div>
            {props.captchaUrl && <img src={props.captchaUrl}/>}
            {props.captchaUrl &&
            <div>
                <Field placeholder={'enter symbols from image'}
                       component={Input}
                       name={'captcha'}
                />
            </div>}
            {props.error && <div className={s.error}>{props.error}</div>}
            <div>
                <Button buttonName={'Login'}/>
            </div>
        </form>
    )
}

export default reduxForm<FormType, OwnPropsType>({
    form: 'login'  // уникальное имя для формы
})(LoginForm)