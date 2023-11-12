import React from 'react'
import Message from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'
import avatar from './avatar.png'
import fravatar from './guy-ritchie.jpg'

/*
* 1 - описать тип MessageType
* 2 - описать тип MessagePropsType в файле Message.tsx
* 3 - в файле Message.tsx отобразить приходящие данные
* 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

// нужно создать правильный тип вместо any

type UserType = {
    avatar: string
    name: string
}

type MessageContentType = {
    text: string
    time: string
}

export type MessageType =  {
    id: number
    user: UserType
    message: MessageContentType
}

// структуру объекта не менять
export const message0: MessageType = {
    id: 0,
    user: {
        avatar: avatar, // можно менять
        name: 'Not a Brad Pitt',  // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: fravatar, // можно менять
        name: 'Not a Guy Ritchie', // можно менять
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?', // можно менять
        time: '22:03', // можно менять
    },
}

const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw} style={{borderTop: '1px solid #D9D9D9', borderBottom: '1px solid #D9D9D9', padding: '24px 0 24px'}}>
                {/*проверка отображения (не менять)*/}
                <div style={{margin: '0 auto', display: 'flex', flexDirection: 'column', width: '100%'}}>
                    <Message message={message0} />
                    <FriendMessage message={friendMessage0} />
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message} />
            </div>
        </div>
    )
}

export default HW1
