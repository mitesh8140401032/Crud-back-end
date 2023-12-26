const middlware = (req, res, next) => {
    console.log("Middlware Tnx")
    next()
}
export default middlware;