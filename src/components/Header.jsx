import Link from 'next/link';

const Header = () => {
  return (
    <header className='bg-blue-500 text-white p-4 shadow-md'>
      <nav className='container mx-auto flex justify-between'>
        <Link href="/" className='text-xl font-bold'>
          Lista de Tarefas
        </Link>

        <Link href="/todos/create" className='bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-gray-100'>
          Criar Tarefa
        </Link>
      </nav>

    </header>
  )
}

export default Header