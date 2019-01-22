"use strict";
var backList = [
	{ img: "alch1-min.jpg", title: "\"\"", author: "青舞飞扬", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=449726396&searchtext="  },
	{ img: "bane1-min.jpg", title: "\"Terrifying Tumor\"", author: "VLEKᴬʳᵗꜟˢᵗ", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=681592702&searchtext="  },
	{ img: "barfight-min.jpg", title: "\"Bar Fight\"", author: "Jason Wang", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=321606653&searchtext="  },
	{ img: "bh1-min.jpg", title: "\"\"", author: "wtf.friz", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=251942328&searchtext=hunter"  },
	{ img: "calm-min.jpg", title: "\"Calm Before the Storm\"", author: "yako", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=246898852&searchtext="  },
	{ img: "deforestation-min.jpg", title: "\"Deforestation\"", author: "Jason Wang", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=318310194&searchtext="  },
	{ img: "disruptor1-min.jpg", author: "Virgl", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=447875426&searchtext="  },
	{ img: "drow1-min.jpg", title: "\"Snowstorm Ranger\"", author: "Уuri", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=449953008&searchtext="  },
	{ img: "facelessrex-min.jpg", title: "\"Faceless Rex\"", author: "Уuri", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=449570747&searchtext=" },
	{ img: "iceandfire-min.jpg", title: "\"Ice and Fire \"", author: "Olivi", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=219979961&searchtext="  },
	{ img: "lina1-min.jpg", title: "\"Feathery Soul\"", author: "PrivateRowan", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=413579191&searchtext="  },
	{ img: "medusa1-min.jpg", title: "\"Hellenic Serpentine\"", author: "Evil Kon", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=271181742&searchtext="  },
	{ img: "ns1-min.jpg", title: "\"Night Terror\"", author: "C O R E", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=206660408&searchtext="  },
	{ img: "phantom1-min.jpg", title: "\"Phantom Power\"", author: "BuzzKill", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=336830750&searchtext="  },
	{ img: "pugna1-min.jpg", title: "\"Curse of the Scareking\"", author: "madshock", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=856099753&searchtext=hunter"  },
	{ img: "razor1-min.jpg", title: "\"Hurricane Scourge\"", author: "Kramol'nik", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=302797000&searchtext="  },
	{ img: "roshan1-min.jpg", title: "\"The Immortal's Realm\"", author: "Puffin", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=311515151&searchtext="  },
	{ img: "sd1-min.jpg", title: "\"Mantle of the Shadow Demon\"", author: "Celth", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=300826008&searchtext="  },
	{ img: "sniper1-min.jpg", title: "\"\"", author: "Nikey", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=449278182&searchtext=hunter"  },
	{ img: "techiesvsjakiro-min.jpg", title: "\"Techies VS Jakiro\"", author: "Lady Bane", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=375021327&searchtext=" },
    { img: "bristle.jpg", title: "\"Bristleback\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
    { img: "timbersaw1-min.jpg", title: "\"Renewal of Spring\"", author: "katzeimsack", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=832806680&searchtext= "  },
    { img: "tempest1-min.jpg", title: "\"The Fractured Guardian\"", author: "Jigglypuff", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=687819399&searchtext="  },
    { img: "wind1-min.jpg", title: "\"Song of the Blue Bird\"", author: "Graff", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=679386940&searchtext="  },
    { img: "ursa1-min.jpg", title: "\"Ursa the Pride of North\"", author: "solologan", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=289762031&searchtext="  },
    { img: "thebattle-min.jpg", title: "\"The Battle\"", author: "Willypup", url: "https://steamcommunity.com/sharedfiles/filedetails/?id=308182990&searchtext="  },
    { img: "vs1-min.jpg", title: "\"Vengeful Spirit\"", author: "MugenMcFugen", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=231516618&searchtext="  },
    { img: "vs2-min.jpg", title: "\"The Dark Throne\"", author: "Meshroom", url: "http://steamcommunity.com/sharedfiles/filedetails/?id=288256307&searchtext="  },
	{ img: "12b5d5e1c6ee823697971e6c8819c8f4-min.jpg" },
	{ img: "5268964-invoker-dota-2-wallpaper-min.jpg" },
	{ img: "6867008-dota-2-wallpaper-min.jpg" },
	{ img: "47092266-min.jpg" },
	{ img: "931662123-min.jpg"},
	{ img: "17222449699_039f5c5869_b-min.jpg" },
	{ img: "au4f5GX-min.jpg"},
	{ img: "dota-2-terrorblade-wallpaper-hd-min.jpg"},
	{ img: "Terrorblade-Dota-2-Wallpaper-HD-min.jpg" },
	{ img: "wallpapersdota2.com-695-min.jpg"},
	{ img: "3_Dota2-Timbersaw-min.jpg" },
	{ img: "doom2-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/"  },
	{ img: "dkend8-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/"  },
	{ img: "Dragon7-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/"  },
	{ img: "screen-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/"  },
	{ img: "Necrosp4-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/"  },
	{ img: "venge-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/" },
	{ img: "PAcombine-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/"  },
	{ img: "Salofinish4-min.jpg", author: "Exchy", url: "http:prayer324.deviantart.com/" },
    { img: "abaddon.jpg" },
	{ img: "calmbeforehorn.jpg", author: "Eran Fowler", url: "http://eranfolio.deviantart.com/" },
	{ img: "dragonknight.jpg" },
	{ img: "drow.jpg" },
	{ img: "huskarfire.jpg" },
	{ img: "luna.jpg" },
	{ img: "pa.jpg" },
	{ img: "ta.jpg" },
	{ img: "tidehunter.jpg" },
	{ img: "ursa.jpg" },
	{ img: "bladeandbow.jpg" },
	{ img: "bristle.jpg", title: "\"Bristleback\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "ck.jpg", author: "Chaos Knight", url: "http://biggreenpepper.deviantart.com" },
	{ img: "clink.jpg", title: "\"Clinkz Bone\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "clockwerk.jpg", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "crystal_maiden.jpg", title: "\"Carry Maiden\"", author: "eric geusz", url: "http://entroz.deviantart.com" },
	{ img: "direancient.jpg" },
	{ img: "dirge.jpg", title: "\"Dirge\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "doom.jpg", title: "\"Doom\"", author: "eric geusz", url: "http://steamcommunity.com/id/sfmruls1337" },
	{ img: "doom2.jpg", title: "\"Doom\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "ember.jpg", title: "\"Ember Spirit\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "es.jpg", title: "\"Earth Spirit\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "io.jpg" },
	{ img: "jugg.jpg", title: "\"Jugg Sakura\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "jugg2.jpg", title: "\"Jugg Loading\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "kotl.jpg", title: "\"Keeper Of The Light\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "medusa.jpg", title: "\"Medusa\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "midlane.jpg" },
	{ img: "np.jpg", title: "\"Nature's Prophet\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "np2.jpg" },
	{ img: "nyx.jpg", title: "\"Nyx Assassin\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "od.jpg", title: "\"Obsidian Destroyer\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "pl.jpg", title: "\"Phantom Lancer\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "puck.jpg", title: "\"Puck\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "pureskill.jpg" },
	{ img: "radiantancient.jpg" },
	{ img: "razor.jpg", title: "\"Razor\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "roshan.jpg" },
	{ img: "rubick.jpg" },
	{ img: "sd.jpg", title: "\"Shadow Demon\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "sf.jpg", title: "\"Shadow Fiend\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "silencer.jpg", title: "\"Silencer\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "sky.jpg", title: "\"Skywrath Mage\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "slardar.jpg", title: "\"Slardar\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "sven.jpg", title: "\"The Fearless\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "venomancer.jpg", title: "\"Lesale Deathbringer\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "venomancer2.jpg", title: "\"Veno\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "vs.jpg", title: "\"Vengeful Spirit\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "bane_elemental.jpg", title: "\"Bane Elemental\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "Broodmother.jpg", title: "\"Broodmother\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "dark_seer.jpg", title: "\"Dark Seer\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "leshrac.jpg", title: "\"Leshrac\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "Lich.jpg", title: "\"Lich\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "night_stalker.jpg", title: "\"Night Stalker\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "Remembering_Skeleton_King.jpg", title: "\"Remebering Skeleton King\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "rikimaru.jpg", title: "\"Rikimaru\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "tiny.jpg", title: "\"Tiny\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "visage.jpg", title: "\"Visage\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
	{ img: "01vNZZh.jpg" },
	{ img: "0w5fIvW.jpg" },
	{ img: "10EpFKt.jpg" },
	{ img: "18wahBc.jpg" },
	{ img: "1iDvdyl.jpg" },
	{ img: "1uuO1Ne.jpg" },
	{ img: "2dADonb.jpg" },
	{ img: "2kq4mRt.jpg" },
	{ img: "2qHTqxv.jpg" },
	{ img: "37HkAJ7.jpg" },
	{ img: "3F2cNfH.jpg" },
	{ img: "3T3eBT1.jpg" },
	{ img: "3U4qJBL.jpg" },
	{ img: "48KDDrm.jpg" },
	{ img: "4aDEK0S.jpg" },
	{ img: "4gbsXmL.jpg" },
	{ img: "66BzmL4.jpg" },
	{ img: "69VHpcR.jpg" },
	{ img: "6gLmLwA.jpg" },
	{ img: "6ifDsFY.jpg" },
	{ img: "6IwGhpk.jpg" },
	{ img: "7b8DsDX.jpg" },
	{ img: "8gnJQEO.jpg" },
	{ img: "a3hPCA5.jpg" },
	{ img: "Ab12Qjq.jpg" },
	{ img: "aClD7hl.jpg" },
	{ img: "AtOJ2eb.jpg" },
	{ img: "bCw4j0I.jpg" },
	{ img: "BDifwi8.jpg" },
	{ img: "bnyI5LA.jpg" },
	{ img: "bsoGxxW.jpg" },
	{ img: "caecNCK.jpg" },
	{ img: "CiI0XKj.jpg" },
	{ img: "cTSfTjY.jpg" },
	{ img: "CuVjJEY.jpg" },
	{ img: "D4VD8iC.jpg" },
	{ img: "d65DpOz.jpg" },
	{ img: "dkwEzik.jpg" },
	{ img: "dv8I5qK.jpg" },
	{ img: "ECHLfTL.jpg" },
	{ img: "EiR7Qmk.jpg" },
	{ img: "fiC1NK4.jpg" },
	{ img: "fKb5Xp6.jpg" },
	{ img: "fL1VUqa.jpg" },
	{ img: "g4FLSnB.jpg" },
	{ img: "G6pqQhz.jpg" },
	{ img: "hgunBT9.jpg" },
	{ img: "hRjoUPK.jpg" },
	{ img: "HvxnzqD.jpg" },
	{ img: "HYxfOqq.jpg" },
	{ img: "ifjccyj.jpg" },
	{ img: "ik300X0.jpg" },
	{ img: "iReOLOQ.jpg" },
	{ img: "iusIdmx.jpg" },
	{ img: "jCYlSyZ.jpg" },
	{ img: "KDE96QY.jpg" },
	{ img: "kFvNmfz.jpg" },
	{ img: "kN4405O.jpg" },
	{ img: "KwAlKip.jpg" },
	{ img: "l1kqsKO.jpg" },
	{ img: "l8ScUAs.jpg" },
	{ img: "lzVZ52z.jpg" },
	{ img: "MChCjtr.jpg" },
	{ img: "MDoojh5.jpg" },
	{ img: "mKj682e.jpg" },
	{ img: "o39GFMj.jpg" },
	{ img: "oAGtTH7.jpg" },
	{ img: "oamIgBc.jpg" },
	{ img: "OhYnpwS.jpg" },
	{ img: "ozMgrbt.jpg" },
	{ img: "qdWoJki.jpg" },
	{ img: "qTlCw4p.jpg" },
	{ img: "r9z3Hax.jpg" },
	{ img: "RHPN6AF.jpg" },
	{ img: "RIMXelb.jpg" },
	{ img: "roLjhNM.jpg" },
	{ img: "RpBXJeG.jpg" },
	{ img: "ruuUQfE.jpg" },
	{ img: "RVqbv5M.jpg" },
	{ img: "s7iAIeB.jpg" },
	{ img: "S9H8WfR.jpg" },
	{ img: "SIkVU6w.jpg" },
	{ img: "SyFqypt.jpg" },
	{ img: "TBuwrFJ.jpg" },
	{ img: "THvsvOd.jpg" },
	{ img: "TnvrLOp.jpg" },
	{ img: "TrXWgsb.jpg" },
	{ img: "uLoTf74.jpg" },
	{ img: "Uv6XNJa.jpg" },
	{ img: "v7aroXO.jpg" },
	{ img: "Vec1ZOF.jpg" },
	{ img: "vgZ5hSn.jpg" },
	{ img: "VKPozqg.jpg" },
	{ img: "W0S1DKS.jpg" },
	{ img: "waeDOb0.jpg" },
	{ img: "WkZiBaV.jpg" },
	{ img: "woCc0EE.jpg" },
	{ img: "WXqsXbU.jpg" },
	{ img: "x9CE3ex.jpg" },
	{ img: "XIfjupN.jpg" },
	{ img: "xKkoNpQ.jpg" },
	{ img: "xOaUZPY.jpg" },
	{ img: "XV0wYZW.jpg" },
	{ img: "xylKoQG.jpg" },
	{ img: "ZHrAZAZ.jpg" },
	{ img: "Znjx4Ls.jpg" },
	{ img: "ZRzGl3b.jpg" },
	{ img: "ZyegbCE.jpg" },	
    { img: "fingerdeath.jpg", title: "\"Finger Of Death\"", author: "AeridicCore", url: "http://aeridiccore.deviantart.com/" },
    { img: "kunkkaship.jpg", title: "\"Kunkka\"", author: "Dinhosaur", url: "http://dinhosaur.deviantart.com/" },
    { img: "svenvictorbang.jpg", title: "\"Sven\"", author: "VictorBang", url: "http://victorbang.deviantart.com/" },
    { img: "DragonKnightlongai.jpg", title: "\"Dragon Knight\"", author: "longai", url: "http://longai.deviantart.com/" },
    { img: "yurnero_the_juggernaut_by_longai-d9po4k0.jpg", title: "\"Juggernaut\"", author: "longai", url: "http://longai.deviantart.com/" },
    { img: "windrunner_by_longai-d6uxayv.jpg", title: "\"Windrunner\"", author: "longai", url: "http://longai.deviantart.com/" },
    { img: "kunkka_by_longai-d5oh5yz.jpg", title: "\"Kunkkat\"", author: "longai", url: "http://longai.deviantart.com/" },
    { img: "lanaya__the_templar_assassin_by_longai-d6xwdut.jpg", title: "\"Lanaya the Templar Assassin\"", author: "longai", url: "http://longai.deviantart.com/" },
    { img: "dota_2_jugg_vs_sven_by_biggreenpepper-d7bor9n.jpg", title: "\"jugg Vs Sven\"", author: "BigGreenPepper", url: "http://biggreenpepper.deviantart.com" },
    { img: "juggernaut_dota_2_by_david_de_leon_luis_by_daviddleonluis-d5cv9k0.jpg", title: "\"Juggernaut\"", author: "Daviddleonluis", url: "http://daviddleonluis.deviantart.com/" },
    { img: "charge_of_the_space_cow_by_exomemory-d8kyuxb.jpg", title: "\"Charge Of The Space Cow\"", author: "ExoMemory", url: "http://exomemory.deviantart.com/" },
    { img: "_death_marches_______by_exomemory-d86uyv7.jpg", title: "\"Death Marches~!!!!'\"", author: "ExoMemory", url: "http://exomemory.deviantart.com/" },
    { img: "dota_2__phantom_assassin_by_taopaint-d6j291x.jpg", title: "\"Phantom Assassin\"", author: "TaoPaint", url: "http://taopaint.deviantart.com/" },
    { img: "dota_2_roshan_by_d_k0d3-d4ys8u8.jpg", title: "\"Roshan\"", author: "d-k0d3", url: "http://d-k0d3.deviantart.com/" },
    { img: "phantom_assassin_by_d_k0d3-d6n08dd.jpg", title: "\"Phantom Assassin\"", author: "d-k0d3", url: "http://d-k0d3.deviantart.com/" },
    { img: "dota_2___tusk_by_d_k0d3-d5uy12f.jpg", title: "\"Tusk\"", author: "d-k0d3", url: "http://d-k0d3.deviantart.com/" },
    { img: "medusa_by_d_k0d3-d5r1r0v.jpg", title: "\"Medusa\"", author: "d-k0d3", url: "http://d-k0d3.deviantart.com/" },
    { img: "dota-2-screenshot-32.jpg" },
    { img: "dota-2-screenshot-29.jpg" },
    { img: "the_radiant_by_sandara-d7q5jzw.jpg" },
    { img: "the_dire_by_sandara-d7rq3hf.jpg" },
    { img: "dota2hq.eu-enigma-3d-art-1920x1080.jpg" },
    { img: "cute-spirit-breaker-wallpaper.jpg" },
    { img: "Magnus Art Heroes Dota 2.jpg" },
    { img: "spirit-breaker-vs-sniper-wallpaper.jpg" },
    { img: "bounty_hunter_dota_2_art_94679_1920x1080.jpg" },
    { img: "-font-b-DotA-b-font-2-Posters-SAND-KING-font-b-Art-b-font-Wall.jpg" },
    { img: "eldertitan_b2.jpg" },
    { img: "nyx-dota-2-beetle-art-650x366.jpg" },
    { img: "shaman_s.jpg" },
    { img: "Doom-Dota-2-Art-2.jpg" },
    { img: "dota-2-wraith-king-ostarion.jpg" },
    { img: "886423153.jpg" },
    { img: "dota-2-wallpapers-dota-2-art-spiritbreaker-vs-phantom-assassin-5347782.jpg" },
    { img: "6866984-dota-2.jpg" },
    { img: "114367627.jpg" },
    { img: "7208938.jpg" },
    { img: "roshan_vs_ursa__dota_fan_art__by_negorobson-d6jn4fi.jpg" },
    { img: "592261451.jpg" },
    { img: "bane-wallpaper-hd-1920x1080-1080p-1920x1080-wallpaper-2653008.jpg" },
    { img: "dota2hq.eu-squee-spleen-and-spoon-the-techies-1600x900.jpg" },

];