import s from "./MyPosts.module.css";
import React from "react";
import {Post} from "./post/Post";
import {PostType} from "../../../redux/profilePageReducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Button} from "../../common/buttons/Button";
import {Textarea} from "../../common/form-elements/FormElements";
import {maxLength10, required} from "../../../utils/validators/validators";

type PropsType = {
    posts: Array<PostType>
    addPost: (newMessagePost: string) => void
    profilePhoto?: string | null
}

export const MyPosts: React.FC<PropsType> = React.memo((props) => {
    const {addPost, posts, profilePhoto,} = props

    const postsElement = [...posts].reverse().map((p) =>
        <Post
        key={p.id}
        message={p.message}
        likes={p.likes}
        profilePhoto={profilePhoto}
        />)

    const AddNewPost = (formData: FormPostDataType) => {
        addPost(formData.newPost)
    }

    return (
        <div>
            <h3 className={s.heading}>-- My posts --</h3>
            <div className={s.add_post}>
                <AddPostReduxForm onSubmit={AddNewPost}/>
            </div>
            <div className={s.post}>

                {postsElement}

            </div>
        </div>
    )
})

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
                <Button buttonName={'add post'}/>
            </div>
        </form>
    )
}

export const AddPostReduxForm = reduxForm<FormPostDataType>({
    form: 'MyPostForm'  // уникальное имя для формы
})(AddPostForm)