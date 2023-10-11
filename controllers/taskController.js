const getTasks = async (req, res) => {
    try {
        res.status(200).json({message: "retrieved tasks"});
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {getTasks}