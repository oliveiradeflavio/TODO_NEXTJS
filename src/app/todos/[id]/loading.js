import React from 'react'

const loading = () => {
  return (
    <div className='container mx-auto p-4 flex flex-col items-center'>
      {/* spinner central */}
      <div className="loader">
        <div className="spinner">
        </div>
      </div>
      {/* mensagem de loading */}
      <h1 className='text-2xl font-bold'>Carregando dados...</h1>
    </div>
  )
}

export default loading