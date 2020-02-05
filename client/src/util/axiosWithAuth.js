import axios from 'axios'

export const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token')
    // console.log(token)
    return axios.create({
        baseURL:'http://localhost:5000/api/',
        headers:{
            'Content-Type':'application/json',
            'Authorization': `${token}`
        }
    })  
}