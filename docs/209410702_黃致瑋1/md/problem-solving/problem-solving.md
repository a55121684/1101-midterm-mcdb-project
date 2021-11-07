# 問題解決

##1.

如何創框架
[參考老師的筆記](https://www.evernote.com/shard/s16/client/snv?noteGuid=7c1427d8-267d-e2d5-f967-fa2a875965fc&noteKey=7d20ca7b6af569afc9276810d965edd4&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs16%2Fsh%2F7c1427d8-267d-e2d5-f967-fa2a875965fc%2F7d20ca7b6af569afc9276810d965edd4&title=%255B110-2N-db%255D%2BUse%2BExpress%2BGenerator%2Bto%2Bgenerate%2Bthe%2Binitial%2Bcrown_xx%2Bapp)

##2.
創建HEROKU的DATA
[參考資料](https://rnnnnn.medium.com/%E5%9C%A8-heroku-%E4%BD%88%E7%BD%B2-postgres-%E8%B3%87%E6%96%99%E5%BA%AB-c473bff69d1c)

##3.
如何寫控制
```
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


```

##4.

連接database

```
const { Pool } = require('pg');
let pool;
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false },
  });
} else {
  pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'd7qtraoo3tsfjb',
    password: '0000',
    port: '5432',
  });
}

module.exports = pool;
```

##5.

時間配合問題

由於這次是分組作業，時間上難以需要配合，所以我們採用共同編輯github的方式來克服時間地點的問題。


