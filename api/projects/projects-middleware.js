// add middlewares here related to projects
const Projects = require('../projects/projects-model')

function validateProject(req, res, next) {

        const { name, description } = req.body;
        if(!name || !description) {
            res.status(400).json({ message: `projects require NAME and DESCRIPTION.`})
        } else {
            next()
        }
}



module.exports = { validateProject }
