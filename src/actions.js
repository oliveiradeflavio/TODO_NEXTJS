"use server";

import { db } from "./db";
import { redirect } from "next/navigation";


// cria a tarefa
export async function createTodo(formData) {
  // pegar os dados do formData
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  const status = "pendente"

  const todo = await db.todo.create({
    data: {
      titulo,
      descricao,
      status
    }
  })

  redirect("/")
}


// busca a tarefa pelo ID (para editar)
export const findTodoById = async (id) => {

  // simulação de erro, para ativar a pagina de erro.js
  // throw new Error("Erro ao buscar a tarefa");

  const todo = await db.todo.findFirst({
    where: { id: id }
  })

  return todo
}

// editar/atualizar tarefa
export async function updateTodo(formState, formData) {
  const id = Number(formData.get("id"));
  const titulo = formData.get("titulo");
  const descricao = formData.get("descricao");
  const status = formData.get("status");

  // validações
  const errors = {};
  if (!titulo || titulo.length < 3) {
    errors.titulo = "O título deve ter pelo menos 3 caracteres.";
  }
  if (!descricao || descricao.length < 5) {
    errors.descricao = "A descrição deve ter pelo menos 5 caracteres.";
  }
  if (Object.keys(errors).length > 0) {
    return {
      ...formState,
      errors
    }; // Retorna os erros se houver
  }

  try {
    await db.todo.update({
      where: { id: id },
      data: {
        titulo,
        descricao,
        status
      }
    })
    return {
      errors: {},
      successMessage: "Tarefa atualizada com sucesso!"
    };

  } catch (error) {
    console.error("Erro ao atualizar a tarefa:", error);
    return {
      ...formState,
      errors: { update: "Erro ao atualizar a tarefa. Tente novamente mais tarde." }
    }; // Retorna erro de atualização
  }

}

// deleta a tarefa
export async function deleteTodo(formData) {
  const id = Number(formData.get("id"));

  await db.todo.delete({
    where: { id: id }
  })

  redirect("/")
}

