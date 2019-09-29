const Post = require('../database/models/Post')

module.exports = (req, res) => {
    Post.findOneAndRemove({_id:req.params.id},(err,sucess)=>{
        if(err){
            console.log(err)
        }else{
            res.redirect("/company/posts");
        }
    })
    
}