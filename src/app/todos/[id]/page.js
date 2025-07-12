
import { db } from "@/db"
import { notFound } from "next/navigation";

const TodoShow = async ({ params }) => {

  // simulando o loading delay
  await new Promise(resolve => setTimeout(resolve, 2000));

  const id = Number(params.id);
  const todo = await db.todo.findFirst({
    where: { id: id }
  })

  if (!todo) return notFound();

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Detalhes da Tarefa ID: {id}</h1>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">{todo.titulo}</h2>
        <p className="text-gray-700 mb-4">{todo.descricao}</p>
        <p className={`text-sm ${todo.status === 'concluida' ? 'text-green-600' : 'text-red-600'}`}>
          Situação: {todo.status.charAt(0).toUpperCase() + todo.status.slice(1)}
        </p>
      </div>

    </div>
  )
}

export default TodoShow