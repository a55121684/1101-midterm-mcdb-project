const serviceController2 = require('../services/serviceController2');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceController2.getCategories();
    return res.json(data);
    
  }catch (err) {
    console.log('Controller getCategories', err);
  }
};
