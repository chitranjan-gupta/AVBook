const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    imdb:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    date:{
        type:Number,
        required:true
    },
    audio:{
        type:String,
        required:true
    },
    poster:{
        type:String,
        required:true
    },
    shot1:{
        type:String
    },
    shot2:{
        type:String
    },
    shot3:{
        type:String
    },
    shot4:{
        type:String
    },
    shot5:{
        type:String
    },
    shot6:{
        type:String
    },
    x264480p:{
        type:String,
        default:"Adding Soon"
    },
    x264720p:{
        type:String,
        default:"Adding Soon"
    },
    x2641080p:{
        type:String,
        default:"Adding Soon"
    },
    x265720p:{
        type:String,
        default:"Adding Soon"
    },
    x2651080p:{
        type:String,
        default:"Adding Soon"
    },
    online:{
        type:String,
        default:"Adding Soon"
    }
});

module.exports = Movie = mongoose.model('Movie',MovieSchema);