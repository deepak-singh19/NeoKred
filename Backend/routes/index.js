const express=require("express");
const router= express.Router();

const signUp= require('./sign-Up');
const login= require('./login');

router.post("/sign-up", signUp);
router.post("/login",login);

module.exports =router;