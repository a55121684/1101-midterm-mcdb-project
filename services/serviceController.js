const Category = require('../models/Category2');

exports.getCategories = async (req, res) =>{
    try{
        return await Category.fetchAll(); 

    }catch(err){
        console.log('getCategories',err);
    }

}