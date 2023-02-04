import { notification } from 'antd';
import emoji1 from './../Media/emoji1.png'
import meme_zoolander from './../Media/meme_zoolander.jpg'
import meme_sasuke from './../Media/meme_sasuke.jpg'
import meme_2 from './../Media/meme_2.jpg'
import kate from './../Media/kate.jpg'
import ahmed from './../Media/ahmed.jpg'
import nastya from './../Media/nastya.jpg'
import legs from './../Media/legs.jpg';
import screenshot1 from './../Media/screenshot.png';
import screenshot2 from './../Media/screenshot2.png';
import screenshot3 from './../Media/screenshot3.png';
import screenshot4 from './../Media/screenshot4.png';
import prize2 from './../Media/prize2.jpg'
import prize3 from './../Media/prize3.jpg'
import usure from './../Media/usure.jpg'


const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_CHAT_MESSAGES = 'UPDATE_CHAT_MESSAGES'
const CHANGE_CURRENT_USER = 'CHANGE_CURRENT_USER'
const CHANGE_LAST_MESSAGE = 'CHANGE_LAST_MESSAGE';
const READ_ALL_MESSAGES = 'READ_ALL_MESSAGES';
const ADD_STORY_MESSAGE = 'ADD_STORY_MESSAGE'
const CHANGE_CURRENT_MESSAGE_ID = 'CHANGE_CURRENT_MESSAGE_ID'
const UPDATE_COUNT_OF_MESSAGES = 'UPDATE_COUNT_OF_MESSAGES'
const UPDATE_CURRENT_OPRIONS = 'UPDATE_CURRENT_OPTIONS'
const UPDATE_BY_CONDITIONS = 'UPDATE_BY_CONDITIONS'
const DISABLE_CURRENT_OPTIONS = 'DISABLE_CURRENT_OPTIONS'
const CHANGE_CURRENT_USER_DATA = 'CHANGE_CURRENT_USER_DATA'

export const conditions = (messageId) => {
    return (
        (messageId === '1D3A3C') ? '1D3A3D' :
            (messageId === '1D3A3B') ? '1D3B' :
                (messageId === '1D3B1C') ? '1D3A3D' :
                    (messageId === '1D3B1B') ? '1D3A2' :
                        (messageId === '1C1C2') ? '1D1' :  
                            (messageId === '1C1B1A1') ? '1C1B1B1' : 
                            (messageId === '1C1B1B2A1B1B2B1A1') ? '1C1B1B2A1B1B2A1' :
                            (messageId === '1C1B1B2A1B1C2') ? '1C1B1B2A1B1B1' :
                            (messageId === '1C1B1B2A1B1B2B1B2') ? '1C1B1B2A1B1A1' :
                            (messageId === '1C1B1B2A1B1A3A3B') ? '1C1B1B2A1B1A3A3A' :
                            (messageId === '1C1B1B2A1B1A3A3A1A2') ? '1C1B1B2A1B1B2A1' :
                            (messageId === '1C1B1B2A1B1A3A3A1B') ? '1C1B1B2A1B1A3A3A1A' :
                            (messageId === '1C1B1B2A1B1A3A3D1') ? '1C1B1B2A1B1A3A3C2' :
                            (messageId === '1C1B1B2A1B1A3A3C2') ? '1C1B1B2A1B1B2A1' :
                            (messageId === '1A2C4C1B') ? '1D2' :
                            (messageId === '1A2C4A3A') ? '1A2C4C' :
                            (messageId === '1A2C4A3B') ? '1A2C4C1A' :
                            (messageId === '1A2C4C1A1A') ? '1C1B1B2A' :
                            (messageId === '1A2C4B') ? '1A2C4A1' :
                            (messageId === '1C1B1B2A1B1A3A3A1C2') ? '1A2C4C1A1B1' :
                            (messageId === '1A2C4C1A1B2C3C') ? '1A2C4C1A1B2C3B' :
                            (messageId === '1A2C4C1A1B2A3A') ? '1A2C4C1A1B2B' :
                            (messageId === '1A2C4C1A1B2A3B') ? '1A2C4C1A1B2C' :
                            (messageId === '1A2C4C1A1B2C3A') ? '1A2C4C1A1B2B' :
                            (messageId === '1B1') ? '1A' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1C2') ? '1A2C4C1A1B2B2B1A1A2A3B1A2' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1A3') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A3' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B2A') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2B' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B2B1') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1A' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1C') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1A' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1D') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1A' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2A') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A1' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1A') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A2' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1C') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A2' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A' :

                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4B1B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A' :


                            (messageId === '1A2C4C1A1B2B2B1A1A2A3A1A') ? '1A2C4C1A1B2B2B1A1A2A3B' :
                            (messageId === '1C1B1B2A1B1B2A2') ? '1A2C4C1A1B1' :
                            (messageId === '1D3A3D1') ? '1A2C4C1A1B1' :
                            (messageId === '1D3D2') ? '1D3A3D1' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3C3') ? '1A2C4C1A1B2B2B1A1A2A3A1B' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2C3') ? '1A2C4C1A1B2B2B1A1A2A2' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4B1A') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B' :
                            (messageId === '1D3C2') ? '1D3A3D1' :
                            (messageId === '1D3A3A1') ? '1C1B1B1' :
                            (messageId === '1A2B2') ? '1A2C1' :
                            (messageId === '1A2A') ? '1A2C2' :
                            (messageId === '1C1A2') ? '1C1B1A' :
                            (messageId === '1C1B1B2B3B') ? '1A2C4C1A1B' :
                            (messageId === '1C1B1B2B3A') ? '1C1B1B2A' :
                            (messageId === '1A2C4C1A1B2B2B1B1') ? '1A2C4C1A1B2B2B1A1A1' :

                            (messageId === '1D3B1A') ? '1D3A3A' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7B2') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7A1') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C' :
                            (messageId === '1A2C4C1A1B2B2B1A1C1') ? '1A2C4C1A1B2B2B1A1A1' :
                            (messageId === '1A2C4C1A1B2B2B1A1D') ? '1A2C4C1A1B2B2B1A1C' :







                            (messageId === '1C1B1B2A1A2') ? '1C1B1B2A1B1' :
                            (messageId === '1A2C4C1A1B2B2B1C') ? '1A2C4C1A1B2B2B1A1C' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1C') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2B' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2B' :




                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2B' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3C2 ') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A2' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3C2') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A2' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1A3B') ? '1A2C4C1A1B2B2B1A1A2A3B1A3A' :
                            (messageId === '1A2C4C1A1B2B2B1A1A2A3B1B1') ? '1A2C4C1A1B2B2B1A1A2A3B1A1' :
                            (messageId === '1C1B1B2A1B1B2C2') ? '1C1B1B2A1B1A1' : null
    )
}

const initialState = {
    allMessages: [],
    currentUser: 1,
    currentUserData: {
        name: 'Катя Волкина',
        src: kate
    },
    chatMessages: [],
    areOptionsDisabled: false,
    currentOptions: {
        A: 'A',
        B: 'B',
        C: 'C',
        D: 'D'
    },
    users: [
        { userId: 1, newMessages: 0, name: 'Катя Волкина', lastMessage: '', mainPhotoSrc: kate},
        { userId: 2, newMessages: 0, name: 'Ахмед Удалбакаров', lastMessage: '', mainPhotoSrc: ahmed },
        { userId: 3, newMessages: 0, name: 'Настя солнышко', lastMessage: '', mainPhotoSrc: nastya }
    ],
    story1: {
        currentMessageId: '1',
        currentCountOfMessagesAtOnce: 0,
        messages: [
            { messageId: '1', user: 1, person: 2, text: 'Привет, как твои дела?' },
            { messageId: '1A', user: 1, person: 1, text: 'Привет, все отлично' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A', user: 3, person: 1, text: 'Супер' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A1', user: 3, person: 2, text: 'ну и хорошо' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A2', user: 3, person: 2, text: 'пока)))' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A3', user: 3, person: 2, text: '"Пользователь заблокировал Вас"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4B', user: 3, person: 1, text: 'хорошо. но видно же что эти фотки у тебя давно. ты их не только что сделала' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4C', user: 3, person: 1, text: 'норм. но ты идешь нахуй' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4B1', user: 3, person: 2, text: 'и что' },
            
            
            

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4B1B', user: 3, person: 1, text: 'да ничего. все ок' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4B1A', user: 3, person: 1, text: 'да то что это херня тогда' },
            { messageId: '1A2', user: 1, person: 2, text: 'А я сегодня ходила в парк с Олегом. Он такой скучный капец' },
            { messageId: '1A2A', user: 1, person: 1, text: 'Скучный? Он же норм парниша. Тебе не угодишь' },
            { messageId: '1A2B', user: 1, person: 1, text: 'Да, в нем есть такое. Представляю как прошел твой день' },
            { messageId: '1A2C', user: 1, person: 1, text: 'Да уж. Он то еще чмо. Я его в школе в туалете запирал и заставлял говно чистить карандашом' },
            { messageId: '1A2C1', user: 1, person: 2, src: emoji1 },
            { messageId: '1A2C4C1A1B2B2B1A1A2C1', user: 3, person: 2, src: emoji1 },
            { messageId: '1A2C2', user: 1, person: 2, text: 'че блять?' },
            { messageId: '1C1A1', user: 1, person: 2, text: 'Жмурка? Блииин. Мне очень жаль((((' },
            { messageId: '1C1A2', user: 1, person: 2, text: 'Это моя любимая собака была' },
            { messageId: '1A2C4C1A1B2B2B1A1A2C2', user: 3, person: 2, text: 'Ублюдыш' },
            { messageId: '1A2B1', user: 1, person: 2, text: 'Даже не представляй. Просто говняно прошел мой день' },
            { messageId: '1A2C4C1A1B2B2B1A1A2C3', user: 3, person: 2, text: 'Но ты мне нравишься. Могу скинуть тебе ножки. Но не сразу' },
            { messageId: '1D3A3A1', user: 1, person: 2, text: 'Ладно. Но только попробуй еще раз так пошутить' },
            { messageId: '1A2B2', user: 1, person: 2, text: 'а когда он в конце спросил меня, хочу ли я еще с ним погулять потом. Я прямо сказала' },
            { messageId: '1A2C3', user: 1, person: 2, text: 'ладно. зацени' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A4', user: 1, person: 2, text: 'помоги мне' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A5', user: 1, person: 2, text: 'я вышла на улицу' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A6', user: 1, person: 2, text: 'за мной пошел какой то мудак. он явно меня преследует' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7', user: 1, person: 2, text: 'забежала в чужой подьезд и закрыла дверь. он сейчас стоит за дверью и пытается войти' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7A', user: 1, person: 1, text: 'позвони в полицию' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7A1', user: 1, person: 2, text: 'Я уже позвонила. но они приедут не скоро' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7B', user: 1, person: 1, text: 'постучи в двери к кому нибудь' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7B1', user: 1, person: 2, text: 'хорошо' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7B2', user: 1, person: 2, text: 'я постучала но никто не открыл' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C', user: 1, person: 1, text: 'спрячься где нибудь' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1A', user: 1, person: 1, text: 'спрячься в лифте' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1A1', user: 1, person: 2, text: 'хорошо' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1A2', user: 1, person: 2, text: 'пока он поднимался наверх по лестнице, я спустилась вниз на лифте и сбежала' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1A3', user: 1, person: 2, text: 'фух спасибо за помощь' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1A4', user: 1, person: 2, text: '"ВЫ МОЛОДЕЦ, ВЫ СПАСЛИ ЕЙ ЖИЗНЬ"' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1B1', user: 1, person: 2, text: 'я стучу во все двери и кажется он меня услышал' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1B2', user: 1, person: 2, text: 'бежать выше некуда' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1B3', user: 1, person: 2, text: 'он поднимается а в лифт я уже не успею' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1B4', user: 1, person: 2, text: '"ОНА НЕ ВЫЖИЛА. ОН ПОДНЯЛСЯ И УВИДЕЛ ЕЕ ПОЧТИ СРАЗУ"' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1B', user: 1, person: 1, text: 'беги еще выше и стучи во все двери' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C1', user: 1, person: 2, text: 'Ладно. Спрячусь за дверью. Надеюсь он туда не посмотрит когда зайдет' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2', user: 1, person: 2, text: 'Если я не буду отвечать значит мне пизда' },




            { messageId: '1A2C4', user: 1, person: 2, imageSRC: meme_zoolander },
            { messageId: '1A2C4A', user: 1, person: 1, text: 'Орр' },
            { messageId: '1A2C4C1A1B2B2B1A1A2C', user: 3, person: 1, text: 'Дерьмина у меня лучше' },
            { messageId: '1A2C4A1', user: 1, person: 2, text: 'Вот тоже норм' },
            { messageId: '1A2C4A2', user: 1, person: 2, imageSRC: meme_sasuke },
            { messageId: '1A2C4A3', user: 1, person: 2, imageSRC: meme_2 },
            { messageId: '1A2C4A3A', user: 1, person: 1, text: 'Все хуйня' },
            { messageId: '1A2C4A3B', user: 1, person: 1, text: 'Проорал' },
            { messageId: '1A2C4B', user: 1, person: 1, text: 'Видел' },
            { messageId: '1C1B1B2B', user: 1, person: 1, text: 'Ты серьезно? Я не могу' },
            { messageId: '1C1B1B2B1', user: 1, person: 2, text: 'Ну да извини. Я понимаю, тебе нужно побыть одному' },
            { messageId: '1A2C4C', user: 1, person: 1, text: 'Хуйня' },
            { messageId: '1C1B1B2B2', user: 1, person: 2, text: 'Тебе сейчас непросто' },
            { messageId: '1C1B1B2B3A', user: 1, person: 1, text: 'Ну стой. Все таки приезжай. Я закажу чего нибудь к твоему приезду' },
            { messageId: '1C1B1B2B3', user: 1, person: 2, text: 'Если что то будет нужно, обязательно пиши мне' },
            { messageId: '1B1', user: 1, person: 2, text: 'Да уж ну и хорошо))' },
            { messageId: '1C1B1B2B3B', user: 1, person: 1, text: 'Спасибо. Пока' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1C', user: 3, person: 1, text: 'Не буду я этой херью заниматься' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1C', user: 2, person: 1, text: 'Отьебись ахмед' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1C1', user: 2, person: 2, text: 'вах вах. радик мне поможет. мы заблокирииим тебе' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1C2', user: 2, person: 2, text: 'никаких тебее денег. я еду за тобой. ты труп' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3A1B', user: 3, person: 1, text: 'Да че за бред' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3A1B1', user: 3, person: 2, text: 'Пользователь заблокировал вас' },
            { messageId: '1A2C4C1', user: 1, person: 2, text: 'Всмысле? вообще не смешно?' },
            { messageId: '1A2C4C1A', user: 1, person: 1, text: 'Ну не очень))' },
            { messageId: '1A2C4C1A1B2B2B1A1B', user: 3, person: 1, text: 'Блич' },
            { messageId: '1A2C4C1A1B2B2B1A1C', user: 3, person: 1, text: 'Наруто' },
            { messageId: '1A2C4C1A1B2B2B1A1D', user: 3, person: 1, text: 'Джо джо' },
            { messageId: '1A2C4C1A1B2B2B1A1C1', user: 3, person: 2, text: 'Че за херь. Впервые об этом слышу' },
            { messageId: '1A2C4C1A1', user: 1, person: 2, text: 'Ладно, может встретимся? Посидим как обычно' },
            { messageId: '1A2C4C1A1A', user: 1, person: 1, text: 'Давай приезжай конечно. Закажу чего нибудь поесть' },
            { messageId: '1A2C4C1A1B', user: 1, person: 1, text: 'Нее, давай в другой раз' },
            { messageId: '1A2C4C1A1B1', user: 1, person: 2, text: 'Ладно( пока' },
            { messageId: '1A2C4C1A1B2', user: 3, person: 2, text: 'Привет))) Можем познакомиться?))' },
            { messageId: '1A2C4C1A1B2A', user: 3, person: 1, text: 'Привет. А мы знакомы?' },
            { messageId: '1A2C4C1A1B2A1', user: 3, person: 2, text: 'ээээ' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2A', user: 1, person: 1, text: 'Да, прячься за дверью' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2A1', user: 1, person: 2, text: 'Ладно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2A2', user: 1, person: 2, text: 'Он вошел' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2A3', user: 1, person: 2, text: 'Недеюсь он меня не зам' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2A4', user: 1, person: 2, text: '"ОНА НЕ ВЫЖИЛА. ОН ЗАШЕЛ И ПРЯМО СРАЗУ УВИДЕЛ ЕЕ"' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B', user: 1, person: 1, text: 'Нет, беги на верхние этажи и стучи во все двери' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B1', user: 1, person: 2, text: 'Ладно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4A7C2B2', user: 1, person: 2, text: 'Мне открыли двери некоторые люди, но они не хотят меня впускать. Что мне делать?' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1B', user: 3, person: 1, text: 'Иди ты нахуй короче такие вещи просить. Лечи голову' },
            { messageId: '1A2C4C1A1B2A2', user: 3, person: 2, text: 'нет' },
            { messageId: '1A2C4C1A1B2A3', user: 3, person: 2, text: 'Поэтому и хочу познакомиться' },
            { messageId: '1A2C4C1A1B2A3A', user: 3, person: 1, text: 'Ладно. Расскажи о себе' },
            { messageId: '1A2C4C1A1B2A3B', user: 3, person: 1, text: 'Давай в другой раз' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B2B1', user: 3, person: 2, text: 'Ухахахахахах говняшка бля. От нее реально пасет говном?' },
            { messageId: '1A2C4C1A1B2B', user: 3, person: 1, text: 'Привет. ну давай. Расскажи ос ебе' },
            { messageId: '1A2C4C1A1B2B1', user: 3, person: 2, text: 'Мне 18. Я люблю хэви метал' },
            { messageId: '1A2C4C1A1B2B2', user: 3, person: 2, text: 'Занимаюсь плаванием и пением. Люблю смотреть фильмы' },
            { messageId: '1A2C4C1A1B2B2B', user: 3, person: 1, text: 'Ммм, найс' },
            { messageId: '1A2C4C1A1B2B2B1B', user: 3, person: 1, text: 'Я люблю фэнтэзи. Гарри поттер и трансформеры норм' },
            { messageId: '1C1B1B2A1A2', user: 1, person: 2, text: 'Наверняка в долг у Ахмеда взял опять' },
            { messageId: '1A2C4C1A1B2B2B1C', user: 3, person: 1, text: 'Я люблю очень серьезные сериалы и фильмы. Например Шерлок Холмс' },
            { messageId: '1A2C4C1A1B2B2B1', user: 3, person: 2, text: 'А ты что любишь смотреть' },
            { messageId: '1A2C4C1A1B2B2B1B1', user: 3, person: 2, text: 'Неплохо. Я а я люблю смотреть аниме' },
            { messageId: '1A2C4C1A1B2B2B1A', user: 3, person: 1, text: 'Я смотрю аниме' },
            { messageId: '1A2C4C1A1B2B2B1A1', user: 3, person: 2, text: 'Оооо я тоже. Какое твое любимое?' },
            { messageId: '1A2C4C1A1B2B2B1A1A', user: 3, person: 1, text: 'Любимый во франксе' },
            { messageId: '1A2C4C1A1B2B2B1A1A1', user: 3, person: 2, text: 'Неплохо. Мне тоже понравилось' },
            { messageId: '1A2C4C1A1B2B2B1A1A2', user: 3, person: 2, text: 'Мои любимые это Дороро и Путь зеленого ойдзавы' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A', user: 3, person: 1, text: 'Ммм неплохо. А скинь ножки' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A1', user: 3, person: 2, text: 'Что?' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1B', user: 3, person: 1, text: 'Иди ты нахуй короче такие вещи просить. Лучи голову' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A2', user: 3, person: 2, src: emoji1 },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3', user: 3, person: 2, text: 'Я люблю загадки. Ответь на мои вопросы правильно и скину' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3A', user: 3, person: 1, text: 'Че за бред. Скидывай сразу. Какие нахер загадки' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B', user: 3, person: 1, text: 'Ладно давай' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1', user: 2, person: 2, text: 'асалм алекум брат. мы мало общамся. давай держать контакт. как твоя семья брат' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A', user: 2, person: 1, text: 'Да, надо бы поддерживать связь' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A1', user: 2, person: 2, text: 'Ашыккан ашка пешкән' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A2', user: 2, person: 2, text: 'Позже спишемся' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1B', user: 2, person: 1, text: 'Давай не сейчас' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1B1', user: 2, person: 2, text: 'Ладно брат' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3', user: 3, person: 2, text: 'На столе лежат две монеты, в сумме они дают 3 рубля. Одна из них не 1 рубль. Какие это монеты?' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A', user: 3, person: 1, text: '3х рублевая монета' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3B', user: 3, person: 1, text: 'солнце и полумесяц' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3B', user: 3, person: 1, text: 'солнце и полумесяц' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3C', user: 3, person: 1, text: '1 рубль и 2 рубля' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A1', user: 3, person: 2, text: 'Неверно)))' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A2', user: 3, person: 2, text: 'Ладно, дам еще попытку' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3', user: 3, person: 2, text: 'Завязать можно, а развязать нельзя. Что это такое?' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A', user: 3, person: 1, text: 'Привычка' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A1', user: 3, person: 2, text: 'Неверно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2', user: 3, person: 2, text: 'почему привычка то. Привычку не завязывают. А завязывают С привычкой' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A', user: 3, person: 1, text: 'Понял' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2B', user: 3, person: 1, text: 'Не понял' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A1', user: 3, person: 2, text: 'Ну ладно. В другой раз повезет' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2', user: 3, person: 2, text: 'Если хочешь фоточку, то могу дать другое задание хи хи хи' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2A', user: 3, person: 1, text: 'Ну давай' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B', user: 3, person: 1, text: 'Иди нахой вонючая бомжиха. Мне твоя фотка не всралась совершенно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1', user: 3, person: 2, text: 'Ебнулся? Че случилось то' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1A', user: 3, person: 1, text: 'Загадки твои говно, фотки твои говно и ты говно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1B', user: 3, person: 1, text: 'Фотки твои говно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1C', user: 3, person: 1, text: 'Загадки твои говно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1D', user: 3, person: 1, text: 'Ты говно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2B1A1', user: 3, person: 2, text: '"Пользователь заблокировал Вас"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2C', user: 3, person: 1, text: 'В другой раз' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3A2A2C1', user: 3, person: 2, text: 'Ладно пока' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3A1', user: 3, person: 2, text: 'Я тебя ливну сейчас' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3A1A', user: 3, person: 1, text: 'Ладно давай загадки' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B', user: 2, person: 1, text: 'идите овец ебите со своим радиком. хрен вы меня найдете' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1', user: 2, person: 2, text: 'ты в этом так уверен. я приеду и  ты овец в зад поцилуиш Бу дөньяда вакыт бик әз, аны бик бәрәкәтле тотарга кирәк' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1A', user: 3, person: 1, text: 'Нет' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1C', user: 3, person: 1, text: 'Да' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2B', user: 3, person: 1, text: 'Не буду я этой херью заниматься' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1A1', user: 3, person: 2, text: 'ухахахахахахахах это просто ор. Про овец вообще супер' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1A2', user: 3, person: 2, text: 'Ты заслужил не одну, а целых две фотки' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B1', user: 1, person: 2, text: 'Какой же ты урод, я то думала мы друзья' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3C', user: 3, person: 1, text: 'Мне твои ножки не всрались' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3C1', user: 3, person: 2, text: 'Уверен?' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3C2', user: 3, person: 2, text: 'У тебя вообще яца есть?' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3C3', user: 3, person: 2, text: 'Импотент' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B', user: 3, person: 1, text: 'Разговор' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B1', user: 3, person: 2, text: 'Верно' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B2', user: 3, person: 2, text: 'Держи приз' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3', user: 3, person: 2, imageSRC: legs },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A', user: 3, person: 1, text: 'Класс. А скинь еще' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A1', user: 3, person: 2, text: 'хммм. хорошо. но ты сделай для меня кое что' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2', user: 3, person: 2, text: 'напиши кому нибудь из своих друзей что нибудь неприятное и скинь скриншот мне' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A', user: 3, person: 1, text: 'Че за дичь' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1', user: 3, person: 2, text: 'ну вот так вот))) докажи свои намерения' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A', user: 3, person: 1, text: 'Хорошо. Я напишу своему другу Ахмеду' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1', user: 3, person: 2, text: 'ок жду)))' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A', user: 2, person: 1, text: 'привет ахмед. Ты чуркан вонючий. Засунь свои деньги себе в жопу' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A1', user: 2, person: 2, text: 'ах ты гадина Дошманыңа кое казыма, үзең төшәрсен' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2', user: 2, person: 2, text: 'мы с радиком найдем тебя гадина' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A', user: 2, person: 1, text: 'а че с радиком то? у самого яйца не окрепли еще? Ты срешь тоже с радиком ?' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1', user: 2, person: 2, text: 'я еду за тобой' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A', user: 3, person: 1, imageSRC: screenshot1, text: '"Отправить скриншот"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1A', user: 3, person: 1, imageSRC: screenshot2, text: '"Отправить скриншот"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A', user: 3, person: 1, imageSRC: screenshot3, text: '"Отправить скриншот"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B2B', user: 3, person: 1, imageSRC: screenshot4, text: '"Отправить скриншот"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A1', user: 3, person: 2, src: emoji1 },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A2', user: 3, person: 2, text: 'Чуркан блин капец' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A3', user: 3, person: 2, text: 'Ладно. Я как раз переоделась. лови приз' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1', user: 3, person: 2, text: 'уахахахахаххах неужели ты реально дружил с ней только из-за этого' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2B', user: 3, person: 1, text: 'Иди ты нахуй короче такие вещи просить. Лечи голову' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B2A', user: 3, person: 1, text: 'Иди ты нахуй короче такие вещи просить. Лечи голову' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2B1', user: 3, person: 2, text: 'Лоооол еще расплачься' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2B2', user: 3, person: 2, text: '"Пользователь заблокировал Вас"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B2', user: 1, person: 2, text: '"Пользователь заблокировал Вас"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2A1A4', user: 3, person: 2, imageSRC: prize2 },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1A1A2B1A3', user: 3, person: 2, imageSRC: prize3 },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2A1B', user: 3, person: 1, text: 'Ты дура? Нет конечно' },

            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B', user: 3, person: 1, text: 'Хорошо. Я напишу своей подруге Кате' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1', user: 3, person: 2, text: 'Ок жду)))' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A', user: 1, person: 1, text: 'Привет дура. Почему от тебя вечно пасет говном? Иди помойся наконец' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A1', user: 1, person: 2, text: 'Это шутка?' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2', user: 1, person: 2, text: 'Почему ты так со мной? Я тебе что сделала? Я думала мы друзья' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A', user: 1, person: 1, text: 'Я с тобой дружил только для того, чтобы ты мне отсосала однажды' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2B', user: 1, person: 1, text: 'Ты же воняешь говном. Как с тобой дружить' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A1', user: 1, person: 2, text: 'Скажу тебе по секрету, твой план был провальным с самого начала уродец' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3A3B3A2A1B1A2A2', user: 1, person: 2, text: '"Пользователь заблокировал Вас"' },

            { messageId: '1A2C4C1A1B2C', user: 3, person: 1, text: 'Нет нельзя' },
            { messageId: '1A2C4C1A1B2C1', user: 3, person: 2, text: '????' },
            { messageId: '1A2C4C1A1B2C2', user: 3, person: 2, text: 'Уверен?)' },
            { messageId: '1A2C4C1A1B2C3', user: 3, person: 2, imageSRC: usure },
            { messageId: '1A2C4C1A1B2C3A', user: 3, person: 1, text: 'Ооо ну давай' },
            { messageId: '1A2C4C1A1B2C3B', user: 3, person: 1, text: 'Иди в жопу' },
            { messageId: '1A2C4C1A1B2C3C', user: 3, person: 1, text: 'Фу страшная' },
            { messageId: '1A2C4C1A1B2C3B1', user: 3, person: 2, text: 'пошел ты' },
            { messageId: '1A2C4C1A1B2C3B2', user: 3, person: 2, text: '"Пользователь заблокировал Вас"' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3C1', user: 3, person: 2, text: 'молодеец. В условии ведь сказано что рублем не может быть только одна монета' },
            { messageId: '1A2C4C1A1B2B2B1A1A2A3B1A3C2', user: 3, person: 2, text: 'итак последняя загадка' },

            { messageId: '1A2C4C1B', user: 1, person: 1, text: 'Полная хуня' },
            { messageId: '1A1', user: 1, person: 2, text: 'Хорошо, я за тебя очень рада!' },
            { messageId: '1B', user: 1, person: 1, text: 'Привет, как обычно' },
            { messageId: '1C', user: 1, person: 1, text: 'Было и лучше' },
            { messageId: '1C1', user: 1, person: 2, text: 'А что случилось?' },
            { messageId: '1C1A', user: 1, person: 1, text: 'Умерла собака' },
            { messageId: '1C1B', user: 1, person: 1, text: 'На работе проблемы' },
            { messageId: '1C1B1', user: 1, person: 2, text: 'А че там' },
            { messageId: '1C1B1A', user: 1, person: 1, text: 'Меня чуть не уволили за проступок. Я жестко облажался там' },
            { messageId: '1C1B1B', user: 1, person: 1, text: 'Начальник достал, ведет себя как последнее мудло. Передохнуть не дает' },
            { messageId: '1C1B1B1', user: 1, person: 2, text: 'Блииин, ну как нибудь рассосется. Не переживай' },
            { messageId: '1C1B1B2', user: 1, person: 2, text: 'Ты дома? Хочешь я к тебе приеду?)))' },
            { messageId: '1C1B1B2A', user: 1, person: 1, text: 'Да, я дома. Приезжай))) Я закажу чего нибудь к твоему приезду' },
            { messageId: '1C1B1B2A1', user: 1, person: 2, text: 'Ооо, откуда деньги? Зп получил чтоли?' },
            { messageId: '1C1B1B2A1A', user: 1, person: 1, text: 'Да, зарплату дали наконец то' },
            { messageId: '1C1B1B2A1B', user: 1, person: 1, text: 'Взял в долг у Ахмеда неделю назад' },
            { messageId: '1C1B1B2A1B1A', user: 2, person: 1, text: 'Салам Алейкум брат. Как твоя сестра и родители живут? Надеюсь у вас все хорошо. Можешь дать в долг по братски?' },
            { messageId: '1C1B1B2A1B1A1', user: 2, person: 2, text: 'уах уах алейкум асалам брат. сестра и семья шэээп отлична. сколько тебе дать брат?' },
            { messageId: '1C1B1B2A1B1A2', user: 2, person: 2, text: 'так сколка тебе дат' },
            { messageId: '1C1B1B2A1B1A3', user: 1, person: 2, text: 'Я скоро буду' },
            { messageId: '1C1B1B2A1B1A3A', user: 1, person: 1, text: 'Хорошо, жду' },
            { messageId: '1C1B1B2A1B1A3A1', user: 2, person: 2, text: 'эээааа ало' },
            { messageId: '1C1B1B2A1B1A3A2', user: 2, person: 2, text: 'я с кем говорю э' },
            { messageId: '1C1B1B2A1B1A3A3', user: 2, person: 2, text: 'сколка надо' },
            { messageId: '1C1B1B2A1B1A3A3A', user: 2, person: 1, text: '5000' },
            { messageId: '1C1B1B2A1B1A3A3A1', user: 2, person: 2, text: 'когда вернешь дон' },
            { messageId: '1C1B1B2A1B1A3A3A1A', user: 2, person: 1, text: 'Через неделю' },
            { messageId: '1C1B1B2A1B1A3A3A1A1', user: 2, person: 2, text: 'опят обдурит пытаися' },
            { messageId: '1C1B1B2A1B1A3A3A1A2', user: 2, person: 2, text: 'нет ты алдакчи. сказал бы честно' },
            { messageId: '1C1B1B2A1B1A3A3A1B', user: 2, person: 1, text: 'Завтра' },
            { messageId: '1C1B1B2A1B1A3A3A1C', user: 2, person: 1, text: 'Не знаю' },
            { messageId: '1C1B1B2A1B1A3A3A1C1', user: 2, person: 2, text: 'ашаган белми, тураган белә' },
            { messageId: '1C1B1B2A1B1A3A3D1', user: 2, person: 2, text: 'ваххх ты что вобщше. я тебе кто миллинер' },
            { messageId: '1C1B1B2A1B1A3A3A1C2', user: 2, person: 2, text: 'ладно час скину' },
            { messageId: '1C1B1B2A1B1A3A3B', user: 2, person: 1, text: '10000' },
            { messageId: '1C1B1B2A1B1A3A3C', user: 2, person: 1, text: '20000' },
            { messageId: '1C1B1B2A1B1A3A3C1', user: 2, person: 2, text: 'нет я тебе кто банкомат чтодл' },
            { messageId: '1C1B1B2A1B1A3A3C2', user: 2, person: 2, text: 'балык башыннан чери' },
            { messageId: '1C1B1B2A1B1A3A3D', user: 2, person: 1, text: '50000' },
            { messageId: '1C1B1B2A1B1B', user: 2, person: 1, text: 'Привет Ахмед. Дай в долг пж' },
            { messageId: '1C1B1B2A1B1B1', user: 2, person: 2, text: 'салам алекум. ты мне прошлый долг когда вернешь?' },
            { messageId: '1C1B1B2A1B1B2', user: 2, person: 2, text: 'ни увиливаи' },
            { messageId: '1C1B1B2A1B1B2A', user: 2, person: 1, text: 'Завтра' },
            { messageId: '1C1B1B2A1B1B2B', user: 2, person: 1, text: 'Скоро' },
            { messageId: '1C1B1B2A1B1B2B1', user: 2, person: 2, text: 'тебе зачем надо вообще' },
            { messageId: '1C1B1B2A1B1B2B1A', user: 2, person: 1, text: 'Ко мне Катя едет. Хотим посидеть как обычно' },
            { messageId: '1C1B1B2A1B1B2B1A1', user: 2, person: 2, text: 'тебе дэнги на тусовки надо апять' },
            { messageId: '1C1B1B2A1B1B2B1B', user: 2, person: 1, text: 'У меня собака умерла' },
            { messageId: '1C1B1B2A1B1B2B1B1', user: 2, person: 2, text: 'вах ва вах. мне жал твои собаку' },
            { messageId: '1C1B1B2A1B1B2B1B2', user: 2, person: 2, text: 'эмир Аллахтан, башынъыз сагъ олсун!' },
            { messageId: '1C1B1B2A1B1B2C', user: 2, person: 1, text: 'Не знаю' },
            { messageId: '1C1B1B2A1B1B2C1', user: 2, person: 2, text: '????' },
            { messageId: '1C1B1B2A1B1B2C2', user: 2, person: 2, text: 'ладна хот чесна' },
            { messageId: '1C1B1B2A1B1B2A1', user: 2, person: 2, text: 'ваааа ты мне лапшу вешаш . ты полл года говориш так' },
            { messageId: '1C1B1B2A1B1B2A2', user: 2, person: 2, text: 'пока кароче' },
            { messageId: '1C1B1B2A1B1C', user: 2, person: 1, text: 'Салам пополам. Дай в долг плез' },
            { messageId: '1C1B1B2A1B1C1', user: 2, person: 2, text: 'ты что шутник тут нашелся. какой тебе долг ще. ты старый долг верни сначала' },
            { messageId: '1C1B1B2A1B1C2', user: 2, person: 2, text: 'когда вернешь денги мои' },
            { messageId: '1C1B1B2A1B1', user: 1, person: 2, text: 'У Ахмеда? Ты же сам говорил, что он чуркан и у него денег у самого нет' },
            { messageId: '1C1B1B2A1A1', user: 1, person: 2, text: 'Неужели? Может девушку сможешь найти себе уже' },
            { messageId: '1C1B1A1', user: 1, person: 2, text: 'Да уж блин' },
            { messageId: '1C1C', user: 1, person: 1, text: 'Ты мне опять пишешь тут. Заебываешь меня' },
            { messageId: '1C1C1', user: 1, person: 2, text: 'Ты охренел???' },
            { messageId: '1C1C2', user: 1, person: 2, text: 'Я что-то не то сказала? Почему ты так со мной???' },
            { messageId: '1D', user: 1, person: 1, text: 'Отвали дура' },
            { messageId: '1D1', user: 1, person: 2, text: 'Чтооо? Это был последний раз, когда я написала тебе, мудила' },
            { messageId: '1D2', user: 1, person: 2, text: 'Ты вообще че такой борзый, а?' },
            { messageId: '1D3', user: 1, person: 2, text: 'Ты мудень?' },
            { messageId: '1D3A', user: 1, person: 1, text: 'Стой, ну я же шучу))) Лучше тебя никого нет)))' },
            { messageId: '1D3A1', user: 1, person: 2, text: 'Ну и шутки у тебя конченые' },
            { messageId: '1D3A2', user: 1, person: 2, text: 'Поражаюсь с тебя' },
            { messageId: '1D3A3', user: 1, person: 2, text: 'Ты очень сильно меня расстроил' },
            { messageId: '1D3A3A', user: 1, person: 1, text: 'Ну извини, у меня просто ужасный юмор. Я дурак, прости(' },
            { messageId: '1D3A3B', user: 1, person: 1, text: 'Ой да ладно тебе. Я же не серьезно' },
            { messageId: '1D3A3C', user: 1, person: 1, text: 'Бывает, что уж тут поделать' },
            { messageId: '1D3A3D', user: 1, person: 1, text: 'Отвали дураааа, ты воняешь говном' },
            { messageId: '1D3A3D1', user: 1, person: 2, text: 'Урод. Я думала мы друзья' },
            { messageId: '1D3A3D2', user: 1, person: 2, text: '"Вас заблокировали"' },
            { messageId: '1D3B', user: 1, person: 1, text: 'Ну ладно тебе' },
            { messageId: '1D3B1', user: 1, person: 2, text: 'Ты серьезно? Думаешь это нормально???' },
            { messageId: '1D3B1A', user: 1, person: 1, text: 'Ну извини((( У меня ужасный юмор. Я дурак, прости' },
            { messageId: '1D3B1B', user: 1, person: 1, text: 'Бывает, что уж тут поделать' },
            { messageId: '1D3B1C', user: 1, person: 1, text: 'Отвалииии дура. Ты воняешь говном' },
            { messageId: '1D3C', user: 1, person: 1, text: 'Мне все равно' },
            { messageId: '1D3C1', user: 1, person: 2, text: 'Пошел ты в жопу' },
            { messageId: '1D3C2', user: 1, person: 2, text: '"Пользователь заблокировал Вас"' },
            { messageId: '1D3D', user: 1, person: 1, text: 'Наконец-то, тупая шмандра догадалась. Вали давай' },
            { messageId: '1D3D1', user: 1, person: 2, text: 'Пошел ты в жопу' },
            { messageId: '1D3D2', user: 1, person: 2, text: '"Пользователь заблокировал Вас"' },
        ],
    },
}

const openNotification = (title, message) => {
    notification.open({
        message: title,
        description: message,
        onClick: () => {
            console.log('Notification Clicked!');
        },
    });
};

export const MessagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                userId: action.userId,
                person: action.person,
                text: action.text
            }
            if (action.userId !== state.currentUser) {
                openNotification('У вас новое сообщение!', action.text.slice(0, 30))
            }
            return {
                ...state,
                allMessages: [...state.allMessages, newMessage]
            }
        }
        case CHANGE_CURRENT_MESSAGE_ID: {
            let newCurrentMessageId = null
            let lastNumber = null
            let text = state.story1.currentMessageId
            if (action.id === 'A' || action.id === 'B' || action.id === 'C' || action.id === 'D') {
                newCurrentMessageId = text + action.id
            } else if (action.id === 1) {
                let lastSymbol = text[text.length - 1]
                if (lastSymbol === 'A' || lastSymbol === 'B' || lastSymbol === 'C' || lastSymbol === 'D') {
                    text = state.story1.currentMessageId + '0'
                }
                lastNumber = Number(text.charAt(text.length - 1)) + 1
                const newText = text.slice(0, text.length - 1)
                newCurrentMessageId = newText + lastNumber.toString()
            }
            return {
                ...state,
                story1: {
                    ...state.story1,
                    currentMessageId: newCurrentMessageId
                }
            }
        }
        case CHANGE_CURRENT_USER_DATA: {
            let newCurrentUserData = state.users.filter(user => {return user.userId === state.currentUser}).map(user => {
                return {
                    name: user.name,
                    src: user.mainPhotoSrc
                }
            })
            console.log(newCurrentUserData)
            return {
                ...state,
                currentUserData: newCurrentUserData[0]
            }
        }
        case ADD_STORY_MESSAGE: {
            // Заранее создаем массив, который вернем reducer-у
            let newData = null
            // Получаем массив, в котором лежит только сообщение которое нужно добавить
            let newMessage = state.story1.messages.filter(message => {
                return message.messageId === state.story1.currentMessageId
            }).map(message => {
                // Получаем userId из сообщения и с его помощью находим в массиве с данными о юзерах объект с данным о нужном юзере
                // Фильтруем массив с юзерами и получаем новый массив в котором лежит объект с нужным юзером
                let requiredArray = state.users.filter(user => { return user.userId === message.user })
                // Используем то, что получили ранее
                let newLastMessageArray = requiredArray.map(user => {
                    let newLastMessage = message.text
                    const newMessagesCount = (state.currentUser === user.userId) ? 0 : user.newMessages + 1
                    return { userId: user.userId, name: user.name, lastMessage: newLastMessage, newMessages: newMessagesCount, mainPhotoSrc: user.mainPhotoSrc }
                })
                // Создаем массив в котором лежат все прошлые юзеры (даже тот, который является прошлой версий себя) (они здесь не обработаны)
                let otherLastMessageArrays = state.users.filter(user => { return user.userId !== message.user })
                newData = [...newLastMessageArray, ...otherLastMessageArrays]
                return {
                    userId: message.user, person: message.person, text: message.text, messageId: message.messageId, src: message.src, imageSRC: message.imageSRC
                }
            })
            return {
                ...state,
                allMessages: [...state.allMessages, ...newMessage],
                users: [...newData]
            }
        }
        case DISABLE_CURRENT_OPTIONS: {
            return {
                ...state,
                areOptionsDisabled: action.status
            }
        }
        case UPDATE_BY_CONDITIONS: {
            let newMessageId = state.story1.currentMessageId
            if (conditions(newMessageId) !== null) {
                newMessageId = conditions(newMessageId)
            }
            return {
                ...state,
                story1: {
                    ...state.story1,
                    currentMessageId: newMessageId
                }
            }
        }
        case UPDATE_COUNT_OF_MESSAGES: {
            let currentCountOfMessagesAtOnce = 0
            for (let i = 1; i < 10; i++) {
                let lastSymbol = state.story1.currentMessageId.charAt(state.story1.currentMessageId.length - 1)
                if (lastSymbol === '1' || lastSymbol === '2' || lastSymbol === '3' || lastSymbol === '4'|| lastSymbol === '5' || lastSymbol === '6' || lastSymbol === '7' || lastSymbol === '8') {
                    let ID = state.story1.currentMessageId
                    let IDWithoutNumber = ID.slice(0, ID.length - 1)
                    let newLastNumber = Number(ID.charAt(ID.length - 1)) + i
                    if (state.story1.messages.filter(message => {
                        return message.messageId === IDWithoutNumber + newLastNumber.toString()
                    }).length > 0) {
                        currentCountOfMessagesAtOnce = i
                    }
                } else if (lastSymbol === 'A' || lastSymbol === 'B' || lastSymbol === 'C' || lastSymbol === 'D') {
                    if (state.story1.messages.filter(message => {
                        let text = state.story1.currentMessageId
                        let newText = text.slice(0, text.length - 1)
                        let newLastNumber = text.charAt(text.length - 1) + i
                        return message.messageId === newText + newLastNumber
                    }).length > 0) {
                        currentCountOfMessagesAtOnce = i
                    }
                }
            }

            return {
                ...state,
                story1: {
                    ...state.story1,
                    currentCountOfMessagesAtOnce: currentCountOfMessagesAtOnce
                }
            }
        }
        case UPDATE_CHAT_MESSAGES: {
            let chatMessages = state.allMessages.filter(message => {
                return message.userId === state.currentUser
            })
            return {
                ...state,
                chatMessages: chatMessages
            }
        }
        case CHANGE_CURRENT_USER: {
            return {
                ...state,
                currentUser: action.userId
            }
        }
        case CHANGE_LAST_MESSAGE: {
            let requiredArray = state.users.filter(user => { return user.userId === action.userId })
            let newLastMessageArray = requiredArray.map(user => {
                let requiredMessagesArray = state.allMessages.filter(message => {
                    return message.userId === action.userId
                }).map(message => { return message.text })
                let newLastMessage = requiredMessagesArray[requiredMessagesArray.length - 1]
                const newMessagesCount = (state.currentUser === user.userId) ? 0 : user.newMessages + 1
                return { userId: user.userId, name: user.name, lastMessage: newLastMessage, newMessages: newMessagesCount, mainPhotoSrc: user.mainPhotoSrc[0] }
            })
            let otherLastMessageArrays = state.users.filter(user => { return user.userId !== action.userId })
            let newData = [...newLastMessageArray, ...otherLastMessageArrays]
            console.log(newLastMessageArray)
            return {
                ...state,
                users: [...newData]
            }
        }
        case READ_ALL_MESSAGES: {
            let requiredArray = state.users.filter(user => { return user.userId === action.userId }).map(user => {
                return { ...user, newMessages: 0 }
            })
            let otherLastMessageArrays = state.users.filter(user => { return user.userId !== action.userId })
            let newData = [...requiredArray, ...otherLastMessageArrays]
            return {
                ...state,
                users: [...newData]
            }
        }
        case UPDATE_CURRENT_OPRIONS: {
            const optionsFilter = (letter) => {
                return state.story1.messages.filter(message => {
                    
                    return message.messageId === state.story1.currentMessageId + letter && message.user === state.currentUser
                }).map(message => {
                    console.log(message.text) 
                    return message.text })
            }
            // Функция возвращает id юзера сообщение которого идет далее (оно еще не выбрано и не добавлено)
            const optionsFilterDisable = (letter) => {
                return state.story1.messages.filter(message => {
                    return message.messageId === state.story1.currentMessageId + letter && message.user === state.currentUser
                }).map(message => {
                    return message.user })
            }
            let disable = true
            if (state.currentUser === optionsFilterDisable('A')[0]) {
                disable = false
            }
            return {
                ...state,
                areOptionsDisabled: disable,
                currentOptions: {
                    A: optionsFilter('A'),
                    B: optionsFilter('B'),
                    C: optionsFilter('C'),
                    D: optionsFilter('D')
                }
            }
        }
        default: {
            return state
        }
    }
}

export const addMessageAC = (userId, person, text) => {
    return {
        type: ADD_MESSAGE,
        userId: userId,
        person: person,
        text: text
    }
}

export const updateChatMessagesAC = (userId) => {
    return {
        type: UPDATE_CHAT_MESSAGES,
        userId: userId
    }
}

export const changeCurrentUserAC = (userId) => {
    return {
        type: CHANGE_CURRENT_USER,
        userId: userId
    }
}

export const addMessageThunk = (userId, person, text) => {
    return (dispatch) => {
        dispatch(addMessageAC(userId, person, text))
        dispatch(updateChatMessagesAC(userId))
        dispatch(ChangeLastMessageAC(userId, text))
    }
}

export const ReadAllMessagesAC = (userId) => {
    return {
        type: READ_ALL_MESSAGES,
        userId: userId
    }
}

export const ChangeLastMessageAC = (userId) => {
    return {
        type: CHANGE_LAST_MESSAGE,
        userId: userId
    }
}

export const addStoryMessageAC = () => {
    return {
        type: ADD_STORY_MESSAGE
    }
}

export const updateCountOfMessages = () => {
    return {
        type: UPDATE_COUNT_OF_MESSAGES
    }
}

export const changeCurrentMessageIdAC = (id) => {
    return {
        type: CHANGE_CURRENT_MESSAGE_ID,
        id: id
    }
}

export const updateByConditions = () => {
    return {
        type: UPDATE_BY_CONDITIONS
    }
}

export const addStoryMessageThunk = (id, currentUser) => {
    return (dispatch) => {
        dispatch(changeCurrentMessageIdAC(id))
        dispatch(addStoryMessageAC(currentUser))
        dispatch(updateCountOfMessages())
        dispatch(updateChatMessagesAC(1))
        dispatch(ChangeLastMessageAC())
        dispatch(updateCurrentOptions())
    }
}

export const startStoryThunk = () => {
    return (dispatch) => {
        dispatch(addStoryMessageAC())
        dispatch(updateChatMessagesAC(1))
    }
}

export const updateCurrentOptions = () => {
    return {
        type: UPDATE_CURRENT_OPRIONS
    }
}

export const disableCurrentOptions = (status) => {
    return {
        type: DISABLE_CURRENT_OPTIONS,
        status: status
    }
}

export const changeCurrentUserDataAC = () => {
    return {
        type: CHANGE_CURRENT_USER_DATA
    }
}