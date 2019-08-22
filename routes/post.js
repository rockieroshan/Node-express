const express = require("express");
const router = express.Router();
const Post = require('../model/post');

router.get('/', async (req, res)=>{
    try{
        const AllPosts = await Post.find();
        res.json(AllPosts);
    }
    catch(err){
        res.send(err);
    }
});

router.get('/:id', async (req, res)=>{
    try{
        const getOnePost = await Post.findById(req.params.id);
        res.json(getOnePost);
        
    }
    catch(err){
        res.json({ERROR:err});
    }
});

router.get('/specific', (req, res)=>{
    res.send('This is from specific');
});

router.post('/', async (req, res)=>{
    // console.log(req.body);
    const posts = new Post({
        title:req.body.title,
        description:req.body.description,
    })
    try{
        const Update = await posts.save();
        res.json(Update);
    }
    catch(err){
        res.json({ERROR:err});
    }
});

router.delete('/:id', async (req, res)=>{
    try{
        const RemoveOnePost = await Post.findByIdAndRemove({_id:req.params.id});
        res.json({RemoveOnePost});
    }
    catch(err){
        res.json({ERROR:err});
    }
});
router.post('/:id', async (req, res)=>{
    try{
        const UpdateOnePost = await Post.updateOne(
            {_id:req.params.id}, 
            {$set :{ title:req.body.title }}
            );
        res.json(UpdateOnePost);
    }
    catch(err){
        res.json({ERROR:err});
    }
});

module.exports = router;