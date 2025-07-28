import { RegisterForm } from '@/components/RegisterForm'
import React from 'react'

const RegisterPage = () => {
  return (
      <div className="flex bg-accent min-h-svh w-full items-center justify-center p-6 md:p-10">
         <div className="w-full bg-accent max-w-sm">
           <RegisterForm />
         </div>
       </div>
  )
}

export default RegisterPage