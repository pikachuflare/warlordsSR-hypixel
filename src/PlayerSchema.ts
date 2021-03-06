import * as mongoose from "mongoose";

export const PlayerSchema = new mongoose.Schema({
    uuid : String,
    name : String,

    warlords_sr : {
        SR : Number,
        KD : Number,
        KDA : Number,
        WL : Number,
        plays : Number,
        DHP : Number,

        paladin : {
            DHP : Number,
            SR : Number,
            WL : Number,
            avenger : {
                DHP : Number,
                SR : Number,
                WL : Number
            },
            crusader : {
                DHP : Number,
                SR : Number,
                WL : Number
            },
            protector : {
                DHP : Number,
                SR: Number,
                WL: Number
            }
        },

        mage : {
            SR : Number,
            WL : Number,
            DHP : Number,
            pyromancer : {
                DHP : Number,
                SR : Number,
                WL : Number
            },
            aquamancer : {
                DHP : Number,
                SR : Number,
                WL : Number
            },
            cryomancer : {
                DHP : Number,
                SR : Number,
                WL : Number
            }
        },

        warrior : {
            DHP : Number,
            SR : Number,
            WL : Number,
            berserker : {
                DHP : Number,
                SR : Number,
                WL : Number
            },
            defender : {
                DHP : Number,
                SR : Number,
                WL : Number
            }
        },

        shaman : {
            DHP : Number,
            SR : Number,
            WL : Number,
            thunderlord : {
                DHP : Number,
                SR : Number,
                WL : Number
            },
            earthwarden : {
                DHP : Number,
                SR : Number,
                WL : Number
            }
        }
    },

    warlords : {

        //general ######################################################################################################
        assists: Number,
        damage: Number,
        deaths: Number,
        heal: Number,
        damage_prevented: Number,
        damage_taken: Number,
        kills: Number,
        life_leeched: Number,
        wins: Number,
        wins_blu: Number,
        wins_red: Number,
        losses: Number,
        penalty: Number,

        //Warrior ######################################################################################################
        damage_warrior: Number,
        damage_prevented_warrior: Number,
        heal_warrior: Number,
        warrior_plays: Number,
        wins_warrior: Number,
        losses_warrior: Number,

        //BERS -------------------------------------------------------------------------------------------------------//
        berserker_plays: Number,
        damage_berserker: Number,
        damage_prevented_berserker: Number,
        heal_berserker: Number,
        life_leeched_berserker: Number,
        wins_berserker: Number,
        losses_berserker: Number,

        //DEF --------------------------------------------------------------------------------------------------------//
        wins_defender: Number,
        damage_defender: Number,
        defender_plays: Number,
        damage_prevented_defender: Number,
        heal_defender: Number,
        losses_defender: Number,

        //Paladin ######################################################################################################
        damage_prevented_paladin: Number,
        damage_paladin: Number,
        heal_paladin: Number,
        paladin_plays: Number,
        wins_paladin: Number,
        losses_paladin: Number,

        //AVENGER ----------------------------------------------------------------------------------------------------//
        avenger_plays: Number,
        damage_avenger: Number,
        damage_prevented_avenger: Number,
        heal_avenger: Number,
        wins_avenger: Number,
        losses_avenger: Number,

        //CRUS -------------------------------------------------------------------------------------------------------//
        losses_crusader: Number,
        crusader_plays: Number,
        heal_crusader: Number,
        damage_crusader: Number,
        damage_prevented_crusader: Number,
        wins_crusader: Number,

        //PROT -------------------------------------------------------------------------------------------------------//
        damage_prevented_protector: Number,
        protector_plays: Number,
        wins_protector: Number,
        heal_protector: Number,
        damage_protector: Number,
        losses_protector: Number,


        //Mage #########################################################################################################
        damage_prevented_mage: Number,
        damage_mage: Number,
        mage_plays: Number,
        heal_mage: Number,
        wins_mage: Number,
        losses_mage: Number,

        //PYRO -------------------------------------------------------------------------------------------------------//
        damage_prevented_pyromancer: Number,
        damage_pyromancer: Number,
        heal_pyromancer: Number,
        wins_pyromancer: Number,
        pyromancer_plays: Number,
        losses_pyromancer: Number,

        //CRYO -------------------------------------------------------------------------------------------------------//
        cryomancer_plays: Number,
        heal_cryomancer: Number,
        damage_prevented_cryomancer: Number,
        losses_cryomancer: Number,
        damage_cryomancer: Number,
        wins_cryomancer: Number,

        //AQUA -------------------------------------------------------------------------------------------------------//
        damage_prevented_aquamancer: Number,
        wins_aquamancer: Number,
        damage_aquamancer: Number,
        aquamancer_plays: Number,
        heal_aquamancer: Number,
        losses_aquamancer: Number,

        //Shaman #######################################################################################################
        heal_shaman: Number,
        damage_shaman: Number,
        losses_shaman: Number,
        shaman_plays: Number,
        damage_prevented_shaman: Number,
        wins_shaman: Number,

        //TL ---------------------------------------------------------------------------------------------------------//
        heal_thunderlord: Number,
        thunderlord_plays: Number,
        damage_thunderlord: Number,
        losses_thunderlord: Number,
        damage_prevented_thunderlord: Number,
        wins_thunderlord: Number,

        //EARTH ------------------------------------------------------------------------------------------------------//
        damage_prevented_earthwarden: Number,
        losses_earthwarden: Number,
        damage_earthwarden: Number,
        heal_earthwarden: Number,
        earthwarden_plays: Number,
        wins_earthwarden: Number,


        //Gamemodes ####################################################################################################

        //CTF --------------------------------------------------------------------------------------------------------//
        wins_capturetheflag: Number,
        wins_capturetheflag_blu: Number,
        wins_capturetheflag_red: Number,
        flag_conquer_team: Number,
        flag_conquer_self: Number,
        wins_capturetheflag_b: Number,
        wins_capturetheflag_a: Number,

        //DOM --------------------------------------------------------------------------------------------------------//
        wins_domination: Number,
        wins_domination_blu: Number,
        wins_domination_red: Number,
        wins_domination_a: Number,
        wins_domination_b: Number,

        //TDM --------------------------------------------------------------------------------------------------------//
        wins_teamdeathmatch: Number,
        wins_teamdeathmatch_a: Number,
        wins_teamdeathmatch_blu: Number,
        wins_teamdeathmatch_red: Number,
        wins_teamdeathmatch_b: Number,

    }
});

