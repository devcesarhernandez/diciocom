const get = async (url) => {
	const response = await fetch(url,{
		method: "GET",
		headers: {
			"Content-Type": "application/json"
		}
	})
	return response.json()
}

const post = async (url, body) => {
	const response = await fetch(url,{
		method: "POST",
		body: JSON.stringify(body),
		headers: {
			"Content-Type": "application/json"
		}
	})
	return response.json()
}

const put = async (url, body) => {
	const response = await fetch(url,{
		method: "PUT",
		headers: {
			"Content-Type": "application/json"
		},
		body
	})
	return response.json()
}

const _delete = async (url) => {
	const response = await fetch(url,{
		method: "DELETE",
		headers: {
			"Content-Type": "application/json"
		}
	})
	return response.json()
}

export const http = {
	get,
	post,
	put,
	delete: _delete
}