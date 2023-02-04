import { useState } from "react"
import { connect } from "react-redux"
import { addMessageThunk } from "../../../Redux/MessagesReducer"

export const Story1 = (props) => {
    const addMessage = (userId, person, text) => {
        props.addMessageThunk(userId, person, text)
    }
    addMessage(1, 2, 'Hi hooooo')
}

// const mapStateToProps = (state) => {
//     return {
//         currentUser: state.messages.currentUser
//     }
// }

// const Story1Container = connect(mapStateToProps, {addMessageThunk})(Story1);

// export default Story1Container;

