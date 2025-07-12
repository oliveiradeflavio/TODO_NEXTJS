"use client"
import { updateTodo } from "@/actions"
import { useFormState } from "react-dom"
import Button from "./Button"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const TodoForm = ({ todo }) => {

  const [formState, action] = useFormState(updateTodo, { errors: {} })
  const router = useRouter()

  useEffect(() => {
    if (formState.successMessage) {
      const timeout = setTimeout(() => {
        router.push("/"); // redireciona após 2s
      }, 2000);
      return () => clearTimeout(timeout); // cleanup
    }
  }, [formState.successMessage])

  return (
    <form action={action} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg" >

      {/* campo oculto para o ID da tarefa */}
      <input type="hidden" name="id" value={todo ? todo.id : ""} />

      <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título
        <input
          type="text"
          name="titulo"
          required
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formState.errors.titulo ? 'border-red-500' : ''}`}
          placeholder="Digite o título da tarefa"
          defaultValue={todo.titulo}
        />
      </label>
      {formState.errors.titulo && (
        <p className="text-red-500 text-sm">{formState.errors.titulo}</p>
      )}

      <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição
        <textarea
          type="text"
          name="descricao"
          required
          className={`mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${formState.errors.descricao ? 'border-red-500' : ''}`}
          placeholder="Digite a descrição da tarefa"
          defaultValue={todo.descricao}
        />
      </label>
      {formState.errors.descricao && (
        <p className="text-red-500 text-sm ">{formState.errors.descricao}</p>
      )}

      {/* situação */}
      {todo && (
        <label htmlFor="status" className="block text-sm font-medium text-gray-700">Situação
          <select
            name="status"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            defaultValue={todo ? todo.status : "pendente"}
          >
            <option value="pendente">Pendente</option>
            <option value="concluida">Concluída</option>
          </select>
        </label>
      )}

      <Button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        {todo ? "Atualizar Tarefa" : "Criar Tarefa"}
      </Button>

      {formState.successMessage && (
        <p className="text-green-500 text-sm">{formState.successMessage}</p>
      )}

      {formState.errors.update && (
        <p className="text-red-500 text-sm">{formState.errors.update}</p>
      )}
    </form>
  )
}

export default TodoForm