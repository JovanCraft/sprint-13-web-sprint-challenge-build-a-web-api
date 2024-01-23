// add middlewares here related to actions
const Action = require('./actions-model')

function logger(req, res, next) { //eslint-disable-line
    const timeStamp = new Date().toLocaleDateString()
    const method = req.method
    const url = req.originalUrl
    console.log(`[${timeStamp}] ${method} to ${url}`)
    console.log(Action)
}

async function validateActionId(req,res,next) {
    try {
        const action = await Action.get(req.params.id)
        if(!action) {
            res.status(404).json({
                message: "not found"
            })
    } else {
        req.action = action
        next()
    }
    }
    catch (err){
        res.status(500).json({
            message: "Problem finding action"
        })
    }
}

function validateAction(req, res, next){

    const {project_id, description, notes, completed} = req.body
    if(!project_id || !description || !notes){
        res.status(400).json({
            message:"missing required text field"
        })
    } else {
        req.project_id = project_id
        req.description = description.trim()
        req.notes = notes
        req.completed = completed
        next()
    }
}

function validateActionUpdate(req, res, next){
    const {project_id, description, notes, completed} = req.body
    if(!project_id || !description || !notes || completed === undefined){
        res.status(400).json({
            message:"missing required text field"
        })
    } else {
        req.project_id = project_id
        req.description = description
        req.notes = notes
        req.completed = completed
        next()
    }
}

module.exports = {
    logger,
    validateActionId,
    validateAction,
    validateActionUpdate
}
