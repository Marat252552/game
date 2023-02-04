import { connect } from "react-redux"
import styles from './Dialogs.module.css'
import { Avatar } from 'antd';
import user from './../../Media/user.jpg';
import { Badge } from 'antd';
import { changeCurrentUserAC, updateChatMessagesAC, ChangeLastMessageAC, ReadAllMessagesAC, updateCurrentOptions, disableCurrentOptions, changeCurrentUserDataAC } from "../../Redux/MessagesReducer";

const Dialogs = (props) => {
    const MakeDialogBox = (props) => {
        let data = props.users.filter(user => {return user.userId === props.userId
        }).map(user => user.mainPhotoSrc)
        console.log(data)
        return <div className={(props.currentUser === props.userId)? styles.mainDialogBox : styles.dialogBox}>
                <Avatar className={styles.dialogsImg} src={data[0]} size={40}/>
                <div className={styles.dialogsMessage}><p5>{props.name}</p5></div>
                {(props.newMessages > 0)? <Badge count={props.newMessages}><div></div></Badge> : <div></div>}
                <p5>{(props.lastMessage !== undefined)? props.lastMessage.slice(0, 15) : null}  </p5>
        </div>
    }
    return (<div>
        <h2>Диалоги</h2>
        {props.users.map(user => {
            return <div onClick={()=>{
                props.ReadAllMessagesAC(user.userId)
                props.changeCurrentUserAC(user.userId)
                props.updateChatMessagesAC(user.userId)
                props.updateCurrentOptions()
                props.changeCurrentUserDataAC()
            }}><MakeDialogBox name={user.name} lastMessage={user.lastMessage} userId={user.userId} newMessages={user.newMessages} currentUser={props.currentUser} users={props.users}/></div>
        })}
        <button onClick={() => {props.ChangeLastMessageAC(1, 'wegrweg')}}>Change 1</button>
        <button onClick={() => {props.ChangeLastMessageAC(2, 'hi hooooo')}}>Change 2</button>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        users: state.messages.users,
        currentUser: state.messages.currentUser
    }
}

export const DialogsContainer = connect(mapStateToProps, {changeCurrentUserDataAC, disableCurrentOptions, updateCurrentOptions, ChangeLastMessageAC, ReadAllMessagesAC, changeCurrentUserAC, updateChatMessagesAC})(Dialogs)


