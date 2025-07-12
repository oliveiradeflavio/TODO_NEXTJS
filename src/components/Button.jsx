"use client"

const Button = ({ children, type = "button", className = "", ...rest }) => {
  return (
    <button
      type={type}
      className={`px-3 py-2 rounded cursor-pointer ${className}`}
      {...rest}>
      {children}
    </button>
  )
}

export default Button