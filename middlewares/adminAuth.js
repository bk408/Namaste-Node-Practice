const adminAuth = (req, res, next) => {
    const token = "abc"
    const isAdminAuthorized = token === "abc"

    if (!isAdminAuthorized) {
        res.status(401).send("Unauthorized request")
    } else {
        console.log("Handled by Admin");
        
        next()
    }
}

export default adminAuth;