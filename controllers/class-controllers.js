export const createClass = (req, res) => {

    const user = {
        name: req.body.name,
        password: req.body.password

    }
    // res.send(user);


    const token = jwt.sign({ _id: user._id }, 'jwtprivatekey')
    res.send(token);


}