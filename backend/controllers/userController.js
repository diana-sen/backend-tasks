const userRegister = (req, res) => {
    res.json({message: 'User Register'})
}

const loginUser = (req, res) => {
    res.json({message: 'Login Register'})
}

const dataUser = (req, res) => {
    res.json({message: 'User Data'})
}

module.exports = {
    userRegister,
    loginUser,
    dataUser
}