const express = require('express');
const router = express.Router();
const Movie = require('../../models/movie');

router.get('/', async (req,res) => {
    //console.log(req.query);
     Movie.find()
         .sort({ date: -1 })
         .limit(20)
         .then(movies => res.json(movies))
})

router.post('/s', async (req,res) => {
    try{
        var word = req.body.name.trim().split(' ');
        var result = [];
        var reg = new RegExp(req.body.name.trim(),'i');
        var movie = Movie.find({ name: reg},{'name':2}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
        movie.exec(function(err,data){
            if(!err){
                if(data && data.length && data.length > 0){
                    data.forEach(mov => {
                        let obj = {
                            id:mov._id,
                            name:mov.name
                        };
                        result.push(obj);       
                    });
                    res.json(result);
                }else{
                    var testWord = "";
                    word.slice().reverse().forEach(a => testWord += a + " ");
                    reg = new RegExp(testWord.trim(),'i');
                    movie = Movie.find({ name: reg},{'name':2}).sort({"updated_at":-1}).sort({"created_at":-1}).limit(20);
                    movie.exec(function(err,data){
                        if(!err){
                            if(data && data.length && data.length > 0){
                                data.forEach(mov => {
                                    let obj = {
                                        id:mov._id,
                                        name:mov.name
                                    };
                                    result.push(obj);       
                                });
                                res.json(result);
                            }else{
                                movie = "";
                                res.status(400).json({message:"Not Found"});
                            }
                        }
                    });
                }
            }
        });
    }catch(err){

    }
})

router.post('/add', async (req,res) => {
    const movie = await Movie.findOne({ imdb: req.body.imdb});

    if(movie){
        res.status(422).json({message:"Movie Already Exists"});
    }
    else{
        const newMovie = new Movie({
            imdb:req.body.imdb,
            name:req.body.name,
            date:req.body.date,
            audio:req.body.audio,
            poster:req.body.poster,
            shot1:req.body.shot1,
            shot2:req.body.shot2,
            shot3:req.body.shot3,
            shot4:req.body.shot4,
            shot5:req.body.shot5,
            shot6:req.body.shot6,
            x264480p:req.body.x264480p,
            x264720p:req.body.x264720p,
            x2641080p:req.body.x2641080p,
            x265720p:req.body.x265720p,
            x2651080p:req.body.x2651080p,
            online:req.body.online
        });
        const newUser = await newMovie.save();
        res.json(newUser);
    }
})

router.delete('/del/:id', async (req,res) => {
    Movie.findById(req.params.id)
        .then(movie => movie.remove().then(() => res.json({success:true})))
        .catch(err => res.status(404).json({success:false}))
})

module.exports = router;