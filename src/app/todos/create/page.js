import { createTodo } from "@/actions";
import Button from "@/components/Button";

const TodoPage = () => {

  //formData contendo os dados do formulário que foi definido no name atributo dos inputs
  // const addTodo = async (formData) => {
  //   "use server";  // server action 
  //   console.log(formData)

  //   // pegar os dados do formData
  //   const titulo = formData.get("titulo");
  //   const descricao = formData.get("descricao");
  //   const status = "pendente"

  //   console.log(`Título: ${titulo}, Descrição: ${descricao}`);

  //   const todo = await db.todo.create({
  //     data: {
  //       titulo,
  //       descricao,
  //       status
  //     }
  //   })
  //   console.log("Tarefa criada:", todo);

  //   redirect("/")


  // }

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center mb-6">Criar nova tarefa</h1>
      <form action={createTodo} className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg">
        <label htmlFor="titulo" className="block text-sm font-medium text-gray-700">Título
          <input
            type="text"
            name="titulo"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Digite o título da tarefa"
          />
        </label>
        <label htmlFor="descricao" className="block text-sm font-medium text-gray-700">Descrição
          <textarea
            type="text"
            name="descricao"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="Digite a descrição da tarefa"
          />
        </label>

        <Button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Criar Tarefa
        </Button>
      </form>
    </div>
  )
}

export default TodoPage