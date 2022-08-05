import axios from 'axios'



const API = axios.create({
    baseURL: 'http://localhost:8080/'
})

API.interceptors.request.use((req) => {
    return req
})


export const userSignUp = async (userData) => {

    console.log(userData);

    let user = await API.post('/auth/signup', userData)

    return user;
}

export const otpVerify = async (signupData) => {

    console.log(signupData);
    let res = await API.post('/auth/otpverify', signupData)

    return res;
}

export const onBoarding = async (onBoardData) =>{

    let res = await API.post('/auth/onboarding',onBoardData)
    return res
}

export const userSignIn = async (userData) =>{
    let res = await API.post("/auth/login",userData)
    return res;
}