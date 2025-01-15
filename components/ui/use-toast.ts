// Simplified version for demonstration
import { useState, useEffect } from 'react'

export const useToast = () => {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = 'default' }) => {
    const id = Math.random().toString(36).substr(2, 9)
    setToasts((prevToasts) => [...prevToasts, { id, title, description, variant }])
  }

  const dismissToast = (id) => {
    setToasts((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  return { toast, dismissToast, toasts }
}

