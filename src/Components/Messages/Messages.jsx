import React from "react";
import s from './Messages.module.css';

const Messages = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>

        <div className={s.dialog}>
          <div> {props.text} </div>
        </div>


      </div>
    </div>
  )
}
export default Messages;