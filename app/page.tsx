'use client'
import './styles/table.css'
import styles from "./page.module.css";
import { ITodo } from "./types/ITodo";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    async function fetchPosts() {
      const data: Response = await fetch(process.env.NEXT_PUBLIC_CSR_BASE_URL + "/todos")
      const todos: ITodo[] = await data.json()
      console.log(todos)
      setTodos(todos)
    }
    fetchPosts()
  }, [])
  return (
    <div className={styles.page}>
      <Link href={"/user"}>Go to User</Link>
        <main className={styles.main}>
        <h1>Home Page</h1>
        <table id="customers">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((todo: ITodo) => {
                        return (
                            <tr key={todo.id}>
                                <td>{todo.id}</td>
                                <td>{todo.title}</td>
                                <td>{todo.completed ? 'Yes': 'No'}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </main>
    </div>
  );
}
