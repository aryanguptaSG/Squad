import axios from "axios"


const apiCall = async (endPoint: string, method: string, body: any) => {
    const auth = JSON.parse(localStorage.getItem("vite-ui-auth")!)
    const options = {
        method: method,
        url: endPoint,
        headers: {
            accept: 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${auth.authToken}`
        },
        data: body
    };
    const res = await axios.request(options)
    return res.data
}

export default apiCall