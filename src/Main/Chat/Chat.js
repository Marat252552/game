import styles from './Chat.module.css';
import { Avatar, Image } from 'antd';
import user from './../../Media/user.jpg'
import { connect } from 'react-redux';
import { addMessageAC, addMessageThunk, addStoryMessageThunk, conditions, startStoryThunk, updateByConditions, updateChatMessagesAC, updateCountOfMessages, updateCurrentOptions } from '../../Redux/MessagesReducer';
import { useEffect, useState } from 'react';
import { Story1 } from '../Stories/Story1/Story1';
import React from 'react';


const MakeMessage = (props) => {
    return <div className={(props.person === 1) ? styles.messageField1 : styles.messageField2}>
        <div className={(props.person === 1) ? styles.messageText1 : styles.messageText2}>{props.text}</div>
    </div>
}

const MakeEmoji = (props) => {
    return <div className={(props.person === 1) ? styles.messageField1 : styles.messageField2}>
        <div className={(props.person === 1) ? styles.messageText1 : styles.messageText2}><Avatar src={props.src}/></div>
    </div>
}

const MakeImage = (props) => {
    return <div className={(props.person === 1) ? styles.messageField1 : styles.messageField2}>
        <div className={(props.person === 1) ? styles.messageText1 : styles.messageText2}><Image width={200} src={props.imageSRC}/></div>
    </div>
}



const Chat = (props) => {
    const [isWriting, changeStatus] = useState(false)
    const [isButtonDisabled, disableButton] = useState(false)
    const [isButtonADisabled, disableAButton] = useState(false)
    const [isButtonBDisabled, disableBButton] = useState(false)
    const [isButtonCDisabled, disableCButton] = useState(false)
    const [isButtonDDisabled, disableDButton] = useState(false)
    const addMessage = (id, currentUser) => {
        props.addStoryMessageThunk(id, currentUser)
        props.ChangeLastMessageAC()
        scrollToBottom()
    }
    useEffect(() => {
        if(props.currentOptions.A[0] === undefined) {
            disableAButton(true)
        }
        if (props.currentOptions.A[0] !== undefined) {
            disableAButton(false)
        }
        if(props.currentOptions.B[0] === undefined) {
            disableBButton(true)
        }
        if (props.currentOptions.B[0] !== undefined) {
            disableBButton(false)
        }
        if(props.currentOptions.C[0] === undefined) {
            disableCButton(true)
        }
        if (props.currentOptions.C[0] !== undefined) {
            disableCButton(false)
        }
        if(props.currentOptions.D[0] === undefined) {
            disableDButton(true)
        } 
        if (props.currentOptions.D[0] !== undefined) {
            disableDButton(false)
        }

    }, [props.currentOptions])
    useEffect(() => {
        if(props.areOptionsDisabled === true) {
            disableButton(true)
        } else {
            disableButton(false)
        }
    }, [props.areOptionsDisabled])
    useEffect(() => {
        if(conditions(props.currentMessageId) !== null) {
            props.updateByConditions()
        }
        props.updateCountOfMessages()
    }, [props.currentMessageId])
    useEffect( () => {
        if(props.currentCountOfMessagesAtOnce > 0) {
            disableButton(true)
        } else {
            disableButton(false)
        }
        if (props.currentCountOfMessagesAtOnce > 0) {
            setTimeout(() => {
                changeStatus(true)
                setTimeout(() => {
                    props.addStoryMessageThunk(1)
                    changeStatus(false)
                }, 500)
            }, 500)
        } 
        props.updateCurrentOptions()
        scrollToBottom()
    }, [props.currentCountOfMessagesAtOnce])
    const messagesEndRef = React.useRef(null)

    const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    return (<div className={styles.chat}>

        <div className={styles.mainInfo}>
            <Avatar src={props.currentUserData.src} size={50} />
            <p>{props.currentUserData.name}</p>
        </div>
        <div className={styles.messagesField}>
            {props.chatMessages.map(chatMessage => 
            {if(chatMessage.imageSRC !== undefined) {
                return <MakeImage person={chatMessage.person} imageSRC={chatMessage.imageSRC} />
            } else if( chatMessage.src !== undefined) {
                return <MakeEmoji person={chatMessage.person} src={chatMessage.src} />
            } else {
                return <MakeMessage person={chatMessage.person} text={chatMessage.text} />
            }
        }
            )}
            {(isWriting === false) ? null : <MakeMessage person={2} text=' печатает сообщение...' />}
            <div ref={messagesEndRef}></div>
        </div>
        <div className={styles.buttonsField}>
            <button disabled={isButtonDisabled || isButtonADisabled} onClick={() => { addMessage('A', props.currentUser) }}>{props.currentOptions.A}</button>
            <button disabled={isButtonDisabled || isButtonBDisabled} onClick={() => { addMessage('B', props.currentUser) }}>{props.currentOptions.B}</button>
            <button disabled={isButtonDisabled || isButtonCDisabled} onClick={() => { addMessage('C', props.currentUser) }}>{props.currentOptions.C}</button>
            <button disabled={isButtonDisabled || isButtonDDisabled} onClick={() => { addMessage('D', 1) }}>{props.currentOptions.D}</button>
            <button disabled={isButtonDisabled} onClick={() => { props.startStoryThunk() }}>Start</button>
        </div>
    </div>)
}

const mapStateToProps = (state) => {
    return {
        chatMessages: state.messages.chatMessages,
        isChecked: state.users,
        currentUser: state.messages.currentUser,
        messages: state.messages.story1.messages,
        currentCountOfMessagesAtOnce: state.messages.story1.currentCountOfMessagesAtOnce,
        currentMessageId: state.messages.story1.currentMessageId,
        currentOptions: state.messages.currentOptions,
        areOptionsDisabled: state.messages.areOptionsDisabled,
        currentUserData: state.messages.currentUserData
    }
}

export const ChatContainer = connect(mapStateToProps, {updateByConditions, updateCurrentOptions, updateCountOfMessages, startStoryThunk, addMessageAC, updateChatMessagesAC, addMessageThunk, addStoryMessageThunk })(Chat)