const mongoose = require("mongoose")

const validateMongoDbId = (id)=>{
    const isvalid = mongoose.Schema.Types.isValid(id)
        if(!isvalid) throw new Error("This id is not a valid")

}

module.exports = validateMongoDbId;