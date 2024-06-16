import React, { useRef } from 'react'
import propTypes from 'prop-types'

const Tooltip = ({ children, title, orientation = 'right' }) => {
  const tipRef = useRef(null)

  const orientations = {
    right: 'right',
    top: 'top',
    left: 'left',
    bottom: 'bottom',
  }

  function handleMouseEnter() {
    tipRef.current.style.opacity = 1
  }

  function handleMouseLeave() {
    tipRef.current.style.opacity = 0
  }

  const classContainer = `w-max absolute z-10 bottom-full left-[50%] translate-x-[-50%] -translate-y-2 bg-gray-600 text-white text-sm px-2 py-1 rounded flex items-center transition-all duration-150 pointer-events-none`

  const pointerClasses = `bg-gray-600 h-3 w-3 absolute z-10 top-full left-[50%] translate-x-[-50%] -translate-y-2 rotate-45 pointer-events-none`

  return (
    <div className="relative flex items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className={classContainer} style={{ opacity: 0 }} ref={tipRef}>
        <div className={pointerClasses} />
        {title}
      </div>
      {children}
    </div>
  )
}

Tooltip.propTypes = {
  orientation: propTypes.oneOf(['top', 'left', 'right', 'bottom']),
  title: propTypes.string.isRequired,
}
export default Tooltip