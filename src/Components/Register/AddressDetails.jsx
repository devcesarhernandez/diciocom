import { Form } from "react-bootstrap"

const AddressDetails = (props) => {
	const { values, handleData} = props
	return (
		<>
			<legend>Dirrección</legend>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="calle">Calle</Form.Label>
				<Form.Control required id="calle" name="calle" onChange={handleData} value={values.calle || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa la calle.</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="numero">Número</Form.Label>
				<Form.Control required id="numero" name="numero" onChange={handleData} value={values.numero || ""} style={{ width: "124px" }} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa el número.</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="colonia">Colonia</Form.Label>
				<Form.Control required id="colonia" name="colonia" onChange={handleData} value={values.colonia || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa la colonia.</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="municipio">Delegacion/Municipio</Form.Label>
				<Form.Control required id="municipio" name="municipio" onChange={handleData} value={values.municipio || ""} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa la Delegación o Municipio.</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="estado">Estado</Form.Label>
				<Form.Control required id="estado" name="estado" onChange={handleData} value={values.estado} />
				<Form.Control.Feedback type="invalid">Porfavor ingresa el estado</Form.Control.Feedback>
			</Form.Group>
			<Form.Group className="mb-3">
				<Form.Label htmlFor="cp">Codigo postal</Form.Label>
				<Form.Control required id="cp" name="cp" onChange={handleData} value={values.cp || ""} style={{ width: "124px" }} />
				<Form.Control.Feedback type="invalid">Ingresa el código postal</Form.Control.Feedback>
			</Form.Group>
		</>
	)
}

export default AddressDetails