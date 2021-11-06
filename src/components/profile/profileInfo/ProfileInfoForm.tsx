import {UserProfileType} from "../../../redux/profilePageReducer";
import React from "react";
import {Checkbox, Input, Textarea} from "../../common/form-elements/FormElements";
import {maxLength100, required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../../common/buttons/Button";
import s from "./ProfileInfo.module.css";

export type InfoFormType = {
    userProfile: UserProfileType | null
}
type OwnPropsType = {
    userProfile: UserProfileType | null
}

const ProfileInfoForm: React.FC<InjectedFormProps<InfoFormType, OwnPropsType> & OwnPropsType> = (props) => {

    return (
        <form onSubmit={props.handleSubmit} className={s.info_form}>
            {props.error && <div className={s.error}>{props.error}</div>}
            <div>
                <u>"Full name" :</u><Field placeholder={'enter text...'}
                                           name={'fullName'}
                                           component={Input}
            />
            </div>
            <div>
                <u>"About me" :</u><Field placeholder={'enter text...'}
                                         name={'aboutMe'}
                                         component={Textarea}
            />
            </div>
            <div>
                <u>"Looking for a job" :</u><Field name={'lookingForAJob'}
                                                component={Checkbox}
                                                type={'checkbox'}
            />
            </div>
            <div>
                <u>"My professional skills" :</u><Field placeholder={'enter text...'}
                                                           name={'lookingForAJobDescription'}
                                                           component={Textarea}
            />
            </div>
            <div>
                <u>Contacts : </u>
                {props.userProfile && Object.keys(props.userProfile.contacts).map((key) => {
                    return <div key={key}>
                        <u> {key} :</u><Field placeholder={'enter text...'}
                                              name={'contacts.' + key}
                                              component={Input}
                    />
                    </div>
                })}
            </div>
            <div style={{'marginTop': '20px'}}>
                <Button buttonName={'Save info'}/>
            </div>
        </form>
    )
}
export default reduxForm<InfoFormType, OwnPropsType>({
    form: 'edit-info'  // уникальное имя для формы
})(ProfileInfoForm)