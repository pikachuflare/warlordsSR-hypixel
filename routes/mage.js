"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const PlayerDB_1 = require("../src/PlayerDB");
const router = express.Router();
router.get('/', async function (req, res, next) {
    try {
        const players = await PlayerDB_1.PlayerModel.find({}, { name: 1, uuid: 1, warlords_sr: 1 }).sort({ "warlords_sr.mage.SR": -1 }).limit(1000).lean(true);
        res.render('mage', { PAGE_TITLE: 'Mage|WarlordsSR', PLAYERS: players });
    }
    catch (err) {
        next(err);
    }
});
module.exports = router;
