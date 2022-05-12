import {http} from "../http/https"

const getUserById = async (id) => {
	return await http.get(`${process.env.REACT_APP_URL_API}/${id}`)
}

export default getUserById