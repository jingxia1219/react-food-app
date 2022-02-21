import classes from './Modal.module.css'
import {Fragment} from 'react';
import ReactDOM from 'react-dom'

function Backdrop (props) {
    return <div onClick={props.onClick} className={classes.backdrop}></div>
};
function Overlay (props) {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById('overlays')
function Modal(props) {
    return <Fragment>
        {/* <Backdrop/>
        <Overlay/> */}
    {ReactDOM.createPortal(<Backdrop onClick={props.closeModal}/>,portalElement)}
    {ReactDOM.createPortal(<Overlay>{props.children}</Overlay>,portalElement)}
    </Fragment>
}

export default Modal;