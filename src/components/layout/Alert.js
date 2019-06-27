import React, {useContext} from 'react'

import AlertContext from '../context/alert/alertContext';

const Alert = () => {

    const alertContext = useContext(AlertContext)

    const { alert } = alertContext;
    // const {type, msg} = alertContext.setAlert;
    return (
        alert !==null && (
            <div className={`alert alert-${alert.type}`}>
                <i className="fas fa-info-circle"></i> {alert.msg}
            </div>
        )
    )
}

export default Alert;