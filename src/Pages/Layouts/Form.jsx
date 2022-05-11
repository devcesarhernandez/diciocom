import {Container, Row, Col} from "react-bootstrap"
import "./Form.css"

const Form = (props) => {
	const { children } = props
	return(
		<Container>
			<Row className="justify-content-center align-items-center minh-100">
				<Col md={8} lg={4} className="mx-auto">
					{children}
				</Col>
			</Row>
		</Container>
	)
}

export default Form