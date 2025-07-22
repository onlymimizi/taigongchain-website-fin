import React from 'react'

interface NotificationProps {
  message: string
  type: 'success' | 'error'
}

const Notification: React.FC<NotificationProps> = ({ message, type }) => {
  return (
    <div
      className={`p-4 rounded-lg text-sm ${
        type === 'success' ? 'bg-green-600' : 'bg-red-600'
      } text-white`}
    >
      {message}
    </div>
  )
}

export default Notification
