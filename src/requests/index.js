const BACKEND_URL = "https://express-bootcamp.herokuapp.com"
export const fetchAllUsers = async () => {
    console.log("in fetch all users ")
    const response = await fetch(`${BACKEND_URL}/api/user`)
    const data = await response.json()
    return data;
}