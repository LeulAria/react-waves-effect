import React from 'react'

const index = ({ children }: { children: string }) => {
  return (
    <div>
      Running... {children}
    </div>
  )
}

export default index