module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}
// exports an object!!!
//getIndex is a method in the object

//looks like don't need to specify views folder, "views" is std i guess?
