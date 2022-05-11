import { Pagination } from "react-bootstrap"

const PaginationComponent = (props) => {
	const {rows, users, page, setPage} = props
	console.log(Math.ceil(users.length / rows))
	if ( users.length > rows) {
		let items = [];
		console.log(users.length)
		for (let number = 1; number <= Math.ceil(users.length / rows); number++) {
		  items.push(
			<Pagination.Item key={number} active={number === page} onClick={() => setPage(number)}>
			  {number}
			</Pagination.Item>,
		  );
		}
		return (
			<Pagination className="justify-content-end">{items}</Pagination>
		)
	}
}

export default PaginationComponent