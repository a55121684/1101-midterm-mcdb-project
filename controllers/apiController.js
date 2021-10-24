const serviceController = require('../services/serviceController');

exports.getCategories = async (req, res) => {
  try {
    const data = await serviceController.getCategories();
    return res.json(data);
    
  }catch (err) {
    console.log('Controller getCategories', err);
  }
};
