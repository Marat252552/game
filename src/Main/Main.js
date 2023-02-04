import styles from './Main.module.css'
import { ChatContainer } from './Chat/Chat';
import { DialogsContainer } from './Dialogs/Dialogs';

export const Main = () => {
    return <div className={styles.mainPart}>
        <DialogsContainer />
        <ChatContainer />
    </div>
}