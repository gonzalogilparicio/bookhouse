import { useState, createContext } from 'react'
import './Notification.css'

const Notification = ({ type, message }) => {

    if(!message) {
      return null
    }

    return (
      // <div className={type === 'success' ? 'alert alert-success' : 'alert alert-danger '} style={{position:"absolute", bottom:"0px", right:"20px", padding:'10px 20px 10px 20px', fontSize:"16px", backgroundColor: '#71B26D', color:'white'}}>
      <div className='notificationToast'>
        {message}
      </div>
    )
  }


export const NotificationContext = createContext()

export const NotificationProvider = ({children}) => {
    const [message, setMessage] = useState('')
    const [type, setType] = useState('success')

    const setNotification = (type, message, time) => {
        setMessage(message)
        setType(type)

        setTimeout(() => {
          setMessage('')
        }, time * 1000)
      }

    return (
        <NotificationContext.Provider value={setNotification}>
            <Notification message={message} type={type}/>
            { children }
        </NotificationContext.Provider>
    )
}