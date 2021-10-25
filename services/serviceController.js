const Category = require('../models/Category');

exports.getCategories = async (req, res) =>{
    try{
        return await Category.fetchAll(); 

    }catch(err){
        console.log('getCategories',err);
    }

}