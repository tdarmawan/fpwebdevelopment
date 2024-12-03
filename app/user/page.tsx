import {IUser} from '../types/IUser'
import styles from "../page.module.css";
import '../styles/table.css'
import Link from 'next/link';
export default async function Users() {
    const data: Response = await fetch(process.env.SSR_BASE_URL + "/users")
    const users: IUser[] = await data.json()
    return (
        <div className={styles.page}>
        <Link href={"/"}>Go to Home</Link>
        <main className={styles.main}>
        <h1>Users Page</h1>
        <table id="customers">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user: IUser) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>

          
        </main>
      </div>
    )
  }