import React, {ChangeEvent} from 'react'


type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode() {
        this.setState({editMode: true})
    }

    deactivateEditMode() {
        this.setState({editMode: false})
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({status: e.currentTarget.value})
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any): void {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div style={{marginLeft: '20px'}}>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>
                        {this.props.status ? this.props.status : 'What is new?'}
                    </span>
                </div>}
                {this.state.editMode &&
                <div>
                    <input
                        onChange={this.onStatusChange}
                        autoFocus={true}
                        onBlur={this.deactivateEditMode.bind(this)}
                        value={this.state.status}
                    />
                </div>}
            </div>
        )
    }
}