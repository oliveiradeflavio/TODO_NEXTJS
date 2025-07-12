import Link from 'next/link';
import { db } from '@/db';
import Button from '@/components/Button';
import Image from 'next/image';
import { deleteTodo } from '@/actions';

export default async function Home() {

  const todos = await db.todo.findMany();

  // async function deleteTodo(formData) {
  //   "use server"
  //   const id = Number(formData.get("id"));

  //   await db.todo.delete({
  //     where: { id: id }
  //   })

  //   redirect("/")
  // }

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        {todos.length === 0 && (
          <div className="col-span-3 text-center flex flex-col items-center justify-center p-8 bg-gray-50 rounded-lg shadow-md">
            <Image
              src="https://img.freepik.com/vetores-premium/uma-ilustracao-plana-de-um-aluno-sem-tarefas-de-tipografia_67813-29202.jpg?semt=ais_hybrid&w=740"
              alt="Sem tarefas"
              width={160}
              height={160}
              className="mb-6 opacity-80"
            />

            <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
              Nenhuma Tarefa Encontrada
            </h1>
            <p className="text-gray-600 mb-6 max-w-md">
              Parece que você ainda não adicionou nenhuma tarefa. Organize seu dia e aumente sua produtividade criando agora sua primeira tarefa!
            </p>
            <Link
              href="/todos/create"
              className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Criar Primeira Tarefa
            </Link>
          </div>
        )}


        {todos.map((todo) => (
          <div key={todo.id} className="border border-gray-100 p-4 mb-4 rounded-2xl shadow-lg bg-white">
            <h2 className="text-xl font-bold">{todo.titulo}</h2>
            <p>{todo.descricao}</p>
            <p className='mt-6 text-center'><span className='font-bold text-sm'>Status:</span> {todo.status}</p>

            {/* Ações */}
            <div className='mt-4 flex justify-between gap-2'>
              <Link href={`/todos/${todo.id}`} className='bg-green-500 text-white px-3 py-2 rounded'>Ver Detalhes</Link>
              <Link href={`/todos/${todo.id}/edit`} className='bg-yellow-500 text-white px-3 py-2 rounded'>Editar</Link>
              <form action={deleteTodo}>
                <input type="hidden" name='id' value={todo.id} />
                <Button type='submit' className="bg-red-500 text-white hover:bg-red-600">Excluir</Button>
              </form>
            </div>

          </div>

        ))}
      </div>
    </div>
  );
}
