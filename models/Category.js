const db = require("../utils/database");

const Category = class Category{
    constructor(id, img_url ,title ,content, button_content){
        this.id=id;
        this.img_url=img_url;
        this.title=title;
        this.content=content;
        this.button_content =button_content;
    }

    static async fetchAll(){
        try{
            let results = await db.query(`SELECT * from category`);
            return results.rows;
        } catch (e){
            console.log('error',e);
        }
    }
};

module.exports = Category;