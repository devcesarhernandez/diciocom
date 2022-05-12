import {http} from "../http/https"

const createUser = async () => {
	return await http.get(`${process.env.REACT_APP_URL_API}`)
}

export default createUser