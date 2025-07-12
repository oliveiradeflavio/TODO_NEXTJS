import Link from 'next/link'

const TodoNotFound = () => {
  return (
    <div className='container mx-auto p-4 flex flex-col items-center'>
      <h1 className='text-2xl font-bold'>Página não encontrada</h1>
      <p className='mt-2'>Desculpe, mas não conseguimos encontrar a página que você está procurando.</p>
      <Link href='/'>
        <span className='mt-4 text-blue-500 hover:underline'>Voltar para a lista de tarefas</span>
      </Link>

    </div>
  )
}

export default TodoNotFound