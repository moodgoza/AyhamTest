import React from 'react'
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
const ChatCard = ({ chat }) => {
    return (
        <li className="p-2 border-bottom d-flex justify-content-between">

            <React.Fragment key={"1"}>


                <ListItem button>
                    <ListItemAvatar>
                        <Avatar alt="Profile Picture" src={chat.imgSrc} />
                    </ListItemAvatar>
                    <ListItemText primary={chat.user} secondary={chat.messages[chat.messages.length - 1].content.substring(0, Math.min(chat.messages[chat.messages.length - 1].content.length - 1, 20)) + '...'} />
                </ListItem>
            </React.Fragment>

        </li>
    )
}

export default ChatCard