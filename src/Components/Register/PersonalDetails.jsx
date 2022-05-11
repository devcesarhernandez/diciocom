import { Form } from "react-bootstrap"

const PersonalDetails = (props) => {
	const { values, handleData } = props
	const date = new Date()
	return (
		<>
			<legend>Información personal</legend>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="nombre">Nombre</Form.Label>
				<Form.Control required id="nombre" name="nombre" onChange={handleData} value={values.nombre || "" } />
				<Form.Control.Feedback type="invalid">Porfavor ingresa el nombre.</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="apellidoPaterno">Apellido paterno</Form.Label>
				<Form.Control required id="apellidoPaterno" name="apellidoPaterno" onChange={handleData} value={values.apellidoPaterno || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa el apellido paterno</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="apellidoMaterno">Apellido materno</Form.Label>
				<Form.Control required id="apellidoMaterno" name="apellidoMaterno" onChange={handleData} value={values.apellidoMaterno || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa el apellido materno</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="edad">Edad</Form.Label>
				<Form.Control required id="edad" name="edad" type="number" style={{ width: "96px" }} onChange={handleData} value={values.edad || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa la edad.</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="email">Correo electrónico</Form.Label>
				<Form.Control required id="email" name="email" type="email" onChange={handleData} value={values.email || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa con correo electronico.</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="fechaNac">Fecha de nacimiento</Form.Label>
				<Form.Control required id="fechaNac" name="fechaNac" type="date" max={date.toISOString().split('T')[0]} style={{ width: "172px" }} onChange={handleData} value={values.fechaNac || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa la fecha de nacimiento.</Form.Control.Feedback>
			</Form.Group>
		</>
	)
}

export default PersonalDetails