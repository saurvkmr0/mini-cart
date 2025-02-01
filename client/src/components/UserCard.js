import React from 'react'
import { Mail, Phone, User } from "lucide-react"

const UserCard = ({user}) => {
  return (
    <div className="text-black bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b">
        <h2 className="text-xl font-semibold flex items-center">
          <User className="mr-2" />
          {user.name}
        </h2>
      </div>
      <div className="p-4">
        <div className="space-y-2">
          <div className="flex items-center">
            <Phone className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-sm">{user.phone}</span>
          </div>
          <div className="flex items-center">
            <Mail className="mr-2 h-4 w-4 opacity-70" />
            <span className="text-sm">{user.email}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCard