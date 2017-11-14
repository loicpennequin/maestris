'use strict';

const slugify = require('slugify');
const db = require('../../config/database.js');

module.exports.getAll = (req,res,next)=>{
    let sql = `SELECT p.*,
    c.name AS category_name
    FROM posts as p
    INNER JOIN categories as c
    ON c.id = p.category_id`;

    let query = db.query(sql, (err, result)=>{
        if (err) throw err;
        res.json(result);
    });
};

module.exports.add = (req,res,next)=>{
    req.body.slug = slugify(req.body.title);
    req.body.created_at = new Date();

    let post = req.body;
    let sql = "INSERT INTO posts SET ?";

    let query = db.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.json({message: 'post added successfully'});
    });
};
