import { Form, Button, Row, Col } from "react-bootstrap"
import {useState} from "react"
import Personal from "../../Components/Register/PersonalDetails"
import Address from "../../Components/Register/AddressDetails"

const Register = () => {
	const [data, setData] = useState({datos:{}})
	const [step, setStep] = useState(0)
	const [validated, setValidated] = useState(false)
	const submitForm = (e) => {
		e.preventDefault()
		const form = e.currentTarget
		if ( form.checkValidity() === false){
			e.stopPropagation()
		} else {
			alert("form completo")	
		}
		setValidated(true)
	}

	const handleData = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value
		})
	}
	const handleDataData = (e) => {
		setData({
			...data,
			datos: {...data.datos, [e.target.name]: e.target.value}
		})
	}
	
	const formSteps = [<Personal values={data} handleData={handleData} />, <Address values={data.datos} handleData={handleDataData} />]
	const steps = formSteps.length - 1

	const next = (e) => {e.preventDefault(); setStep(step+1)}
	const prev = () => setStep(step-1)
	
	const btnPrev = (step <= steps && step > 0) ? (<Col as={Button} className="me-3" variant="secondary" onClick={prev} children="Anterior"/>) : <></>
	const propsBtn = step === steps ? {type: "submit", children: "Enviar"} : {onClick: next, children: "Siguiente"}

	return (
		<Form noValidate validated={validated} onSubmit={submitForm}>
			{formSteps.map((component, idx) => {
				return (
					<fieldset key={idx} className={idx === step ? "d-block" : "d-none"}>{component}</fieldset>
				)
			})}
			<Row>
				{ btnPrev}
				<Col as={Button} {...propsBtn} />
			</Row>
		</Form>
	)
}

export default Register