import * as express from 'express'
const router = express.Router();
import {Player} from "../src/Player";

/* GET home page. */
router.get('/', async function(req, res, next) {
    try{
        const players = await Player.find({}, {name : 1, uuid : 1, warlords_sr : 1}).sort({"warlords_sr.SR" : -1}).lean(true);
        res.render('overview', { PAGE_TITLE: 'Overview|WarlordsSR', PLAYERS : players });
    }catch (err){
        next(err)
    }
});

module.exports = router;