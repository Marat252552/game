import { applyMiddleware, combineReducers, createStore } from "redux";
import { MessagesReducer } from "./MessagesReducer";
import thunkMiddleware from 'redux-thunk'


const Reducers = combineReducers({
    messages: MessagesReducer
})

const a = [
    {messageId: '-', person: 2, text: 'Привет, как твои дела?'},
    {messageId: '-A', person: 1, text: 'Привет, все хорошо'},
    {messageId: '-A-', person: 2, text: 'Хорошо, я за тебя очень рад!'},
    {messageId: '-B', person: 1, text: 'Привет, как обычно'},
    {messageId: '-C', person: 1, text: 'Было и лучше'},
    {messageId: '-C-', person: 1, text: 'Было и лучше'},
    {messageId: '-D', person: 1, text: 'Отвали дура'},
    {messageId: '-D-', person: 2, text: 'Чтооо? Это был последний раз, когда я написала тебе, мудила'},
    {messageId: '-D--', person: 2, text: 'Ты вообще че такой борзый, а?'},
    {messageId: '-D---', person: 2, text: 'Ты мудень?'},
    {messageId: '-D---A', person: 1, text: 'Стой, ну я же шучу))) Лучше тебя никого нет)))'},
    {messageId: '-D---A-', person: 2, text: 'Ну и шутки у тебя конченые'},
    {messageId: '-D---A--', person: 2, text: 'Поражаюсь с тебя'},
    {messageId: '-D---B', person: 1, text: 'Ну ладно тебе'},
    {messageId: '-D---B-', person: 2, text: 'Ты серьезно? Думаешь это нормально???'},
    {messageId: '-D---C', person: 1, text: 'Мне все равно'},
    {messageId: '-D---C-', person: 2, text: 'Пошел ты в жопу'},
    {messageId: '-D---C--', person: 2, text: '"Пользователь заблокировал Вас"'},
    {messageId: '-D---D', person: 1, text: 'Наконец-то, тупая шмандра догадалась. Вали давай'},
    {messageId: '-D---D-', person: 2, text: 'Пошел ты в жопу'},
    {messageId: '-D---D--', person: 2, text: '"Пользователь заблокировал Вас"'},
]

export const store = createStore(Reducers, applyMiddleware(thunkMiddleware))


// // Заранее создаем массив, который вернем reducer-у
// let newData = null
// // Получаем массив, в котором лежит только сообщение которое нужно добавить
// let newMessage = state.story1.messages.filter(message => {
//     return message.messageId === state.story1.currentMessageId
// }).map(message => {
//     // Получаем userId из сообщения и с его помощью находим в массиве с данными о юзерах объект с данным о нужном юзере
//     // Фильтруем массив с юзерами и получаем новый массив в котором лежит объект с нужным юзером
//     let requiredArray = state.users.filter(user => { return user.userId === message.user })
//     // Используем то, что получили ранее
//     let newLastMessageArray = requiredArray.map(user => {
//         // Получаем массив со всеми сообщениями с определенным юзером
//         let requiredMessagesArray = state.allMessages.filter(message1 => {
//             return message.user === message1.userId
//         }).map(message => { return message.text })
//         console.log(requiredMessagesArray)
//         // Получаем последнее сообщение с данным юзером
//         let newLastMessage = requiredMessagesArray[requiredMessagesArray.length - 1]
//         // Подсчитываем непрочитанные сообщения
//         const newMessagesCount = (state.currentUser === user.userId) ? 0 : user.newMessages + 1
//         return { userId: user.userId, name: user.name, lastMessage: newLastMessage, newMessages: newMessagesCount }
//     })
//     // Создаем массив в котором лежат все прошлые юзеры (даже тот, который является прошлой версий себя) (они здесь не обработаны)
//     let otherLastMessageArrays = state.users.filter(user => { return user.userId !== message.user })
//     newData = [...newLastMessageArray, ...otherLastMessageArrays]
//     return {
//         userId: message.user, person: message.person, text: message.text, messageId: message.messageId
//     }
// })
// console.log(newData)
// return {
//     ...state,
//     allMessages: [...state.allMessages, ...newMessage],
//     users: [...newData]
// }