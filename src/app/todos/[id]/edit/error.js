"use client"
import Link from 'next/link'
import React from 'react'

const TodoEditErrorPage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-10">Erro ao Editar Tarefa</h1>
      <p className="text-center text-red-500 mt-4">Não foi possível encontrar a tarefa que você está tentando editar.</p>
      <p className="text-center mt-2">Por favor, verifique o ID da tarefa ou tente novamente mais tarde.</p>
      <div className="text-center mt-6">
        <Link href="/" className="text-blue-600 hover:underline border px-2 py-3 rounded">Voltar para a lista de tarefas</Link>
      </div>
    </div>
  )
}

export default TodoEditErrorPage