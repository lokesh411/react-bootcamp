export const fetchAllUsers = async () => {
    console.log("in fetch all users ")
    const response = await fetch('/api/user')
    const data = await response.json()
    return data;
}