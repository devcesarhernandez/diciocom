import { useState, useEffect } from "react"
import { Table, Button } from "react-bootstrap"
import Pagination from "../../Components/Pagination"
import allUsers from "../../Infrastructure/repositories/allUsers"

const Users = () => {
	const rows = 10
	const [users, setUsers] = useState([])
	const [page, setPage] = useState(1)

	useEffect( () =>  {
		allUsers().then( res => setUsers(res))
	}, [])

	const trUsers = []
	for (let i = rows * page - rows; i < rows * page; i++) {
		const user = users[i]
		if (!user) break
		const { calle, numero, colonia, municipio, estado, cp } = user.datos
		trUsers.push(
			<tr key={i} data-id={user.id}>
				<td>{user.nombre}</td>
				<td className="d-none d-md-table-cell">{user.apellidoPaterno}</td>
				<td className="d-none d-md-table-cell">{user.apellidoMaterno}</td>
				<td>{user.email}</td>
				<td>{user.edad}</td>
				<td className="d-none d-lg-table-cell">{user.fechaNac}</td>
				<td className="d-none d-lg-table-cell">{
					`${calle} #${numero}, ${colonia}, ${municipio}, ${estado}, ${cp}.`
				}</td>
				<td><Button variant="outline-info" data-id={user.id}>Editar</Button></td>
			</tr>
		)
	}
	return (
		<>
			<Table responsive>
				<thead>
					<tr>
						<th>Nombre</th>
						<th className="d-none d-md-table-cell">Apellido Paterno</th>
						<th className="d-none d-md-table-cell">Apellido Materno</th>
						<th>Email</th>
						<th>Edad</th>
						<th className="d-none d-lg-table-cell">Fecha de nacimiento</th>
						<th className="d-none d-lg-table-cell">Dirección</th>
						<th>Acción</th>
					</tr>
				</thead>
				<tbody>
					{trUsers}
				</tbody>
			</Table>
			<Pagination rows={rows} users={users} page={page} setPage={setPage} />
		</>
	)
}

export default Users