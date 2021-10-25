const Category =require('../models/Category');
const Category2 = require('../models/Category2');

exports.getCategories = async (req, res) =>{
    try{
        return await Category.fetchAll(); 

    }catch(err){
        console.log('getCategories',err);
    }

    try{
        return await Category2.fetchAll(); 

    }catch(err){
        console.log('getCategories',err);
    }

}