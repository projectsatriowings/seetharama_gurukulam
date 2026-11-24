import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Contact from './Contact.jsx'

export default function Admission() {
  const navigate = useNavigate()

  useEffect(() => {
    navigate('/contact', { replace: true })
  }, [navigate])

  return <Contact />
}
