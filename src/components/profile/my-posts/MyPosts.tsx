import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./post/Post";
import {PostType} from "../../../redux/profilePageReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {ButtonOn} from "../../common/buttons/ButtonOn";
import {Textarea} from "../../common/form-elements/FormElements";
import {maxLength10, required} from "../../../utils/validators/validators";

type PropsType = {
    posts: Array<PostType>
    addPost: (newMessagePost: string) => void
}

export const MyPosts: React.FC<PropsType> = (props) => {
    const {addPost, posts,} = props

    const postsElement = posts.map((p) => <Post key={p.id} message={p.message} likes={p.likes}/>)

    const AddNewPost = (formData: FormPostDataType) => {
        addPost(formData.newPost)
        console.log(formData)
    }

    return (
        <div>
            <h3 className={s.heading}>My posts</h3>
            <div className={s.add_post}>
                <AddPostReduxForm onSubmit={AddNewPost}/>
            </div>
            <div className={s.post}>
                {postsElement}
            </div>
        </div>
    )
}

export type FormPostDataType = {
    newPost: string
}

const AddPostForm: React.FC<InjectedFormProps<FormPostDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>

            <div>
                <Field placeholder={'enter your post'}
                       name={'newPost'}
                       component={Textarea}
                       validate={[required, maxLength10]}
                />
                <ButtonOn buttonName={'add post'}/>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormPostDataType>({
    form: 'MyPostForm'  // уникальное имя для формы
})(AddPostForm)