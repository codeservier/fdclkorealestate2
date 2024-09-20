import React from 'react'

const CustomButtom = ({onClick}) => {
  return (
    <button
    className="bg-primary w-full px-10 py-4 text-white text-xl border border-primary/40 font-bold hover:text-gray-900 rounded-lg hover:bg-white duration-300 transition-all"
    onClick={onClick}
  >
    Search
  </button>  )
}

export default CustomButtom