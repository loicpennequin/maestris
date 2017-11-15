'use strict';

const slugify = require('slugify');
const db = require('../../config/database.js');

module.exports.getAll = (req,res,next)=>{
    let sql = `SELECT * FROM categories`;

    let query = db.query(sql, (err, result)=>{
        if (err) throw err;
        res.json(result);
    });
};

module.exports.add = (req,res,next)=>{
    console.log(req.body);
    req.body.slug = slugify(req.body.name);

    let post = req.body;
    let sql = "INSERT INTO categories SET ?";

    let query = db.query(sql, post, (err, result)=>{
        if (err) throw err;
        res.json({message: 'category added successfully'});
    });
};
