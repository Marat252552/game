import styles from './Header.module.css'
import { Switch } from 'antd'
import { Button, Space } from 'antd';
import Story1 from '../Main/Stories/Story1/Story1';
import { connect } from 'react-redux';
import { addMessageThunk } from '../Redux/MessagesReducer';
import { useEffect } from 'react';

const Header = (props) => {
    return <div>
        <div className={styles.header}>
            <div className={styles.header1}>
                <Switch
                    checkedChildren="Мобильная версия"
                    unCheckedChildren="ПК версия" />
            </div>
            <div className={styles.header1}>
                <Button className={styles.button} type='default'>Выбрать часть</Button>
            </div>
            <div className={styles.header1}>
                <Button className={styles.button} onClick={() => {props.addMessageThunk(1, 2, 'Привет, как твои дела?')}} type='primary'>Играть с начала</Button>
            </div>
            <div className={styles.header1}>
                <Button className={styles.button} type='default'>Читать правила</Button>
            </div>
            <div></div>
        </div>
    </div>
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.messages.currentUser
    }
}

export const HeaderContainer = connect(mapStateToProps, {addMessageThunk})(Header)