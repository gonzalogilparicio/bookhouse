import { useState, createContext } from 'react'

const Notification = ({ type, message }) => {
    const noticationStyle = {
      position: 'absolute',
      top: 100,
      right: 50,
      backgroundColor: type === 'success' ? 'green' : 'red',
      color: 'white',
      padding: '10px 20px 10px 20px'
    }
  
    if(!message) {
      return null
    }
  
    return (
      <div style={noticationStyle}>
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