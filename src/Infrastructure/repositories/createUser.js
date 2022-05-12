import {http} from "../http/https"

const createUser = async (body) => {
	return await http.post(`${process.env.REACT_APP_URL_API}`, body )
}

export default createUser