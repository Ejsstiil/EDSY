﻿/*
E:D Shipyard was created using assets and imagery from Elite: Dangerous, with the permission of Frontier Developments plc, for non-commercial purposes.
It is not endorsed by nor reflects the views or opinions of Frontier Developments and no employee of Frontier Developments was involved in the making of it.

Except where noted otherwise, all design, markup and script code for edshipyard.com is copyright (c) 2015,2016 taleden
and is provided under a Creative Commons Attribution-NonCommercial 4.0 International License (http://creativecommons.org/licenses/by-nc/4.0/).

The Elite: Dangerous game logic and data in this file remains the property of Frontier Developments plc,
and is used here as authorized by Frontier Customer Services (https://forums.frontier.co.uk/showthread.php?t=5349).
*/
var eddb = {
	version : 3004,
	ship : {
		 1 : {
			fdid:128049249, fdname:'SideWinder',
			id:1, stype:'mp', name:'Sidewinder', class:1, cost:4070, retail:32000,
			topspd:220, bstspd:320, mnv:5, shields:40, armour:60, mass:25,
			minthrust:45.454, boostcost:7, pitch:42, yaw:16, roll:110, pitchacc:220, yawacc:110, rollacc:240, minpitch:34,
			heatcap:140, heatdismin:1.18, heatdismax:18.15, fuelcost:50, hardness:20, masslock:6, crew:1,
			slots:{
				hardpoint:[1,1],
				utility  :[0,0],
				component:[1,2,2,2,1,1,1,1],
				military :[],
				internal :[2,2,1,1],
			},
			stock:{
				hardpoint:[62171,62171],
				utility  :[0,0],
				component:[40131,41250,42250,43250,44150,45150,46150,47130],
				military :[],
				internal :[30250,250,10150,0],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049250, fdname:'SideWinder_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:   25600, mass: 2.00, fdid:128049251, fdname:'SideWinder_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:   80320, mass: 4.00, fdid:128049252, fdname:'SideWinder_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:  132060, mass: 4.00, fdid:128049253, fdname:'SideWinder_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:  139420, mass: 4.00, fdid:128049254, fdname:'SideWinder_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		21 : {
			fdid:128049255, fdname:'Eagle',
			id:21, stype:'co', name:'Eagle', class:1, cost:10440, retail:44800,
			topspd:240, bstspd:350, mnv:7, shields:60, armour:40, mass:50,
			minthrust:75.0, boostcost:8, pitch:50, yaw:18, roll:120, pitchacc:220, yawacc:110, rollacc:240, minpitch:40,
			heatcap:165, heatdismin:1.38, heatdismax:21.48, fuelcost:50, hardness:28, masslock:6, crew:1,
			slots:{
				hardpoint:[1,1,1],
				utility  :[0],
				component:[1,2,3,3,1,2,2,2],
				military :[2],
				internal :[3,2,1,1],
			},
			stock:{
				hardpoint:[62160,62160,0],
				utility  :[0],
				component:[40131,41250,42350,43350,44150,45250,46250,47230],
				military :[0],
				internal :[30350,150,10150,0],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049256, fdname:'Eagle_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:   26880, mass: 4.00, fdid:128049257, fdname:'Eagle_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:   90050, mass: 8.00, fdid:128049258, fdname:'Eagle_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:  140090, mass: 8.00, fdid:128049259, fdname:'Eagle_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:  150390, mass: 8.00, fdid:128049260, fdname:'Eagle_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		31 : {
			fdid:128049261, fdname:'Hauler',
			id:31, stype:'fr', name:'Hauler', class:1, cost:29790, retail:52720,
			topspd:200, bstspd:300, mnv:4, shields:50, armour:100, mass:14,
			minthrust:35.0, boostcost:7, pitch:36, yaw:14, roll:100, pitchacc:220, yawacc:110, rollacc:240, minpitch:30,
			heatcap:123, heatdismin:1.06, heatdismax:16.20, fuelcost:50, hardness:20, masslock:6, crew:1,
			slots:{
				hardpoint:[1],
				utility  :[0,0],
				component:[1,2,2,2,1,1,1,2],
				military :[],
				internal :[3,3,2,1],
			},
			stock:{
				hardpoint:[62160],
				utility  :[0,0],
				component:[40131,41250,42250,43250,44150,45150,46150,47230],
				military :[],
				internal :[250,250,30250,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049262, fdname:'Hauler_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:   42180, mass: 1.00, fdid:128049263, fdname:'Hauler_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:  185050, mass: 2.00, fdid:128049264, fdname:'Hauler_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:  270300, mass: 2.00, fdid:128049265, fdname:'Hauler_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:  282420, mass: 2.00, fdid:128049266, fdname:'Hauler_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		41 : {
			fdid:128049267, fdname:'Adder',
			id:41, stype:'ex', name:'Adder', class:1, cost:40000, retail:87810,
			topspd:220, bstspd:320, mnv:4, shields:60, armour:90, mass:35,
			minthrust:45.454, boostcost:8, pitch:38, yaw:14, roll:100, pitchacc:200, yawacc:100, rollacc:220, minpitch:30,
			heatcap:170, heatdismin:1.45, heatdismax:22.60, fuelcost:50, hardness:35, masslock:7, crew:2,
			slots:{
				hardpoint:[2,1,1],
				utility  :[0,0],
				component:[1,3,3,3,1,2,3,3],
				military :[],
				internal :[3,3,2,2,1],
			},
			stock:{
				hardpoint:[0,62160,62160],
				utility  :[0,0],
				component:[40131,41350,42350,43350,44150,45250,46350,47330],
				military :[],
				internal :[250,30350,150,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049268, fdname:'Adder_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:   35120, mass: 3.00, fdid:128049269, fdname:'Adder_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:   79030, mass: 5.00, fdid:128049270, fdname:'Adder_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:  186770, mass: 5.00, fdid:128049271, fdname:'Adder_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:  206960, mass: 5.00, fdid:128049272, fdname:'Adder_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		25 : {
			fdid:128672138, fdname:'Empire_Eagle',
			id:25, stype:'co', name:'Imperial Eagle', class:1, cost:72180, retail:110830,
			topspd:300, bstspd:400, mnv:5, shields:80, armour:60, mass:50,
			minthrust:70.0, boostcost:8, pitch:40, yaw:15, roll:100, pitchacc:220, yawacc:110, rollacc:240, minpitch:30,
			heatcap:163, heatdismin:1.50, heatdismax:21.20, fuelcost:50, hardness:28, masslock:6, crew:1, // verify masslock
			slots:{
				hardpoint:[2,1,1],
				utility  :[0],
				component:[1,3,3,3,1,2,2,2],
				military :[2],
				internal :[3,2,1,1],
			},
			stock:{
				hardpoint:[0,62160,62160],
				utility  :[0],
				component:[40131,41350,42350,43350,44150,45250,46250,47230],
				military :[0],
				internal :[30350,150,10150,0],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128672140, fdname:'Empire_Eagle_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:   66500, mass: 4.00, fdid:128672141, fdname:'Empire_Eagle_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:  222760, mass: 8.00, fdid:128672142, fdname:'Empire_Eagle_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:  346550, mass: 8.00, fdid:128672143, fdname:'Empire_Eagle_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:  372040, mass: 8.00, fdid:128672144, fdname:'Empire_Eagle_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		22 : {
			fdid:128049273, fdname:'Viper',
			id:22, stype:'co', name:'Viper MkIII', class:1, cost:95900, retail:142930,
			topspd:320, bstspd:400, mnv:4, shields:105, armour:70, mass:50,
			minthrust:62.5, boostcost:10, pitch:35, yaw:15, roll:90, pitchacc:200, yawacc:100, rollacc:220, minpitch:30,
			heatcap:195, heatdismin:1.69, heatdismax:26.20, fuelcost:50, hardness:35, masslock:7, crew:1,
			slots:{
				hardpoint:[2,2,1,1],
				utility  :[0,0],
				component:[1,3,3,3,2,3,3,2],
				military :[3],
				internal :[3,3,2,1],
			},
			stock:{
				hardpoint:[62160,62160,0,0],
				utility  :[0,0],
				component:[40131,41350,42350,43350,44250,45350,46350,47230],
				military :[0],
				internal :[250,30350,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049274, fdname:'Viper_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:   57170, mass: 5.00, fdid:128049275, fdname:'Viper_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:  128640, mass: 9.00, fdid:128049276, fdname:'Viper_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:  304010, mass: 9.00, fdid:128049277, fdname:'Viper_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:  336890, mass: 9.00, fdid:128049278, fdname:'Viper_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		 2 : {
			fdid:128049279, fdname:'CobraMkIII',
			id:2, stype:'mp', name:'Cobra MkIII', class:1, cost:205800, retail:349720,
			topspd:280, bstspd:400, mnv:5, shields:80, armour:120, mass:180,
			minthrust:50.0, boostcost:10, pitch:40, yaw:10, roll:100, pitchacc:200, yawacc:100, rollacc:220, minpitch:30,
			heatcap:225, heatdismin:1.92, heatdismax:30.63, fuelcost:50, hardness:35, masslock:8, crew:2,
			slots:{
				hardpoint:[2,2,1,1],
				utility  :[0,0],
				component:[1,4,4,4,3,3,3,4],
				military :[],
				internal :[4,4,4,2,2,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0],
				utility  :[0,0],
				component:[40131,41450,42450,43450,44350,45350,46350,47430],
				military :[],
				internal :[350,350,30450,150,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049280, fdname:'CobraMkIII_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:  151890, mass:14.00, fdid:128049281, fdname:'CobraMkIII_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:  341750, mass:27.00, fdid:128049282, fdname:'CobraMkIII_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:  797410, mass:27.00, fdid:128049283, fdname:'CobraMkIII_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:  895000, mass:27.00, fdid:128049284, fdname:'CobraMkIII_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		28 : {
			fdid:128672255, fdname:'Viper_MkIV',
			id:28, stype:'co', name:'Viper MkIV', class:1, cost:310220, retail:437930,
			topspd:270, bstspd:340, mnv:3, shields:150, armour:150, mass:190,
			minthrust:64.815, boostcost:10, pitch:30, yaw:12, roll:90, pitchacc:200, yawacc:100, rollacc:220, minpitch:25,
			heatcap:209, heatdismin:1.82, heatdismax:28.98, fuelcost:50, hardness:35, masslock:7, crew:1, // verify masslock
			slots:{
				hardpoint:[2,2,1,1],
				utility  :[0,0],
				component:[1,4,4,4,2,3,3,4],
				military :[3],
				internal :[4,4,3,2,2,1],
			},
			stock:{
				hardpoint:[62160,62160,0,0],
				utility  :[0,0],
				component:[40131,41450,42450,43450,44250,45350,46350,47430],
				military :[0],
				internal :[350,350,30350,150,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128672257, fdname:'Viper_MkIV_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:  175180, mass: 5.00, fdid:128672258, fdname:'Viper_MkIV_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:  394140, mass: 9.00, fdid:128672259, fdname:'Viper_MkIV_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:  931490, mass: 9.00, fdid:128672260, fdname:'Viper_MkIV_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost: 1033210, mass: 9.00, fdid:128672261, fdname:'Viper_MkIV_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		43 : {
			fdid:128671217, fdname:'DiamondBack',
			id:43, stype:'ex', name:'Diamondback Scout', class:1, cost:461340, retail:564330,
			topspd:280, bstspd:380, mnv:5, shields:120, armour:120, mass:170,
			minthrust:60.714, boostcost:10, pitch:42, yaw:15, roll:100, pitchacc:200, yawacc:100, rollacc:220, minpitch:35,
			heatcap:346, heatdismin:2.42, heatdismax:48.05, fuelcost:50, hardness:40, masslock:8, crew:1,
			slots:{
				hardpoint:[1,1,2,2],
				utility  :[0,0,0,0],
				component:[1,4,4,4,2,3,2,4],
				military :[],
				internal :[3,3,3,2],
			},
			stock:{
				hardpoint:[0,0,62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41450,42450,43450,44250,45350,46250,47430],
				military :[],
				internal :[30350,0,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128671218, fdname:'DiamondBack_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:  225730, mass:13.00, fdid:128671219, fdname:'DiamondBack_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:  507900, mass:26.00, fdid:128671220, fdname:'DiamondBack_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost: 1185100, mass:26.00, fdid:128671221, fdname:'DiamondBack_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost: 1330120, mass:26.00, fdid:128671222, fdname:'DiamondBack_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		 8 : {
			fdid:128672262, fdname:'CobraMkIV',
			id:8, stype:'mp', name:'Cobra MkIV', class:1, cost:603740, retail:764720,
			topspd:200, bstspd:300, mnv:3, shields:120, armour:120, mass:210,
			minthrust:50.0, boostcost:10, pitch:30, yaw:10, roll:90, pitchacc:200, yawacc:100, rollacc:220, minpitch:25,
			heatcap:228, heatdismin:1.99, heatdismax:31.68, fuelcost:50, hardness:35, masslock:8, crew:2,
			slots:{
				hardpoint:[2,2,1,1,1],
				utility  :[0,0],
				component:[1,4,4,4,3,3,3,4],
				military :[],
				internal :[4,4,4,4,3,3,2,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0,0],
				utility  :[0,0],
				component:[40131,41450,42450,43450,44350,45350,46350,47430],
				military :[],
				internal :[30450,350,350,350,250,250,150,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128672264, fdname:'CobraMkIV_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:  305890, mass:14.00, fdid:128672265, fdname:'CobraMkIV_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:  688250, mass:27.00, fdid:128672266, fdname:'CobraMkIV_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost: 1605910, mass:27.00, fdid:128672267, fdname:'CobraMkIV_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost: 1802440, mass:27.00, fdid:128672268, fdname:'CobraMkIV_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		32 : {
			fdid:128049285, fdname:'Type6',
			id:32, stype:'fr', name:'Type-6 Transporter', class:2, cost:865790, retail:1045950,
			topspd:220, bstspd:350, mnv:3, shields:90, armour:180, mass:155,
			minthrust:40.909, boostcost:10, pitch:30, yaw:17, roll:100, pitchacc:220, yawacc:110, rollacc:240, minpitch:23,
			heatcap:179, heatdismin:1.70, heatdismax:24.55, fuelcost:50, hardness:35, masslock:8, crew:1,
			slots:{
				hardpoint:[1,1],
				utility  :[0,0,0],
				component:[1,3,4,4,2,3,2,4],
				military :[],
				internal :[5,5,4,4,3,2,2],
			},
			stock:{
				hardpoint:[62160,62160],
				utility  :[0,0,0],
				component:[40131,41350,42450,43450,44250,45350,46250,47430],
				military :[],
				internal :[450,450,350,350,30350,150,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049286, fdname:'Type6_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:  418380, mass:12.00, fdid:128049287, fdname:'Type6_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:  941350, mass:23.00, fdid:128049288, fdname:'Type6_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost: 2224730, mass:23.00, fdid:128049289, fdname:'Type6_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost: 2465290, mass:23.00, fdid:128049290, fdname:'Type6_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		53 : {
			fdid:128049291, fdname:'Dolphin',
			id:53, stype:'pa', name:'Dolphin', class:1, cost:1115320, retail:1337320,
			topspd:250, bstspd:350, mnv:3, shields:110, armour:110, mass:140,
			minthrust:48.0, boostcost:10, pitch:30, yaw:20, roll:100, pitchacc:220, yawacc:110, rollacc:240, minpitch:23,
			heatcap:165, heatdismin:1.91, heatdismax:31.35, fuelcost:50, hardness:35, masslock:9, crew:1, // verify masslock
			slots:{
				hardpoint:[1,1],
				utility  :[0,0,0],
				component:[1,4,5,4,4,3,3,4],
				military :[],
				internal :[5,4,4,3,2,2,2],
			},
			reserved:{
				internal :[{icr:1,ihrp:1,imahrp:1,imrp:1,ipc:1}],
			},
			stock:{
				hardpoint:[62160,62160],
				utility  :[0,0,0],
				component:[40131,41450,42550,43450,44450,45350,46350,47430],
				military :[],
				internal :[6550,350,30450,250,150,0,10150],
			},
			module:{
				40131 : { cost:      0, mass: 0.00, fdid:128049292, fdname:'Dolphin_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 534940, mass:32.00, fdid:128049293, fdname:'Dolphin_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:1203600, mass:63.00, fdid:128049294, fdname:'Dolphin_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:2808390, mass:63.00, fdid:128049295, fdname:'Dolphin_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:3152080, mass:63.00, fdid:128049296, fdname:'Dolphin_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		44 : {
			fdid:128671831, fdname:'DiamondBackXL',
			id:44, stype:'ex', name:'Diamondback Explorer', class:1, cost:1635700, retail:1894760,
			topspd:260, bstspd:340, mnv:4, shields:150, armour:150, mass:260,
			minthrust:61.538, boostcost:13, pitch:35, yaw:13, roll:90, pitchacc:200, yawacc:100, rollacc:220, minpitch:28,
			heatcap:351, heatdismin:2.46, heatdismax:50.55, fuelcost:50, hardness:42, masslock:10, crew:1,
			slots:{
				hardpoint:[3,2,2],
				utility  :[0,0,0,0],
				component:[1,4,4,5,3,4,3,5],
				military :[],
				internal :[4,4,3,3,2,2],
			},
			stock:{
				hardpoint:[0,62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41450,42450,43550,44350,45450,46350,47530],
				military :[],
				internal :[30450,350,250,0,10150,0],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128671832, fdname:'DiamondBackXL_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:  757900, mass:23.00, fdid:128671833, fdname:'DiamondBackXL_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost: 1705290, mass:47.00, fdid:128671834, fdname:'DiamondBackXL_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost: 3979000, mass:47.00, fdid:128671835, fdname:'DiamondBackXL_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost: 4465960, mass:47.00, fdid:128671836, fdname:'DiamondBackXL_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		 7 : {
			fdid:128671223, fdname:'Empire_Courier',
			id:7, stype:'mp', name:'Imperial Courier', class:1, cost:2481550, retail:2542930,
			faction:'Empire', rank:3,
			topspd:280, bstspd:380, mnv:4, shields:200, armour:80, mass:35,
			minthrust:78.571, boostcost:10, pitch:38, yaw:16, roll:90, pitchacc:200, yawacc:100, rollacc:220, minpitch:32,
			heatcap:230, heatdismin:1.62, heatdismax:25.05, fuelcost:50, hardness:30, masslock:7, crew:1,
			slots:{
				hardpoint:[2,2,2],
				utility  :[0,0,0,0],
				component:[1,4,3,3,1,3,2,3],
				military :[],
				internal :[3,3,2,2,2,1],
			},
			stock:{
				hardpoint:[62160,62160,0],
				utility  :[0,0,0,0],
				component:[40131,41450,42350,43350,44150,45350,46250,47330],
				military :[],
				internal :[250,250,30250,150,150,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128671224, fdname:'Empire_Courier_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 1017200, mass: 4.00, fdid:128671225, fdname:'Empire_Courier_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost: 2288600, mass: 8.00, fdid:128671226, fdname:'Empire_Courier_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost: 5408800, mass: 8.00, fdid:128671227, fdname:'Empire_Courier_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost: 5993700, mass: 8.00, fdid:128671228, fdname:'Empire_Courier_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		35 : {
			fdid:128672269, fdname:'Independant_Trader',
			id:35, stype:'fr', name:'Keelback', class:2, cost:2943870, retail:3126150,
			topspd:200, bstspd:300, mnv:2, shields:135, armour:270, mass:180,
			minthrust:45.0, boostcost:10, pitch:27, yaw:15, roll:100, pitchacc:220, yawacc:110, rollacc:240, minpitch:20,
			heatcap:215, heatdismin:1.87, heatdismax:29.78, fuelcost:50, hardness:45, masslock:8, crew:2, // verify masslock
			slots:{
				hardpoint:[1,1,2,2],
				utility  :[0,0,0],
				component:[1,4,4,4,1,3,2,4],
				military :[],
				internal :[5,5,4,3,2,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0],
				utility  :[0,0,0],
				component:[40131,41450,42450,43450,44150,45350,46250,47430],
				military :[],
				internal :[450,450,350,30350,150,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128672271, fdname:'Independant_Trader_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 1250460, mass:12.00, fdid:128672272, fdname:'Independant_Trader_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost: 2813540, mass:23.00, fdid:128672273, fdname:'Independant_Trader_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost: 6649330, mass:23.00, fdid:128672274, fdname:'Independant_Trader_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost: 7368340, mass:23.00, fdid:128672275, fdname:'Independant_Trader_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		45 : {
			fdid:128672276, fdname:'Asp_Scout',
			id:45, stype:'ex', name:'Asp Scout', class:2, cost:3817240, retail:3961150,
			topspd:220, bstspd:300, mnv:5, shields:120, armour:180, mass:150,
			minthrust:50.0, boostcost:13, pitch:40, yaw:15, roll:110, pitchacc:200, yawacc:100, rollacc:220, minpitch:35,
			heatcap:210, heatdismin:1.80, heatdismax:29.65, fuelcost:50, hardness:52, masslock:8, crew:2, // verify masslock
			slots:{
				hardpoint:[1,1,2,2],
				utility  :[0,0],
				component:[1,4,4,4,3,4,4,4],
				military :[],
				internal :[5,4,3,3,2,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0],
				utility  :[0,0],
				component:[40131,41450,42450,43450,44350,45450,46450,47430],
				military :[],
				internal :[350,350,30350,0,10150,0],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128672278, fdname:'Asp_Scout_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 1584460, mass:21.00, fdid:128672279, fdname:'Asp_Scout_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost: 3565040, mass:42.00, fdid:128672280, fdname:'Asp_Scout_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost: 8425380, mass:42.00, fdid:128672281, fdname:'Asp_Scout_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost: 9336440, mass:42.00, fdid:128672282, fdname:'Asp_Scout_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		23 : {
			fdid:128049309, fdname:'Vulture',
			id:23, stype:'co', name:'Vulture', class:1, cost:4689640, retail:4925620,
			topspd:210, bstspd:340, mnv:5, shields:240, armour:160, mass:230,
			minthrust:90.476, boostcost:16, pitch:42, yaw:17, roll:110, pitchacc:180, yawacc:90, rollacc:200, minpitch:35,
			heatcap:237, heatdismin:1.87, heatdismax:35.63, fuelcost:50, hardness:55, masslock:10, crew:2,
			slots:{
				hardpoint:[3,3],
				utility  :[0,0,0,0],
				component:[1,4,5,4,3,5,4,3],
				military :[5],
				internal :[5,4,2,1,1],
			},
			stock:{
				hardpoint:[62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41450,42550,43450,44350,45550,46450,47330],
				military :[0],
				internal :[30550,350,10150,0,0],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049310, fdname:'Vulture_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 1970250, mass:17.00, fdid:128049311, fdname:'Vulture_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost: 4433050, mass:35.00, fdid:128049312, fdname:'Vulture_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:10476780, mass:35.00, fdid:128049313, fdname:'Vulture_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:11609670, mass:35.00, fdid:128049314, fdname:'Vulture_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		42 : {
			fdid:128049303, fdname:'Asp',
			id:42, stype:'ex', name:'Asp Explorer', class:2, cost:6135660, retail:6661150,
			topspd:250, bstspd:340, mnv:4, shields:140, armour:210, mass:280,
			minthrust:48.0, boostcost:13, pitch:38, yaw:10, roll:100, pitchacc:200, yawacc:100, rollacc:220, minpitch:30,
			heatcap:272, heatdismin:2.34, heatdismax:39.90, fuelcost:50, hardness:52, masslock:11, crew:2,
			slots:{
				hardpoint:[1,1,1,1,2,2],
				utility  :[0,0,0,0],
				component:[1,5,5,5,4,4,5,5],
				military :[],
				internal :[6,5,3,3,3,2,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0,0,0],
				utility  :[0,0,0,0],
				component:[40131,41550,42550,43550,44450,45450,46550,47530],
				military :[],
				internal :[550,30550,250,0,0,150,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049304, fdname:'Asp_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 2664460, mass:21.00, fdid:128049305, fdname:'Asp_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost: 5995040, mass:42.00, fdid:128049306, fdname:'Asp_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:14168270, mass:42.00, fdid:128049307, fdname:'Asp_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:15700340, mass:42.00, fdid:128049308, fdname:'Asp_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		 4 : {
			fdid:128049321, fdname:'Federation_Dropship',
			id:4, stype:'mp', name:'Federal Dropship', class:2, cost:13469990, retail:14314210,
			faction:'Federation', rank:3,
			topspd:180, bstspd:300, mnv:3, shields:200, armour:300, mass:580,
			minthrust:55.556, boostcost:19, pitch:30, yaw:14, roll:80, pitchacc:100, yawacc:50, rollacc:80, minpitch:20,
			heatcap:331, heatdismin:2.60, heatdismax:46.50, fuelcost:50, hardness:60, masslock:14, crew:2,
			slots:{
				hardpoint:[3,2,2,2,2],
				utility  :[0,0,0,0],
				component:[1,6,6,5,5,6,4,4],
				military :[4,4],
				internal :[6,5,5,4,3,3,2],
			},
			stock:{
				hardpoint:[0,0,0,62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41650,42650,43550,44550,45650,46450,47430],
				military :[0,0],
				internal :[550,450,30550,350,0,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049322, fdname:'Federation_Dropship_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 5725680, mass:44.00, fdid:128049323, fdname:'Federation_Dropship_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:12882780, mass:87.00, fdid:128049324, fdname:'Federation_Dropship_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:30446310, mass:87.00, fdid:128049325, fdname:'Federation_Dropship_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:33738580, mass:87.00, fdid:128049326, fdname:'Federation_Dropship_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		33 : {
			fdid:128049297, fdname:'Type7',
			id:33, stype:'fr', name:'Type-7 Transporter', class:3, cost:16780500, retail:17472250,
			topspd:180, bstspd:300, mnv:1, shields:156, armour:340, mass:350,
			minthrust:33.333, boostcost:10, pitch:22, yaw:22, roll:60, pitchacc:200, yawacc:50, rollacc:200, minpitch:16, minyaw:16,
			heatcap:226, heatdismin:2.17, heatdismax:32.45, fuelcost:50, hardness:54, masslock:10, crew:1, // verify masslock
			slots:{
				hardpoint:[1,1,1,1],
				utility  :[0,0,0,0],
				component:[1,5,5,5,4,4,3,5],
				military :[],
				internal :[6,6,6,5,5,5,3,3,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0],
				utility  :[0,0,0,0],
				component:[40131,41450,42550,43550,44450,45350,46350,47530],
				military :[],
				internal :[550,550,550,450,450,30450,0,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049298, fdname:'Type7_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 6988900, mass:32.00, fdid:128049299, fdname:'Type7_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:15725030, mass:63.00, fdid:128049300, fdname:'Type7_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:37163480, mass:63.00, fdid:128049301, fdname:'Type7_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:41182100, mass:63.00, fdid:128049302, fdname:'Type7_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		 9 : {
			fdid:128816574, fdname:'TypeX',
			id:9, stype:'mp', name:'Alliance Chieftain', class:2, cost:18572360, retail:19382250,
			topspd:230, bstspd:330, mnv:4, shields:200, armour:280, mass:400,
			minthrust:65.217, boostcost:19, pitch:38, yaw:16, roll:90, pitchacc:170, yawacc:60, rollacc:150, minpitch:32,
			heatcap:289, heatdismin:2.60, heatdismax:46.50, fuelcost:50, hardness:65, masslock:13, crew:2,
			slots:{
				hardpoint:[3,3,2,1,1,1],
				utility  :[0,0,0,0],
				component:[1,6,6,5,5,6,4,4],
				military :[4,4,4],
				internal :[6,5,4,2,2],
			},
			stock:{
				hardpoint:[62160,0,62160,0,0,0],
				utility  :[0,0,0,0],
				component:[40131,41650,42650,43550,44550,45650,46450,47430],
				military :[0,0,0],
				internal :[550,30550,350,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128816576, fdname:'TypeX_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 7752900, mass:40.00, fdid:128816577, fdname:'TypeX_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:17444030, mass:78.00, fdid:128816578, fdname:'TypeX_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:41226050, mass:78.00, fdid:128816579, fdname:'TypeX_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:45683980, mass:78.00, fdid:128816580, fdname:'TypeX_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		26 : {
			fdid:128672145, fdname:'Federation_Dropship_MkII',
			id:26, stype:'co', name:'Federal Assault Ship', class:2, cost:19071000, retail:19814210,
			faction:'Federation', rank:5,
			topspd:210, bstspd:350, mnv:4, shields:200, armour:300, mass:480,
			minthrust:71.429, boostcost:19, pitch:38, yaw:19, roll:90, pitchacc:170, yawacc:80, rollacc:200, minpitch:30,
			heatcap:286, heatdismin:2.53, heatdismax:45.23, fuelcost:50, hardness:60, masslock:14, crew:2, // verify masslock
			slots:{
				hardpoint:[3,3,2,2],
				utility  :[0,0,0,0],
				component:[1,6,6,5,5,6,4,4],
				military :[4,4],
				internal :[5,5,4,3,2,2],
			},
			stock:{
				hardpoint:[0,0,62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41650,42650,43550,44550,45650,46450,47430],
				military :[0,0],
				internal :[30550,450,350,350,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128672147, fdname:'Federation_Dropship_MkII_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 7925680, mass:44.00, fdid:128672148, fdname:'Federation_Dropship_MkII_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:17832780, mass:87.00, fdid:128672149, fdname:'Federation_Dropship_MkII_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:42144810, mass:87.00, fdid:128672150, fdname:'Federation_Dropship_MkII_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:46702080, mass:87.00, fdid:128672151, fdname:'Federation_Dropship_MkII_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		 3 : {
			fdid:128049315, fdname:'Empire_Trader',
			id:3, stype:'mp', name:'Imperial Clipper', class:3, cost:21077780, retail:22295860,
			faction:'Empire', rank:7,
			topspd:300, bstspd:380, mnv:5, shields:180, armour:270, mass:400,
			minthrust:60.0, boostcost:19, pitch:40, yaw:18, roll:80, pitchacc:200, yawacc:100, rollacc:220, minpitch:30,
			heatcap:304, heatdismin:2.63, heatdismax:46.80, fuelcost:50, hardness:60, masslock:12, crew:2,
			slots:{
				hardpoint:[3,3,2,2],
				utility  :[0,0,0,0],
				component:[1,6,6,5,5,6,5,4],
				military :[],
				internal :[7,6,4,4,3,3,2,2],
			},
			stock:{
				hardpoint:[0,0,62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41650,42650,43550,44550,45650,46550,47430],
				military :[],
				internal :[650,30650,350,0,0,0,150,0],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128049316, fdname:'Empire_Trader_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 8918340, mass:30.00, fdid:128049317, fdname:'Empire_Trader_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:20066270, mass:60.00, fdid:128049318, fdname:'Empire_Trader_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:47423290, mass:60.00, fdid:128049319, fdname:'Empire_Trader_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:52551340, mass:60.00, fdid:128049320, fdname:'Empire_Trader_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		27 : {
			fdid:128672152, fdname:'Federation_Gunship',
			id:27, stype:'mp', name:'Federal Gunship', class:2, cost:34774790, retail:35814210,
			faction:'Federation', rank:7,
			topspd:170, bstspd:280, mnv:1, shields:250, armour:350, mass:580,
			minthrust:58.824, boostcost:23, pitch:25, yaw:18, roll:80, pitchacc:100, yawacc:50, rollacc:80, minpitch:20,
			heatcap:325, heatdismin:2.87, heatdismax:51.40, fuelcost:50, hardness:60, masslock:14, crew:2, // verify masslock
			slots:{
				hardpoint:[3,2,2,2,2,1,1],
				utility  :[0,0,0,0],
				component:[1,6,6,5,5,7,5,4],
				military :[4,4,4],
				internal :[6,6,5,2,2],
			},
			stock:{
				hardpoint:[0,0,0,62160,62160,0,0],
				utility  :[0,0,0,0],
				component:[40131,41650,42650,43550,44550,45750,46550,47430],
				military :[0,0,0],
				internal :[0,30650,450,0,10150],
			},
			module:{
				40131 : { cost:       0, mass: 0.00, fdid:128672154, fdname:'Federation_Gunship_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost:14325690, mass:44.00, fdid:128672155, fdname:'Federation_Gunship_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:32232790, mass:87.00, fdid:128672156, fdname:'Federation_Gunship_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:76176810, mass:87.00, fdid:128672157, fdname:'Federation_Gunship_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:84414090, mass:87.00, fdid:128672158, fdname:'Federation_Gunship_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		51 : {
			fdid:128049327, fdname:'Orca',
			id:51, stype:'pa', name:'Orca', class:3, cost:47790580, retail:48539890,
			topspd:300, bstspd:380, mnv:1, shields:220, armour:220, mass:290,
			minthrust:66.667, boostcost:16, pitch:25, yaw:18, roll:55, pitchacc:220, yawacc:110, rollacc:240, minpitch:20,
			heatcap:262, heatdismin:2.30, heatdismax:42.68, fuelcost:50, hardness:55, masslock:15, crew:2,
			slots:{
				hardpoint:[3,2,2],
				utility  :[0,0,0,0],
				component:[1,5,6,5,6,5,4,5],
				military :[],
				internal :[6,5,5,5,4,3,2,2],
			},
			reserved:{
				internal :[{icr:1,ihrp:1,imahrp:1,imrp:1,ipc:1}, {icr:1,ihrp:1,imahrp:1,imrp:1,ipc:1}],
			},
			stock:{
				hardpoint:[0,62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41550,42650,43550,44650,45550,46450,47530],
				military :[],
				internal :[6650,6450,450,30550,350,0,0,10150],
			},
			module:{
				40131 : { cost:        0, mass: 0.00, fdid:128049328, fdname:'Orca_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 19415950, mass:21.00, fdid:128049329, fdname:'Orca_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost: 43685900, mass:87.00, fdid:128049330, fdname:'Orca_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:103244340, mass:87.00, fdid:128049331, fdname:'Orca_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:114408510, mass:87.00, fdid:128049332, fdname:'Orca_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		24 : {
			fdid:128049351, fdname:'FerDeLance',
			id:24, stype:'co', name:'Fer-de-Lance', class:2, cost:51095490, retail:51567040,
			topspd:260, bstspd:350, mnv:4, shields:300, armour:225, mass:250,
			minthrust:84.615, boostcost:19, pitch:38, yaw:12, roll:90, pitchacc:200, yawacc:100, rollacc:220, minpitch:30,
			heatcap:224, heatdismin:2.05, heatdismax:41.63, fuelcost:50, hardness:70, masslock:12, crew:2,
			slots:{
				hardpoint:[4,2,2,2,2],
				utility  :[0,0,0,0,0,0],
				component:[1,6,5,4,4,6,4,3],
				military :[],
				internal :[5,4,4,2,1],
			},
			stock:{
				hardpoint:[0,62160,62160,0,0],
				utility  :[0,0,0,0,0,0],
				component:[40131,41650,42550,43450,44450,45650,46450,47330],
				military :[],
				internal :[450,30450,350,0,10150],
			},
			module:{
				40131 : { cost:        0, mass: 0.00, fdid:128049352, fdname:'FerDeLance_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 20626820, mass:19.00, fdid:128049353, fdname:'FerDeLance_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost: 46410340, mass:38.00, fdid:128049354, fdname:'FerDeLance_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:109683090, mass:38.00, fdid:128049355, fdname:'FerDeLance_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:121543510, mass:38.00, fdid:128049356, fdname:'FerDeLance_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		 5 : {
			fdid:128049339, fdname:'Python',
			id:5, stype:'mp', name:'Python', class:2, cost:55171380, retail:56978180,
			topspd:230, bstspd:300, mnv:2, shields:260, armour:260, mass:350,
			minthrust:60.870, boostcost:23, pitch:29, yaw:10, roll:90, pitchacc:200, yawacc:100, rollacc:220, minpitch:24,
			heatcap:300, heatdismin:2.68, heatdismax:52.05, fuelcost:50, hardness:65, masslock:17, crew:2,
			slots:{
				hardpoint:[3,3,3,2,2],
				utility  :[0,0,0,0],
				component:[1,7,6,5,4,7,6,5],
				military :[],
				internal :[6,6,6,5,5,4,3,3,2],
			},
			stock:{
				hardpoint:[0,0,0,62160,62160],
				utility  :[0,0,0,0],
				component:[40131,41750,42650,43550,44450,45750,46650,47530],
				military :[],
				internal :[550,550,30650,450,0,0,0,10150,150],
			},
			module:{
				40131 : { cost:        0, mass: 0.00, fdid:128049340, fdname:'Python_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 22791270, mass:26.00, fdid:128049341, fdname:'Python_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost: 51280360, mass:53.00, fdid:128049342, fdname:'Python_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:121192590, mass:53.00, fdid:128049343, fdname:'Python_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:134297570, mass:53.00, fdid:128049344, fdname:'Python_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		34 : {
			fdid:128049333, fdname:'Type9',
			id:34, stype:'fr', name:'Type-9 Heavy', class:3, cost:72076730, retail:76555840,
			topspd:130, bstspd:200, mnv:0, shields:240, armour:480, mass:850,
			minthrust:30.769, boostcost:19, pitch:20, yaw:8, roll:20, pitchacc:100, yawacc:50, rollacc:80, minpitch:15,
			heatcap:289, heatdismin:3.10, heatdismax:48.35, fuelcost:50, hardness:65, masslock:16, crew:3,
			slots:{
				hardpoint:[2,2,2,1,1],
				utility  :[0,0,0,0],
				component:[1,6,7,6,5,6,4,6],
				military :[],
				internal :[8,8,7,6,5,4,4,3,3,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0,0],
				utility  :[0,0,0,0],
				component:[40131,41650,42750,43650,44550,45650,46450,47630],
				military :[],
				internal :[750,750,650,30650,450,350,0,250,0,10150],
			},
			module:{
				40131 : { cost:        0, mass:  0.00, fdid:128049334, fdname:'Type9_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 30622340, mass: 75.00, fdid:128049335, fdname:'Type9_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost: 68900260, mass:150.00, fdid:128049336, fdname:'Type9_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:162834280, mass:150.00, fdid:128049337, fdname:'Type9_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:180442120, mass:150.00, fdid:128049338, fdname:'Type9_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		52 : {
			fdid:128049345, fdname:'BelugaLiner',
			id:52, stype:'pa', name:'Beluga Liner', class:3, cost:79654600, retail:84532760,
			topspd:200, bstspd:280, mnv:2, shields:280, armour:280, mass:950,
			minthrust:55.0, boostcost:19, pitch:25, yaw:17, roll:60, pitchacc:100, yawacc:50, rollacc:80, minpitch:20,
			heatcap:283, heatdismin:2.60, heatdismax:50.85, fuelcost:50, hardness:60, masslock:18, crew:3, // verify masslock
			slots:{
				hardpoint:[2,2,2,2,2],
				utility  :[0,0,0,0,0,0],
				component:[1,6,7,7,8,6,5,7],
				military :[],
				internal :[6,6,6,6,5,5,4,3,3,3,3],
			},
			reserved:{
				internal :[null, null, {icr:1,ihrp:1,imahrp:1,imrp:1,ipc:1}, {icr:1,ihrp:1,imahrp:1,imrp:1,ipc:1}, {icr:1,ihrp:1,imahrp:1,imrp:1,ipc:1}, {icr:1,ihrp:1,imahrp:1,imrp:1,ipc:1}],
			},
			stock:{
				hardpoint:[62160,62160,0,0,0],
				utility  :[0,0,0,0,0,0],
				component:[40131,41650,42750,43750,44850,45650,46550,47730],
				military :[],
				internal :[30650,550,6640,6640,6440,6440,350,250,0,0,10150],
			},
			module:{
				40131 : { cost:        0, mass:  0.00, fdid:128049346, fdname:'BelugaLiner_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 33813120, mass: 83.00, fdid:128049347, fdname:'BelugaLiner_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost: 76079500, mass:165.00, fdid:128049348, fdname:'BelugaLiner_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:179801200, mass:165.00, fdid:128049349, fdname:'BelugaLiner_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:199243730, mass:165.00, fdid:128049350, fdname:'BelugaLiner_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		36 : {
			fdid:128785619, fdname:'Type9_Military',
			id:36, stype:'fr', name:'Type-10 Defender', class:3, cost:121454652, retail:124755342,
			topspd:180, bstspd:220, mnv:0, shields:320, armour:580, mass:1200,
			minthrust:83.333, boostcost:19, pitch:22, yaw:8, roll:40, pitchacc:100, yawacc:35, rollacc:80, minpitch:18,
			heatcap:335, heatdismin:3.16, heatdismax:67.15, fuelcost:50, hardness:75, masslock:26, crew:3, // verify masslock
			slots:{
				hardpoint:[2,2,2,3,3,3,3,1,1], // TODO sorted by size now
				utility  :[0,0,0,0,0,0,0,0],
				component:[1,8,7,7,5,7,4,6],
				military :[5,5],
				internal :[8,7,6,5,4,4,3,3,2],
			},
			stock:{
				hardpoint:[62160,62160,0,0,0,0,0,0,0], // TODO stock still in first two mediums
				utility  :[0,0,0,0,0,0,0,0],
				component:[40131,41650,42750,43650,44550,45650,46450,47630],
				military :[0,0],
				internal :[750,650,30650,450,350,0,250,0,10150],
			},
			module:{
				40131 : { cost:        0, mass:  0.00, fdid:128785621, fdname:'Type9_Military_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 49902130, mass: 75.00, fdid:128785622, fdname:'Type9_Military_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:112279810, mass:150.00, fdid:128785623, fdname:'Type9_Military_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:265354610, mass:150.00, fdid:128785624, fdname:'Type9_Military_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:294048340, mass:150.00, fdid:128785625, fdname:'Type9_Military_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		 6 : {
			fdid:128049363, fdname:'Anaconda',
			id:6, stype:'mp', name:'Anaconda', class:3, cost:141889930, retail:146969450,
			topspd:180, bstspd:240, mnv:1, shields:350, armour:525, mass:400,
			minthrust:44.444, boostcost:27, pitch:25, yaw:10, roll:60, pitchacc:100, yawacc:50, rollacc:80, minpitch:20,
			heatcap:334, heatdismin:3.16, heatdismax:67.15, fuelcost:50, hardness:65, masslock:23, crew:3,
			slots:{
				hardpoint:[4,3,3,3,2,2,1,1],
				utility  :[0,0,0,0,0,0,0,0],
				component:[1,8,7,6,5,8,8,5],
				military :[5],
				internal :[7,6,6,6,5,5,5,4,4,4,2],
			},
			stock:{
				hardpoint:[0,0,0,0,0,0,62160,62160],
				utility  :[0,0,0,0,0,0,0,0],
				component:[40131,41850,42750,43650,44550,45850,46850,47530],
				military :[0],
				internal :[650,550,30650,0,450,0,0,0,0,10150,150],
			},
			module:{
				40131 : { cost:        0, mass: 0.00, fdid:128049364, fdname:'Anaconda_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 58787780, mass:30.00, fdid:128049365, fdname:'Anaconda_Armour_Grade2' }, // Reinforced Alloy
				40113 : { cost:132272510, mass:60.00, fdid:128049366, fdname:'Anaconda_Armour_Grade3' }, // Military Grade Composite
				40114 : { cost:312604020, mass:60.00, fdid:128049367, fdname:'Anaconda_Armour_Mirrored' }, // Mirrored Surface Composite
				40115 : { cost:346407000, mass:60.00, fdid:128049368, fdname:'Anaconda_Armour_Reactive' }, // Reactive Surface Composite
			},
		},
		61 : {
			fdid:128049369, fdname:'Federation_Corvette',
			id:61, stype:'sh', name:'Federal Corvette', class:3, cost:182589570, retail:187969450,
			faction:'Federation', rank:12,
			topspd:200, bstspd:260, mnv:2, shields:555, armour:370, mass:900,
			minthrust:50.0, boostcost:27, pitch:28, yaw:8, roll:75, pitchacc:100, yawacc:50, rollacc:80, minpitch:22,
			heatcap:333, heatdismin:3.28, heatdismax:70.33, fuelcost:50, hardness:70, masslock:24, crew:3, // verify hardness, masslock
			slots:{
				hardpoint:[4,4,3,2,2,1,1],
				utility  :[0,0,0,0,0,0,0,0],
				component:[1,8,7,6,5,8,8,5],
				military :[5,5],
				internal :[7,7,7,6,6,5,5,4,4,3],
			},
			stock:{
				hardpoint:[0,0,0,62160,62160,0,0],
				utility  :[0,0,0,0,0,0,0,0],
				component:[40131,41850,42750,43650,44550,45850,46850,47530],
				military :[0,0],
				internal :[30750,650,0,0,0,0,0,350,10150,250],
			},
			module:{
				40131 : { cost:        0, mass: 0.00, fdid:128049370, fdname:'Federation_Corvette_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 75187790, mass:30.00, fdid:128049371, fdname:'Federation_Corvette_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:169172510, mass:60.00, fdid:128049372, fdname:'Federation_Corvette_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:399811020, mass:60.00, fdid:128049373, fdname:'Federation_Corvette_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:443044000, mass:60.00, fdid:128049374, fdname:'Federation_Corvette_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
		62 : {
			fdid:128049375, fdname:'Cutter',
			id:62, stype:'sh', name:'Imperial Cutter', class:3, cost:199926890, retail:208969450,
			faction:'Empire', rank:12,
			topspd:200, bstspd:320, mnv:0, shields:600, armour:400, mass:1100,
			minthrust:80.0, boostcost:23, pitch:18, yaw:8, roll:45, pitchacc:100, yawacc:50, rollacc:80, minpitch:14,
			heatcap:327, heatdismin:3.27, heatdismax:72.58, fuelcost:50, hardness:70, masslock:27, crew:3, // verify hardness, masslock
			slots:{
				hardpoint:[2,2,2,2,3,3,4],
				utility  :[0,0,0,0,0,0,0,0],
				component:[1,8,8,7,7,7,7,6],
				military :[5,5],
				internal :[8,8,6,6,6,5,5,4,3],
			},
			stock:{
				hardpoint:[62160,62160,0,0,0,0,0],
				utility  :[0,0,0,0,0,0,0,0],
				component:[40131,41850,42850,43750,44750,45750,46750,47630],
				military :[0,0],
				internal :[30850,750,550,0,0,0,0,10150,250],
			},
			module:{
				40131 : { cost:        0, mass: 0.00, fdid:128049376, fdname:'Cutter_Armour_Grade1' }, // Lightweight Alloy
				40122 : { cost: 83587780, mass:30.00, fdid:128049377, fdname:'Cutter_Armour_Grade2' }, // Reinforced Alloy // verify
				40113 : { cost:188072500, mass:60.00, fdid:128049378, fdname:'Cutter_Armour_Grade3' }, // Military Grade Composite // verify
				40114 : { cost:444478020, mass:60.00, fdid:128049379, fdname:'Cutter_Armour_Mirrored' }, // Mirrored Surface Composite // verify
				40115 : { cost:492541000, mass:60.00, fdid:128049380, fdname:'Cutter_Armour_Reactive' }, // Reactive Surface Composite // verify
			},
		},
	}, // eddb.ship{}
	rank : {
		'Alliance' : [
			'',
		],
		'Empire' : [
			'',
			'Outsider',
			'Serf',
			'Master',
			'Squire',
			'Knight',
			'Lord',
			'Baron',
			'Viscount',
			'Count',
			'Earl',
			'Marquis',
			'Duke',
			'Prince',
			'King'
		],
		'Federation' : [
			'',
			'Recruit',
			'Cadet',
			'Midshipman',
			'Petty Officer',
			'Chief Petty Officer',
			'Warrant Officer',
			'Ensign',
			'Lieutenant',
			'Lieutenant Commander',
			'Post Commander',
			'Post Captain',
			'Rear Admiral',
			'Vice Admiral',
			'Admiral'
		],
	}, // eddb.rank{}
	attribute : {
	//	stype      : { order:  1 },
	//	mtype      : { order:  2 },
	//	cost       : { order:  3,              name:'Cost',                 unit:'Cr',   bad:1, min:    0,          step:1, default:  0, scale:0,           desc:'Purchase cost (in credits)' }, // *
	//	retail     : { order:  4,              name:'Retail Price',         unit:'Cr',   bad:1, min:    0,          step:1, default:  0, scale:0,           desc:'Total purchase cost (in credits) including the default loadout' }, // ship
	//	name       : { order:  5 },
		faction    : { order:  6, abbr:'Fac',  name:'Faction',        values:['','Alliance','Empire','Federation'],         default: '',                    desc:'Faction membership required to purchase' }, // ship
		rank       : { order:  7, abbr:'Rank', name:'Faction Rank',                      bad:1, min:    0,          step:1, default:  0, scale:0,           desc:'Faction rank level required to purchase' }, // ship
	//	grade      : { order:  8 },
	//	class      : { order:  9,              name:'Class',                                    min:    0, max:  8, step:1, default:  0, scale:0,           desc:'Size class (0-8)' }, // *
	//	rating     : { order: 10,              name:'Rating',         values:['','A','B','C','D','E','F','G','H','I'],      default: '',                    desc:'Quality rating (A-I)' },  // *
		topspd     : { order: 11, abbr:'Spd',  name:'Top Speed',            unit:'M/s',         min:    0,                  default:  0, scale:0,           desc:'Maximum thruster speed with outfitting mass equal to thruster optimal mass' }, // ship
		bstspd     : { order: 12, abbr:'Bst',  name:'Boost Speed',          unit:'M/s',         min:    0,                  default:  0, scale:0,           desc:'Maximum boost speed with outfitting mass equal to thruster optimal mass' }, // ship
		minthrust  : { order: 13, abbr:'NThr', name:'Minimum Thrust',       unit:'%',           min:    0, max:100,         default:  0, scale:1,           desc:'Thruster speed modifier with 0 ENG pips' }, // ship
		boostcost  : { order: 14, abbr:'BstC', name:'Boost Cost',           unit:'MW',   bad:1, min:    0,                  default:  0, scale:0,           desc:'Engine boost power distributor capacitor draw (in megawatts per boost)' }, // ship
		mnv        : { order: 15, abbr:'Mnv',  name:'Manoeuvrability',                          min:    0, max: 10, step:1, default:  0, scale:0,           desc:'Manoeuvrability rating (out of 10)' }, // ship
		pitch      : { order: 16, abbr:'Pch',  name:'Pitch Speed',          unit:'&deg;/s',     min:    0,                  default:  0, scale:2,           desc:'Base pitch speed (in degrees per second) with outfitting mass equal to thruster optimal mass' }, // ship
		yaw        : { order: 17, abbr:'Yaw',  name:'Yaw Speed',            unit:'&deg;/s',     min:    0,                  default:  0, scale:2,           desc:'Base yaw speed (in degrees per second) with outfitting mass equal to thruster optimal mass' }, // ship
		roll       : { order: 18, abbr:'Rol',  name:'Roll Speed',           unit:'&deg;/s',     min:    0,                  default:  0, scale:2,           desc:'Base roll speed (in degrees per second) with outfitting mass equal to thruster optimal mass' }, // ship
		minpitch   : { order: 19, abbr:'NPch', name:'Min Pitch Speed',      unit:'&deg;/s',     min:    0,                  default:'pitch',scale:2,        desc:'Minimum pitch speed (in degrees per second) with outfitting mass equal to thruster optimal mass and 0 ENG pips' }, // ship
		minyaw     : { order: 19, abbr:'NYaw', name:'Min Yaw Speed',        unit:'&deg;/s',     min:    0,                  default:'yaw',  scale:2,        desc:'Minimum yaw speed (in degrees per second) with outfitting mass equal to thruster optimal mass and 0 ENG pips' }, // ship
		minroll    : { order: 19, abbr:'NRol', name:'Min Roll Speed',       unit:'&deg;/s',     min:    0,                  default:'roll', scale:2,        desc:'Minimum roll speed (in degrees per second) with outfitting mass equal to thruster optimal mass and 0 ENG pips' }, // ship
		shields    : { order: 19, abbr:'Shd',  name:'Shields',                                  min:    0,          step:1, default:  0, scale:0,           desc:'Base shield strength (modified by the shield generator module)' }, // ship
		armour     : { order: 20, abbr:'Arm',  name:'Armour',                                   min:    0,          step:1, default:  0, scale:0,           desc:'Base armour strength (modified by the bulkhead module)' }, // ship
		hardness   : { order: 21, abbr:'Hrd',  name:'Armour Hardness',                          min:    0,          step:1, default:  0, scale:0,           desc:'Armour hardness rating (compare to weapon armour pierce)' }, // ship
		heatcap    : { order: 22, abbr:'HCap', name:'Heat Capacity',                            min:    0,          step:1, default:  0, scale:0,           desc:'Nominal heat capacity' }, // ship
		heatdismin : { order: 23, abbr:'NHDs', name:'Min Heat Dissipation',                     min:    0,                  default:  0, scale:2,           desc:'Minimum heat dissipation level' }, // ship
		heatdismax : { order: 24, abbr:'XHDs', name:'Max Heat Dissipation',                     min:    0,                  default:  0, scale:2,           desc:'Maximum heat dissipation rate' }, // ship
		mount      : { order: 23, abbr:'Mnt',  name:'Mount',          values:['F','G','T'],                                 default: '',                    desc:'Mount type (fixed/gimballed/turreted)' }, // wpn
		missile    : { order: 24, abbr:'Msl',  name:'Missile Type',   values:['D','S'],                                     default: '',                    desc:'Missile type (dumbfire/seeking)' }, // wpn
		mass       : { order: 25, abbr:'Mass', name:'Mass',                 unit:'T',    bad:1, min:    0,                  default:  0, scale:2,           desc:'Mass (in tons)' }, // *
		masslock   : { order: 26, abbr:'MLF',  name:'Mass Lock',                                min:    0,          step:1, default:  0, scale:0,           desc:'Mass lock factor' }, // ship
		fuelcost   : { order: 27, abbr:'FCst', name:'Fuel Cost',            unit:'Cr/T', bad:1, min:    0,          step:1, default:  0, scale:0,           desc:'Cost of fuel (in credits per ton)' }, // ship
		crew : { order: 28, abbr:'Crew', name:'Crew Seats',                               min:    1,          step:1, default:  1, scale:0,           desc:'Number of seats for multi-crew' }, // ship
		integ      : { order: 28, abbr:'Int',  name:'Integrity',                                min:    0,                  default:  0, scale:0,           desc:'Integrity' }, // *
		fuelcap    : { order: 29, abbr:'Cap',  name:'Fuel Capacity',        unit:'T',           min:    0,                  default:  0, scale:1,           desc:'Maximum fuel capacity (in tons)' }, // fueltank
		cargocap   : { order: 30, abbr:'Cap',  name:'Cargo Capacity',                           min:    0,          step:1, default:  0, scale:0,           desc:'Maximum cargo capacity' }, // cargorack
		cabincap   : { order: 31, abbr:'Cap',  name:'Cabin Capacity',                           min:    0,          step:1, default:  0, scale:0,           desc:'Maximum passenger capacity' }, // passenger
		cabincls   : { order: 32, abbr:'Cls',  name:'Cabin Class',    values:['','E','B','F','L'],                          default: '',                    desc:'Passenger cabin quality class (economy/business/first/luxury)' }, // passenger
		pwrcap     : { order: 33, abbr:'PwC',  name:'Power Capacity',       unit:'MW',          min:    0,                  default:  0, scale:2,           desc:'Power output (in megawatts)' }, // powerplant
		pwrdraw    : { order: 34, abbr:'PwD',  name:'Power Draw',           unit:'MW',   bad:1, min:    0,                  default:  0, scale:2,           desc:'Power draw (in megawatts)' }, // *
		boottime   : { order: 35, abbr:'Boot', name:'Boot Time',            unit:'s',    bad:1, min:    0,          time:1, default:  0, scale:0,           desc:'Time to reboot or bring online (in seconds)' }, // *
		spinup     : { order: 36, abbr:'Spin', name:'Spin Up Time',         unit:'s',    bad:1, min:    0,          time:1, default:  0, scale:0,           desc:'Time to spin up after activation (in seconds)' }, // scb
		minmass    : { order: 37, abbr:'NMas', name:'Minimum Mass',         unit:'T',           min:    0,                  default:  0, scale:1,           desc:'Minimum ship mass (in tons)' }, // thrust,sg
		optmass    : { order: 38, abbr:'OMas', name:'Optimal Mass',         unit:'T',           min:    0,                  default:  0, scale:1,           desc:'Optimal ship mass (in tons)' }, // thrust,fsd,sg
		maxmass    : { order: 39, abbr:'XMas', name:'Maximum Mass',         unit:'T',           min:    0,                  default:  0, scale:1,           desc:'Maximum ship mass (in tons)' }, // thrust,sg
		minmul     : { order: 40, abbr:'NMul', name:'Minimum Multiplier',   unit:'%',           min:    0,                  default:  0, scale:0,           desc:'Minimum strength multiplier' }, // thrust,sg
		optmul     : { order: 41, abbr:'OMul', name:'Optimal Multiplier',   unit:'%',           min:    0,                  default:  0, scale:0,           desc:'Optimal strength multiplier' }, // thrust,sg
		maxmul     : { order: 42, abbr:'XMul', name:'Maximum Multiplier',   unit:'%',           min:    0,                  default:  0, scale:0,           desc:'Maximum strength multiplier' }, // thrust,sg
		minmulspd  : { order: 43, abbr:'NSMul',name:'Min Speed Mult',       unit:'%',           min:    0,                  default:'minmul',scale:0,       desc:'Minimum speed multiplier' }, // thrust
		optmulspd  : { order: 44, abbr:'OSMul',name:'Opt Speed Mult',       unit:'%',           min:    0,                  default:'optmul',scale:0,       desc:'Optimal speed multiplier' }, // thrust
		maxmulspd  : { order: 45, abbr:'XSMul',name:'Max Speed Mult',       unit:'%',           min:    0,                  default:'maxmul',scale:0,       desc:'Maximum speed multiplier' }, // thrust
		minmulacc  : { order: 46, abbr:'NAMul',name:'Min Acceleration Mult',unit:'%',           min:    0,                  default:'minmul',scale:0,       desc:'Minimum acceleration multiplier' }, // thrust
		optmulacc  : { order: 47, abbr:'OAMul',name:'Opt Acceleration Mult',unit:'%',           min:    0,                  default:'optmul',scale:0,       desc:'Optimal acceleration multiplier' }, // thrust
		maxmulacc  : { order: 48, abbr:'XAMul',name:'Max Acceleration Mult',unit:'%',           min:    0,                  default:'maxmul',scale:0,       desc:'Maximum acceleration multiplier' }, // thrust
		minmulrot  : { order: 49, abbr:'NRMul',name:'Min Rotation Mult',    unit:'%',           min:    0,                  default:'minmul',scale:0,       desc:'Minimum rotation multiplier' }, // thrust
		optmulrot  : { order: 50, abbr:'ORMul',name:'Opt Rotation Mult',    unit:'%',           min:    0,                  default:'optmul',scale:0,       desc:'Optimal rotation multiplier' }, // thrust
		maxmulrot  : { order: 51, abbr:'XRMul',name:'Max Rotation Mult',    unit:'%',           min:    0,                  default:'maxmul',scale:0,       desc:'Maximum rotation multiplier' }, // thrust
		genrate    : { order: 52, abbr:'Rgn',  name:'Regen Rate',           unit:'/s',          min:    0,                  default:  0, scale:1,           desc:'Shield recharge rate (in units per second)' }, // sg
		bgenrate   : { order: 53, abbr:'BkR',  name:'Broken Regen Rate',    unit:'/s',          min:    0,                  default:  0, scale:1,           desc:'Broken shield charge rate (in units per second)' }, // sg
		hullbst    : { order: 54, abbr:'HuB',  name:'Hull Boost',           unit:'%',           min: -100,                  default:  0, scale:1, modmod:100, desc:'Base hull strength bonus' }, // bulkhead
		hullrnf    : { order: 55, abbr:'HuR',  name:'Hull Reinforcement',                       min:    0,                  default:  0, scale:0,           desc:'Additional hull strength' }, // hrp
		shieldbst  : { order: 56, abbr:'ShB',  name:'Shield Boost',         unit:'%',           min: -100,                  default:  0, scale:1, modmod:100, desc:'Shield strength bonus' }, // shboost
		shieldrnf  : { order: 57, abbr:'ShR',  name:'Shield Reinforcement', unit:'/s',          min:    0,                  default:  0, scale:1,           desc:'Shield recharge bonus (in units per second)' }, // scb
		activerng  : { order: 58, abbr:'ARng', name:'Active Range',         unit:'LS',          min:    0,                  default:  0, scale:0,           desc:'Maximum active scan range (in light-seconds)' }, // dscan
		passiverng : { order: 59, abbr:'PRng', name:'Passive Range',        unit:'LS',          min:    0,                  default:  0, scale:2,           desc:'Automatic passive scan range (in light-seconds)' }, // dscan
		scanrng    : { order: 60, abbr:'Rng',  name:'Scanner Range',        unit:'M',           min:    0,                  default:  0, scale:0,           desc:'Maximum scan range (in meters)' }, // scanner
		maxangle   : { order: 61, abbr:'Ang',  name:'Max Angle',            unit:'&deg;',       min:    0, max:360,         default:  0, scale:2,           desc:'Maximum scan angle (in degrees)' }, // scanner,sensor
		scantime   : { order: 62, abbr:'Time', name:'Scan Time',            unit:'s',    bad:1, min:    0,          time:1, default:  0, scale:0,           desc:'Time to scan (in seconds)' }, // scanner
		scanrngmod :{ order: 63, abbr:'RngM', name:'Scan Range Multiplier',unit:'%',                                       default:  0, scale:1, modmod:100, desc:'Modifies maximum range to scan stellar bodies' }, // dss
		scanangmod :{ order: 64, abbr:'AngM', name:'Scan Angle Multiplier',unit:'%',                                       default:  0, scale:1, modmod:100, desc:'Modifies maximum angle to scan stellar bodies' }, // dss
		scanratemod:{ order: 65, abbr:'RteM', name:'Scan Rate Multiplier', unit:'%',                                       default:  0, scale:1, modmod:100, desc:'Modifies time to scan stellar bodies' }, // dss
		emgcylife  : { order: 63, abbr:'EmLf', name:'Emergency Life',       unit:'s',           min:    0,          time:1, default:  0, scale:0,           desc:'Maximum emergency oxygen time (in seconds)' }, // lifesupport
		wepcap     : { order: 64, abbr:'WpC',  name:'Weapons Capacity',     unit:'MW',          min:    0,                  default:  0, scale:2,           desc:'Weapon capacitor capacity (nonsensically, in megawatts)' }, // distrib
		wepchg     : { order: 65, abbr:'WpR',  name:'Weapons Recharge',     unit:'MW/s',        min:    0,                  default:  0, scale:2,           desc:'Weapon capacitor recharge rate (nonsensically, in megawatts per second)' }, // distrib
		engcap     : { order: 66, abbr:'EnC',  name:'Engines Capacity',     unit:'MW',          min:    0,                  default:  0, scale:2,           desc:'Engine capacitor capacity (nonsensically, in megawatts)' }, // distrib
		engchg     : { order: 67, abbr:'EnR',  name:'Engines Recharge',     unit:'MW/s',        min:    0,                  default:  0, scale:2,           desc:'Engine capacitor recharge rate (nonsensically, in megawatts per second)' }, // distrib
		syscap     : { order: 68, abbr:'SyC',  name:'Systems Capacity',     unit:'MW',          min:    0,                  default:  0, scale:2,           desc:'System capacitor capacity (nonsensically, in megawatts)' }, // distrib
		syschg     : { order: 69, abbr:'SyR',  name:'Systems Recharge',     unit:'MW/s',        min:    0,                  default:  0, scale:2,           desc:'System capacitor recharge rate (nonsensically, in megawatts per second)' }, // distrib
		repaircap  : { order: 70, abbr:'Cap',  name:'Repair Capacity',                          min:    0,          step:1, default:  0, scale:0,           desc:'Maximum repair material capacity' }, // afmu
		repaircon  : { order: 71, abbr:'Cns',  name:'Consumption',          unit:'/s',          min:    0,                  default:  0, scale:1,           desc:'Rate of repair material consumption (in units per second)' }, // afmu
		repairrtg  : { order: 72, abbr:'Rtg',  name:'Repair Rating',                            min:    0,                  default:  1, scale:3,           desc:'Module integrity repaired per material consumed' }, // afmu
		maxlimpet  : { order: 73, abbr:'Max',  name:'Max Active Limpets',                       min:    0,          step:1, default:  0, scale:0, modadd:1, desc:'Maximum active limpets' }, // limpet
		targetrng  : { order: 74, abbr:'Rng',  name:'Target Range',         unit:'M',           min:    0,                  default:  0, scale:0,           desc:'Maximum limpet target range (in meters)' }, // limpet
		limpettime : { order: 75, abbr:'Time', name:'Limpet Life Time',     unit:'s',           min:    0,          time:1, default:  0, scale:0,           desc:'Maximum limpet life time (in seconds)' }, // limpet
		maxspd     : { order: 76, abbr:'Spd',  name:'Maximum Speed',        unit:'M/s',         min:    0,                  default:  0, scale:0,           desc:'Maximum limpet speed (in meters per second)' }, // limpet
		multispd   : { order: 77, abbr:'MSpd', name:'Multi-Target Speed',   unit:'M/s',         min:    0,                  default:  0, scale:0,           desc:'Multi-target limpet speed (in meters per second)' }, // limpet
		fuelxfer   : { order: 78, abbr:'Xfer', name:'Fuel Transfer',        unit:'T',           min:    0,                  default:  0, scale:1,           desc:'Maximum limpt fuel transfer amount (in tons)' }, // limpet
		hacktime   : { order: 79, abbr:'Hack', name:'Hacking Time',         unit:'s',    bad:1, min:    0,          time:1, default:  0, scale:0,           desc:'Time to hack (in seconds)' }, // limpet
		mincargo   : { order: 80, abbr:'NCgo', name:'Minimum Cargo',                            min:    0,          step:1, default:  0, scale:0, modadd:1, desc:'Minimum cargo yield' }, // limpet
		maxcargo   : { order: 81, abbr:'XCgo', name:'Maximum Cargo',                            min:    0,          step:1, default:  0, scale:0, modadd:1, desc:'Maximum cargo yield' }, // limpet
	//	lpactrng   : { order: 82, abbr:'ARng', name:'Active Range',         unit:'M',           min:    0,                  default:'targetrng',scale:0,    desc:'TODO' }, // limpet
	//	minebonus  : { order: 82, abbr:'MnBn', name:'Mining Bonus',                             min:    0,                  default:  0, scale:1,           desc:'TODO' }, // limpet
		timerng    : { order: 82, abbr:'Rng',  name:'Range',                unit:'s',           min:    0,          time:1, default:  0, scale:0,           desc:'Maximum target range (in seconds to intercept)' }, // fsdi
		facinglim  : { order: 83, abbr:'Ang',  name:'Facing Limit',         unit:'&deg;',       min:    0, max:360,         default:  0, scale:2,           desc:'Maximum target angle (in degrees)' }, // fsdi
		scooprate  : { order: 84, abbr:'Rate', name:'Scoop Rate',           unit:'T/s',         min:    0,                  default:  0, scale:3,           desc:'Fuel scroop rate (in tons per second)' }, // scoop
		vslots     : { order: 85, abbr:'Slots',name:'Vehicle Slots',                            min:    0,          step:1, default:  0, scale:0, modadd:1, desc:'Number of vehicle slots' }, // pvh,fh
		vcount     : { order: 86, abbr:'Vcls', name:'Vehicle Count',                            min:    1,          step:1, default:  1, scale:0,           desc:'Maximum number of vehicles that can be deployed per slot' }, // fh
		bins       : { order: 87, abbr:'Bins', name:'Bin Count',                                min:    0,          step:1, default:  0, scale:0, modadd:1, desc:'Number of bins' }, // refinery
		dps        : { order: 88, abbr:'DPS',  name:'Damage per Second',    unit:'/s',          min:    0,                  default:  0, scale:2,           desc:'Raw damage per second, not including reload time' }, // wpn
		sdps       : { order: 88, abbr:'SDPS', name:'Sustained DPS',        unit:'/s',          min:    0,                  default:  0, scale:2,           desc:'Sustained damage per second, including reload time' }, // wpn
		damage     : { order: 89, abbr:'Dmg',  name:'Damage',                                   min:    0,                  default:  0, scale:1,           desc:'Raw damage per shot, or per second for beams' }, // wpn
		range      : { order: 90, abbr:'Rng',  name:'Range',                unit:'M',           min:    0,                  default:  0, scale:0,           desc:'Maximum range (in meters)' }, // ecm
		distdraw   : { order: 91, abbr:'Dst',  name:'Distributor Draw',     unit:'MW',   bad:1, min:    0,                  default:  0, scale:2,           desc:'Power distributor capacitor draw (in megawatts per shot, per second, or per shield unit)' }, // wpn,sg
	//	distdraw   : { order: 92,              name:'Active Power Draw',    unit:'MW',   bad:1, min:    0,                  default:  0, scale:2,           desc:'Power distributor capacitor draw (in megawatts)' }, // ecm
		eps        : { order: 91, abbr:'EPS',  name:'Energy per Second',    unit:'MW/s', bad:1, min:    0,                  default:  0, scale:2,           desc:'Power distributor capacitor draw (in megawatts per second), not including reload time' }, // wpn
		seps       : { order: 91, abbr:'SEPS', name:'Sustained EPS',        unit:'MW/s', bad:1, min:    0,                  default:  0, scale:2,           desc:'Sustained power distributor capacitor draw (in megawatts per second), including reload time' }, // wpn
		thmload    : { order: 93, abbr:'ThL',  name:'Thermal Load',                      bad:1, min:    0,                  default:  0, scale:1,           desc:'Waste heat generated per use, or per second' }, // unit:'/s' without rof (wpn-rof,ecm,thrust,fsd), otherwise per-shot (wpn+rof,chaff,pointdef), except per-use for scb
		hps        : { order: 94, abbr:'HPS',  name:'Heat per Second',      unit:'/s',   bad:1, min:    0,                  default:  0, scale:1,           desc:'Waste heat generated per second, not including reload time' }, // wpn
		shps       : { order: 94, abbr:'SHPS', name:'Sustained HPS',        unit:'/s',   bad:1, min:    0,                  default:  0, scale:1,           desc:'Waste heat generated per second, including reload time' }, // wpn
		heateff    : { order: 94, abbr:'HEf',  name:'Heat Efficiency',      unit:'/MW',  bad:1, min:    0,                  default:  0, scale:2,           desc:'Waste heat generated per megawatt consumed' }, // power
		maxfuel    : { order: 95, abbr:'Max',  name:'Max Fuel per Jump',    unit:'T',           min:    0,                  default:  0, scale:2,           desc:'Maximum fuel use per jump (in tons)' }, // fsd
		kinres     : { order: 96, abbr:'KiR',  name:'Kinetic Resistance',   unit:'%',           min:-1000, max:100,         default:  0, scale:1, modmod:-100, desc:'Resistance to kinetic damage' }, // shboost,bulkhead,hrp,sg
		thmres     : { order: 97, abbr:'ThR',  name:'Thermal Resistance',   unit:'%',           min:-1000, max:100,         default:  0, scale:1, modmod:-100, desc:'Resistance to thermal damage' }, // shboost,bulkhead,hrp,sg
		expres     : { order: 98, abbr:'ExR',  name:'Explosive Resistance', unit:'%',           min:-1000, max:100,         default:  0, scale:1, modmod:-100, desc:'Resistance to explosive damage' }, // shboost,bulkhead,hrp,sg
		caures     : { order: 99, abbr:'CaR',  name:'Caustic Resistance',   unit:'%',           min:-1000, max:100,         default:  0, scale:1, modmod:-100, desc:'Resistance to caustic damage' }, // mahrp
		axeres     : { order: 99, abbr:'AXR',  name:'Anti-Xeno Resistance', unit:'%',           min:-1000, max:100,         default:  0, scale:1, modmod:-100, desc:'Resistance to anti-xeno damage' }, // TODO hulls 90%, shields 95%
		pierce     : { order: 99, abbr:'Prc',  name:'Armour Piercing',                          min:    0,                  default:  0, scale:0,           desc:'Armour pierce rating (compare to target ship armour hardness)' }, // wpn
		maxrng     : { order:100, abbr:'Rng',  name:'Maximum Range',        unit:'M',           min:    0,                  default:  0, scale:0,           desc:'Maximum range (in meters)' }, // wpn,sensor
		typemis    : { order:101, abbr:'Typ',  name:'Typical Emission',     unit:'M',           min:    0,                  default:  0, scale:0,           desc:'Range to resolve a contact with typical emissions (in meters)' }, // sensor
		shotspd    : { order:102, abbr:'Spd',  name:'Shot Speed',           unit:'M/s',         min:    0,                  default:  0, scale:0,           desc:'Projectile speed (in meters per second)' }, // wpn
		rof        : { order:103, abbr:'ROF',  name:'Rate of Fire',         unit:'/s',          min:    0,                  default:  1, scale:1,           desc:'Raw rate of fire (in shots per second), not including reload time' }, // wpn
		srof       : { order:103, abbr:'SROF', name:'Sustained ROF',        unit:'/s',          min:    0,                  default:  1, scale:1,           desc:'Sustained rate of fire (in shots per second), including reload time' }, // wpn
		bstint     : { order:104, abbr:'BInt', name:'Burst Interval',       unit:'s',    bad:1, min:    0,                  default:  1, scale:2,           desc:'Time between shots or busts (in seconds)' }, // wpn
		bstrof     : { order:105, abbr:'BROF', name:'Burst Rate of Fire',   unit:'/s',          min:    0,                  default:  1, scale:1, modset:1, desc:'Burst rate of fire (in shots per second)' }, // wpn
		bstsize    : { order:106, abbr:'BSz',  name:'Burst Size',                               min:    1,          step:1, default:  1, scale:0, modset:1, desc:'Number of shots in a burst' }, // wpn
		ammoclip   : { order:107, abbr:'Clip', name:'Ammo Clip Size',                           min:    1,          step:1, default:  0, scale:0,           desc:'Maximum ammo per clip before reloading' }, // wpn
		ammomax    : { order:108, abbr:'Ammo', name:'Ammo Maximum',                             min:    0,          step:1, default:  0, scale:0,           desc:'Maximum reserve ammo to reload from' }, // wpn
		rounds     : { order:109, abbr:'Rnd',  name:'Rounds per Shot',                          min:    1,          step:1, default:  1, scale:0, modadd:1, desc:'Number of rounds fired per shot' }, // wpn
		rldtime    : { order:110, abbr:'Rld',  name:'Reload Time',          unit:'s',    bad:1, min:    0,          time:1, default:  0, scale:0,           desc:'Time to reload (in seconds)' }, // wpn,chaff,heatsink
		brcdmg     : { order:111, abbr:'Brc',  name:'Breach Damage',                            min:    0,                  default:  0, scale:1,           desc:'Damage to target modules when hull is breached' }, // wpn
		minbrc     : { order:112, abbr:'NBrc', name:'Min Breach Chance',    unit:'%',           min:    0, max:100,         default:  0, scale:1,           desc:'Chance to breach a hull at full integrity' }, // wpn
		maxbrc     : { order:113, abbr:'XBrc', name:'Max Breach Chance',    unit:'%',           min:    0, max:100,         default:  0, scale:1,           desc:'Chance to breach a hull at zero integrity' }, // wpn
		jitter     : { order:114, abbr:'Jtr',  name:'Jitter',               unit:'&deg;',bad:1, min:    0, max:360,         default:  0, scale:2, modadd:1, desc:'Maximum accuracy jitter (in degrees of error)'}, // wpn
		dmgtype    : { order:115, abbr:'DTyp', name:'Damage Type',    values:['K','T','E','KT','KE','TK','TE','EK','ET','X'],default:'',                    desc:'Damage type (kinetic/thermal/explosive)' }, // wpn
		dmgfall    : { order:116, abbr:'FOff', name:'Damage Falloff',       unit:'M',           min:    0,                  default:  0, scale:0,           desc:'Range at which applied damage will begin to decrease' }, // wpn
		cooldown   : { order:117, abbr:'Cool', name:'Cool Down',            unit:'s',    bad:1, min:    0,          time:1, default:  0, scale:0,           desc:'Time to cool down between uses (in seconds)' }, // ecm
		jamdur     : { order:118, abbr:'Dur',  name:'Jam Duration',         unit:'s',           min:    0,          time:1, default:  0, scale:0,           desc:'Duration of jamming effect (in seconds)' }, // chaff
		duration   : { order:119, abbr:'Dur',  name:'Duration',             unit:'s',           min:    0,          time:1, default:  0, scale:0,           desc:'Duration (in seconds)' }, // ecm,heatsink,scb
		thmdrain   : { order:120, abbr:'ThD',  name:'Thermal Drain',        unit:'/s',          min:    0,                  default:  0, scale:1,           desc:'Waste heat drained (in units per second)' }, // heatsink
		dmgprot    : { order:121, abbr:'DmgP', name:'Damage Protection',    unit:'%',           min:    0, max:100,         default:  0, scale:0,           desc:'Portion of incoming module damage that is absorbed' }, // imrp
	}, // eddb.attribute{}
	fdfieldattr : {
		OutfittingFieldType_AmmoClipSize                    : 'ammoclip',
		OutfittingFieldType_AmmoMaximum                     : 'ammomax',
		OutfittingFieldType_ArmourPenetration               : 'pierce',
		OutfittingFieldType_BootTime                        : 'boottime',
		OutfittingFieldType_BrokenRegenRate                 : 'bgenrate',
		OutfittingFieldType_BurstRateOfFire                 : 'bstrof',
		OutfittingFieldType_CausticResistance               : 'caures',
		OutfittingFieldType_CollisionResistance             : null, // ignore
		OutfittingFieldType_DSS_AngleMult                   : 'scanangmod',
		OutfittingFieldType_DSS_RangeMult                   : 'scanrngmod',
		OutfittingFieldType_DSS_RateMult                    : 'scanratemod',
		OutfittingFieldType_Damage                          : 'damage',
		OutfittingFieldType_DamageFalloffRange              : 'dmgfall',
		OutfittingFieldType_DamagePerSecond                 : null, // ignore
		OutfittingFieldType_DefenceModifierHealthAddition   : 'hullrnf',
		OutfittingFieldType_DefenceModifierHealthMultiplier : 'hullbst',
		OutfittingFieldType_DefenceModifierShieldAddition   : 'shieldrnf', // TODO verify
		OutfittingFieldType_DefenceModifierShieldMultiplier : 'shieldbst',
		OutfittingFieldType_DistributorDraw                 : 'distdraw',
		OutfittingFieldType_EnergyPerRegen                  : 'distdraw',
		OutfittingFieldType_EngineHeatRate                  : 'thmload',
		OutfittingFieldType_EngineOptPerformance            : 'optmul',
		OutfittingFieldType_EngineOptimalMass               : 'optmass',
		OutfittingFieldType_EnginesCapacity                 : 'engcap',
		OutfittingFieldType_EnginesRecharge                 : 'engchg',
		OutfittingFieldType_ExplosiveResistance             : 'expres',
		OutfittingFieldType_FSDHeatRate                     : 'thmload', // TODO verify
		OutfittingFieldType_FSDInterdictorFacingLimit       : 'facinglim', // TODO verify
		OutfittingFieldType_FSDInterdictorRange             : 'timerng', // TODO verify
		OutfittingFieldType_FSDOptimalMass                  : 'optmass',
		OutfittingFieldType_FalloffRange                    : 'dmgfall',
		OutfittingFieldType_HeatEfficiency                  : 'heateff',
		OutfittingFieldType_Integrity                       : 'integ',
		OutfittingFieldType_Jitter                          : 'jitter', // TODO verify
		OutfittingFieldType_KineticResistance               : 'kinres',
		OutfittingFieldType_Mass                            : 'mass',
		OutfittingFieldType_MaxAngle                        : 'maxangle', // TODO verify
		OutfittingFieldType_MaxBreachChance                 : 'maxbrc', // TODO verify
		OutfittingFieldType_MaxFuelPerJump                  : 'maxfuel',
		OutfittingFieldType_MaximumRange                    : 'maxrng', // TODO verify
		OutfittingFieldType_MinBreachChance                 : 'minbrc', // TODO verify
		OutfittingFieldType_PowerCapacity                   : 'pwrcap',
		OutfittingFieldType_PowerDraw                       : 'pwrdraw',
		OutfittingFieldType_Range                           : 'typemis',
		OutfittingFieldType_RateOfFire                      : 'rof',
		OutfittingFieldType_RegenRate                       : 'genrate',
		OutfittingFieldType_ReloadTime                      : 'rldtime', // TODO verify
		OutfittingFieldType_ScannerRange                    : 'scanrng',
		OutfittingFieldType_ScannerTimeToScan               : 'scantime',
		OutfittingFieldType_SensorTargetScanAngle           : 'maxangle',
		OutfittingFieldType_ShieldBankDuration              : 'duration', // TODO verify
		OutfittingFieldType_ShieldBankHeat                  : 'thmload', // TODO verify
		OutfittingFieldType_ShieldBankReinforcement         : 'shieldrnf', // TODO verify
		OutfittingFieldType_ShieldBankSpinUp                : 'spinup', // TODO verify
		OutfittingFieldType_ShieldGenOptimalMass            : 'optmass',
		OutfittingFieldType_ShieldGenStrength               : 'optmul',
		OutfittingFieldType_ShotSpeed                       : 'shotspd', // TODO verify
		OutfittingFieldType_SystemsCapacity                 : 'syscap',
		OutfittingFieldType_SystemsRecharge                 : 'syschg',
		OutfittingFieldType_ThermalLoad                     : 'thmload',
		OutfittingFieldType_ThermicResistance               : 'thmres',
		OutfittingFieldType_WeaponsCapacity                 : 'wepcap',
		OutfittingFieldType_WeaponsRecharge                 : 'wepchg',
		Override_BurstRate                                  : 'bstrof',
		Override_BurstSize                                  : 'bstsize',
		OutfittingFieldType_BurstRate                       : 'bstrof',
		OutfittingFieldType_BurstSize                       : 'bstsize',
/* coming in 2.5/3.0 ?
		WingDamageReduction,
		WingMinDuration,
		WingMaxDuration,
		ShieldSacrificeAmountRemoved,
		ShieldSacrificeAmountGiven,
		FSDJumpRangeBoost,
		FSDFuelUseIncrease
*/
	}, // eddb.fdfieldattr{}
	fdattrmod : {
		mod_boot_time                               : { boottime:1 },
		mod_defencemodifier_explosive_mult          : { expres:1 },
		mod_defencemodifier_global_hull_mult        : { kinres:1, thmres:1, expres:1 },
		mod_defencemodifier_global_shield_mult      : { kinres:1, thmres:1, expres:1 },
		mod_defencemodifier_health_add              : { hullrnf:1 },
		mod_defencemodifier_health_mult             : { hullbst:1 },
		mod_defencemodifier_kinetic_mult            : { kinres:1 },
		mod_defencemodifier_shield_explosive_mult   : { expres:1 },
		mod_defencemodifier_shield_kinetic_mult     : { kinres:1 },
		mod_defencemodifier_shield_mult             : { shieldbst:1 },
		mod_defencemodifier_shield_thermic_mult     : { thmres:1 },
		mod_defencemodifier_thermic_mult            : { thmres:1 },
		mod_dss_rate                                : { scanratemod:1 },
		mod_dss_range                               : { scanrngmod:1 },
		mod_dss_angle                               : { scanangmod:1 },
		mod_engine_heat                             : { thmload:1 },
		mod_engine_mass_curve                       : { optmass:1 },
		mod_engine_mass_curve_multiplier            : { optmul:1 },
		mod_fsd_heat_rate                           : { thmload:1 },
		mod_fsd_max_fuel_per_jump                   : { maxfuel:1 },
		mod_fsd_optimised_mass                      : { optmass:1 },
		mod_fsdinterdictor_facing_limit             : { facinglim:1 },
		mod_fsdinterdictor_range                    : { timerng:1 },
		mod_health                                  : { integ:1 },
		mod_mass                                    : { mass:1 },
		mod_passive_power                           : { pwrdraw:1 },
		mod_powerdistributor_engine_charge          : { engcap:1 },
		mod_powerdistributor_engine_rate            : { engchg:1 },
		mod_powerdistributor_global_charge          : { engcap:1, syscap:1, wepcap:1 },
		mod_powerdistributor_global_rate            : { engchg:1, syschg:1, wepchg:1 },
		mod_powerdistributor_system_charge          : { syscap:1 },
		mod_powerdistributor_system_rate            : { syschg:1 },
		mod_powerdistributor_weapon_charge          : { wepcap:1 },
		mod_powerdistributor_weapon_rate            : { wepchg:1 },
		mod_powerplant_heat                         : { heateff:1 },
		mod_powerplant_power                        : { pwrcap:1 },
		mod_scanner_range                           : { scanrng:1 },
		mod_scanner_scan_time                       : { scantime:1 },
		mod_scanner_max_angle                       : { maxangle:1 },
		mod_sensor_passive_scan_angle               : { maxangle:1 },
		mod_sensor_range                            : { typemis:1 },
		mod_shield_broken_regen                     : { bgenrate:1 },
		mod_shield_energy_per_regen                 : { distdraw:1 },
		mod_shield_explosive_mult                   : { expres:1 },
		mod_shield_global_mult                      : { kinres:1, thmres:1, expres:1 },
		mod_shield_kinetic_mult                     : { kinres:1 },
		mod_shield_mass_curve                       : { optmass:1 },
		mod_shield_mass_curve_multiplier            : { optmul:1 },
		mod_shield_normal_regen                     : { genrate:1 },
		mod_shield_thermal_mult                     : { thmres:1 },
		mod_shieldcell_charge_heat                  : { thmload:1 },
		mod_shieldcell_duration                     : { duration:1 },
		mod_shieldcell_shield_units                 : { shieldrnf:1 },
		mod_shieldcell_spin_up                      : { spinup:1 },
		mod_weapon_active_heat                      : { thmload:1 },
		mod_weapon_active_power                     : { distdraw:1 },
		mod_weapon_ammo_capacity                    : { ammomax:1 },
		mod_weapon_burst_interval                   : { bstint:1 },
		mod_weapon_burst_rof                        : { bstrof:1 },
		mod_weapon_burst_size                       : { bstsize:1 },
		mod_weapon_clip_size                        : { ammoclip:1 },
	//	mod_weapon_clip_size_override               : {}, // handled specially
		mod_weapon_damage                           : { damage:1 },
	//	mod_weapon_falloffrange_from_range          : {}, // handled specially
		mod_weapon_hardness_piercing                : { pierce:1 },
		mod_weapon_jitter_radius                    : { jitter:1 },
		mod_weapon_range                            : { maxrng:1 },
		mod_weapon_reload_time                      : { rldtime:1 },
		
		special_auto_loader                         : {}, // TODO: figure out what 3.0 "rate increased 25%" means
		special_blinding_shell                      : {}, // no side effects
		special_choke_canister                      : {}, // no side effects
		special_concordant_sequence                 : { thmload:0.5 },
		special_corrosive_shell                     : { ammomax:-0.2 },
	//	special_deep_cut_payload                    : {}, // TODO: find an example of this
		special_dispersal_field                     : {}, // TODO: confirm damage:-0.1 removed in 2.2.03
	//	special_distortion_field                    : {}, // TODO: find an example of this // TODO: burst +50% dmg/rof? +3 jitter?
		special_drag_munitions                      : {}, // no side effects
		special_emissive_munitions                  : { thmload:1 },
		special_feedback_cascade                    : { damage:-0.2 },
	//	special_force_shell                         : {}, // TODO: find an example of this // TODO -16.7% shotspd?
	//	special_fsd_interrupt                       : {}, // TODO: find an example of this
		special_high_yield_shell                    : { bstint:0.11111111111111111111111111111111 },
		special_incendiary_rounds                   : { thmload:2, bstint:0.05263157894736842105263157894737 },
		special_lock_breaker                        : {}, // no side effects
	//	special_mass_lock                           : {}, // TODO: find an example of this
		special_overload_munitions                  : {}, // no side effects
		special_super_penetrator                    : { rldtime:0.5 },
		special_phasing_sequence                    : { damage:-0.1 },
		special_plasma_slug                         : { damage:-0.1, ammomax:-1 },
		special_radiant_canister                    : {},
		special_regeneration_sequence               : { damage:-0.1 },
		special_reverberating_cascade               : {}, // no side effects
		special_scramble_spectrum                   : { bstint:0.11111111111111111111111111111111 },
		special_screening_shell                     : { rldtime:-0.5 },
		special_shiftlock_canister                  : {},
		special_smart_rounds                        : {}, // no side effects
	//	special_super_penetrator                    : {}, // TODO: find an example of this // TODO: railgun +50% rldtime?
		special_thermalshock                        : { damage:-0.1 },
		special_thermal_cascade                     : {}, // no side effects
		special_thermal_conduit                     : {}, // TODO: try to find some way to model the range of effect by ship heat level
		special_thermal_vent                        : {}, // TODO: verify if there might be a distdraw effect as well
		
		trade_cell_heat_cell_units                  : { shieldrnf:-1 , thmload:-1 },
		trade_defence_health_add_defence_global_mult: { hullrnf:1, kinres:0.4, thmres:0.4, expres:0.4 },
		trade_distributor_engine_charge_system_charge:{ engcap:1, syscap:-1 },
		trade_distributor_global_charge_mass        : { mass:1, engcap:0.75, syscap:0.75, wepcap:0.75 },
		trade_engine_curve_mult_engine_heat         : { optmul:0.4, thmload:1 },
		trade_fsd_fuel_per_jump_fsd_heat            : { maxfuel:0.5, thmload:1 },
		trade_interdictor_range_facing_limit        : { timerng:1, facinglim:-1 },
		trade_mass_defence_health_add               : { mass:-1, hullrnf:-0.75 },
		trade_mass_health                           : { mass:0.4, integ:1 },
		trade_passive_power_booster_global_mult     : { pwrdraw:-1, kinres:0.4, thmres:0.4, expres:0.4 },
		trade_passive_power_boot_time               : { pwrdraw:-0.5, boottime:1 },
		trade_passive_power_cell_spin_up            : { pwrdraw:-0.66, spinup:1 },
		trade_passive_power_distributor_global_rate : { pwrdraw:-1, engchg:-1, syschg:-1, wepchg:-1 },
		trade_passive_power_engine_curve            : { pwrdraw:-1, optmass:-0.66 },
		trade_passive_power_shield_global_mult      : { pwrdraw:-1, kinres:0.5, thmres:0.5, expres:0.5 },
		trade_passive_power_weapon_active           : { pwrdraw:1, distdraw:-0.6 },
		trade_shield_curve_shield_curve_mult        : { optmass:-1, optmul:-0.8 },
		trade_shield_global_mult_shield_broken_regen: { kinres:-0.5, thmres:-0.5, expres:-0.5, bgenrate:-1 },
		trade_shield_kinetic_shield_thermic         : { kinres:1, thmres:-1 }, // TODO verify
		trade_weapon_active_passive_power           : { distdraw:-0.67, pwrdraw:1 }, // TODO: verify distdraw weight in absence of special_thermal_vent
		trade_weapon_damage_weapon_active_power     : { damage:0.5, distdraw:1 },
		trade_weapon_hardness_weapon_heat           : { pierce:0.4, thmload:1 },
	}, // eddb.fdattrmod{}
	blueprint : {
		wpn_ds : { name:'Double Shot', maxgrade:5, maxrng:[-2,-4,-6,-8,-10], bstrof:[6,8,10,12,14], bstsize:[2,2,2,2,2], ammoclip:[15,20,25,30,35], fdname:'Weapon_DoubleShot' },
		wpn_eff : { name:'Efficient', maxgrade:5, pwrdraw:[0,-12,-24,-36,-48], damage:[8,12,16,20,24], distdraw:[0,-15,-25,-35,-45], thmload:[-37.5,-42.5,-47.5,-52.5,-60], fdname:'Weapon_Efficient' },
		wpn_foc : { name:'Focused', maxgrade:5, thmload:[1,2,3,4,5], pierce:[40,60,80,100,120], maxrng:[36,52,68,84,100], dmgfall:[36,52,68,84,100], fdname:'Weapon_Focused' },
		wpn_hc : { name:'High Capacity', maxgrade:5, mass:[20,30,40,50,60], pwrdraw:[4,8,12,16,20], ammoclip:[36,52,68,84,100], ammomax:[36,52,68,84,100], bstint:[-2,-4,-6,-8,-10], fdname:'Weapon_HighCapacity' },
		wpn_lw : { name:'Light Weight', maxgrade:5, mass:[-30,-45,-60,-75,-90], integ:[-20,-30,-40,-50,-60], pwrdraw:[0,-10,-20,-30,-40], distdraw:[0,-20,-25,-30,-35], fdname:'Weapon_LightWeight' },
		wpn_lr : { name:'Long Range', maxgrade:5, mass:[10,15,20,25,30], pwrdraw:[3,6,9,12,15], maxrng:[20,40,60,80,100], dmgfall:[1000,1000,1000,1000,1000], fdname:'Weapon_LongRange' },
		wpn_oc : { name:'Overcharged', maxgrade:5, damage:[30,40,50,60,70], distdraw:[15,20,25,30,35], thmload:[3,6,9,12,15], ammoclip:[-3,-6,-9,-12,-15], fdname:'Weapon_Overcharged' },
		wpn_sr : { name:'Short Range', maxgrade:5, damage:[27,39,51,63,75], thmload:[0,10,20,30,40], maxrng:[-10,-20,-30,-40,-50], fdname:'Weapon_ShortRange' },
		wpn_rf : { name:'Rapid Fire', maxgrade:5, damage:[-1,-2,-3,-4,-5], distdraw:[0,-5,-15,-25,-35], bstint:[-8,-17,-26,-35,-44], rldtime:[-25,-35,-45,-55,-65], jitter:[0.5,0.5,0.5,0.5,0.5], fdname:'Weapon_RapidFire' },
		wpn_stu : { name:'Sturdy', maxgrade:5, mass:[20,40,60,80,100], integ:[100,150,200,250,300], thmload:[-10,-15,-20,-25,-30], pierce:[20,30,40,50,60], fdname:'Weapon_Sturdy' },
		ucl_ammo : { name:'Ammo Capacity', maxgrade:1, mass:[100], ammomax:[50,80], rldtime:[10], fdname:'Misc_ChaffCapacity' }, // fake grade 2 to calibrate grade 1 minimum
		misc_lw : { name:'Lightweight', maxgrade:5, mass:[-45,-55,-65,-75,-85], integ:[-10,-20,-30,-40,-50], fdname:'Misc_LightWeight' },
		misc_lw4 : { name:'Lightweight', maxgrade:4, mass:[-45,-55,-65,-75], integ:[-10,-20,-30,-40], fdname:'Misc_LightWeight' },
		misc_rf : { name:'Reinforced', maxgrade:5, mass:[30,60,90,120,150], integ:[60,120,180,240,300], fdname:'Misc_Reinforced' },
		misc_rf4 : { name:'Reinforced', maxgrade:4, mass:[30,60,90,120], integ:[60,120,180,240], fdname:'Misc_Reinforced' },
		misc_sh : { name:'Shielded', maxgrade:5, integ:[60,120,180,240,300], pwrdraw:[20,40,60,80,100], fdname:'Misc_Shielded' },
		misc_sh4 : { name:'Shielded', maxgrade:4, integ:[60,120,180,240], pwrdraw:[20,40,60,80], fdname:'Misc_Shielded' },
		uhsl_ammo : { name:'Ammo Capacity', maxgrade:1, mass:[100], ammomax:[50,80], rldtime:[50], fdname:'Misc_HeatSinkCapacity' }, // fake grade 2 to calibrate grade 1 minimum
		scan_fs : { name:'Fast Scan', maxgrade:5, integ:[-10,-20,-30,-40,-50], scanrng:[-5,-10,-15,-20,-25], scantime:[-20,-35,-50,-65,-80], fdname:'Sensor_FastScan' },
		scan_lr : { name:'Long Range', maxgrade:5, pwrdraw:[10,20,30,40,50], scanrng:[24,48,72,96,120], maxangle:[-10,-15,-20,-25,-30], fdname:'Sensor_LongRange' },
		scan_wa : { name:'Wide Angle', maxgrade:5, mass:[20,40,60,80,100], maxangle:[40,80,120,160,200], scantime:[10,20,30,40,50], fdname:'Sensor_WideAngle' },
		upd_ammo : { name:'Ammo Capacity', maxgrade:1, mass:[100], ammomax:[50,80], rldtime:[10], fdname:'Misc_PointDefenseCapacity' }, // fake grade 2 to calibrate grade 1 minimum
		usb_br : { name:'Blast Resistant', maxgrade:5, kinres:[-1,-1.75,-2.5,-3.25,-4], thmres:[-1,-1.75,-2.5,-3.25,-4], expres:[7,12,17,22,27], fdname:'ShieldBooster_Explosive' },
		usb_hd : { name:'Heavy Duty', maxgrade:5, mass:[100,150,200,250,300], integ:[3,6,9,12,15], pwrdraw:[5,10,15,20,25], shieldbst:[10,17,24,31,38], fdname:'ShieldBooster_HeavyDuty' },
		usb_kr : { name:'Kinetic Resistant', maxgrade:5, kinres:[7,12,17,22,27], thmres:[-1,-1.75,-2.5,-3.25,-4], expres:[-1,-1.75,-2.5,-3.25,-4], fdname:'ShieldBooster_Kinetic' },
		usb_ra : { name:'Resistance Augmented', maxgrade:5, integ:[-4,-6,-8,-10,-12], pwrdraw:[5,10,15,20,25], kinres:[5,8,11,14,17], thmres:[5,8,11,14,17], expres:[5,8,11,14,17], fdname:'ShieldBooster_Resistive' },
		usb_tr : { name:'Thermal Resistant', maxgrade:5, kinres:[-1,-1.75,-2.5,-3.25,-4], thmres:[7,12,17,22,27], expres:[-1,-1.75,-2.5,-3.25,-4], fdname:'ShieldBooster_Thermic' },
		cbh_br : { name:'Blast Resistant', maxgrade:5, kinres:[-4,-6,-8,-10,-12], thmres:[-4,-6,-8,-10,-12], expres:[12,19,26,33,40], fdname:'Armour_Explosive' },
		cbh_hd : { name:'Heavy Duty', maxgrade:5, mass:[10,15,20,25,30], hullbst:[12,17,22,27,32], kinres:[1,2,3,4,5], thmres:[1,2,3,4,5], expres:[1,2,3,4,5], fdname:'Armour_HeavyDuty' },
		cbh_kr : { name:'Kinetic Resistant', maxgrade:5, kinres:[12,19,26,33,40], thmres:[-4,-6,-8,-10,-12], expres:[-4,-6,-8,-10,-12], fdname:'Armour_Kinetic' },
		cbh_lw : { name:'Light Weight', maxgrade:5, mass:[-15,-25,-35,-45,-55], hullbst:[-1,-2,-3,-4,-5], kinres:[3,6,9,12,15], thmres:[3,6,9,12,15], expres:[3,6,9,12,15], fdname:'Armour_Advanced' },
		cbh_tr : { name:'Thermal Resistant', maxgrade:5, kinres:[-4,-6,-8,-10,-12], thmres:[12,19,26,33,40], expres:[-4,-6,-8,-10,-12],  fdname:'Armour_Thermic' },
		cpp_arm : { name:'Armoured', maxgrade:5, mass:[4,8,12,16,20], integ:[40,60,80,100,120], pwrcap:[4,6,8,10,12], heateff:[-4,-6,-8,-10,-12], fdname:'PowerPlant_Armoured' },
		cpp_le : { name:'Low Emissions', maxgrade:5, mass:[4,8,12,16,20], pwrcap:[-3,-6,-9,-12,-15], heateff:[-25,-35,-45,-55,-65], fdname:'PowerPlant_Stealth' },
		cpp_oc : { name:'Overcharged', maxgrade:5, integ:[-5,-10,-15,-20,-25], pwrcap:[12,19,26,33,40], heateff:[5,10,15,20,25], fdname:'PowerPlant_Boosted' },
		ct_ct : { name:'Clean Tuning', maxgrade:5, integ:[0,-4,-8,-12,-16], pwrdraw:[0,4,8,12,16], optmass:[-2,-4,-6,-8,-10], optmul:[8,13,18,23,28], thmload:[-20,-30,-40,-50,-60],  fdname:'Engine_Tuned' },
		ct_dt : { name:'Dirty Tuning', maxgrade:5, integ:[-3,-6,-9,-12,-15], pwrdraw:[4,6,8,10,12], optmass:[-2.5,-5,-7.5,-10,-12.5], optmul:[12,19,26,33,40], thmload:[20,30,40,50,60], fdname:'Engine_Dirty' },
		ct_str : { name:'Strengthening', maxgrade:5, mass:[5,10,15,20,25], integ:[30,50,70,90,110], thmload:[-10,-20,-30,-40,-50], fdname:'Engine_Reinforced' },
		cfsd_fb : { name:'Faster Boot', maxgrade:5, integ:[-3,-6,-9,-12,-15], boottime:[-20,-35,-50,-65,-80], optmass:[3,6,9,12,15], thmload:[4,8,12,16,20], fdname:'FSD_FastBoot' },
		cfsd_ir : { name:'Increased Range', maxgrade:5, mass:[10,15,20,25,30], integ:[-3,-6,-9,-12,-15], pwrdraw:[3,6,9,12,15], optmass:[15,25,35,45,55], fdname:'FSD_LongRange' },
		cfsd_sh : { name:'Shielded', maxgrade:5, mass:[4,8,12,16,20], integ:[25,50,75,100,125], optmass:[3,6,9,12,15], thmload:[-10,-15,-20,-25,-30], fdname:'FSD_Shielded' },
		cpd_ce : { name:'Charge Enhanced', maxgrade:5, wepcap:[-1,-2,-3,-4,-5], wepchg:[9,18,27,36,45], engcap:[-1,-2,-3,-4,-5], engchg:[9,18,27,36,45], syscap:[-1,-2,-3,-4,-5], syschg:[9,18,27,36,45], fdname:'PowerDistributor_HighFrequency' },
		cpd_ef : { name:'Engine Focused', maxgrade:5, wepcap:[-3,-6,-9,-12,-15], wepchg:[-1,-2,-3,-4,-5], engcap:[20,30,40,50,60], engchg:[16,23,30,37,44], syscap:[-3,-6,-9,-12,-15], syschg:[-3,-6,-9,-12,-15], fdname:'PowerDistributor_PriorityEngines' },
		cpd_hc : { name:'High Charge Capacity', maxgrade:5, integ:[10,15,20,25,30], wepcap:[10,18,26,34,42], wepchg:[-2,-6,-10,-14,-18], engcap:[10,18,26,34,42], engchg:[-2,-6,-10,-14,-18], syscap:[10,18,26,34,42], syschg:[-2,-6,-10,-14,-18],  fdname:'PowerDistributor_HighCapacity' },
		cpd_sh : { name:'Shielded', maxgrade:5, integ:[40,80,120,160,200], mass:[3,6,9,12,15], pwrdraw:[-10,-15,-20,-25,-30], fdname:'PowerDistributor_Shielded' },
		cpd_sf : { name:'System Focused', maxgrade:5, wepcap:[-3,-6,-9,-12,-15], wepchg:[-3,-6,-9,-12,-15], engcap:[-3,-6,-9,-12,-15], engchg:[-1,-2,-3,-4,-5], syscap:[20,30,40,50,60], syschg:[16,23,30,37,44], fdname:'PowerDistributor_PrioritySystems' },
		cpd_wf : { name:'Weapon Focused', maxgrade:5, wepcap:[20,30,40,50,60], wepchg:[16,23,30,37,44], engcap:[-3,-6,-9,-12,-15], engchg:[-3,-6,-9,-12,-15], syscap:[-3,-6,-9,-12,-15], syschg:[-1,-2,-3,-4,-5], fdname:'PowerDistributor_PriorityWeapons' },
		cs_lw : { name:'Light Weight', maxgrade:5, mass:[-20,-35,-50,-65,-80], integ:[-10,-20,-30,-40,-50], maxangle:[-5,-10,-15,-20,-25], fdname:'Sensor_LightWeight' },
		cs_lr : { name:'Long Range', maxgrade:5, mass:[20,40,60,80,100], maxangle:[-10,-15,-20,-25,-30], typemis:[15,30,45,60,75], fdname:'Sensor_LongRange' },
		cs_wa : { name:'Wide Angle', maxgrade:5, pwrdraw:[10,20,30,40,50], maxangle:[40,80,120,160,200], typemis:[-4,-8,-12,-16,-20], fdname:'Sensor_WideAngle' },
		ifsdi_eca : { name:'Expanded Capture Arc', maxgrade:4, pwrdraw:[10,20,30,40], timerng:[-10,-15,-20,-25], facinglim:[40,60,80,100], fdname:'FSDinterdictor_Expanded' },
		ifsdi_lr : { name:'Longer Range', maxgrade:4, mass:[10,15,20,25], pwrdraw:[10,20,30,40], timerng:[20,30,40,50], facinglim:[-10,-15,-20,-25], fdname:'FSDinterdictor_LongRange' },
		ihrp_br : { name:'Blast Resistant', maxgrade:5, hullrnf:[3,6,9,12,15], kinres:[-2,-4,-6,-8,-10], thmres:[-2,-4,-6,-8,-10], expres:[12,19,26,33,40], fdname:'HullReinforcement_Explosive' },
		ihrp_hd : { name:'Heavy Duty', maxgrade:5, mass:[8,16,24,32,40], hullrnf:[24,36,48,60,72], kinres:[3,6,9,12,15], thmres:[3,6,9,12,15], expres:[3,6,9,12,15], fdname:'HullReinforcement_HeavyDuty' },
		ihrp_kr : { name:'Kinetic Resistant', maxgrade:5, hullrnf:[3,6,9,12,15], kinres:[12,19,26,33,40], thmres:[-2,-4,-6,-8,-10], expres:[-2,-4,-6,-8,-10], fdname:'HullReinforcement_Kinetic' },
		ihrp_lw : { name:'Light Weight', maxgrade:5, mass:[-8,-12,-16,-20,-24], hullbst:[8,12,16,20,24], hullrnf:[-4,-8,-12,-16,-20], fdname:'HullReinforcement_Advanced' },
		ihrp_tr : { name:'Thermal Resistant', maxgrade:5, hullrnf:[3,6,9,12,15], kinres:[-2,-4,-6,-8,-10], thmres:[12,19,26,33,40], expres:[-2,-4,-6,-8,-10], fdname:'HullReinforcement_Thermic' },
		iscb_rc : { name:'Rapid Charge', maxgrade:4, boottime:[10,15,20,25], spinup:[-10,-20,-30,-40], shieldrnf:[5,10,15,20], duration:[-6,-12,-18,-24], fdname:'ShieldCellBank_Rapid' },
		iscb_sp : { name:'Specialised', maxgrade:4, integ:[-5,-10,-15,-20], pwrdraw:[10,15,20,25], boottime:[-8,-16,-24,-32], shieldrnf:[4,6,8,10], thmload:[-6,-12,-18,-24], fdname:'ShieldCellBank_Specialised' },
		isg_elp : { name:'Enhanced, Low Power', maxgrade:5, mass:[-18,-26,-34,-42,-50], integ:[-5,-10,-15,-20,-25], pwrdraw:[-20,-25,-30,-35,-40], optmass:[-2,-3,-4,-5,-6], optmul:[3,6,9,12,15], fdname:'ShieldGenerator_Optimised' },
		isg_kr : { name:'Kinetic Resistant', maxgrade:5, integ:[20,25,30,35,40], kinres:[10,20,30,40,50], thmres:[-3,-6,-9,-12,-15], fdname:'ShieldGenerator_Kinetic' },
		isg_rf : { name:'Reinforced', maxgrade:5, optmul:[14,20,26,32,38], bgenrate:[-10,-10,-10,-10,-10], distdraw:[4,6,8,10,12], kinres:[4.5,7.5,10.5,13.5,16.5], thmres:[4.5,7.5,10.5,13.5,16.5], expres:[4.5,7.5,10.5,13.5,16.5], fdname:'ShieldGenerator_Reinforced' },
		isg_tr : { name:'Thermal Resistant', maxgrade:5, integ:[20,25,30,35,40], kinres:[-4,-8,-12,-16,-20], thmres:[10,20,30,40,50], fdname:'ShieldGenerator_Thermic' },
		iss_fs : { name:'Fast Scan', maxgrade:5, mass:[20,40,60,80,100], pwrdraw:[10,20,30,40,50], scanratemod:[20,35,50,65,80], fdname:'Sensor_FastScan' },
		iss_lr : { name:'Long Range', maxgrade:5, mass:[20,40,60,80,100], pwrdraw:[10,20,30,40,50], scanrngmod:[40,80,120,160,200], fdname:'Sensor_LongRange' },
		iss_wa : { name:'Wide Angle', maxgrade:5, mass:[20,40,60,80,100], pwrdraw:[10,20,30,40,50], scanangmod:[40,80,120,160,200], fdname:'Sensor_WideAngle' },
	}, // eddb.blueprint{}
	fdexpeffect : {
		special_armour_chunky : 'cbhx_dp',
		special_armour_explosive : 'cbhx_lp',
		special_armour_kinetic : 'cbhx_ap',
		special_armour_thermic : 'cbhx_rp',
		special_auto_loader : 'wpnx_aulo',
		special_blinding_shell : 'wpnx_dash',
		special_choke_canister : 'wpnx_iodi',
		special_concordant_sequence : 'wpnx_cose',
		special_corrosive_shell : 'wpnx_cosh',
		special_deep_cut_payload : 'wpnx_pepa',
		special_dispersal_field : 'wpnx_difi',
		special_distortion_field : 'wpnx_inim',
		special_drag_munitions : 'wpnx_drmu',
		special_emissive_munitions : 'wpnx_emmu',
		special_engine_cooled : 'ctx_ts',
		special_engine_haulage : 'ctx_ddi',
		special_engine_lightweight : 'miscx_sd',
		special_engine_overloaded : 'ctx_ddr',
		special_engine_toughened : 'miscx_db',
		special_feedback_cascade_cooled : 'wpnx_feca',
		special_force_shell : 'wpnx_fosh',
		special_fsd_cooled : 'cfsdx_ts',
		special_fsd_fuelcapacity : 'cfsdx_dc',
		special_fsd_heavy : 'cfsdx_mm',
		special_fsd_interrupt : 'wpnx_fsin',
		special_fsd_lightweight : 'miscx_sd',
		special_fsd_toughened : 'cfsdx_db',
		special_high_yield_shell : 'wpnx_hys',
		special_hullreinforcement_chunky : 'ihrpx_dp',
		special_hullreinforcement_explosive : 'ihrpx_lp',
		special_hullreinforcement_kinetic : 'ihrpx_ap',
		special_hullreinforcement_thermic : 'ihrpx_rp',
		special_incendiary_rounds : 'wpnx_inro',
		special_lock_breaker : 'wpnx_tlb',
		special_mass_lock : 'wpnx_mlm',
		special_overload_munitions : 'wpnx_ovmu',
		special_penetrator_munitions : 'wpnx_pemu',
		special_phasing_sequence : 'wpnx_phse',
		special_plasma_slug : 'wpnx_plsl',
		special_plasma_slug_cooled : 'hrgx_plsl',
		special_powerdistributor_capacity : 'cpdx_cc',
		special_powerdistributor_efficient : 'miscx_fc',
		special_powerdistributor_fast : 'cpdx_sc',
		special_powerdistributor_lightweight : 'miscx_sd',
		special_powerdistributor_toughened : 'miscx_db',
		special_powerplant_cooled : 'cppx_ts',
		special_powerplant_highcharge : 'cppx_mon',
		special_powerplant_lightweight : 'miscx_sd',
		special_powerplant_toughened : 'miscx_db',
		special_radiant_canister : 'wpnx_raca',
		special_regeneration_sequence : 'wpnx_rese',
		special_reverberating_cascade : 'wpnx_reca',
		special_scramble_spectrum : 'wpnx_scsp',
		special_screening_shell : 'wpnx_scsh',
		special_shield_efficient : 'isgx_ld',
		special_shield_health : 'isgx_hc',
		special_shield_kinetic : 'isgx_fb',
		special_shield_lightweight : 'miscx_sd',
		special_shield_regenerative : 'isgx_fc',
		special_shield_resistive : 'isgx_mw',
		special_shield_thermic : 'isgx_tb',
		special_shield_toughened : 'miscx_db',
		special_shieldbooster_chunky : 'usbx_sc',
		special_shieldbooster_efficient : 'miscx_fc',
		special_shieldbooster_explosive : 'usbx_bb',
		special_shieldbooster_kinetic : 'usbx_fb',
		special_shieldbooster_thermic : 'usbx_tb',
		special_shieldbooster_toughened : 'miscx_db',
		special_shieldcell_efficient : 'miscx_fc',
		special_shieldcell_gradual : 'iscbx_rc',
		special_shieldcell_lightweight : 'miscx_sd',
		special_shieldcell_oversized : 'iscbx_bc',
		special_shieldcell_toughened : 'miscx_db',
		special_shiftlock_canister : 'wpnx_slc',
		special_smart_rounds : 'wpnx_smro',
		special_super_penetrator_cooled : 'wpnx_supe',
		special_thermal_cascade : 'wpnx_thca',
		special_thermal_conduit : 'wpnx_thco',
		special_thermal_vent : 'wpnx_thve',
		special_thermalshock : 'wpnx_thsh',
		special_weapon_damage : 'wpnx_os',
		special_weapon_efficient : 'miscx_fc',
		special_weapon_lightweight : 'miscx_sd',
		special_weapon_rateoffire : 'wpnx_muse',
		special_weapon_toughened : 'miscx_db',
	},
	expeffect : {
		miscx_fc : { name:'Flow Control', pwrdraw:-10 },
		miscx_db : { name:'Double Braced', integ:15 },
		miscx_sd : { name:'Stripped Down', mass:-10 },
		
		wpnx_aulo : { name:'Auto Loader', special:'Auto reload while firing' },
		wpnx_cose : { name:'Concordant Sequence', thmload:50, special:'Wing shield regen increased' },
		wpnx_cosh : { name:'Corrosive Shell', ammomax:-20, special:'Target armor hardness reduced' },
		wpnx_dash : { name:'Dazzle Shell', special:'Target sensor acuity reduced' },
		wpnx_difi : { name:'Dispersal Field', special:'Target gimbal/turret tracking reduced' },
		wpnx_drmu : { name:'Drag Munitions', special:'Target speed reduced' },
		wpnx_emmu : { name:'Emissive Munitions', thmload:100, special:'Target signature increased' },
		wpnx_feca : { name:'Feedback Cascade', damage:-20, thmload:-40, special:'Target shield cell disrupted' },
		wpnx_fosh : { name:'Force Shell', shotspd:-16.6666666666667, special:'Target pushed off course' },
		wpnx_fsin : { name:'FSD Interrupt', damage:-30, bstint:50, special:'Target FSD reboots' },
		wpnx_hys : { name:'High Yield Shell', bstint:11.1111111111111, special:'Damage partly explosive; target module damage' }, // TODO: test damage type distribution; -50% damage mod?
		wpnx_inro : { name:'Incendiary Rounds', bstint:5.263157894737, thmload:200, special:'Damage mostly thermal' },
		wpnx_inim : { name:'Inertial Impact', damage:50, jitter:3, special:'Damage half kinetic' },
		wpnx_iodi : { name:'Ion Disruption', special:'Target thrusters reboot' },
		wpnx_mlm : { name:'Mass Lock Munition', special:'Target FSD inhibited' },
		wpnx_muse : { name:'Multi-Servos', pwrdraw:5, bstint:-2.912621359223 },
		wpnx_ovmu : { name:'Overload Munitions', special:'Damage partly thermal' },
		wpnx_os : { name:'Oversized', pwrdraw:5, damage:3 },
		wpnx_pemu : { name:'Penetrator Munitions', special:'Target module damage' },
		wpnx_pepa : { name:'Penetrator Payload', special:'Target module damage' },
		wpnx_phse : { name:'Phasing Sequence', damage:-10, special:'Damage slightly bypasses shields' },
		wpnx_plsl : { name:'Plasma Slug', damage:-10, ammomax:-100, special:'Reload from ship fuel' },
		hrgx_plsl : { name:'Plasma Slug', damage:-10, thmload:-40, ammomax:-100, special:'Reload from ship fuel' },
		wpnx_raca : { name:'Radiant Canister', special:'Area heat increased and sensors disrupted' },
		wpnx_rese : { name:'Regeneration Sequence', damage:-10, special:'Target wing shields regenerated' },
		wpnx_reca : { name:'Reverberating Cascade', special:'Target shield generator damaged' },
		wpnx_scsp : { name:'Scramble Spectrum', bstint:11.1111111111111, special:'Target modules malfunction' },
		wpnx_scsh : { name:'Screening Shell', rldtime:-50, special:'Effective against munitions' },
		wpnx_slc : { name:'Shift-Lock Canister', special:'Area FSDs reboot' },
		wpnx_smro : { name:'Smart Rounds', special:'No damage to untargeted ships' },
		wpnx_supe : { name:'Super Penetrator', thmload:-40, rldtime:50, special:'Target module damage' },
		wpnx_tlb : { name:'Target Lock Breaker', special:'Target loses target lock' },
		wpnx_thca : { name:'Thermal Cascade', special:'Shielded target heat increased' },
		wpnx_thco : { name:'Thermal Conduit', special:'Damage increases with heat level' },
		wpnx_thsh : { name:'Thermal Shock', damage:-10, special:'Target heat increased' },
		wpnx_thve : { name:'Thermal Vent', special:'Heat reduced when striking a target' },
		
		usbx_bb : { name:'Blast Block', shieldbst:-1, expres:2 },
		usbx_fb : { name:'Force Block', shieldbst:-1, kinres:2 },
		usbx_sc : { name:'Super Capacitors', shieldbst:5, kinres:-2, thmres:-2, expres:-2 },
		usbx_tb : { name:'Thermo Block', shieldbst:-1, thmres:2 },
		
		cbhx_ap : { name:'Angled Plating', hullbst:-3, kinres:8 },
		cbhx_dp : { name:'Deep Plating', hullbst:8, kinres:-3, thmres:-3, expres:-3 },
		cbhx_lp : { name:'Layered Plating', hullbst:-3, expres:8 },
		cbhx_rp : { name:'Reflective Plating', hullbst:-3, thmres:8 },
		
		cppx_mon : { name:'Monstered', mass:10, pwrcap:5 },
		cppx_ts : { name:'Thermal Spread', heateff:-10 },
		
		ctx_ddr : { name:'Drag Drives', optmul:4, thmload:10 },
		ctx_ddi : { name:'Drive Distributors', optmass:10 },
		ctx_ts : { name:'Thermal Spread', mass:5, thmload:-10 },
		
		cfsdx_dc : { name:'Deep Charge', pwrdraw:5, maxfuel:10 },
		cfsdx_db : { name:'Double Braced', integ:25 },
		cfsdx_mm : { name:'Mass Manager', integ:-8, optmass:4 },
		cfsdx_ts : { name:'Thermal Spread', thmload:-10 },
		
		cpdx_cc : { name:'Cluster Capacitors', wepcap:8, wepchg:-2, engcap:8, engchg:-2, syscap:8, syschg:-2 },
		cpdx_sc : { name:'Super Conduits', wepcap:-4, wepchg:4, engcap:-4, engchg:4, syscap:-4, syschg:4 },
		
		ihrpx_ap : { name:'Angled Plating', hullrnf:-5, kinres:2 },
		ihrpx_dp : { name:'Deep Plating', hullrnf:10, kinres:-2, thmres:-2, expres:-2 },
		ihrpx_lp : { name:'Layered Plating', hullrnf:-5, expres:2 },
		ihrpx_rp : { name:'Reflective Plating', hullrnf:-5, thmres:2 },
		
		iscbx_bc : { name:'Boss Cells', spinup:20, shieldrnf:5 },
		iscbx_rc : { name:'Recycling Cell', duration:10, shieldrnf:-5 },
		
		isgx_fc : { name:'Fast Charge', genrate:15, bgenrate:15, kinres:-1.5, thmres:-1.5, expres:-1.5 },
		isgx_fb : { name:'Force Block', optmul:-3, kinres:8 },
		isgx_hc : { name:'Hi-Cap', pwrdraw:10, optmul:6, distdraw:25 },
		isgx_ld : { name:'Lo-Draw', pwrdraw:-20, optmul:-2, distdraw:-20, kinres:-1, thmres:-1, expres:-1 },
		isgx_mw : { name:'Multi-Weave', pwrdraw:10, distdraw:25, kinres:3, thmres:3, expres:3 },
		isgx_tb : { name:'Thermo Block', optmul:-3, thmres:8 },
	}, // eddb.expeffect{}
	group : {
		hardpoint : { mtypes:{hel:1, hul:1, hc:1, hex:1, hfc:1, hm:1, hml:1, hmr:1, hmc:1, hpa:1, hpl:1, hrg:1, htp:1} },
		utility   : { mtypes:{ucl:1, uec:1, uex:1, uhsl:1, ukws:1, ucs:1, upd:1, usb:1, ufsws:1} },
		component : [
			{ mtypes:{cbh:1} },
			{ mtypes:{cpp:1} },
			{ mtypes:{ct:1} },
			{ mtypes:{cfsd:1} },
			{ mtypes:{cls:1} },
			{ mtypes:{cpd:1} },
			{ mtypes:{cs:1} },
			{ mtypes:{cft:1} }
		],
		military  : { mtypes:{ihrp:1, imahrp:1, imrp:1, iscb:1} },
		internal  : { mtypes:{iafmu:1, icr:1, iclc:1, idlc:1, idc:1, ifsdi:1, ifh:1, ifs:1, cft:1, iftlc:1, ihblc:1, ihrp:1, imahrp:1, imrp:1, ipc:1, ipvh:1, iplc:1, inlc:1, ir:1, irlc:1, islc:1, iscb:1, isg:1, isbs:1, iss:1} },
	}, // eddb.group{}
	mtype : {
		hel : {
			name:'Beam Lasers',
			modulenames:{'Beam Laser':1},
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','dmgfall','jitter'],
			blueprints:['wpn_eff','wpn_lw','wpn_lr','wpn_oc','wpn_sr','wpn_stu'],
			expeffects:['wpnx_cose','miscx_db','miscx_fc','wpnx_os','wpnx_rese','miscx_sd','wpnx_thco','wpnx_thsh','wpnx_thve'],
		},
		
		hul : {
			name:'Burst Lasers',
			modulenames:{'Burst Laser':1},
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','bstint','_bstsize','jitter','dmgfall'],
			blueprints:['wpn_eff','wpn_foc','wpn_lw','wpn_lr','wpn_oc','wpn_rf','wpn_sr','wpn_stu'],
			expeffects:['wpnx_cose','miscx_db','miscx_fc','wpnx_inim','wpnx_muse','wpnx_os','wpnx_phse','wpnx_scsp','miscx_sd','wpnx_thsh'],
		},
		
		hc : {
			name:'Cannons',
			modulenames:{'Cannon':1},
			ammocost:20,
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','bstint','ammoclip','ammomax','rldtime','jitter','dmgfall'], // shotspd?
			blueprints:['wpn_eff','wpn_hc','wpn_lw','wpn_lr','wpn_oc','wpn_rf','wpn_sr','wpn_stu'],
			expeffects:['wpnx_aulo','wpnx_difi','miscx_db','miscx_fc','wpnx_fosh','wpnx_hys','wpnx_muse','wpnx_os','wpnx_smro','miscx_sd','wpnx_thca'],
		},
		
		hex : {
			name:'Experimental',
			modulenames:{},
			singleton:4,
			keyattrs:['damage','distdraw','thmload','maxrng'],
		},
		
		hfc : {
			name:'Fragment Cannons',
			modulenames:{'Fragment Cannon':1},
			ammocost:17,
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','bstint','bstsize','ammoclip','ammomax','rldtime','jitter','bstrof'], // shotspd?
			blueprints:['wpn_ds','wpn_eff','wpn_hc','wpn_lw','wpn_oc','wpn_rf','wpn_stu'],
			expeffects:['wpnx_cosh','wpnx_dash','miscx_db','wpnx_drmu','miscx_fc','wpnx_inro','wpnx_muse','wpnx_os','wpnx_scsh','miscx_sd'],
		},
		
		hm : {
			name:'Mines',
			modulenames:{},
			ammocost:209,
			keyattrs:['damage','distdraw','thmload'],
			modifiable:['mass','integ','pwrdraw','damage','thmload','pierce','bstint','ammoclip','ammomax','rldtime','jitter'],
			blueprints:['wpn_hc','wpn_lw','wpn_rf','wpn_stu'],
			expeffects:['miscx_db','wpnx_emmu','miscx_fc','wpnx_iodi','wpnx_ovmu','wpnx_os','wpnx_raca','wpnx_reca','wpnx_slc','miscx_sd'],
		},
		
		hml : {
			name:'Mining Lasers',
			modulenames:{'Mining Laser':1},
			keyattrs:['distdraw','thmload','maxrng'],
		//	modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng'],
		},
		
		hmr : {
			name:'Missiles',
			modulenames:{'Missile Rack':1, 'Seeker Missile Rack':1},
			ammocost:500,
			keyattrs:['damage','distdraw','thmload'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','bstint','ammoclip','ammomax','rldtime','jitter'], // shotspd?
			blueprints:['wpn_hc','wpn_lw','wpn_rf','wpn_stu'],
			expeffects:['miscx_db','wpnx_emmu','miscx_fc','wpnx_fsin','wpnx_muse','wpnx_ovmu','wpnx_os','wpnx_pemu','miscx_sd','wpnx_thca'],
		},
		
		hmc : {
			name:'Multi-Cannons',
			modulenames:{'Multi-cannon':1},
			ammocost:1,
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','bstint','ammoclip','ammomax','rldtime','jitter','dmgfall'], // shotspd?
			blueprints:['wpn_eff','wpn_hc','wpn_lw','wpn_lr','wpn_oc','wpn_rf','wpn_sr','wpn_stu'],
			expeffects:['wpnx_aulo','wpnx_cosh','miscx_db','wpnx_emmu','miscx_fc','wpnx_inro','wpnx_muse','wpnx_os','wpnx_smro','miscx_sd','wpnx_thsh'],
		},
		
		hpa : {
			name:'Plasma Accelerators',
			modulenames:{},
			ammocost:200,
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','bstint','ammoclip','ammomax','rldtime','jitter','dmgfall'], // shotspd?
			blueprints:['wpn_eff','wpn_foc','wpn_lw','wpn_lr','wpn_oc','wpn_rf','wpn_sr','wpn_stu'],
			expeffects:['wpnx_dash','wpnx_difi','miscx_db','miscx_fc','wpnx_muse','wpnx_os','wpnx_phse','wpnx_plsl','miscx_sd','wpnx_tlb','wpnx_thco'],
		},
		
		hpl : {
			name:'Pulse Lasers',
			modulenames:{'Pulse Laser':1},
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','bstint','jitter','dmgfall'],
			blueprints:['wpn_eff','wpn_foc','wpn_lw','wpn_lr','wpn_oc','wpn_rf','wpn_sr','wpn_stu'],
			expeffects:['wpnx_cose','miscx_db','wpnx_emmu','miscx_fc','wpnx_muse','wpnx_os','wpnx_phse','wpnx_scsp','miscx_sd','wpnx_thsh'],
		},
		
		hrg : {
			name:'Rail Guns',
			modulenames:{},
			ammocost:75,
			keyattrs:['damage','distdraw','thmload','maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','distdraw','thmload','pierce','maxrng','bstint','ammoclip','ammomax','rldtime','jitter','dmgfall'],
			blueprints:['wpn_hc','wpn_lw','wpn_lr','wpn_sr','wpn_stu'],
			expeffects:['miscx_db','wpnx_feca','miscx_fc','wpnx_muse','wpnx_os','hrgx_plsl','miscx_sd','wpnx_supe'],
		},
		
		htp : {
			name:'Torpedoes',
			modulenames:{},
			ammocost:15000,
			keyattrs:['damage','distdraw','thmload'],
			modifiable:['mass','integ','pwrdraw','damage','thmload','pierce','bstint','ammoclip','rldtime','jitter'], // shotspd?
			blueprints:['wpn_lw','wpn_stu'],
			expeffects:['miscx_db','miscx_fc','wpnx_mlm','wpnx_os','wpnx_pepa','wpnx_reca','miscx_sd'],
		},
		
		
		ucl : {
			name:'Chaff Launchers',
			modulenames:{},
			ammocost:30,
			keyattrs:['ammomax','jamdur'],
			modifiable:['mass','integ','pwrdraw','distdraw','thmload','bstint','ammoclip','ammomax','rldtime'], // jamdur?
			blueprints:['ucl_ammo','misc_lw','misc_rf','misc_sh'],
		},
		
		uec : {
			name:'ECMs',
			modulenames:{},
			keyattrs:['cooldown','duration'],
			modifiable:['mass','integ','pwrdraw','distdraw','thmload'], // range? duration? cooldown?
			blueprints:['misc_lw','misc_rf','misc_sh'],
		},
		
		uex : {
			name:'Experimental',
			modulenames:{},
			singleton:1,
			keyattrs:['cooldown','duration','scanrng','scantime'],
		},
		
		uhsl : {
			name:'Heat Sink Launchers',
			modulenames:{},
			ammocost:25,
			keyattrs:['thmdrain','ammomax'],
			modifiable:['mass','integ','pwrdraw','distdraw','bstint','ammoclip','ammomax','rldtime'], // duration? thmdrain?
			blueprints:['uhsl_ammo','misc_lw','misc_rf','misc_sh'],
		},
		
		ukws : {
			name:'Kill Warrant Scanners',
			modulenames:{'Kill Warrant Scanner':1},
			singleton:1,
			keyattrs:['scanrng','scantime'],
			modifiable:['mass','integ','pwrdraw','boottime','scanrng','maxangle','scantime'],
			blueprints:['scan_fs','misc_lw','scan_lr','misc_rf','misc_sh','scan_wa'],
		},
		
		ucs : {
			name:'Manifest Scanners',
			modulenames:{'Manifest Scanner':1},
			singleton:1,
			keyattrs:['scanrng','scantime'],
			modifiable:['mass','integ','pwrdraw','boottime','scanrng','maxangle','scantime'],
			blueprints:['scan_fs','misc_lw','scan_lr','misc_rf','misc_sh','scan_wa'],
		},
		
		upd : {
			name:'Point Defence',
			modulenames:{},
			ammocost:1,
			keyattrs:['maxrng'],
			modifiable:['mass','integ','pwrdraw','damage','thmload','maxrng','bstint','ammoclip','ammomax','rldtime','jitter'], // shotspd?
			blueprints:['upd_ammo','misc_lw','misc_rf','misc_sh'],
		},
		
		usb : {
			name:'Shield Boosters',
			modulenames:{'Shield Booster':1},
			keyattrs:['shieldbst','thmres'],
			modifiable:['mass','integ','pwrdraw','shieldbst','kinres','thmres','expres'],
			blueprints:['usb_br','usb_hd','usb_kr','usb_ra','usb_tr'],
			expeffects:['usbx_bb','miscx_db','miscx_fc','usbx_fb','usbx_sc','usbx_tb'],
		},
		
		ufsws : {
			name:'Wake Scanners',
			modulenames:{'Frame Shift Wake Scanner':1},
			singleton:1,
			keyattrs:['scanrng','scantime'],
			modifiable:['mass','integ','pwrdraw','boottime','scanrng','maxangle','scantime'],
			blueprints:['scan_fs','misc_lw','scan_lr','misc_rf','misc_sh','scan_wa'],
		},
		
		
		cch : {
			name:'Cargo Hatches',
			modulenames:{},
		},
		
		cbh : {
			name:'Bulkheads',
			modulenames:{},
			keyattrs:['hullbst','kinres'],
			modifiable:['mass','hullbst','kinres','thmres','expres'],
			blueprints:['cbh_br','cbh_hd','cbh_kr','cbh_lw','cbh_tr'],
			expeffects:['cbhx_ap','cbhx_dp','cbhx_lp','cbhx_rp'],
		},
		
		cpp : {
			name:'Power Plants',
			modulenames:{'Power Plant':1},
			keyattrs:['heateff'],
			modifiable:['mass','integ','pwrcap','heateff'],
			blueprints:['cpp_arm','cpp_le','cpp_oc'],
			expeffects:['miscx_db','cppx_mon','miscx_sd','cppx_ts'],
		},
		
		ct : {
			name:'Thrusters',
			modulenames:{'Thrusters':1},
			keyattrs:['optmass','optmul'],
			modifiable:['mass','integ','pwrdraw','optmass','optmul','thmload'],
			blueprints:['ct_ct','ct_dt','ct_str'],
			expeffects:['miscx_db','ctx_ddr','ctx_ddi','miscx_sd','ctx_ts'],
		},
		
		cfsd : {
			name:'Frame Shift Drives',
			modulenames:{'Frame Shift Drive':1},
			keyattrs:['optmass','maxfuel'],
			modifiable:['mass','integ','pwrdraw','boottime','optmass','thmload','maxfuel'],
			blueprints:['cfsd_fb','cfsd_ir','cfsd_sh'],
			expeffects:['cfsdx_dc','cfsdx_db','cfsdx_mm','miscx_sd','cfsdx_ts'],
		},
		
		cls : {
			name:'Life Supports',
			modulenames:{'Life Support':1},
			keyattrs:['emgcylife'],
			modifiable:['mass','integ','pwrdraw','boottime'], //emgcylife?
			blueprints:['misc_lw4','misc_rf4','misc_sh4'],
		},
		
		cpd : {
			name:'Power Distributors',
			modulenames:{'Power Distributor':1},
			keyattrs:['engcap','engchg'],
			modifiable:['mass','integ','pwrdraw','boottime','wepcap','wepchg','engcap','engchg','syscap','syschg'],
			blueprints:['cpd_ce','cpd_ef','cpd_hc','cpd_sh','cpd_sf','cpd_wf'],
			expeffects:['cpdx_cc','miscx_db','miscx_fc','miscx_sd','cpdx_sc'],
		},
		
		cs : {
			name:'Sensors',
			modulenames:{'Sensors':1},
			keyattrs:['typemis','maxrng'],
			modifiable:['mass','integ','pwrdraw','boottime','maxangle','typemis'], // maxrng?
			blueprints:['cs_lw','cs_lr','cs_wa'],
		},
		
		cft : {
			name:'Fuel Tanks',
			modulenames:{},
			keyattrs:['fuelcap'],
		},
		
		
		iafmu : {
			name:'Auto Field-Maintenance Units',
			modulenames:{'Auto Field-Maintenance Unit':1},
			ammocost:1,
			keyattrs:['repaircap'],
			modifiable:['integ','pwrdraw','boottime'], // repaircap? repaircon? repairrtg?
			blueprints:['misc_sh4'],
		},
		
		icr : {
			name:'Cargo Racks',
			modulenames:{},
			keyattrs:['cargocap'],
		},
		
		iclc : {
			name:'Collection Limpets',
			modulenames:{'Collector Limpet Controller':1},
			keyattrs:['maxlimpet','limpettime'],
			modifiable:['mass','integ','pwrdraw','boottime'], // maxlimpet? targetrng? limpettime? maxspd? multispd?
			blueprints:['misc_lw','misc_rf','misc_sh'],
		},
		
		idlc : {
			name:'Decontamination Limpets',
			modulenames:{},
			keyattrs:['maxlimpet','targetrng'],
		//	modifiable:['mass','integ','pwrdraw','boottime'], // maxlimpet? targetrng? limpettime? maxspd? multispd?
		},
		
		idc : {
			name:'Docking Computers',
			modulenames:{},
		//	modifiable:['integ','pwrdraw','boottime'],
		},
		
		ifsdi : {
			name:'FSD Interdictors',
			modulenames:{'Frame Shift Drive Interdictor':1},
			keyattrs:['timerng','facinglim'],
			modifiable:['mass','integ','pwrdraw','boottime','timerng','facinglim'],
			blueprints:['ifsdi_eca','ifsdi_lr'],
		},
		
		ifh : {
			name:'Fighter Hangars',
			modulenames:{},
			singleton:1,
			ammocost: 1030,
			keyattrs:['vslots','vcount'],
		//	modifiable:['mass','integ','pwrdraw','boottime'], // vslots? vcount?
		},
		
		ifs : {
			name:'Fuel Scoops',
			modulenames:{'Fuel Scoop':1},
			singleton:1,
			keyattrs:['scooprate'],
			modifiable:['integ','pwrdraw','boottime'], // scooprate?
			blueprints:['misc_sh4'],
		},
		
		iftlc : {
			name:'Fuel Transfer Limpets',
			modulenames:{'Fuel Transfer Limpet Controller':1},
			keyattrs:['maxlimpet','targetrng'],
			modifiable:['mass','integ','pwrdraw','boottime'], // maxlimpet? targetrng? limpettime? maxspd? fuelxfer?
			blueprints:['misc_lw','misc_rf','misc_sh'],
		},
		
		ihblc : {
			name:'Hatch Breaker Limpets',
			modulenames:{'Hatch Breaker Limpet Controller':1},
			keyattrs:['maxlimpet','targetrng'],
			modifiable:['mass','integ','pwrdraw','boottime'], // maxlimpet? targetrng? limpettime? maxspd? hacktime? mincargo? maxcargo?
			blueprints:['misc_lw','misc_rf','misc_sh'],
		},
		
		ihrp : {
			name:'Hull Reinforcements',
			modulenames:{'Hull Reinforcement Package':1},
			keyattrs:['hullrnf','kinres'],
			modifiable:['mass','hullrnf','kinres','thmres','expres','hullbst'],
			blueprints:['ihrp_br','ihrp_hd','ihrp_kr','ihrp_lw','ihrp_tr'],
			expeffects:['ihrpx_ap','ihrpx_dp','ihrpx_lp','ihrpx_rp'],
		},
		
		imahrp : {
			name:'Meta Alloy Hull Reinforcements',
			modulenames:{'Meta Alloy Hull Reinforcement Package':1},
			keyattrs:['hullrnf','caures'],
		},
		
		imrp : {
			name:'Module Reinforcements',
			modulenames:{'Module Reinforcement Package':1},
			keyattrs:['integ','dmgprot'],
		},
		
		ipc : {
			name:'Passenger Cabins',
			modulenames:{'Economy Class Passenger Cabin':1, 'Business Class Passenger Cabin':1, 'First Class Passenger Cabin':1, 'Luxury Class Passenger Cabin':1},
			keyattrs:['cabincap'],
		//	modifiable:['mass'], // cabincap?
		},
		
		ipvh : {
			name:'Planetary Vehicle Hangars',
			modulenames:{'Planetary Vehicle Hangar':1},
			ammocost: 1030,
			keyattrs:['vslots'],
		//	modifiable:['mass','integ','pwrdraw','boottime'], // vslots?
		},
		
		iplc : {
			name:'Prospecting Limpets',
			modulenames:{'Prospector Limpet Controller':1},
			keyattrs:['maxlimpet','limpettime'],
			modifiable:['mass','integ','pwrdraw','boottime'], // maxlimpet? limpettime? maxspd?
			blueprints:['misc_lw','misc_rf','misc_sh'],
		},
		
		inlc : {
			name:'Recon Limpets',
			modulenames:{},
			keyattrs:['maxlimpet','targetrng'],
		//	modifiable:['mass','integ','pwrdraw','boottime'], // maxlimpet? targetrng? maxspd?
		},
		
		ir : {
			name:'Refineries',
			modulenames:{'Refinery':1},
			singleton:1,
			keyattrs:['bins'],
			modifiable:['integ','pwrdraw','boottime'], // bins?
			blueprints:['misc_sh4'],
		},
		
		irlc : {
			name:'Repair Limpets',
			modulenames:{'Repair Limpet Controller':1},
			keyattrs:['maxlimpet','repaircap'],
		//	modifiable:['mass','integ','pwrdraw','boottime'], // maxlimpet? limpettime? maxspd?
		},
		
		islc : {
			name:'Research Limpets',
			modulenames:{},
			keyattrs:['maxlimpet','targetrng'],
		},
		
		iscb : {
			name:'Shield Cell Banks',
			modulenames:{'Shield Cell Bank':1},
			ammocost:300,
			keyattrs:['shieldrnf','ammomax'],
			modifiable:['mass','integ','pwrdraw','boottime','spinup','duration','shieldrnf','thmload','ammomax'],
			blueprints:['iscb_rc','iscb_sp'],
			expeffects:['iscbx_bc','miscx_db','miscx_fc','iscbx_rc','miscx_sd'],
		},
		
		isg : {
			name:'Shield Generators',
			modulenames:{'Shield Generator':1},
			singleton:1,
			keyattrs:['optmul','thmres'],
			modifiable:['mass','integ','pwrdraw','boottime','optmass','optmul','genrate','bgenrate','distdraw','kinres','thmres','expres'],
			blueprints:['isg_elp','isg_kr','isg_rf','isg_tr'],
			expeffects:['miscx_db','isgx_fc','isgx_fb','isgx_hc','isgx_ld','isgx_mw','miscx_sd','isgx_tb'],
		},
		
		isbs : {
			name:'Stellar Body Scanners',
			modulenames:{},
			singleton:1,
			keyattrs:['activerng','passiverng'],
		//	modifiable:['mass','integ'], // activerng? passiverng? maxangle? scantime?
		},
		
		iss : {
			name:'Surface Scanners',
			modulenames:{},
			singleton:1,
			keyattrs:['scanrngmod','scanratemod'],
			modifiable:['mass','boottime','pwrdraw','scanrngmod','scanangmod','scanratemod'],
			blueprints:['iss_fs','iss_lr','iss_wa'],
		},
	}, // eddb.mtype{}
	module : {
		
		// HARDPOINTS
		
		60150 : { mtype:'hel', cost:   37430, name:'Beam Laser',                  mount:'F',              class:1, rating:'E', mass: 2.00, integ:40, pwrdraw:0.62, boottime:0, dps: 9.820, damage: 9.820, distdraw:1.940, thmload:3.53, pierce: 18, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 7.9, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049428, fdname:'Hpt_BeamLaser_Fixed_Small' },
		60151 : { mtype:'hel', cost:   74650, name:'Beam Laser',                  mount:'G',              class:1, rating:'E', mass: 2.00, integ:40, pwrdraw:0.60, boottime:0, dps: 7.680, damage: 7.680, distdraw:2.110, thmload:3.65, pierce: 18, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 6.1, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049432, fdname:'Hpt_BeamLaser_Gimbal_Small' },
		60162 : { mtype:'hel', cost:  500000, name:'Beam Laser',                  mount:'T',              class:1, rating:'F', mass: 2.00, integ:40, pwrdraw:0.57, boottime:0, dps: 5.400, damage: 5.400, distdraw:1.320, thmload:2.40, pierce: 18, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 4.3, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049435, fdname:'Hpt_BeamLaser_Turret_Small' },
		60240 : { mtype:'hel', cost:  299520, name:'Beam Laser',                  mount:'F',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:1.01, boottime:0, dps:15.960, damage:15.960, distdraw:3.160, thmload:5.11, pierce: 35, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg:12.8, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049429, fdname:'Hpt_BeamLaser_Fixed_Medium' },
		60241 : { mtype:'hel', cost:  500600, name:'Beam Laser',                  mount:'G',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:1.00, boottime:0, dps:12.520, damage:12.520, distdraw:3.440, thmload:5.32, pierce: 35, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg:10.0, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049433, fdname:'Hpt_BeamLaser_Gimbal_Medium' },
		60252 : { mtype:'hel', cost: 2099900, name:'Beam Laser',                  mount:'T',              class:2, rating:'E', mass: 4.00, integ:51, pwrdraw:0.93, boottime:0, dps: 8.830, damage: 8.830, distdraw:2.160, thmload:3.53, pierce: 35, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 7.1, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049436, fdname:'Hpt_BeamLaser_Turret_Medium' },
		60330 : { mtype:'hel', cost: 1177600, name:'Beam Laser',                  mount:'F',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:1.62, boottime:0, dps:25.780, damage:25.780, distdraw:5.100, thmload:7.22, pierce: 50, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg:20.6, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049430, fdname:'Hpt_BeamLaser_Fixed_Large' },
		60331 : { mtype:'hel', cost: 2396160, name:'Beam Laser',                  mount:'G',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:1.60, boottime:0, dps:20.300, damage:20.300, distdraw:5.580, thmload:7.61, pierce: 50, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg:16.2, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049434, fdname:'Hpt_BeamLaser_Gimbal_Large' },
		60332 : { mtype:'hel', cost:19399600, name:'Beam Laser',                  mount:'T',              class:3, rating:'D', mass: 8.00, integ:64, pwrdraw:1.51, boottime:0, dps:14.360, damage:14.360, distdraw:3.510, thmload:5.11, pierce: 50, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg:11.5, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049437, fdname:'Hpt_BeamLaser_Turret_Large' },
		60410 : { mtype:'hel', cost: 2396160, name:'Beam Laser',                  mount:'F',              class:4, rating:'A', mass:16.00, integ:80, pwrdraw:2.61, boottime:0, dps:41.380, damage:41.380, distdraw:8.190, thmload:9.93, pierce: 60, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg:33.1, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128049431, fdname:'Hpt_BeamLaser_Fixed_Huge' },
		60411 : { mtype:'hel', cost: 8746160, name:'Beam Laser',                  mount:'G',              class:4, rating:'A', mass:16.00, integ:80, pwrdraw:2.57, boottime:0, dps:32.680, damage:32.680, distdraw:8.990,thmload:10.62, pierce: 60, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg:26.1, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128681994, fdname:'Hpt_BeamLaser_Gimbal_Huge' },
		60154 : { mtype:'hel', cost:   56150, name:'Retributor Beam Laser',       mount:'F',              class:1, rating:'E', mass: 2.00, integ:40, pwrdraw:0.62, boottime:0, dps: 4.910, damage: 4.910, distdraw:2.520, thmload:2.70, pierce: 18, maxrng:3000,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 3.9, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128671346, fdname:'Hpt_BeamLaser_Fixed_Small_Heat' }, // verify
		
		61160 : { mtype:'hul', cost:    4400, name:'Burst Laser',                 mount:'F',              class:1, rating:'F', mass: 2.00, integ:40, pwrdraw:0.65, boottime:0, dps: 8.147, damage: 1.720, distdraw:0.250, thmload:0.38, pierce: 20, maxrng:3000,               rof:4.737, bstint:0.500, bstrof:15, bstsize:3,                                                   brcdmg: 1.5, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049400, fdname:'Hpt_PulseLaserBurst_Fixed_Small' },
		61171 : { mtype:'hul', cost:    8600, name:'Burst Laser',                 mount:'G',              class:1, rating:'G', mass: 2.00, integ:40, pwrdraw:0.64, boottime:0, dps: 6.448, damage: 1.220, distdraw:0.240, thmload:0.34, pierce: 20, maxrng:3000,               rof:5.285, bstint:0.450, bstrof:17, bstsize:3,                                                   brcdmg: 1.0, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049404, fdname:'Hpt_PulseLaserBurst_Gimbal_Small' },
		61172 : { mtype:'hul', cost:   52800, name:'Burst Laser',                 mount:'T',              class:1, rating:'G', mass: 2.00, integ:40, pwrdraw:0.60, boottime:0, dps: 4.174, damage: 0.870, distdraw:0.139, thmload:0.19, pierce: 20, maxrng:3000,               rof:4.798, bstint:0.520, bstrof:19, bstsize:3,                                                   brcdmg: 0.4, minbrc:60, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049407, fdname:'Hpt_PulseLaserBurst_Turret_Small' },
		61250 : { mtype:'hul', cost:   23000, name:'Burst Laser',                 mount:'F',              class:2, rating:'E', mass: 4.00, integ:40, pwrdraw:1.05, boottime:0, dps:13.045, damage: 3.530, distdraw:0.500, thmload:0.78, pierce: 35, maxrng:3000,               rof:3.695, bstint:0.630, bstrof:11, bstsize:3,                                                   brcdmg: 3.0, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049401, fdname:'Hpt_PulseLaserBurst_Fixed_Medium' },
		61261 : { mtype:'hul', cost:   48500, name:'Burst Laser',                 mount:'G',              class:2, rating:'F', mass: 4.00, integ:40, pwrdraw:1.04, boottime:0, dps:10.296, damage: 2.450, distdraw:0.490, thmload:0.67, pierce: 35, maxrng:3000,               rof:4.203, bstint:0.560, bstrof:13, bstsize:3,                                                   brcdmg: 2.1, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049405, fdname:'Hpt_PulseLaserBurst_Gimbal_Medium' },
		61262 : { mtype:'hul', cost:  162800, name:'Burst Laser',                 mount:'T',              class:2, rating:'F', mass: 4.00, integ:40, pwrdraw:0.98, boottime:0, dps: 6.760, damage: 1.720, distdraw:0.275, thmload:0.38, pierce: 35, maxrng:3000,               rof:3.930, bstint:0.630, bstrof:15, bstsize:3,                                                   brcdmg: 0.9, minbrc:60, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049408, fdname:'Hpt_PulseLaserBurst_Turret_Medium' },
		61340 : { mtype:'hul', cost:  140400, name:'Burst Laser',                 mount:'F',              class:3, rating:'D', mass: 8.00, integ:64, pwrdraw:1.66, boottime:0, dps:20.785, damage: 7.730, distdraw:1.110, thmload:1.70, pierce: 52, maxrng:3000,               rof:2.689, bstint:0.830, bstrof: 7, bstsize:3,                                                   brcdmg: 3.9, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049402, fdname:'Hpt_PulseLaserBurst_Fixed_Large' },
		61351 : { mtype:'hul', cost:  281600, name:'Burst Laser',                 mount:'G',              class:3, rating:'E', mass: 8.00, integ:64, pwrdraw:1.65, boottime:0, dps:16.605, damage: 5.160, distdraw:1.030, thmload:1.42, pierce: 52, maxrng:3000,               rof:3.218, bstint:0.710, bstrof: 9, bstsize:3,                                                   brcdmg: 4.4, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049406, fdname:'Hpt_PulseLaserBurst_Gimbal_Large' },
		61352 : { mtype:'hul', cost:  800400, name:'Burst Laser',                 mount:'T',              class:3, rating:'E', mass: 8.00, integ:64, pwrdraw:1.57, boottime:0, dps:11.010, damage: 3.530, distdraw:0.560, thmload:0.78, pierce: 52, maxrng:3000,               rof:3.119, bstint:0.780, bstrof:11, bstsize:3,                                                   brcdmg: 1.8, minbrc:60, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049409, fdname:'Hpt_PulseLaserBurst_Turret_Large' },
		61450 : { mtype:'hul', cost:  281600, name:'Burst Laser',                 mount:'F',              class:4, rating:'E', mass:16.00, integ:80, pwrdraw:2.58, boottime:0, dps:32.259, damage:20.610, distdraw:2.980, thmload:4.53, pierce: 65, maxrng:3000,               rof:1.565, bstint:1.250, bstrof: 3, bstsize:3,                                                   brcdmg:17.5, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049403, fdname:'Hpt_PulseLaserBurst_Fixed_Huge' },
		61451 : { mtype:'hul', cost: 1245600, name:'Burst Laser',                 mount:'G',              class:4, rating:'E', mass:16.00, integ:64, pwrdraw:2.59, boottime:0, dps:25.907, damage:12.090, distdraw:2.410, thmload:3.33, pierce: 65, maxrng:3000,               rof:2.143, bstint:1.000, bstrof: 5, bstsize:3,                                                   brcdmg:10.3, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128727920, fdname:'Hpt_PulseLaserBurst_Gimbal_Huge' },
		61164 : { mtype:'hul', cost:    8800, name:'Cytoscrambler Burst Laser',   mount:'F',              class:1, rating:'F', mass: 2.00, integ:40, pwrdraw:0.80, boottime:0, dps:27.429, damage: 3.600, distdraw:0.310, thmload:0.28, pierce:  1, maxrng:1000,               rof:7.619, bstint:0.700, bstrof:20, bstsize:8,                                                   brcdmg: 3.1, minbrc: 0, maxbrc: 0, jitter:3.5, dmgtype:'T', thmwgt:1, dmgfall: 600, fdid:128671449, fdname:'Hpt_PulseLaserBurst_Fixed_Small_Scatter' },
		
		70140 : { mtype:'hc',  cost:   21100, name:'Cannon',                      mount:'F',              class:1, rating:'D', mass: 2.00, integ:40, pwrdraw:0.34, boottime:0, dps:11.250, damage:22.500, distdraw:0.460, thmload:1.38, pierce: 35, maxrng:3000, shotspd:1200, rof:0.500, bstint:2.000,                      ammoclip: 6, ammomax: 120,            rldtime:3.0, brcdmg:21.4, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:3000, fdid:128049438, fdname:'Hpt_Cannon_Fixed_Small' },
		70151 : { mtype:'hc',  cost:   42200, name:'Cannon',                      mount:'G',              class:1, rating:'E', mass: 2.00, integ:40, pwrdraw:0.38, boottime:0, dps: 8.292, damage:15.920, distdraw:0.480, thmload:1.25, pierce: 35, maxrng:3000, shotspd:1000, rof:0.521, bstint:1.920,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg:15.1, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:3000, fdid:128049442, fdname:'Hpt_Cannon_Gimbal_Small' },
		70162 : { mtype:'hc',  cost:  506400, name:'Cannon',                      mount:'T',              class:1, rating:'F', mass: 2.00, integ:40, pwrdraw:0.32, boottime:0, dps: 5.528, damage:12.770, distdraw:0.220, thmload:0.67, pierce: 35, maxrng:3000, shotspd:1000, rof:0.433, bstint:2.310,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg:12.1, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:3000, fdid:128049445, fdname:'Hpt_Cannon_Turret_Small' },
		70240 : { mtype:'hc',  cost:  168430, name:'Cannon',                      mount:'F',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:0.49, boottime:0, dps:16.993, damage:36.875, distdraw:0.700, thmload:2.11, pierce: 50, maxrng:3500, shotspd:1050, rof:0.461, bstint:2.170,                      ammoclip: 6, ammomax: 120,            rldtime:3.0, brcdmg:35.0, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:3500, fdid:128049439, fdname:'Hpt_Cannon_Fixed_Medium' },
		70241 : { mtype:'hc',  cost:  337600, name:'Cannon',                      mount:'G',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:0.54, boottime:0, dps:12.274, damage:25.530, distdraw:0.750, thmload:1.92, pierce: 50, maxrng:3500, shotspd: 875, rof:0.481, bstint:2.080,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg:24.3, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:3500, fdid:128049443, fdname:'Hpt_Cannon_Gimbal_Medium' },
		70252 : { mtype:'hc',  cost: 4051200, name:'Cannon',                      mount:'T',              class:2, rating:'E', mass: 4.00, integ:51, pwrdraw:0.45, boottime:0, dps: 7.916, damage:19.790, distdraw:0.340, thmload:1.03, pierce: 50, maxrng:3500, shotspd: 875, rof:0.400, bstint:2.500,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg:18.8, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:3500, fdid:128049446, fdname:'Hpt_Cannon_Turret_Medium' },
		70330 : { mtype:'hc',  cost:  675200, name:'Cannon',                      mount:'F',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:0.67, boottime:0, dps:23.372, damage:55.625, distdraw:1.070, thmload:3.20, pierce: 70, maxrng:4000, shotspd: 960, rof:0.420, bstint:2.380,                      ammoclip: 6, ammomax: 120,            rldtime:3.0, brcdmg:52.8, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:4000, fdid:128049440, fdname:'Hpt_Cannon_Fixed_Large' },
		70331 : { mtype:'hc',  cost: 1350400, name:'Cannon',                      mount:'G',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:0.75, boottime:0, dps:16.485, damage:37.421, distdraw:1.140, thmload:2.93, pierce: 70, maxrng:4000, shotspd: 800, rof:0.441, bstint:2.270,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg:35.5, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:4000, fdid:128671120, fdname:'Hpt_Cannon_Gimbal_Large' },
		70342 : { mtype:'hc',  cost:16204800, name:'Cannon',                      mount:'T',              class:3, rating:'D', mass: 8.00, integ:64, pwrdraw:0.64, boottime:0, dps:11.154, damage:30.340, distdraw:0.530, thmload:1.58, pierce: 70, maxrng:4000, shotspd: 800, rof:0.368, bstint:2.720,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg:28.8, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:4000, fdid:128049447, fdname:'Hpt_Cannon_Turret_Large' },
		70420 : { mtype:'hc',  cost: 2700800, name:'Cannon',                      mount:'F',              class:4, rating:'B', mass:16.00, integ:80, pwrdraw:0.92, boottime:0, dps:31.606, damage:83.125, distdraw:1.610, thmload:4.83, pierce: 90, maxrng:4500, shotspd: 900, rof:0.380, bstint:2.630,                      ammoclip: 6, ammomax: 120,            rldtime:3.0, brcdmg:79.0, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:4500, fdid:128049441, fdname:'Hpt_Cannon_Fixed_Huge' },
		70421 : { mtype:'hc',  cost: 5401600, name:'Cannon',                      mount:'G',              class:4, rating:'B', mass:16.00, integ:80, pwrdraw:1.03, boottime:0, dps:22.636, damage:56.590, distdraw:1.720, thmload:4.43, pierce: 90, maxrng:4500, shotspd: 750, rof:0.400, bstint:2.500,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg:53.8, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:4500, fdid:128049444, fdname:'Hpt_Cannon_Gimbal_Huge' },
	//	70422 : { mtype:'hc',  cost:     NaN, name:'Cannon',                      mount:'T',              class:4, rating:'?', mass:16.00, integ:80, pwrdraw:0.88, boottime:0, dps:15.456, damage:46.060, distdraw:0.800, thmload:2.40, pierce: 90, maxrng:4500, shotspd: 750, rof:0.336, bstint:2.980,                      ammoclip: 5, ammomax: 100,            rldtime:4.0, brcdmg: NaN, minbrc:60, maxbrc:90,             dmgtype:'K', kinwgt:1, dmgfall:4500, fdid:     null, fdname:'Hpt_Cannon_Turret_Huge' }, // TODO: cost,rating,brcdmg,fdid
		
		71150 : { mtype:'hfc', cost:   36000, name:'Fragment Cannon',             mount:'F',              class:1, rating:'E', mass: 2.00, integ:40, pwrdraw:0.45, boottime:0, dps:95.333, damage: 1.430, distdraw:0.210, thmload:0.41, pierce: 20, maxrng:2000, shotspd: 667, rof:5.556, bstint:0.180,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 1.3, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128049448, fdname:'Hpt_Slugshot_Fixed_Small' },
		71151 : { mtype:'hfc', cost:   54720, name:'Fragment Cannon',             mount:'G',              class:1, rating:'E', mass: 2.00, integ:40, pwrdraw:0.59, boottime:0, dps:71.294, damage: 1.010, distdraw:0.260, thmload:0.44, pierce: 20, maxrng:2000, shotspd: 667, rof:5.882, bstint:0.170,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 0.9, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128049451, fdname:'Hpt_Slugshot_Gimbal_Small' },
		71152 : { mtype:'hfc', cost:  182400, name:'Fragment Cannon',             mount:'T',              class:1, rating:'E', mass: 2.00, integ:40, pwrdraw:0.42, boottime:0, dps:39.429, damage: 0.690, distdraw:0.100, thmload:0.20, pierce: 20, maxrng:2000, shotspd: 667, rof:4.762, bstint:0.210,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 0.6, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128049453, fdname:'Hpt_Slugshot_Turret_Small' },
		71210 : { mtype:'hfc', cost:  291840, name:'Fragment Cannon',             mount:'F',              class:2, rating:'A', mass: 4.00, integ:51, pwrdraw:0.74, boottime:0,dps:179.100, damage: 2.985, distdraw:0.370, thmload:0.74, pierce: 30, maxrng:2000, shotspd: 667, rof:5.000, bstint:0.200,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 2.7, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128049449, fdname:'Hpt_Slugshot_Fixed_Medium' },
		71241 : { mtype:'hfc', cost:  437760, name:'Fragment Cannon',             mount:'G',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:1.03, boottime:0,dps:143.621, damage: 2.274, distdraw:0.490, thmload:0.84, pierce: 30, maxrng:2000, shotspd: 667, rof:5.263, bstint:0.190,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 2.0, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128049452, fdname:'Hpt_Slugshot_Gimbal_Medium' },
		71242 : { mtype:'hfc', cost: 1459200, name:'Fragment Cannon',             mount:'T',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:0.79, boottime:0, dps:87.130, damage: 1.670, distdraw:0.210, thmload:0.41, pierce: 30, maxrng:2000, shotspd: 667, rof:4.348, bstint:0.230,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 1.5, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128049454, fdname:'Hpt_Slugshot_Turret_Medium' },
		71330 : { mtype:'hfc', cost: 1167360, name:'Fragment Cannon',             mount:'F',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:1.02, boottime:0,dps:249.273, damage: 4.570, distdraw:0.570, thmload:1.13, pierce: 45, maxrng:2000, shotspd: 667, rof:4.545, bstint:0.220,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 4.1, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128049450, fdname:'Hpt_Slugshot_Fixed_Large' },
		71331 : { mtype:'hfc', cost: 1751040, name:'Fragment Cannon',             mount:'G',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:1.55, boottime:0,dps:215.429, damage: 3.770, distdraw:0.810, thmload:1.40, pierce: 45, maxrng:2000, shotspd: 667, rof:4.762, bstint:0.210,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 3.4, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128671321, fdname:'Hpt_Slugshot_Gimbal_Large' },
		71332 : { mtype:'hfc', cost: 5836800, name:'Fragment Cannon',             mount:'T',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:1.29, boottime:0,dps:143.280, damage: 2.985, distdraw:0.370, thmload:0.74, pierce: 45, maxrng:2000, shotspd: 667, rof:4.000, bstint:0.250,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 2.7, minbrc:40, maxbrc:80, jitter:5.0, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128671322, fdname:'Hpt_Slugshot_Turret_Large' },
		71334 : { mtype:'hfc', cost: 1751040, name:'Pacifier Frag-Cannon',        mount:'F',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:1.02, boottime:0,dps:216.000, damage: 3.960, distdraw:0.570, thmload:1.13, pierce: 45, maxrng:3000, shotspd:1000, rof:4.545, bstint:0.220,                      ammoclip: 3, ammomax: 180, rounds:12, rldtime:5.0, brcdmg: 3.1, minbrc:40, maxbrc:80, jitter:1.7, dmgtype:'K', kinwgt:1, dmgfall:1800, fdid:128671343, fdname:'Hpt_Slugshot_Fixed_Large_Range' }, // verify
		
		80190 : { mtype:'hm',  cost:   24260, name:'Mine Launcher',               mount:'F',              class:1, rating:'I', mass: 2.00, integ:40, pwrdraw:0.40, boottime:0, dps:44.000, damage:44.000,                 thmload:5.00, pierce: 60,                            rof:1.000, bstint:1.000,                      ammoclip: 1, ammomax:  36,            rldtime:2.0,              minbrc: 0, maxbrc: 0,             dmgtype:'ET',expwgt:26/44, thmwgt:18/44, dmgfall:000000, fdid:128049500, fdname:'Hpt_MineLauncher_Fixed_Small' },
		80191 : { mtype:'hm',  cost:   36390, name:'Shock Mine Launcher',         mount:'F',              class:1, rating:'I', mass: 2.00, integ:40, pwrdraw:0.40, boottime:0, dps:32.000, damage:32.000,                 thmload:5.00, pierce: 60,                            rof:1.000, bstint:1.000,                      ammoclip: 1, ammomax:  36,            rldtime:2.0, brcdmg: 9.6, minbrc: 0, maxbrc: 0,             dmgtype:'ET',expwgt:20/32, thmwgt:12/32, dmgfall:000000, fdid:128671448, fdname:'Hpt_MineLauncher_Fixed_Small_Impulse' },
		80290 : { mtype:'hm',  cost:  294080, name:'Mine Launcher',               mount:'F',              class:2, rating:'I', mass: 4.00, integ:51, pwrdraw:0.40, boottime:0, dps:44.000, damage:44.000,                 thmload:7.50, pierce: 60,                            rof:1.000, bstint:1.000,                      ammoclip: 3, ammomax:  72,            rldtime:6.6, brcdmg:13.2, minbrc: 0, maxbrc: 0,             dmgtype:'ET',expwgt:26/44, thmwgt:18/44, dmgfall:000000, fdid:128049501, fdname:'Hpt_MineLauncher_Fixed_Medium' },
		
		81140 : { mtype:'hml', cost:    6800, name:'Mining Laser',                mount:'F',              class:1, rating:'D', mass: 2.00, integ:40, pwrdraw:0.50, boottime:0, dps: 2.000, damage: 2.000, distdraw:1.500, thmload:2.00, pierce: 18, maxrng: 500,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 0.3, minbrc:10, maxbrc:20,             dmgtype:'T', thmwgt:1, dmgfall: 300, fdid:128049525, fdname:'Hpt_MiningLaser_Fixed_Small' },
		81142 : { mtype:'hml', cost:    9400, name:'Mining Laser',                mount:'T',              class:1, rating:'D', mass: 2.00, integ:40, pwrdraw:0.50, boottime:0, dps: 2.000, damage: 2.000, distdraw:1.500, thmload:2.00, pierce: 18, maxrng: 500,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 0.3, minbrc:10, maxbrc:20,             dmgtype:'T', thmwgt:1, dmgfall: 300, fdid:128740819, fdname:'Hpt_MiningLaser_Turret_Small' },
		81240 : { mtype:'hml', cost:   22580, name:'Mining Laser',                mount:'F',              class:2, rating:'D', mass: 2.00, integ:51, pwrdraw:0.75, boottime:0, dps: 4.000, damage: 4.000, distdraw:3.000, thmload:4.00, pierce: 18, maxrng: 500,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 0.6, minbrc:10, maxbrc:20,             dmgtype:'T', thmwgt:1, dmgfall: 300, fdid:128049526, fdname:'Hpt_MiningLaser_Fixed_Medium' },
		81242 : { mtype:'hml', cost:   32580, name:'Mining Laser',                mount:'T',              class:2, rating:'D', mass: 2.00, integ:51, pwrdraw:0.75, boottime:0, dps: 4.000, damage: 4.000, distdraw:3.000, thmload:4.00, pierce: 18, maxrng: 500,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 0.6, minbrc:10, maxbrc:20,             dmgtype:'T', thmwgt:1, dmgfall: 300, fdid:128740820, fdname:'Hpt_MiningLaser_Turret_Medium' },
		81144 : { mtype:'hml', cost:   33860, name:'Mining Lance Beam Laser',     mount:'F',              class:1, rating:'D', mass: 2.00, integ:40, pwrdraw:0.70, boottime:0, dps: 8.000, damage: 8.000, distdraw:1.750, thmload:6.00, pierce: 18, maxrng:2000,               rof:  1/0, bstint:0    ,                                                                         brcdmg: 1.2, minbrc:10, maxbrc:20,             dmgtype:'T', thmwgt:1, dmgfall: NaN, fdid:     null, fdname:'Hpt_MiningLaser_Fixed_Small_Advanced' }, // TODO: dmgfall,fdid
		
		82120 : { mtype:'hmr', cost:   32180, name:'Missile Rack',                mount:'F', missile:'D', class:1, rating:'B', mass: 2.00, integ:40, pwrdraw:0.40, boottime:0, dps:25.000, damage:50.000, distdraw:0.240, thmload:3.60, pierce: 60,              shotspd: 750, rof:0.500, bstint:2.000,                      ammoclip: 8, ammomax:  16,            rldtime:5.0, brcdmg:20.0,minbrc:100,maxbrc:100,             dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128666724, fdname:'Hpt_DumbfireMissileRack_Fixed_Small' },
		82123 : { mtype:'hmr', cost:   72600, name:'Seeker Missile Rack',         mount:'F', missile:'S', class:1, rating:'B', mass: 2.00, integ:40, pwrdraw:0.60, boottime:0, dps:13.333, damage:40.000, distdraw:0.240, thmload:3.60, pierce: 60,              shotspd: 625, rof:0.333, bstint:3.000,                      ammoclip: 6, ammomax:   6,           rldtime:12.0, brcdmg:16.0, minbrc: 0, maxbrc: 0,             dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128049492, fdname:'Hpt_BasicMissileRack_Fixed_Small' },
		82220 : { mtype:'hmr', cost:  240400, name:'Missile Rack',                mount:'F', missile:'D', class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:25.000, damage:50.000, distdraw:0.240, thmload:3.60, pierce: 60,              shotspd: 750, rof:0.500, bstint:2.000,                      ammoclip:12, ammomax:  48,            rldtime:5.0, brcdmg:20.0,minbrc:100,maxbrc:100,             dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128666725, fdname:'Hpt_DumbfireMissileRack_Fixed_Medium' },
		82223 : { mtype:'hmr', cost:  512400, name:'Seeker Missile Rack',         mount:'F', missile:'S', class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:13.333, damage:40.000, distdraw:0.240, thmload:3.60, pierce: 60,              shotspd: 625, rof:0.333, bstint:3.000,                      ammoclip: 6, ammomax:  18,           rldtime:12.0, brcdmg:16.0, minbrc: 0, maxbrc: 0,             dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128049493, fdname:'Hpt_BasicMissileRack_Fixed_Medium' },
		82224 : { mtype:'hmr', cost:  768600, name:'Pack-Hound Missile Rack',     mount:'F', missile:'S', class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:60.000, damage: 7.500, distdraw:0.240, thmload:3.60, pierce: 60,              shotspd: 600, rof:2.000, bstint:0.500,                      ammoclip:12, ammomax: 120, rounds: 4, rldtime:5.0, brcdmg: 3.0, minbrc: 0, maxbrc: 0,             dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128671344, fdname:'Hpt_DrunkMissileRack_Fixed_Medium' },
		82225 : { mtype:'hmr', cost: 1951040, name:'Rocket Propelled FSD Disrupter',mount:'F',missile:'D',class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:13.333, damage:40.000, distdraw:0.240, thmload:3.60, pierce: 60,              shotspd: 750, rof:0.333, bstint:3.000,                      ammoclip:12, ammomax:  48,            rldtime:5.0, brcdmg:16.0,minbrc:100,maxbrc:100,             dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128732552, fdname:'Hpt_DumbfireMissileRack_Fixed_Medium_Lasso' },
		
		86220 : { mtype:'hex', cost:  540900, name:'AX Missile Rack',             mount:'F', missile:'D', class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:32.0  , damage:64.0  , distdraw:0.14 , thmload:2.4 , pierce: 60,              shotspd: 750, rof:0.5  , bstint:2    ,                      ammoclip: 8, ammomax:  64,            rldtime:5.0, brcdmg: 0.1, minbrc:80,maxbrc:100,             dmgtype:'XE', expwgt:27/64, axewgt:37/64, dmgfall:000000, fdid:128788699, fdname:'Hpt_ATDumbfireMissile_Fixed_Medium' },
		86222 : { mtype:'hex', cost: 2022700, name:'AX Missile Rack',             mount:'T', missile:'D', class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:25.0  , damage:50.0  , distdraw:0.08 , thmload:1.5 , pierce: 60, maxrng:5000, shotspd: 750, rof:0.5  , bstint:2    ,                      ammoclip: 8, ammomax:  64,            rldtime:5.0, brcdmg: 0.1, minbrc:80,maxbrc:100,             dmgtype:'XE', expwgt:20/50, axewgt:30/50, dmgfall:000000, fdid:128788704, fdname:'Hpt_ATDumbfireMissile_Turret_Medium' },
		86310 : { mtype:'hex', cost: 1352250, name:'AX Missile Rack',             mount:'F', missile:'D', class:3, rating:'A', mass: 8.00, integ:64, pwrdraw:1.62, boottime:0, dps:32.0  , damage:64.0  , distdraw:0.24 , thmload:3.6 , pierce: 60,              shotspd: 750, rof:0.5  , bstint:2    ,                      ammoclip:12, ammomax: 128,            rldtime:5.0, brcdmg: 0.1, minbrc:80,maxbrc:100,             dmgtype:'XE', expwgt:27/64, axewgt:37/64, dmgfall:000000, fdid:128788700, fdname:'Hpt_ATDumbfireMissile_Fixed_Large' },
		86312 : { mtype:'hex', cost: 4056750, name:'AX Missile Rack',             mount:'T', missile:'D', class:3, rating:'A', mass: 8.00, integ:64, pwrdraw:1.75, boottime:0, dps:25.0  , damage:50.0  , distdraw:0.14 , thmload:1.9 , pierce: 60, maxrng:5000, shotspd: 750, rof:0.5  , bstint:2    ,                      ammoclip:12, ammomax: 128,            rldtime:5.0, brcdmg: 0.1, minbrc:80,maxbrc:100,             dmgtype:'XE', expwgt:20/50, axewgt:30/50, dmgfall:000000, fdid:128788705, fdname:'Hpt_ATDumbfireMissile_Turret_Large' },
		86253 : { mtype:'hex', cost:  379000, name:'AX Multi-Cannon',             mount:'F',              class:2, rating:'E', mass: 4.00, integ:51, pwrdraw:0.46, boottime:0, dps:23.643, damage: 3.310, distdraw:0.11 , thmload:0.18, pierce: 17, maxrng:4000, shotspd:1600, rof:7.143, bstint:0.140,                     ammoclip:100, ammomax:2100,            rldtime:4.0, brcdmg: 2.8, minbrc:50, maxbrc:80,             dmgtype:'XK', kinwgt:1.12/3.31 , axewgt:2.19 /3.31 , dmgfall:2000, fdid:128788701, fdname:'Hpt_ATMultiCannon_Fixed_Medium' },
		86265 : { mtype:'hex', cost: 1826500, name:'AX Multi-Cannon',             mount:'T',              class:2, rating:'F', mass: 4.00, integ:51, pwrdraw:0.50, boottime:0, dps:10.812, damage: 1.730, distdraw:0.06 , thmload:0.09, pierce: 17, maxrng:4000, shotspd:1600, rof:6.250, bstint:0.160,                      ammoclip:90, ammomax:2100,            rldtime:4.0, brcdmg: 0.4, minbrc:50, maxbrc:50,             dmgtype:'XK', kinwgt:0.56/1.73 , axewgt:1.17 /1.73 , dmgfall:2000, fdid:128793059, fdname:'Hpt_ATMultiCannon_Turret_Medium' },
		86333 : { mtype:'hex', cost: 1181500, name:'AX Multi-Cannon',             mount:'F',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:0.64, boottime:0, dps:35.971, damage: 6.115, distdraw:0.18 , thmload:0.28, pierce: 33, maxrng:4000, shotspd:1600, rof:5.882, bstint:0.170,                     ammoclip:100, ammomax:2100,            rldtime:4.0, brcdmg: 5.2, minbrc:50, maxbrc:80,             dmgtype:'XK', kinwgt:2.19/6.115, axewgt:3.925/6.115, dmgfall:2000, fdid:128788702, fdname:'Hpt_ATMultiCannon_Fixed_Large' },
		86355 : { mtype:'hex', cost: 3821600, name:'AX Multi-Cannon',             mount:'T',              class:3, rating:'E', mass: 8.00, integ:64, pwrdraw:0.64, boottime:0, dps:20.688, damage: 3.310, distdraw:0.06 , thmload:0.09, pierce: 33, maxrng:4000, shotspd:1600, rof:6.250, bstint:0.160,                      ammoclip:90, ammomax:2100,            rldtime:4.0, brcdmg: 0.8, minbrc:50, maxbrc:50,             dmgtype:'XK', kinwgt:1.12/3.31 , axewgt:2.19 /3.31 , dmgfall:2000, fdid:128793060, fdname:'Hpt_ATMultiCannon_Turret_Large' },
		86226 : { mtype:'hex', cost:  261800, name:'Remote Release Flak Launcher',mount:'F',              class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:17.0  , damage:34.0  , distdraw:0.24 , thmload:3.6 , pierce: 60,              shotspd: 550, rof:0.5  , bstint:2    ,                      ammoclip: 1, ammomax:  32,            rldtime:2.0, brcdmg: 1.7,minbrc:100,maxbrc:100,             dmgtype:'E', expwgt:1, dmgfall:000000, nosingleton:1, fdid:128785626, fdname:'Hpt_FlakMortar_Fixed_Medium' },
		86228 : { mtype:'hex', cost: 1259200, name:'Remote Release Flak Launcher',mount:'T',              class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps:17.0  , damage:34.0  , distdraw:0.24 , thmload:3.6 , pierce: 60,              shotspd: 550, rof:0.5  , bstint:2    ,                      ammoclip: 1, ammomax:  32,            rldtime:2.0, brcdmg: 1.7,minbrc:100,maxbrc:100,             dmgtype:'E', expwgt:1, dmgfall:000000, nosingleton:1, fdid:128793058, fdname:'Hpt_FlakMortar_Turret_Medium' },
		
		87220 : { mtype:'hex', cost:  580500, name:'Enzyme Missile Rack',         mount:'F', missile:'D', class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps: 2.5  , damage: 5.0  , distdraw:0.08 , thmload:1.5 , pierce: 60,              shotspd: 750, rof:0.5  , bstint:2    ,                      ammoclip: 8, ammomax:  64,            rldtime:5.0, brcdmg: 0.0, minbrc:80,maxbrc:100,             dmgtype:'CE', expwgt:5/5, cauwgt:0/5, fdid:128833995, fdname:'Hpt_CausticMissile_Fixed_Medium' }, // TODO: verify damage,dps
		87223 : { mtype:'hex', cost:  353760, name:'Remote Release Flechette Launcher',mount:'F',         class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps: 6.5  , damage:13.0  , distdraw:0.24 , thmload:3.6 , pierce: 80,              shotspd: 550, rof:0.5  , bstint:2    ,                      ammoclip: 1, ammomax:  72,            rldtime:2.0, brcdmg: 6.5,minbrc:100,maxbrc:100,             dmgtype:'KE', kinwgt:10/13, expwgt:3/13, nosingleton:1, fdid:128833996, fdname:'Hpt_FlechetteLauncher_Fixed_Medium' },
		87222 : { mtype:'hex', cost: 1349200, name:'Remote Release Flechette Launcher',mount:'T',         class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.20, boottime:0, dps: 6.5  , damage:13.0  , distdraw:0.24 , thmload:3.6 , pierce: 70,              shotspd: 550, rof:0.5  , bstint:2    ,                      ammoclip: 1, ammomax:  72,            rldtime:2.0, brcdmg: 6.5,minbrc:100,maxbrc:100,             dmgtype:'KE', kinwgt:10/13, expwgt:3/13, nosingleton:1, fdid:128833997, fdname:'Hpt_FlechetteLauncher_Turret_Medium' },
		87244 : { mtype:'hex', cost:  507510, name:'Shock Cannon',                mount:'F',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:0.57, boottime:0,dps:129.600, damage:12.960, distdraw:0.47 , thmload:1.80, pierce: 40, maxrng:3000, shotspd:1200,rof:10.0  , bstint:0.1  ,                      ammoclip:16, ammomax: 240,            rldtime:6.0, brcdmg: 9.1, minbrc:40, maxbrc:60,             dmgtype:'K', kinwgt:1, dmgfall:2500, nosingleton:1, fdid:128834002, fdname:'Hpt_PlasmaShockCannon_Fixed_Medium' },
		87245 : { mtype:'hex', cost:  845200, name:'Shock Cannon',                mount:'G',              class:2, rating:'D', mass: 4.00, integ:51, pwrdraw:0.61, boottime:0,dps:102.100, damage:10.210, distdraw:0.58 , thmload:2.10, pierce: 40, maxrng:3000, shotspd:1200,rof:10.0  , bstint:0.1  ,                      ammoclip:16, ammomax: 240,            rldtime:6.0, brcdmg: 7.1, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2500, nosingleton:1, fdid:128834003, fdname:'Hpt_PlasmaShockCannon_Gimbal_Medium' },
		87256 : { mtype:'hex', cost: 1659200, name:'Shock Cannon',                mount:'T',              class:2, rating:'E', mass: 4.00, integ:51, pwrdraw:0.50, boottime:0, dps:89.600, damage: 8.960, distdraw:0.39 , thmload:1.24, pierce: 40, maxrng:3000, shotspd:1200,rof:10.0  , bstint:0.1  ,                      ammoclip:16, ammomax: 240,            rldtime:6.0, brcdmg: 6.3, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2500, nosingleton:1, fdid:128834004, fdname:'Hpt_PlasmaShockCannon_Turret_Medium' },
		
		88220 : { mtype:'hex', cost:     NaN, name:'Guardian Gauss Cannon',       mount:'F',              class:2, rating:'B', mass: 4.00, integ:42, pwrdraw:2.61, boottime:0, dps:84.337, damage:70.0  , distdraw:7.20 ,thmload:25.00, pierce:140, maxrng:3000,               rof:1.205, bstint:0.83 ,                      ammoclip: 1, ammomax:  80,            rldtime:1.0, brcdmg:35.0, minbrc:20, maxbrc:40,             dmgtype:'TX', thmwgt:35/70, axewgt:35/70, dmgfall:1500, fdid:128833687, fdname:'Hpt_Guardian_GaussCannon_Fixed_Medium' }, // TODO: verify
		88223 : { mtype:'hex', cost:     NaN, name:'Guardian Plasma Charger',     mount:'F',              class:2, rating:'B', mass: 4.00, integ:42, pwrdraw:2.13, boottime:0, dps:42.5  , damage: 5.0  , distdraw:1.25 , thmload:5.21, pierce: 80, maxrng:3000, shotspd:1200, rof:0.5  , bstint:2.0  ,                      ammoclip:15, ammomax: 200, rounds:17, rldtime:3.0, brcdmg: 1.3, minbrc:50, maxbrc:80,             dmgtype:'AX', abswgt:2.5/5, axewgt:2.5/5, dmgfall:1000, fdid:128833998, fdname:'Hpt_Guardian_PlasmaLauncher_Fixed_Medium' }, // TODO: verify // TODO: model charge mechanic?
		88255 : { mtype:'hex', cost:     NaN, name:'Guardian Plasma Charger',     mount:'T',              class:2, rating:'E', mass: 4.00, integ:42, pwrdraw:2.01, boottime:0, dps:34.0  , damage: 4.0  , distdraw:1.40 , thmload:5.80, pierce: 80, maxrng:3000, shotspd:1200, rof:0.5  , bstint:2.0  ,                      ammoclip:15, ammomax: 200, rounds:17, rldtime:3.0, brcdmg: 1.0, minbrc:50, maxbrc:80,             dmgtype:'AX', abswgt:2/4, axewgt:2/4, dmgfall:1000, fdid:128833999, fdname:'Hpt_Guardian_PlasmaLauncher_Turret_Medium' }, // TODO: verify // TODO: model charge mechanic?
	//	88323 : { mtype:'hex', cost:     NaN, name:'Guardian Plasma Charger',     mount:'F',              class:3, rating:'?', mass: 8.00, integ:42, pwrdraw:2.13, boottime:0, dps:42.5  , damage: 5.0  , distdraw:1.25 , thmload:5.21, pierce: 80, maxrng:3000, shotspd:1200, rof:0.5  , bstint:2.0  ,                      ammoclip:15, ammomax: 200, rounds:17, rldtime:3.0, brcdmg: 1.3, minbrc:50, maxbrc:80,             dmgtype:'AX', abswgt:2.5/5, axewgt:2.5/5, dmgfall:1000, fdid:128834783, fdname:'Hpt_Guardian_PlasmaLauncher_Fixed_Large' }, // TODO: all stats // TODO: model charge mechanic?
	//	88355 : { mtype:'hex', cost:     NaN, name:'Guardian Plasma Charger',     mount:'T',              class:3, rating:'?', mass: 8.00, integ:42, pwrdraw:2.01, boottime:0, dps:34.0  , damage: 4.0  , distdraw:1.40 , thmload:5.80, pierce: 80, maxrng:3000, shotspd:1200, rof:0.5  , bstint:2.0  ,                      ammoclip:15, ammomax: 200, rounds:17, rldtime:3.0, brcdmg: 1.0, minbrc:50, maxbrc:80,             dmgtype:'AX', abswgt:2/4, axewgt:2/4, dmgfall:1000, fdid:128834784, fdname:'Hpt_Guardian_PlasmaLauncher_Turret_Large' }, // TODO: all stats // TODO: model charge mechanic?
		
		72160 : { mtype:'hmc', cost:    9500, name:'Multi-cannon',                mount:'F',              class:1, rating:'F', mass: 2.00, integ:40, pwrdraw:0.28, boottime:0, dps: 8.615, damage: 1.120, distdraw:0.060, thmload:0.09, pierce: 22, maxrng:4000, shotspd:1600, rof:7.692, bstint:0.130,                     ammoclip:100, ammomax:2100,            rldtime:4.0, brcdmg: 1.0, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049455, fdname:'Hpt_MultiCannon_Fixed_Small' },
		72171 : { mtype:'hmc', cost:   14250, name:'Multi-cannon',                mount:'G',              class:1, rating:'G', mass: 2.00, integ:40, pwrdraw:0.37, boottime:0, dps: 6.833, damage: 0.820, distdraw:0.070, thmload:0.10, pierce: 22, maxrng:4000, shotspd:1600, rof:8.333, bstint:0.120,                      ammoclip:90, ammomax:2100,            rldtime:5.0, brcdmg: 0.7, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049459, fdname:'Hpt_MultiCannon_Gimbal_Small' },
		72172 : { mtype:'hmc', cost:   81600, name:'Multi-cannon',                mount:'T',              class:1, rating:'G', mass: 2.00, integ:40, pwrdraw:0.26, boottime:0, dps: 4.000, damage: 0.560, distdraw:0.030, thmload:0.04, pierce: 22, maxrng:4000, shotspd:1600, rof:7.143, bstint:0.140,                      ammoclip:90, ammomax:2100,            rldtime:4.0, brcdmg: 0.5, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049462, fdname:'Hpt_MultiCannon_Turret_Small' },
		72250 : { mtype:'hmc', cost:   38000, name:'Multi-cannon',                mount:'F',              class:2, rating:'E', mass: 4.00, integ:51, pwrdraw:0.46, boottime:0, dps:15.643, damage: 2.190, distdraw:0.110, thmload:0.18, pierce: 37, maxrng:4000, shotspd:1600, rof:7.143, bstint:0.140,                     ammoclip:100, ammomax:2100,            rldtime:4.0, brcdmg: 2.0, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049456, fdname:'Hpt_MultiCannon_Fixed_Medium' },
		72261 : { mtype:'hmc', cost:   57000, name:'Multi-cannon',                mount:'G',              class:2, rating:'F', mass: 4.00, integ:51, pwrdraw:0.64, boottime:0, dps:12.615, damage: 1.640, distdraw:0.140, thmload:0.20, pierce: 37, maxrng:4000, shotspd:1600, rof:7.692, bstint:0.130,                      ammoclip:90, ammomax:2100,            rldtime:5.0, brcdmg: 1.5, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049460, fdname:'Hpt_MultiCannon_Gimbal_Medium' },
		72262 : { mtype:'hmc', cost: 1292800, name:'Multi-cannon',                mount:'T',              class:2, rating:'F', mass: 4.00, integ:51, pwrdraw:0.50, boottime:0, dps: 7.313, damage: 1.170, distdraw:0.060, thmload:0.09, pierce: 37, maxrng:4000, shotspd:1600, rof:6.250, bstint:0.160,                      ammoclip:90, ammomax:2100,            rldtime:4.0, brcdmg: 1.1, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049463, fdname:'Hpt_MultiCannon_Turret_Medium' },
		72330 : { mtype:'hmc', cost:  140400, name:'Multi-cannon',                mount:'F',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:0.64, boottime:0, dps:23.088, damage: 3.925, distdraw:0.180, thmload:0.28, pierce: 54, maxrng:4000, shotspd:1600, rof:5.882, bstint:0.170,                     ammoclip:100, ammomax:2100,            rldtime:4.0, brcdmg: 3.5, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049457, fdname:'Hpt_MultiCannon_Fixed_Large' },
		72331 : { mtype:'hmc', cost:  578440, name:'Multi-cannon',                mount:'G',              class:3, rating:'C', mass: 8.00, integ:64, pwrdraw:0.97, boottime:0, dps:18.933, damage: 2.840, distdraw:0.250, thmload:0.34, pierce: 54, maxrng:4000, shotspd:1600, rof:6.667, bstint:0.150,                      ammoclip:90, ammomax:2100,            rldtime:5.0, brcdmg: 2.6, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049461, fdname:'Hpt_MultiCannon_Gimbal_Large' },
		72410 : { mtype:'hmc', cost: 1177600, name:'Multi-cannon',                mount:'F',              class:4, rating:'A', mass:16.00, integ:80, pwrdraw:0.73, boottime:0, dps:28.030, damage: 4.625, distdraw:0.240, thmload:0.39, pierce: 68, maxrng:4000, shotspd:1600, rof:3.030, bstint:0.330,                     ammoclip:100, ammomax:2100, rounds: 2, rldtime:4.0, brcdmg: 4.2, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128049458, fdname:'Hpt_MultiCannon_Fixed_Huge' },
		72411 : { mtype:'hmc', cost: 6377600, name:'Multi-cannon',                mount:'G',              class:4, rating:'A', mass:16.00, integ:80, pwrdraw:1.22, boottime:0, dps:23.300, damage: 3.460, distdraw:0.370, thmload:0.51, pierce: 68, maxrng:4000, shotspd:1600, rof:3.367, bstint:0.297,                      ammoclip:90, ammomax:2100, rounds: 2, rldtime:5.0, brcdmg: 3.1, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall:2000, fdid:128681996, fdname:'Hpt_MultiCannon_Gimbal_Huge' },
		72144 : { mtype:'hmc', cost:   14250, name:'Enforcer Cannon',             mount:'F',              class:1, rating:'F', mass: 2.00, integ:40, pwrdraw:0.28, boottime:0, dps:12.391, damage: 2.850, distdraw:0.120, thmload:0.18, pierce: 30, maxrng:4500, shotspd:1800, rof:4.348, bstint:0.230,                      ammoclip:60, ammomax:1000,            rldtime:4.0, brcdmg: 2.6, minbrc:40, maxbrc:80,             dmgtype:'K', kinwgt:1, dmgfall: NaN, fdid:     null, fdname:'Hpt_MultiCannon_Fixed_Small_Strong' }, // TODO: dmgfall,fdid
		
		83230 : { mtype:'hpa', cost:  834200, name:'Plasma Accelerator',          mount:'F',              class:2, rating:'C', mass: 4.00, integ:51, pwrdraw:1.43, boottime:0, dps:17.921, damage:54.300, distdraw:8.650,thmload:15.58, pierce:100, maxrng:3500, shotspd: 875, rof:0.330, bstint:3.030,                      ammoclip: 5, ammomax: 100,            rldtime:6.0, brcdmg:46.2, minbrc:40, maxbrc:80,             dmgtype:'AKT', abswgt:32.5 / 54.3 , kinwgt:10.9/ 54.3 , thmwgt:10.9/ 54.3 , dmgfall:2000, fdid:128049465, fdname:'Hpt_PlasmaAccelerator_Fixed_Medium' },
		83320 : { mtype:'hpa', cost: 3051200, name:'Plasma Accelerator',          mount:'F',              class:3, rating:'B', mass: 8.00, integ:64, pwrdraw:1.97, boottime:0, dps:24.174, damage:83.400,distdraw:13.600,thmload:21.75, pierce:100, maxrng:3500, shotspd: 875, rof:0.290, bstint:3.450,                      ammoclip: 5, ammomax: 100,            rldtime:6.0, brcdmg:70.9, minbrc:40, maxbrc:80,             dmgtype:'AKT', abswgt:50   / 83.4 , kinwgt:16.7/ 83.4 , thmwgt:16.7/ 83.4 , dmgfall:2000, fdid:128049466, fdname:'Hpt_PlasmaAccelerator_Fixed_Large' },
		83410 : { mtype:'hpa', cost:13793600, name:'Plasma Accelerator',          mount:'F',              class:4, rating:'A', mass:16.00, integ:80, pwrdraw:2.63, boottime:0, dps:31.313,damage:125.250,distdraw:21.040,thmload:29.46, pierce:100, maxrng:3500, shotspd: 875, rof:0.250, bstint:4.000,                      ammoclip: 5, ammomax: 100,            rldtime:6.0,brcdmg:106.5, minbrc:40, maxbrc:80,             dmgtype:'AKT', abswgt:75.25/125.25, kinwgt:25  /125.25, thmwgt:25  /125.25, dmgfall:2000, fdid:128049467, fdname:'Hpt_PlasmaAccelerator_Fixed_Huge' },
		83324 : { mtype:'hpa', cost: 4576800, name:'Advanced Plasma Accelerator', mount:'F',              class:3, rating:'B', mass: 8.00, integ:64, pwrdraw:1.97, boottime:0, dps:28.667, damage:34.400, distdraw:5.500,thmload:11.00, pierce:100, maxrng:3500, shotspd: 875, rof:0.833, bstint:1.200,                      ammoclip:20, ammomax: 300,            rldtime:6.0, brcdmg:30.9, minbrc:40, maxbrc:80,             dmgtype:'AKT', abswgt:20.6 / 34.4 , kinwgt: 6.9/ 34.4 , thmwgt: 6.9/ 34.4 , dmgfall:2000, fdid:128671339, fdname:'Hpt_PlasmaAccelerator_Fixed_Large_Advanced' }, // verify
		
		62160 : { mtype:'hpl', cost:    2200, name:'Pulse Laser',                 mount:'F',              class:1, rating:'F', mass: 2.00, integ:40, pwrdraw:0.39, boottime:0, dps: 7.885, damage: 2.050, distdraw:0.300, thmload:0.33, pierce: 20, maxrng:3000,               rof:3.846, bstint:0.260,                                                                         brcdmg: 1.7, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049381, fdname:'Hpt_PulseLaser_Fixed_Small' },
		62171 : { mtype:'hpl', cost:    6600, name:'Pulse Laser',                 mount:'G',              class:1, rating:'G', mass: 2.00, integ:40, pwrdraw:0.39, boottime:0, dps: 6.240, damage: 1.560, distdraw:0.310, thmload:0.31, pierce: 20, maxrng:3000,               rof:4.000, bstint:0.250,                                                                         brcdmg: 1.3, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049385, fdname:'Hpt_PulseLaser_Gimbal_Small' },
		62172 : { mtype:'hpl', cost:   26000, name:'Pulse Laser',                 mount:'T',              class:1, rating:'G', mass: 2.00, integ:40, pwrdraw:0.38, boottime:0, dps: 3.967, damage: 1.190, distdraw:0.190, thmload:0.19, pierce: 20, maxrng:3000,               rof:3.333, bstint:0.300,                                                                         brcdmg: 1.0, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049388, fdname:'Hpt_PulseLaser_Turret_Small' },
		62250 : { mtype:'hpl', cost:   17600, name:'Pulse Laser',                 mount:'F',              class:2, rating:'E', mass: 4.00, integ:51, pwrdraw:0.60, boottime:0, dps:12.069, damage: 3.500, distdraw:0.500, thmload:0.56, pierce: 35, maxrng:3000,               rof:3.448, bstint:0.290,                                                                         brcdmg: 3.0, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049382, fdname:'Hpt_PulseLaser_Fixed_Medium' },
		62261 : { mtype:'hpl', cost:   35400, name:'Pulse Laser',                 mount:'G',              class:2, rating:'F', mass: 4.00, integ:51, pwrdraw:0.60, boottime:0, dps: 9.571, damage: 2.680, distdraw:0.540, thmload:0.54, pierce: 35, maxrng:3000,               rof:3.571, bstint:0.280,                                                                         brcdmg: 2.3, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049386, fdname:'Hpt_PulseLaser_Gimbal_Medium' },
		62262 : { mtype:'hpl', cost:  132800, name:'Pulse Laser',                 mount:'T',              class:2, rating:'F', mass: 4.00, integ:51, pwrdraw:0.58, boottime:0, dps: 6.212, damage: 2.050, distdraw:0.330, thmload:0.33, pierce: 35, maxrng:3000,               rof:3.030, bstint:0.330,                                                                         brcdmg: 1.7, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049389, fdname:'Hpt_PulseLaser_Turret_Medium' },
		62350 : { mtype:'hpl', cost:   70400, name:'Pulse Laser',                 mount:'F',              class:3, rating:'D', mass: 8.00, integ:64, pwrdraw:0.90, boottime:0, dps:18.121, damage: 5.980, distdraw:0.860, thmload:0.96, pierce: 52, maxrng:3000,               rof:3.030, bstint:0.330,                                                                         brcdmg: 5.1, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049383, fdname:'Hpt_PulseLaser_Fixed_Large' },
		62361 : { mtype:'hpl', cost:  140600, name:'Pulse Laser',                 mount:'G',              class:3, rating:'E', mass: 8.00, integ:64, pwrdraw:0.92, boottime:0, dps:14.774, damage: 4.580, distdraw:0.920, thmload:0.92, pierce: 52, maxrng:3000,               rof:3.226, bstint:0.310,                                                                         brcdmg: 3.9, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049387, fdname:'Hpt_PulseLaser_Gimbal_Large' },
		62362 : { mtype:'hpl', cost:  400400, name:'Pulse Laser',                 mount:'T',              class:3, rating:'F', mass: 8.00, integ:64, pwrdraw:0.89, boottime:0, dps: 9.459, damage: 3.500, distdraw:0.560, thmload:0.56, pierce: 52, maxrng:3000,               rof:2.703, bstint:0.370,                                                                         brcdmg: 3.0, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049390, fdname:'Hpt_PulseLaser_Turret_Large' },
		62410 : { mtype:'hpl', cost:  177600, name:'Pulse Laser',                 mount:'F',              class:4, rating:'A', mass:16.00, integ:80, pwrdraw:1.33, boottime:0, dps:26.947, damage:10.240, distdraw:1.480, thmload:1.64, pierce: 65, maxrng:3000,               rof:2.632, bstint:0.380,                                                                         brcdmg: 8.7, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128049384, fdname:'Hpt_PulseLaser_Fixed_Huge' },
		62411 : { mtype:'hpl', cost:  877600, name:'Pulse Laser',                 mount:'G',              class:4, rating:'A', mass:16.00, integ:80, pwrdraw:1.37, boottime:0, dps:21.722, damage: 7.820, distdraw:1.560, thmload:1.56, pierce: 65, maxrng:3000,               rof:2.778, bstint:0.360,                                                                         brcdmg: 6.6, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128681995, fdname:'Hpt_PulseLaser_Gimbal_Huge' },
		62254 : { mtype:'hpl', cost:   26400, name:'Pulse Disruptor Laser',       mount:'F',              class:2, rating:'E', mass: 4.00, integ:51, pwrdraw:0.70, boottime:0, dps: 4.667, damage: 2.800, distdraw:0.900, thmload:1.00, pierce: 35, maxrng:3000,               rof:1.667, bstint:0.600,                                                                         brcdmg: 2.4, minbrc:40, maxbrc:80,             dmgtype:'T', thmwgt:1, dmgfall: 500, fdid:128671342, fdname:'Hpt_PulseLaser_Fixed_Medium_Disruptor' }, // verify
		
		84140 : { mtype:'hrg', cost:   51600, name:'Rail Gun',                    mount:'F',              class:1, rating:'D', mass: 2.00, integ:40, pwrdraw:1.15, boottime:0, dps:37.048, damage:23.340, distdraw:2.690,thmload:12.00, pierce:100, maxrng:3000,               rof:1.587, bstint:0.630,                      ammoclip: 1, ammomax:  80,            rldtime:1.0, brcdmg:22.2, minbrc:40, maxbrc:80,             dmgtype:'TK',thmwgt:15.56/23.34, kinwgt: 7.78/23.34, dmgfall:1000, fdid:128049488, fdname:'Hpt_Railgun_Fixed_Small' },
		84220 : { mtype:'hrg', cost:  412800, name:'Rail Gun',                    mount:'F',              class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.63, boottime:0, dps:50.036, damage:41.530, distdraw:5.110,thmload:20.00, pierce:100, maxrng:3000,               rof:1.205, bstint:0.830,                      ammoclip: 1, ammomax:  80,            rldtime:1.0, brcdmg:39.5, minbrc:40, maxbrc:80,             dmgtype:'TK',thmwgt:27.69/41.53, kinwgt:13.84/41.53, dmgfall:1000, fdid:128049489, fdname:'Hpt_Railgun_Fixed_Medium' },
		84224 : { mtype:'hrg', cost:  619200, name:'Imperial Hammer Rail Gun',    mount:'F',              class:2, rating:'B', mass: 4.00, integ:51, pwrdraw:1.63, boottime:0, dps:61.364, damage:15.000, distdraw:2.000,thmload:11.00, pierce:100, maxrng:3000,               rof:4.091, bstint:0.400, bstrof:6, bstsize:3, ammoclip: 3, ammomax: 240,            rldtime:1.2, brcdmg:14.3, minbrc:40, maxbrc:80,             dmgtype:'TK',thmwgt:10   /15   , kinwgt: 5   /15   , dmgfall:1000, fdid:128671341, fdname:'Hpt_Railgun_Fixed_Medium_Burst' }, // verify
		
		85193 : { mtype:'htp', cost:   11200, name:'Torpedo Pylon',               mount:'F', missile:'S', class:1, rating:'I', mass: 2.00, integ:40, pwrdraw:0.40, boottime:0,dps:120.000,damage:120.000,                thmload:45.00, pierce:1e4,              shotspd: 250, rof:1.000, bstint:1.000,                      ammoclip: 1,                          rldtime:5.0, brcdmg:60.0, minbrc:100,maxbrc:100,            dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128049509, fdname:'Hpt_AdvancedTorpPylon_Fixed_Small' },
		85293 : { mtype:'htp', cost:   44800, name:'Torpedo Pylon',               mount:'F', missile:'S', class:2, rating:'I', mass: 4.00, integ:51, pwrdraw:0.40, boottime:0,dps:120.000,damage:120.000,                thmload:50.00, pierce:1e4,              shotspd: 250, rof:1.000, bstint:1.000,                      ammoclip: 2,                          rldtime:5.0, brcdmg:60.0, minbrc:100,maxbrc:100,            dmgtype:'E', expwgt:1, dmgfall:000000, fdid:128049510, fdname:'Hpt_AdvancedTorpPylon_Fixed_Medium' },
		
	//	TODO2 : { mtype:''   , cost:     NaN, name:'Plasma Burst Cannon',         mount:'F',              class:2, rating:'?', mass: 4.00, integ:NaN,pwrdraw:1.43, boottime:0, dps:15.750, damage:14.000, distdraw:3.000,thmload:15.00, pierce: 55, maxrng: NaN, shotspd: NaN, rof:1.125, bstint:2.000, bstrof:3, bstsize:3, ammoclip: 9, ammomax: NaN,            rldtime:8.0, brcdmg: NaN, minbrc:NaN,maxbrc:NaN,            dmgtype:'A', abswgt:3, kinwgt:1, thmwgt:1, dmgfall: NaN, fdid:     null, fdname:'Hpt_PlasmaBurstCannon_Fixed_Medium' },
	//	TODO3 : { mtype:''   , cost:     NaN, name:'Stealth Laser',               mount:'F',              class:1, rating:'?', mass: 2.00, integ:NaN,pwrdraw:0.19, boottime:0, dps: 6.000, damage: 1.800, distdraw:0.330, thmload:0.01, pierce:1e4, maxrng: NaN,               rof:3.333, bstint:0.300,                                                                         brcdmg: NaN, minbrc:NaN,maxbrc:NaN,            dmgtype:'T', thmwgt:1, dmgfall: NaN, fdid:     null, fdname:'Hpt_PulseLaserStealth_Fixed_Small' },
		
		
		// UTILITY MOUNTS
		
		
		50090 : { mtype:'ucl',  cost:   8500, name:'Chaff Launcher',            class:0, rating:'I', mass:1.30, integ:20, pwrdraw:0.20, passive:1, boottime:0,                         distdraw:4.00, thmload:4.0 ,                                        rof: 1.0, bstint:1.00,                       ammoclip: 1, ammomax:   10, rldtime:10.0, jamdur:20,                   fdid:128049513, fdname:'Hpt_ChaffLauncher_Tiny' },
		
		51060 : { mtype:'uec',  cost:  12500, name:'Electronic Countermeasure', class:0, rating:'F', mass:1.30, integ:20, pwrdraw:0.20, passive:1, boottime:0, range:3000, duration:3, distdraw:4.00, thmload:4.0 , cooldown:10,                                                                                                                                               fdid:128049516, fdname:'Hpt_ElectronicCountermeasure_Tiny' },
		
		58061 : { mtype:'uex',  cost:  63000, name:'Shutdown Field Neutraliser',class:0, rating:'F', mass:1.30, integ:35, pwrdraw:0.20, passive:1, boottime:0, range:3000, duration:1, distdraw:0.25,               cooldown:10, nosingleton:1, fdid:128771884, fdname:'Hpt_AntiUnknownShutdown_Tiny' },
		58050 : { mtype:'uex',  cost: 365700, name:'Xeno Scanner',              class:0, rating:'E', mass:1.30, integ:56, pwrdraw:0.20,            boottime:2, scanrng: 500, maxangle:23.00, scantime:10,                        fdid:128793115, fdname:'Hpt_XenoScanner_Basic_Tiny' },
		
		52090 : { mtype:'uhsl', cost:   3500, name:'Heat Sink Launcher',        class:0, rating:'I', mass:1.30, integ:20, pwrdraw:0.20, passive:1, boottime:0,                         distdraw:2.00,                                                      rof: 0.2, bstint:5.00,                       ammoclip: 1, ammomax:    2, rldtime:10.0, duration:10, thmdrain:100.0, fdid:128049519, fdname:'Hpt_HeatSinkLauncher_Turret_Tiny' },
		
		57050 : { mtype:'ukws', cost:  13540, name:'Kill Warrant Scanner',      class:0, rating:'E', mass:1.30, integ:32, pwrdraw:0.20,            boottime:2, scanrng:2000, maxangle:15.00, scantime:10, fdid:128662530, fdname:'Hpt_CrimeScanner_Size0_Class1' },
		57040 : { mtype:'ukws', cost:  40630, name:'Kill Warrant Scanner',      class:0, rating:'D', mass:1.30, integ:24, pwrdraw:0.40,            boottime:2, scanrng:2500, maxangle:15.00, scantime:10, fdid:128662531, fdname:'Hpt_CrimeScanner_Size0_Class2' },
		57030 : { mtype:'ukws', cost: 121900, name:'Kill Warrant Scanner',      class:0, rating:'C', mass:1.30, integ:40, pwrdraw:0.80,            boottime:2, scanrng:3000, maxangle:15.00, scantime:10, fdid:128662532, fdname:'Hpt_CrimeScanner_Size0_Class3' },
		57020 : { mtype:'ukws', cost: 365700, name:'Kill Warrant Scanner',      class:0, rating:'B', mass:1.30, integ:56, pwrdraw:1.60,            boottime:2, scanrng:3500, maxangle:15.00, scantime:10, fdid:128662533, fdname:'Hpt_CrimeScanner_Size0_Class4' },
		57010 : { mtype:'ukws', cost:1097100, name:'Kill Warrant Scanner',      class:0, rating:'A', mass:1.30, integ:48, pwrdraw:3.20,            boottime:2, scanrng:4000, maxangle:15.00, scantime:10, fdid:128662534, fdname:'Hpt_CrimeScanner_Size0_Class5' },
		
		55050 : { mtype:'ucs',  cost:  13540, name:'Manifest Scanner',          class:0, rating:'E', mass:1.30, integ:32, pwrdraw:0.20,            boottime:3, scanrng:2000, maxangle:15.00, scantime:10, fdid:128662520, fdname:'Hpt_CargoScanner_Size0_Class1' },
		55040 : { mtype:'ucs',  cost:  40630, name:'Manifest Scanner',          class:0, rating:'D', mass:1.30, integ:24, pwrdraw:0.40,            boottime:3, scanrng:2500, maxangle:15.00, scantime:10, fdid:128662521, fdname:'Hpt_CargoScanner_Size0_Class2' },
		55030 : { mtype:'ucs',  cost: 121900, name:'Manifest Scanner',          class:0, rating:'C', mass:1.30, integ:40, pwrdraw:0.80,            boottime:3, scanrng:3000, maxangle:15.00, scantime:10, fdid:128662522, fdname:'Hpt_CargoScanner_Size0_Class3' },
		55020 : { mtype:'ucs',  cost: 365700, name:'Manifest Scanner',          class:0, rating:'B', mass:1.30, integ:56, pwrdraw:1.60,            boottime:3, scanrng:3500, maxangle:15.00, scantime:10, fdid:128662523, fdname:'Hpt_CargoScanner_Size0_Class4' },
		55010 : { mtype:'ucs',  cost:1097100, name:'Manifest Scanner',          class:0, rating:'A', mass:1.30, integ:48, pwrdraw:3.20,            boottime:3, scanrng:4000, maxangle:15.00, scantime:10, fdid:128662524, fdname:'Hpt_CargoScanner_Size0_Class5' },
		
		53090 : { mtype:'upd',  cost:  18550, name:'Point Defence',  mount:'T', class:0, rating:'I', mass:0.50, integ:30, pwrdraw:0.20, passive:1, boottime:0, dps:2.0, damage:0.2,                   thmload:0.07,             maxrng:2500, shotspd:1000, rof:10.0, bstint:0.20, bstrof:15, bstsize:4, ammoclip:12, ammomax:10000, rldtime: 0.4, jitter:0.75, dmgtype:'K', dmgfall:000000, fdid:128049522, fdname:'Hpt_PlasmaPointDefence_Turret_Tiny' },
		
		54050 : { mtype:'usb',  cost:  10000, name:'Shield Booster',            class:0, rating:'E', mass:0.50, integ:25, pwrdraw:0.20, passive:1, boottime:0, shieldbst: 4.0, kinres:0.0, thmres:0.0, expres:0.0, fdid:128668532, fdname:'Hpt_ShieldBooster_Size0_Class1' },
		54040 : { mtype:'usb',  cost:  23000, name:'Shield Booster',            class:0, rating:'D', mass:1.00, integ:35, pwrdraw:0.50, passive:1, boottime:0, shieldbst: 8.0, kinres:0.0, thmres:0.0, expres:0.0, fdid:128668533, fdname:'Hpt_ShieldBooster_Size0_Class2' },
		54030 : { mtype:'usb',  cost:  53000, name:'Shield Booster',            class:0, rating:'C', mass:2.00, integ:40, pwrdraw:0.70, passive:1, boottime:0, shieldbst:12.0, kinres:0.0, thmres:0.0, expres:0.0, fdid:128668534, fdname:'Hpt_ShieldBooster_Size0_Class3' },
		54020 : { mtype:'usb',  cost: 122000, name:'Shield Booster',            class:0, rating:'B', mass:3.00, integ:45, pwrdraw:1.00, passive:1, boottime:0, shieldbst:16.0, kinres:0.0, thmres:0.0, expres:0.0, fdid:128668535, fdname:'Hpt_ShieldBooster_Size0_Class4' },
		54010 : { mtype:'usb',  cost: 281000, name:'Shield Booster',            class:0, rating:'A', mass:3.50, integ:48, pwrdraw:1.20, passive:1, boottime:0, shieldbst:20.0, kinres:0.0, thmres:0.0, expres:0.0, fdid:128668536, fdname:'Hpt_ShieldBooster_Size0_Class5' },
		
		56050 : { mtype:'ufsws',cost:  13540, name:'Frame Shift Wake Scanner',  class:0, rating:'E', mass:1.30, integ:32, pwrdraw:0.20,            boottime:1, scanrng:2000, maxangle:15.00, scantime:10, fdid:128662525, fdname:'Hpt_CloudScanner_Size0_Class1' },
		56040 : { mtype:'ufsws',cost:  40630, name:'Frame Shift Wake Scanner',  class:0, rating:'D', mass:1.30, integ:24, pwrdraw:0.40,            boottime:1, scanrng:2500, maxangle:15.00, scantime:10, fdid:128662526, fdname:'Hpt_CloudScanner_Size0_Class2' },
		56030 : { mtype:'ufsws',cost: 121900, name:'Frame Shift Wake Scanner',  class:0, rating:'C', mass:1.30, integ:40, pwrdraw:0.80,            boottime:1, scanrng:3000, maxangle:15.00, scantime:10, fdid:128662527, fdname:'Hpt_CloudScanner_Size0_Class3' },
		56020 : { mtype:'ufsws',cost: 365700, name:'Frame Shift Wake Scanner',  class:0, rating:'B', mass:1.30, integ:56, pwrdraw:1.60,            boottime:1, scanrng:3500, maxangle:15.00, scantime:10, fdid:128662528, fdname:'Hpt_CloudScanner_Size0_Class4' },
		56010 : { mtype:'ufsws',cost:1097100, name:'Frame Shift Wake Scanner',  class:0, rating:'A', mass:1.30, integ:48, pwrdraw:3.20,            boottime:1, scanrng:4000, maxangle:15.00, scantime:10, fdid:128662529, fdname:'Hpt_CloudScanner_Size0_Class5' },
		
		
		// CORE COMPONENTS
		
		
		49180 : { mtype:'cch', cost:0, name:'Cargo Hatch', class:1, rating:'H', pwrdraw:0.6 },
		
		
		40131 : { mtype:'cbh', cost:NaN, name:'Lightweight Alloy',          class:1, rating:'C', mass:NaN, hullbst: 80.0, kinres:-20.0, thmres:  0.0, expres:-40.0, fdid:null, fdname:null }, // placeholder
		40122 : { mtype:'cbh', cost:NaN, name:'Reinforced Alloy',           class:1, rating:'B', mass:NaN, hullbst:152.0, kinres:-20.0, thmres:  0.0, expres:-40.0, fdid:null, fdname:null }, // placeholder
		40113 : { mtype:'cbh', cost:NaN, name:'Military Grade Composite',   class:1, rating:'A', mass:NaN, hullbst:250.0, kinres:-20.0, thmres:  0.0, expres:-40.0, fdid:null, fdname:null }, // placeholder
		40114 : { mtype:'cbh', cost:NaN, name:'Mirrored Surface Composite', class:1, rating:'A', mass:NaN, hullbst:250.0, kinres:-75.0, thmres: 50.0, expres:-50.0, fdid:null, fdname:null }, // placeholder
		40115 : { mtype:'cbh', cost:NaN, name:'Reactive Surface Composite', class:1, rating:'A', mass:NaN, hullbst:250.0, kinres: 25.0, thmres:-40.0, expres: 20.0, fdid:null, fdname:null }, // placeholder
		
		
		41250 : { mtype:'cpp', cost:     1980, name:'Power Plant', class:2, rating:'E', mass:  2.50, integ: 46, pwrcap: 6.40, heateff:1.00, fdid:128064033, fdname:'Int_Powerplant_Size2_Class1' },
		41240 : { mtype:'cpp', cost:     5930, name:'Power Plant', class:2, rating:'D', mass:  1.00, integ: 41, pwrcap: 7.20, heateff:0.75, fdid:128064034, fdname:'Int_Powerplant_Size2_Class2' },
		41230 : { mtype:'cpp', cost:    17800, name:'Power Plant', class:2, rating:'C', mass:  1.30, integ: 51, pwrcap: 8.00, heateff:0.50, fdid:128064035, fdname:'Int_Powerplant_Size2_Class3' },
		41220 : { mtype:'cpp', cost:    53410, name:'Power Plant', class:2, rating:'B', mass:  2.00, integ: 61, pwrcap: 8.80, heateff:0.45, fdid:128064036, fdname:'Int_Powerplant_Size2_Class4' },
		41210 : { mtype:'cpp', cost:   160220, name:'Power Plant', class:2, rating:'A', mass:  1.30, integ: 56, pwrcap: 9.60, heateff:0.40, fdid:128064037, fdname:'Int_Powerplant_Size2_Class5' },
		41211 : { mtype:'cpp', cost:   162000, name:'Guardian Hybrid Power Plant', class:2, rating:'A', mass: 1.50, integ: 56, pwrcap:12.70, heateff:0.5 , fdid:128833988, fdname:'Int_GuardianPowerplant_Size2' }, // TODO: verify
		
		41350 : { mtype:'cpp', cost:     6270, name:'Power Plant', class:3, rating:'E', mass:  5.00, integ: 58, pwrcap: 8.00, heateff:1.00, fdid:128064038, fdname:'Int_Powerplant_Size3_Class1' },
		41340 : { mtype:'cpp', cost:    18810, name:'Power Plant', class:3, rating:'D', mass:  2.00, integ: 51, pwrcap: 9.00, heateff:0.75, fdid:128064039, fdname:'Int_Powerplant_Size3_Class2' },
		41330 : { mtype:'cpp', cost:    56440, name:'Power Plant', class:3, rating:'C', mass:  2.50, integ: 64, pwrcap:10.00, heateff:0.50, fdid:128064040, fdname:'Int_Powerplant_Size3_Class3' },
		41320 : { mtype:'cpp', cost:   169300, name:'Power Plant', class:3, rating:'B', mass:  4.00, integ: 77, pwrcap:11.00, heateff:0.45, fdid:128064041, fdname:'Int_Powerplant_Size3_Class4' },
		41310 : { mtype:'cpp', cost:   507910, name:'Power Plant', class:3, rating:'A', mass:  2.50, integ: 70, pwrcap:12.00, heateff:0.40, fdid:128064042, fdname:'Int_Powerplant_Size3_Class5' },
		41311 : { mtype:'cpp', cost:   291600, name:'Guardian Hybrid Power Plant', class:3, rating:'A', mass: 2.90, integ: 70, pwrcap:15.80, heateff:0.5 , fdid:128833989, fdname:'Int_GuardianPowerplant_Size3' }, // TODO: verify
		
		41450 : { mtype:'cpp', cost:    19880, name:'Power Plant', class:4, rating:'E', mass: 10.00, integ: 72, pwrcap:10.40, heateff:1.00, fdid:128064043, fdname:'Int_Powerplant_Size4_Class1' },
		41440 : { mtype:'cpp', cost:    59630, name:'Power Plant', class:4, rating:'D', mass:  4.00, integ: 64, pwrcap:11.70, heateff:0.75, fdid:128064044, fdname:'Int_Powerplant_Size4_Class2' },
		41430 : { mtype:'cpp', cost:   178900, name:'Power Plant', class:4, rating:'C', mass:  5.00, integ: 80, pwrcap:13.00, heateff:0.50, fdid:128064045, fdname:'Int_Powerplant_Size4_Class3' },
		41420 : { mtype:'cpp', cost:   536690, name:'Power Plant', class:4, rating:'B', mass:  8.00, integ: 96, pwrcap:14.30, heateff:0.45, fdid:128064046, fdname:'Int_Powerplant_Size4_Class4' },
		41410 : { mtype:'cpp', cost:  1610080, name:'Power Plant', class:4, rating:'A', mass:  5.00, integ: 88, pwrcap:15.60, heateff:0.40, fdid:128064047, fdname:'Int_Powerplant_Size4_Class5' },
		41411 : { mtype:'cpp', cost:   524880, name:'Guardian Hybrid Power Plant', class:4, rating:'A', mass: 5.90, integ: 88, pwrcap:20.60, heateff:0.5 , fdid:128833990, fdname:'Int_GuardianPowerplant_Size4' }, // TODO: verify
		
		41550 : { mtype:'cpp', cost:    63010, name:'Power Plant', class:5, rating:'E', mass: 20.00, integ: 86, pwrcap:13.60, heateff:1.00, fdid:128064048, fdname:'Int_Powerplant_Size5_Class1' },
		41540 : { mtype:'cpp', cost:   189040, name:'Power Plant', class:5, rating:'D', mass:  8.00, integ: 77, pwrcap:15.30, heateff:0.75, fdid:128064049, fdname:'Int_Powerplant_Size5_Class2' },
		41530 : { mtype:'cpp', cost:   567110, name:'Power Plant', class:5, rating:'C', mass: 10.00, integ: 96, pwrcap:17.00, heateff:0.50, fdid:128064050, fdname:'Int_Powerplant_Size5_Class3' },
		41520 : { mtype:'cpp', cost:  1701320, name:'Power Plant', class:5, rating:'B', mass: 16.00, integ:115, pwrcap:18.70, heateff:0.45, fdid:128064051, fdname:'Int_Powerplant_Size5_Class4' },
		41510 : { mtype:'cpp', cost:  5103950, name:'Power Plant', class:5, rating:'A', mass: 10.00, integ:106, pwrcap:20.40, heateff:0.40, fdid:128064052, fdname:'Int_Powerplant_Size5_Class5' },
		41511 : { mtype:'cpp', cost:   944790, name:'Guardian Hybrid Power Plant', class:5, rating:'A', mass:11.70, integ:106, pwrcap:26.90, heateff:0.5 , fdid:128833991, fdname:'Int_GuardianPowerplant_Size5' }, // TODO: verify
		
		41650 : { mtype:'cpp', cost:   199750, name:'Power Plant', class:6, rating:'E', mass: 40.00, integ:102, pwrcap:16.80, heateff:1.00, fdid:128064053, fdname:'Int_Powerplant_Size6_Class1' },
		41640 : { mtype:'cpp', cost:   599240, name:'Power Plant', class:6, rating:'D', mass: 16.00, integ: 90, pwrcap:18.90, heateff:0.75, fdid:128064054, fdname:'Int_Powerplant_Size6_Class2' },
		41630 : { mtype:'cpp', cost:  1797730, name:'Power Plant', class:6, rating:'C', mass: 20.00, integ:113, pwrcap:21.00, heateff:0.50, fdid:128064055, fdname:'Int_Powerplant_Size6_Class3' },
		41620 : { mtype:'cpp', cost:  5393180, name:'Power Plant', class:6, rating:'B', mass: 32.00, integ:136, pwrcap:23.10, heateff:0.45, fdid:128064056, fdname:'Int_Powerplant_Size6_Class4' },
		41610 : { mtype:'cpp', cost: 16179530, name:'Power Plant', class:6, rating:'A', mass: 20.00, integ:124, pwrcap:25.20, heateff:0.40, fdid:128064057, fdname:'Int_Powerplant_Size6_Class5' },
		41611 : { mtype:'cpp', cost:  1700610, name:'Guardian Hybrid Power Plant', class:6, rating:'A', mass:23.40, integ:124, pwrcap:33.30, heateff:0.5 , fdid:128833992, fdname:'Int_GuardianPowerplant_Size6' }, // TODO: verify
		
		41750 : { mtype:'cpp', cost:   633200, name:'Power Plant', class:7, rating:'E', mass: 80.00, integ:118, pwrcap:20.00, heateff:1.00, fdid:128064058, fdname:'Int_Powerplant_Size7_Class1' },
		41740 : { mtype:'cpp', cost:  1899600, name:'Power Plant', class:7, rating:'D', mass: 32.00, integ:105, pwrcap:22.50, heateff:0.75, fdid:128064059, fdname:'Int_Powerplant_Size7_Class2' },
		41730 : { mtype:'cpp', cost:  5698790, name:'Power Plant', class:7, rating:'C', mass: 40.00, integ:131, pwrcap:25.00, heateff:0.50, fdid:128064060, fdname:'Int_Powerplant_Size7_Class3' },
		41720 : { mtype:'cpp', cost: 17096370, name:'Power Plant', class:7, rating:'B', mass: 64.00, integ:157, pwrcap:27.50, heateff:0.45, fdid:128064061, fdname:'Int_Powerplant_Size7_Class4' },
		41710 : { mtype:'cpp', cost: 51289110, name:'Power Plant', class:7, rating:'A', mass: 40.00, integ:144, pwrcap:30.00, heateff:0.40, fdid:128064062, fdname:'Int_Powerplant_Size7_Class5' },
		41711 : { mtype:'cpp', cost:  3061100, name:'Guardian Hybrid Power Plant', class:7, rating:'A', mass:46.80, integ:144, pwrcap:39.60, heateff:0.5 , fdid:128833993, fdname:'Int_GuardianPowerplant_Size7' }, // TODO: verify
		
		41850 : { mtype:'cpp', cost:  2007240, name:'Power Plant', class:8, rating:'E', mass:160.00, integ:135, pwrcap:24.00, heateff:1.00, fdid:128064063, fdname:'Int_Powerplant_Size8_Class1' },
		41840 : { mtype:'cpp', cost:  6021720, name:'Power Plant', class:8, rating:'D', mass: 64.00, integ:120, pwrcap:27.00, heateff:0.75, fdid:128064064, fdname:'Int_Powerplant_Size8_Class2' },
		41830 : { mtype:'cpp', cost: 18065170, name:'Power Plant', class:8, rating:'C', mass: 80.00, integ:150, pwrcap:30.00, heateff:0.50, fdid:128064065, fdname:'Int_Powerplant_Size8_Class3' },
		41820 : { mtype:'cpp', cost: 54195500, name:'Power Plant', class:8, rating:'B', mass:128.00, integ:180, pwrcap:33.00, heateff:0.45, fdid:128064066, fdname:'Int_Powerplant_Size8_Class4' },
		41810 : { mtype:'cpp', cost:162586490, name:'Power Plant', class:8, rating:'A', mass: 80.00, integ:165, pwrcap:36.00, heateff:0.40, fdid:128064067, fdname:'Int_Powerplant_Size8_Class5' },
		41811 : { mtype:'cpp', cost:  5509980, name:'Guardian Hybrid Power Plant', class:8, rating:'A', mass:93.60, integ:165, pwrcap:47.50, heateff:0.5 , fdid:128833994, fdname:'Int_GuardianPowerplant_Size8' }, // TODO: verify
		
		
		42250 : { mtype:'ct', cost:     1980, name:'Thrusters', class:2, rating:'E', mass:  2.50, integ: 46, pwrdraw: 2.00, boottime:0, minmass:  24, optmass:  48, maxmass:  72, minmul:83, optmul:100, maxmul:103, thmload:1.3, fdid:128064068, fdname:'Int_Engine_Size2_Class1' },
		42240 : { mtype:'ct', cost:     5930, name:'Thrusters', class:2, rating:'D', mass:  1.00, integ: 41, pwrdraw: 2.25, boottime:0, minmass:  27, optmass:  54, maxmass:  81, minmul:86, optmul:100, maxmul:106, thmload:1.3, fdid:128064069, fdname:'Int_Engine_Size2_Class2' },
		42230 : { mtype:'ct', cost:    17800, name:'Thrusters', class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw: 2.50, boottime:0, minmass:  30, optmass:  60, maxmass:  90, minmul:90, optmul:100, maxmul:110, thmload:1.3, fdid:128064070, fdname:'Int_Engine_Size2_Class3' },
		42220 : { mtype:'ct', cost:    53410, name:'Thrusters', class:2, rating:'B', mass:  4.00, integ: 61, pwrdraw: 2.75, boottime:0, minmass:  33, optmass:  66, maxmass:  99, minmul:93, optmul:100, maxmul:113, thmload:1.3, fdid:128064071, fdname:'Int_Engine_Size2_Class4' },
		42210 : { mtype:'ct', cost:   160220, name:'Thrusters', class:2, rating:'A', mass:  2.50, integ: 56, pwrdraw: 3.00, boottime:0, minmass:  36, optmass:  72, maxmass: 108, minmul:96, optmul:100, maxmul:116, thmload:1.3, fdid:128064072, fdname:'Int_Engine_Size2_Class5' },
		
		42350 : { mtype:'ct', cost:     6270, name:'Thrusters', class:3, rating:'E', mass:  5.00, integ: 58, pwrdraw: 2.48, boottime:0, minmass:  40, optmass:  80, maxmass: 120, minmul:83, optmul:100, maxmul:103, thmload:1.3, fdid:128064073, fdname:'Int_Engine_Size3_Class1' },
		42340 : { mtype:'ct', cost:    18810, name:'Thrusters', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw: 2.79, boottime:0, minmass:  45, optmass:  90, maxmass: 135, minmul:86, optmul:100, maxmul:106, thmload:1.3, fdid:128064074, fdname:'Int_Engine_Size3_Class2' },
		42330 : { mtype:'ct', cost:    56440, name:'Thrusters', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw: 3.10, boottime:0, minmass:  50, optmass: 100, maxmass: 150, minmul:90, optmul:100, maxmul:110, thmload:1.3, fdid:128064075, fdname:'Int_Engine_Size3_Class3' },
		42320 : { mtype:'ct', cost:   169300, name:'Thrusters', class:3, rating:'B', mass:  8.00, integ: 77, pwrdraw: 3.41, boottime:0, minmass:  55, optmass: 110, maxmass: 165, minmul:93, optmul:100, maxmul:113, thmload:1.3, fdid:128064076, fdname:'Int_Engine_Size3_Class4' },
		42310 : { mtype:'ct', cost:   507910, name:'Thrusters', class:3, rating:'A', mass:  5.00, integ: 70, pwrdraw: 3.72, boottime:0, minmass:  60, optmass: 120, maxmass: 180, minmul:96, optmul:100, maxmul:116, thmload:1.3, fdid:128064077, fdname:'Int_Engine_Size3_Class5' },
		
		42450 : { mtype:'ct', cost:    19880, name:'Thrusters', class:4, rating:'E', mass: 10.00, integ: 72, pwrdraw: 3.28, boottime:0, minmass: 140, optmass: 280, maxmass: 420, minmul:83, optmul:100, maxmul:103, thmload:1.3, fdid:128064078, fdname:'Int_Engine_Size4_Class1' },
		42440 : { mtype:'ct', cost:    59630, name:'Thrusters', class:4, rating:'D', mass:  4.00, integ: 64, pwrdraw: 3.69, boottime:0, minmass: 158, optmass: 315, maxmass: 473, minmul:86, optmul:100, maxmul:106, thmload:1.3, fdid:128064079, fdname:'Int_Engine_Size4_Class2' },
		42430 : { mtype:'ct', cost:   178900, name:'Thrusters', class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw: 4.10, boottime:0, minmass: 175, optmass: 350, maxmass: 525, minmul:90, optmul:100, maxmul:110, thmload:1.3, fdid:128064080, fdname:'Int_Engine_Size4_Class3' },
		42420 : { mtype:'ct', cost:   536690, name:'Thrusters', class:4, rating:'B', mass: 16.00, integ: 96, pwrdraw: 4.51, boottime:0, minmass: 193, optmass: 385, maxmass: 578, minmul:93, optmul:100, maxmul:113, thmload:1.3, fdid:128064081, fdname:'Int_Engine_Size4_Class4' },
		42410 : { mtype:'ct', cost:  1610080, name:'Thrusters', class:4, rating:'A', mass: 10.00, integ: 88, pwrdraw: 4.92, boottime:0, minmass: 210, optmass: 420, maxmass: 630, minmul:96, optmul:100, maxmul:116, thmload:1.3, fdid:128064082, fdname:'Int_Engine_Size4_Class5' },
		
		42550 : { mtype:'ct', cost:    63010, name:'Thrusters', class:5, rating:'E', mass: 20.00, integ: 86, pwrdraw: 4.08, boottime:0, minmass: 280, optmass: 560, maxmass: 840, minmul:83, optmul:100, maxmul:103, thmload:1.3, fdid:128064083, fdname:'Int_Engine_Size5_Class1' },
		42540 : { mtype:'ct', cost:   189040, name:'Thrusters', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw: 4.59, boottime:0, minmass: 315, optmass: 630, maxmass: 945, minmul:86, optmul:100, maxmul:106, thmload:1.3, fdid:128064084, fdname:'Int_Engine_Size5_Class2' },
		42530 : { mtype:'ct', cost:   567110, name:'Thrusters', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw: 5.10, boottime:0, minmass: 350, optmass: 700, maxmass:1050, minmul:90, optmul:100, maxmul:110, thmload:1.3, fdid:128064085, fdname:'Int_Engine_Size5_Class3' },
		42520 : { mtype:'ct', cost:  1701320, name:'Thrusters', class:5, rating:'B', mass: 32.00, integ:115, pwrdraw: 5.61, boottime:0, minmass: 385, optmass: 770, maxmass:1155, minmul:93, optmul:100, maxmul:113, thmload:1.3, fdid:128064086, fdname:'Int_Engine_Size5_Class4' },
		42510 : { mtype:'ct', cost:  5103950, name:'Thrusters', class:5, rating:'A', mass: 20.00, integ:106, pwrdraw: 6.12, boottime:0, minmass: 420, optmass: 840, maxmass:1260, minmul:96, optmul:100, maxmul:116, thmload:1.3, fdid:128064087, fdname:'Int_Engine_Size5_Class5' },
		
		42650 : { mtype:'ct', cost:   199750, name:'Thrusters', class:6, rating:'E', mass: 40.00, integ:102, pwrdraw: 5.04, boottime:0, minmass: 480, optmass: 960, maxmass:1440, minmul:83, optmul:100, maxmul:103, thmload:1.3, fdid:128064088, fdname:'Int_Engine_Size6_Class1' },
		42640 : { mtype:'ct', cost:   599240, name:'Thrusters', class:6, rating:'D', mass: 16.00, integ: 90, pwrdraw: 5.67, boottime:0, minmass: 540, optmass:1080, maxmass:1620, minmul:86, optmul:100, maxmul:106, thmload:1.3, fdid:128064089, fdname:'Int_Engine_Size6_Class2' },
		42630 : { mtype:'ct', cost:  1797730, name:'Thrusters', class:6, rating:'C', mass: 40.00, integ:113, pwrdraw: 6.30, boottime:0, minmass: 600, optmass:1200, maxmass:1800, minmul:90, optmul:100, maxmul:110, thmload:1.3, fdid:128064090, fdname:'Int_Engine_Size6_Class3' },
		42620 : { mtype:'ct', cost:  5393180, name:'Thrusters', class:6, rating:'B', mass: 64.00, integ:136, pwrdraw: 6.93, boottime:0, minmass: 660, optmass:1320, maxmass:1980, minmul:93, optmul:100, maxmul:113, thmload:1.3, fdid:128064091, fdname:'Int_Engine_Size6_Class4' },
		42610 : { mtype:'ct', cost: 16179530, name:'Thrusters', class:6, rating:'A', mass: 40.00, integ:124, pwrdraw: 7.56, boottime:0, minmass: 720, optmass:1440, maxmass:2160, minmul:96, optmul:100, maxmul:116, thmload:1.3, fdid:128064092, fdname:'Int_Engine_Size6_Class5' },
		
		42750 : { mtype:'ct', cost:   633200, name:'Thrusters', class:7, rating:'E', mass: 80.00, integ:118, pwrdraw: 6.08, boottime:0, minmass: 720, optmass:1440, maxmass:2160, minmul:83, optmul:100, maxmul:103, thmload:1.3, fdid:128064093, fdname:'Int_Engine_Size7_Class1' },
		42740 : { mtype:'ct', cost:  1899600, name:'Thrusters', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw: 6.84, boottime:0, minmass: 810, optmass:1620, maxmass:2430, minmul:86, optmul:100, maxmul:106, thmload:1.3, fdid:128064094, fdname:'Int_Engine_Size7_Class2' },
		42730 : { mtype:'ct', cost:  5698790, name:'Thrusters', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw: 7.60, boottime:0, minmass: 900, optmass:1800, maxmass:2700, minmul:90, optmul:100, maxmul:110, thmload:1.3, fdid:128064095, fdname:'Int_Engine_Size7_Class3' },
		42720 : { mtype:'ct', cost: 17096370, name:'Thrusters', class:7, rating:'B', mass:128.00, integ:157, pwrdraw: 8.36, boottime:0, minmass: 990, optmass:1980, maxmass:2970, minmul:93, optmul:100, maxmul:113, thmload:1.3, fdid:128064096, fdname:'Int_Engine_Size7_Class4' },
		42710 : { mtype:'ct', cost: 51289110, name:'Thrusters', class:7, rating:'A', mass: 80.00, integ:144, pwrdraw: 9.12, boottime:0, minmass:1080, optmass:2160, maxmass:3240, minmul:96, optmul:100, maxmul:116, thmload:1.3, fdid:128064097, fdname:'Int_Engine_Size7_Class5' },
		
		42850 : { mtype:'ct', cost:  2007240, name:'Thrusters', class:8, rating:'E', mass:160.00, integ:135, pwrdraw: 7.20, boottime:0, minmass:1120, optmass:2240, maxmass:3360, minmul:83, optmul:100, maxmul:103, thmload:1.3, fdid:128064098, fdname:'Int_Engine_Size8_Class1' },
		42840 : { mtype:'ct', cost:  6021720, name:'Thrusters', class:8, rating:'D', mass: 64.00, integ:120, pwrdraw: 8.10, boottime:0, minmass:1260, optmass:2520, maxmass:3780, minmul:86, optmul:100, maxmul:106, thmload:1.3, fdid:128064099, fdname:'Int_Engine_Size8_Class2' },
		42830 : { mtype:'ct', cost: 18065170, name:'Thrusters', class:8, rating:'C', mass:160.00, integ:150, pwrdraw: 9.00, boottime:0, minmass:1400, optmass:2800, maxmass:4200, minmul:90, optmul:100, maxmul:110, thmload:1.3, fdid:128064100, fdname:'Int_Engine_Size8_Class3' },
		42820 : { mtype:'ct', cost: 54195500, name:'Thrusters', class:8, rating:'B', mass:256.00, integ:180, pwrdraw: 9.90, boottime:0, minmass:1540, optmass:3080, maxmass:4620, minmul:93, optmul:100, maxmul:113, thmload:1.3, fdid:128064101, fdname:'Int_Engine_Size8_Class4' },
		42810 : { mtype:'ct', cost:162586490, name:'Thrusters', class:8, rating:'A', mass:160.00, integ:165, pwrdraw:10.80, boottime:0, minmass:1680, optmass:3360, maxmass:5040, minmul:96, optmul:100, maxmul:116, thmload:1.3, fdid:128064102, fdname:'Int_Engine_Size8_Class5' },
		
		42211 : { mtype:'ct', cost:1610080, name:'Enhanced Performance Thrusters', class:2, rating:'A', mass:2.50, integ:40, pwrdraw:4.00, boottime:0, minmass:50, optmass:60, maxmass:120, minmul:90, optmul:115, maxmul:137, thmload:2.0,  minmulspd:90, optmulspd:125, maxmulspd:160, minmulacc:90, optmulacc:110, maxmulacc:120, minmulrot:90, optmulrot:110, maxmulrot:130, fdid:128682014, fdname:'Int_Engine_Size2_Class5_Fast' },
		42311 : { mtype:'ct', cost:5103950, name:'Enhanced Performance Thrusters', class:3, rating:'A', mass:5.00, integ:55, pwrdraw:5.00, boottime:0, minmass:70, optmass:90, maxmass:200, minmul:90, optmul:115, maxmul:137, thmload:1.3,  minmulspd:90, optmulspd:125, maxmulspd:160, minmulacc:90, optmulacc:110, maxmulacc:120, minmulrot:90, optmulrot:110, maxmulrot:130, fdid:128682013, fdname:'Int_Engine_Size3_Class5_Fast' },
		
		
		43250 : { mtype:'cfsd', cost:     1980, name:'Frame Shift Drive', class:2, rating:'E', mass:  2.50, integ: 46, pwrdraw:0.16, boottime:10, optmass:  48.0, thmload:10.0, maxfuel: 0.60, fuelmul:0.011, fuelpower:2.00, fdid:128064103, fdname:'Int_Hyperdrive_Size2_Class1' },
		43240 : { mtype:'cfsd', cost:     5930, name:'Frame Shift Drive', class:2, rating:'D', mass:  1.00, integ: 41, pwrdraw:0.18, boottime:10, optmass:  54.0, thmload:10.0, maxfuel: 0.60, fuelmul:0.010, fuelpower:2.00, fdid:128064104, fdname:'Int_Hyperdrive_Size2_Class2' },
		43230 : { mtype:'cfsd', cost:    17800, name:'Frame Shift Drive', class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw:0.20, boottime:10, optmass:  60.0, thmload:10.0, maxfuel: 0.60, fuelmul:0.008, fuelpower:2.00, fdid:128064105, fdname:'Int_Hyperdrive_Size2_Class3' },
		43220 : { mtype:'cfsd', cost:    53410, name:'Frame Shift Drive', class:2, rating:'B', mass:  4.00, integ: 77, pwrdraw:0.25, boottime:10, optmass:  75.0, thmload:10.0, maxfuel: 0.80, fuelmul:0.010, fuelpower:2.00, fdid:128064106, fdname:'Int_Hyperdrive_Size2_Class4' },
		43210 : { mtype:'cfsd', cost:   160220, name:'Frame Shift Drive', class:2, rating:'A', mass:  2.50, integ: 64, pwrdraw:0.30, boottime:10, optmass:  90.0, thmload:10.0, maxfuel: 0.90, fuelmul:0.012, fuelpower:2.00, fdid:128064107, fdname:'Int_Hyperdrive_Size2_Class5' },
		
		43350 : { mtype:'cfsd', cost:     6270, name:'Frame Shift Drive', class:3, rating:'E', mass:  5.00, integ: 58, pwrdraw:0.24, boottime:10, optmass:  80.0, thmload:14.0, maxfuel: 1.20, fuelmul:0.011, fuelpower:2.15, fdid:128064108, fdname:'Int_Hyperdrive_Size3_Class1' },
		43340 : { mtype:'cfsd', cost:    18810, name:'Frame Shift Drive', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw:0.27, boottime:10, optmass:  90.0, thmload:14.0, maxfuel: 1.20, fuelmul:0.010, fuelpower:2.15, fdid:128064109, fdname:'Int_Hyperdrive_Size3_Class2' },
		43330 : { mtype:'cfsd', cost:    56440, name:'Frame Shift Drive', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.30, boottime:10, optmass: 100.0, thmload:14.0, maxfuel: 1.20, fuelmul:0.008, fuelpower:2.15, fdid:128064110, fdname:'Int_Hyperdrive_Size3_Class3' },
		43320 : { mtype:'cfsd', cost:   169300, name:'Frame Shift Drive', class:3, rating:'B', mass:  8.00, integ: 96, pwrdraw:0.38, boottime:10, optmass: 125.0, thmload:14.0, maxfuel: 1.50, fuelmul:0.010, fuelpower:2.15, fdid:128064111, fdname:'Int_Hyperdrive_Size3_Class4' },
		43310 : { mtype:'cfsd', cost:   507910, name:'Frame Shift Drive', class:3, rating:'A', mass:  5.00, integ: 80, pwrdraw:0.45, boottime:10, optmass: 150.0, thmload:14.0, maxfuel: 1.80, fuelmul:0.012, fuelpower:2.15, fdid:128064112, fdname:'Int_Hyperdrive_Size3_Class5' },
		
		43450 : { mtype:'cfsd', cost:    19880, name:'Frame Shift Drive', class:4, rating:'E', mass: 10.00, integ: 72, pwrdraw:0.24, boottime:10, optmass: 280.0, thmload:18.0, maxfuel: 2.00, fuelmul:0.011, fuelpower:2.30, fdid:128064113, fdname:'Int_Hyperdrive_Size4_Class1' },
		43440 : { mtype:'cfsd', cost:    59630, name:'Frame Shift Drive', class:4, rating:'D', mass:  4.00, integ: 64, pwrdraw:0.27, boottime:10, optmass: 315.0, thmload:18.0, maxfuel: 2.00, fuelmul:0.010, fuelpower:2.30, fdid:128064114, fdname:'Int_Hyperdrive_Size4_Class2' },
		43430 : { mtype:'cfsd', cost:   178900, name:'Frame Shift Drive', class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw:0.30, boottime:10, optmass: 350.0, thmload:18.0, maxfuel: 2.00, fuelmul:0.008, fuelpower:2.30, fdid:128064115, fdname:'Int_Hyperdrive_Size4_Class3' },
		43420 : { mtype:'cfsd', cost:   536690, name:'Frame Shift Drive', class:4, rating:'B', mass: 16.00, integ:120, pwrdraw:0.38, boottime:10, optmass: 438.0, thmload:18.0, maxfuel: 2.50, fuelmul:0.010, fuelpower:2.30, fdid:128064116, fdname:'Int_Hyperdrive_Size4_Class4' },
		43410 : { mtype:'cfsd', cost:  1610080, name:'Frame Shift Drive', class:4, rating:'A', mass: 10.00, integ:100, pwrdraw:0.45, boottime:10, optmass: 525.0, thmload:18.0, maxfuel: 3.00, fuelmul:0.012, fuelpower:2.30, fdid:128064117, fdname:'Int_Hyperdrive_Size4_Class5' },
		
		43550 : { mtype:'cfsd', cost:    63010, name:'Frame Shift Drive', class:5, rating:'E', mass: 20.00, integ: 86, pwrdraw:0.32, boottime:10, optmass: 560.0, thmload:27.0, maxfuel: 3.30, fuelmul:0.011, fuelpower:2.45, fdid:128064118, fdname:'Int_Hyperdrive_Size5_Class1' },
		43540 : { mtype:'cfsd', cost:   189040, name:'Frame Shift Drive', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw:0.36, boottime:10, optmass: 630.0, thmload:27.0, maxfuel: 3.30, fuelmul:0.010, fuelpower:2.45, fdid:128064119, fdname:'Int_Hyperdrive_Size5_Class2' },
		43530 : { mtype:'cfsd', cost:   567110, name:'Frame Shift Drive', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.40, boottime:10, optmass: 700.0, thmload:27.0, maxfuel: 3.30, fuelmul:0.008, fuelpower:2.45, fdid:128064120, fdname:'Int_Hyperdrive_Size5_Class3' },
		43520 : { mtype:'cfsd', cost:  1701320, name:'Frame Shift Drive', class:5, rating:'B', mass: 32.00, integ:144, pwrdraw:0.50, boottime:10, optmass: 875.0, thmload:27.0, maxfuel: 4.10, fuelmul:0.010, fuelpower:2.45, fdid:128064121, fdname:'Int_Hyperdrive_Size5_Class4' },
		43510 : { mtype:'cfsd', cost:  5103950, name:'Frame Shift Drive', class:5, rating:'A', mass: 20.00, integ:120, pwrdraw:0.60, boottime:10, optmass:1050.0, thmload:27.0, maxfuel: 5.00, fuelmul:0.012, fuelpower:2.45, fdid:128064122, fdname:'Int_Hyperdrive_Size5_Class5' },
		
		43650 : { mtype:'cfsd', cost:   199750, name:'Frame Shift Drive', class:6, rating:'E', mass: 40.00, integ:102, pwrdraw:0.40, boottime:10, optmass: 960.0, thmload:37.0, maxfuel: 5.30, fuelmul:0.011, fuelpower:2.60, fdid:128064123, fdname:'Int_Hyperdrive_Size6_Class1' },
		43640 : { mtype:'cfsd', cost:   599240, name:'Frame Shift Drive', class:6, rating:'D', mass: 16.00, integ: 90, pwrdraw:0.45, boottime:10, optmass:1080.0, thmload:37.0, maxfuel: 5.30, fuelmul:0.010, fuelpower:2.60, fdid:128064124, fdname:'Int_Hyperdrive_Size6_Class2' },
		43630 : { mtype:'cfsd', cost:  1797730, name:'Frame Shift Drive', class:6, rating:'C', mass: 40.00, integ:113, pwrdraw:0.50, boottime:10, optmass:1200.0, thmload:37.0, maxfuel: 5.30, fuelmul:0.008, fuelpower:2.60, fdid:128064125, fdname:'Int_Hyperdrive_Size6_Class3' },
		43620 : { mtype:'cfsd', cost:  5393180, name:'Frame Shift Drive', class:6, rating:'B', mass: 64.00, integ:170, pwrdraw:0.63, boottime:10, optmass:1500.0, thmload:37.0, maxfuel: 6.60, fuelmul:0.010, fuelpower:2.60, fdid:128064126, fdname:'Int_Hyperdrive_Size6_Class4' },
		43610 : { mtype:'cfsd', cost: 16179530, name:'Frame Shift Drive', class:6, rating:'A', mass: 40.00, integ:141, pwrdraw:0.75, boottime:10, optmass:1800.0, thmload:37.0, maxfuel: 8.00, fuelmul:0.012, fuelpower:2.60, fdid:128064127, fdname:'Int_Hyperdrive_Size6_Class5' },
		
		43750 : { mtype:'cfsd', cost:   633200, name:'Frame Shift Drive', class:7, rating:'E', mass: 80.00, integ:118, pwrdraw:0.48, boottime:10, optmass:1440.0, thmload:43.0, maxfuel: 8.50, fuelmul:0.011, fuelpower:2.75, fdid:128064128, fdname:'Int_Hyperdrive_Size7_Class1' },
		43740 : { mtype:'cfsd', cost:  1899600, name:'Frame Shift Drive', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw:0.54, boottime:10, optmass:1620.0, thmload:43.0, maxfuel: 8.50, fuelmul:0.010, fuelpower:2.75, fdid:128064129, fdname:'Int_Hyperdrive_Size7_Class2' },
		43730 : { mtype:'cfsd', cost:  5698790, name:'Frame Shift Drive', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.60, boottime:10, optmass:1800.0, thmload:43.0, maxfuel: 8.50, fuelmul:0.008, fuelpower:2.75, fdid:128064130, fdname:'Int_Hyperdrive_Size7_Class3' },
		43720 : { mtype:'cfsd', cost: 17096370, name:'Frame Shift Drive', class:7, rating:'B', mass:128.00, integ:197, pwrdraw:0.75, boottime:10, optmass:2250.0, thmload:43.0, maxfuel:10.60, fuelmul:0.010, fuelpower:2.75, fdid:128064131, fdname:'Int_Hyperdrive_Size7_Class4' },
		43710 : { mtype:'cfsd', cost: 51289110, name:'Frame Shift Drive', class:7, rating:'A', mass: 80.00, integ:164, pwrdraw:0.90, boottime:10, optmass:2700.0, thmload:43.0, maxfuel:12.80, fuelmul:0.012, fuelpower:2.75, fdid:128064132, fdname:'Int_Hyperdrive_Size7_Class5' },
		
	//	43850 : { mtype:'cfsd', cost:      NaN, name:'Frame Shift Drive', class:8, rating:'E', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:10, optmass:   NaN, thmload: NaN, maxfuel:  NaN, fuelmul:0.011, fuelpower:2.90, fdid:128064133, fdname:'Int_Hyperdrive_Size8_Class1' }, // TODO
	//	43840 : { mtype:'cfsd', cost:      NaN, name:'Frame Shift Drive', class:8, rating:'D', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:10, optmass:   NaN, thmload: NaN, maxfuel:  NaN, fuelmul:0.010, fuelpower:2.90, fdid:128064134, fdname:'Int_Hyperdrive_Size8_Class2' }, // TODO
	//	43830 : { mtype:'cfsd', cost:      NaN, name:'Frame Shift Drive', class:8, rating:'C', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:10, optmass:   NaN, thmload: NaN, maxfuel:  NaN, fuelmul:0.008, fuelpower:2.90, fdid:128064135, fdname:'Int_Hyperdrive_Size8_Class3' }, // TODO
	//	43820 : { mtype:'cfsd', cost:      NaN, name:'Frame Shift Drive', class:8, rating:'B', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:10, optmass:   NaN, thmload: NaN, maxfuel:  NaN, fuelmul:0.010, fuelpower:2.90, fdid:128064136, fdname:'Int_Hyperdrive_Size8_Class4' }, // TODO
	//	43810 : { mtype:'cfsd', cost:      NaN, name:'Frame Shift Drive', class:8, rating:'A', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:10, optmass:   NaN, thmload: NaN, maxfuel:  NaN, fuelmul:0.012, fuelpower:2.90, fdid:128064137, fdname:'Int_Hyperdrive_Size8_Class5' }, // TODO
		
		
		44150 : { mtype:'cls', cost:     520, name:'Life Support', class:1, rating:'E', mass:  1.30, integ: 32, pwrdraw:0.32, boottime:1, emgcylife: 300, fdid:128064138, fdname:'Int_LifeSupport_Size1_Class1' }, // verify price
		44140 : { mtype:'cls', cost:    1290, name:'Life Support', class:1, rating:'D', mass:  0.50, integ: 36, pwrdraw:0.36, boottime:1, emgcylife: 450, fdid:128064139, fdname:'Int_LifeSupport_Size1_Class2' }, // verify price
		44130 : { mtype:'cls', cost:    3230, name:'Life Support', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.40, boottime:1, emgcylife: 600, fdid:128064140, fdname:'Int_LifeSupport_Size1_Class3' }, // verify price
		44120 : { mtype:'cls', cost:    8080, name:'Life Support', class:1, rating:'B', mass:  2.00, integ: 44, pwrdraw:0.44, boottime:1, emgcylife: 900, fdid:128064141, fdname:'Int_LifeSupport_Size1_Class4' }, // verify price
		44110 : { mtype:'cls', cost:   20200, name:'Life Support', class:1, rating:'A', mass:  1.30, integ: 48, pwrdraw:0.48, boottime:1, emgcylife:1500, fdid:128064142, fdname:'Int_LifeSupport_Size1_Class5' }, // verify price
		
		44250 : { mtype:'cls', cost:    1450, name:'Life Support', class:2, rating:'E', mass:  2.50, integ: 41, pwrdraw:0.37, boottime:1, emgcylife: 300, fdid:128064143, fdname:'Int_LifeSupport_Size2_Class1' }, // verify price
		44240 : { mtype:'cls', cost:    3620, name:'Life Support', class:2, rating:'D', mass:  1.00, integ: 46, pwrdraw:0.41, boottime:1, emgcylife: 450, fdid:128064144, fdname:'Int_LifeSupport_Size2_Class2' }, // verify price
		44230 : { mtype:'cls', cost:    9050, name:'Life Support', class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw:0.46, boottime:1, emgcylife: 600, fdid:128064145, fdname:'Int_LifeSupport_Size2_Class3' }, // verify price
		44220 : { mtype:'cls', cost:   22620, name:'Life Support', class:2, rating:'B', mass:  4.00, integ: 56, pwrdraw:0.51, boottime:1, emgcylife: 900, fdid:128064146, fdname:'Int_LifeSupport_Size2_Class4' }, // verify price
		44210 : { mtype:'cls', cost:   56550, name:'Life Support', class:2, rating:'A', mass:  2.50, integ: 61, pwrdraw:0.55, boottime:1, emgcylife:1500, fdid:128064147, fdname:'Int_LifeSupport_Size2_Class5' }, // verify price
		
		44350 : { mtype:'cls', cost:    4050, name:'Life Support', class:3, rating:'E', mass:  5.00, integ: 51, pwrdraw:0.42, boottime:1, emgcylife: 300, fdid:128064148, fdname:'Int_LifeSupport_Size3_Class1' },
		44340 : { mtype:'cls', cost:   10130, name:'Life Support', class:3, rating:'D', mass:  2.00, integ: 58, pwrdraw:0.48, boottime:1, emgcylife: 450, fdid:128064149, fdname:'Int_LifeSupport_Size3_Class2' },
		44330 : { mtype:'cls', cost:   25330, name:'Life Support', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.53, boottime:1, emgcylife: 600, fdid:128064150, fdname:'Int_LifeSupport_Size3_Class3' },
		44320 : { mtype:'cls', cost:   63330, name:'Life Support', class:3, rating:'B', mass:  8.00, integ: 70, pwrdraw:0.58, boottime:1, emgcylife: 900, fdid:128064151, fdname:'Int_LifeSupport_Size3_Class4' }, // verify price
		44310 : { mtype:'cls', cost:  158330, name:'Life Support', class:3, rating:'A', mass:  5.00, integ: 77, pwrdraw:0.64, boottime:1, emgcylife:1500, fdid:128064152, fdname:'Int_LifeSupport_Size3_Class5' },
		
		44450 : { mtype:'cls', cost:   11350, name:'Life Support', class:4, rating:'E', mass: 10.00, integ: 64, pwrdraw:0.50, boottime:1, emgcylife: 300, fdid:128064153, fdname:'Int_LifeSupport_Size4_Class1' },
		44440 : { mtype:'cls', cost:   28370, name:'Life Support', class:4, rating:'D', mass:  4.00, integ: 72, pwrdraw:0.56, boottime:1, emgcylife: 450, fdid:128064154, fdname:'Int_LifeSupport_Size4_Class2' },
		44430 : { mtype:'cls', cost:   70930, name:'Life Support', class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw:0.62, boottime:1, emgcylife: 600, fdid:128064155, fdname:'Int_LifeSupport_Size4_Class3' },
		44420 : { mtype:'cls', cost:  177330, name:'Life Support', class:4, rating:'B', mass: 16.00, integ: 88, pwrdraw:0.68, boottime:1, emgcylife: 900, fdid:128064156, fdname:'Int_LifeSupport_Size4_Class4' },
		44410 : { mtype:'cls', cost:  443330, name:'Life Support', class:4, rating:'A', mass: 10.00, integ: 96, pwrdraw:0.74, boottime:1, emgcylife:1500, fdid:128064157, fdname:'Int_LifeSupport_Size4_Class5' }, // verify price
		
		44550 : { mtype:'cls', cost:   31780, name:'Life Support', class:5, rating:'E', mass: 20.00, integ: 77, pwrdraw:0.57, boottime:1, emgcylife: 300, fdid:128064158, fdname:'Int_LifeSupport_Size5_Class1' },
		44540 : { mtype:'cls', cost:   79440, name:'Life Support', class:5, rating:'D', mass:  8.00, integ: 86, pwrdraw:0.64, boottime:1, emgcylife: 450, fdid:128064159, fdname:'Int_LifeSupport_Size5_Class2' },
		44530 : { mtype:'cls', cost:  198610, name:'Life Support', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.71, boottime:1, emgcylife: 600, fdid:128064160, fdname:'Int_LifeSupport_Size5_Class3' },
		44520 : { mtype:'cls', cost:  496530, name:'Life Support', class:5, rating:'B', mass: 32.00, integ:106, pwrdraw:0.78, boottime:1, emgcylife: 900, fdid:128064161, fdname:'Int_LifeSupport_Size5_Class4' },
		44510 : { mtype:'cls', cost: 1241320, name:'Life Support', class:5, rating:'A', mass: 20.00, integ:115, pwrdraw:0.85, boottime:1, emgcylife:1500, fdid:128064162, fdname:'Int_LifeSupport_Size5_Class5' },
		
		44650 : { mtype:'cls', cost:   88980, name:'Life Support', class:6, rating:'E', mass: 40.00, integ: 90, pwrdraw:0.64, boottime:1, emgcylife: 300, fdid:128064163, fdname:'Int_LifeSupport_Size6_Class1' }, // verify price
		44640 : { mtype:'cls', cost:  222440, name:'Life Support', class:6, rating:'D', mass: 16.00, integ:102, pwrdraw:0.72, boottime:1, emgcylife: 450, fdid:128064164, fdname:'Int_LifeSupport_Size6_Class2' }, // verify price
		44630 : { mtype:'cls', cost:  556110, name:'Life Support', class:6, rating:'C', mass: 40.00, integ:113, pwrdraw:0.80, boottime:1, emgcylife: 600, fdid:128064165, fdname:'Int_LifeSupport_Size6_Class3' }, // verify price
		44620 : { mtype:'cls', cost: 1390280, name:'Life Support', class:6, rating:'B', mass: 64.00, integ:124, pwrdraw:0.88, boottime:1, emgcylife: 900, fdid:128064166, fdname:'Int_LifeSupport_Size6_Class4' }, // verify price
		44610 : { mtype:'cls', cost: 3475690, name:'Life Support', class:6, rating:'A', mass: 40.00, integ:136, pwrdraw:0.96, boottime:1, emgcylife:1500, fdid:128064167, fdname:'Int_LifeSupport_Size6_Class5' }, // verify price
		
		44750 : { mtype:'cls', cost:  249140, name:'Life Support', class:7, rating:'E', mass: 80.00, integ:105, pwrdraw:0.72, boottime:1, emgcylife: 300, fdid:128064168, fdname:'Int_LifeSupport_Size7_Class1' },
		44740 : { mtype:'cls', cost:  622840, name:'Life Support', class:7, rating:'D', mass: 32.00, integ:118, pwrdraw:0.81, boottime:1, emgcylife: 450, fdid:128064169, fdname:'Int_LifeSupport_Size7_Class2' },
		44730 : { mtype:'cls', cost: 1557110, name:'Life Support', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.90, boottime:1, emgcylife: 600, fdid:128064170, fdname:'Int_LifeSupport_Size7_Class3' },
		44720 : { mtype:'cls', cost: 3892770, name:'Life Support', class:7, rating:'B', mass:128.00, integ:144, pwrdraw:0.99, boottime:1, emgcylife: 900, fdid:128064171, fdname:'Int_LifeSupport_Size7_Class4' },
		44710 : { mtype:'cls', cost: 9731930, name:'Life Support', class:7, rating:'A', mass: 80.00, integ:157, pwrdraw:1.08, boottime:1, emgcylife:1500, fdid:128064172, fdname:'Int_LifeSupport_Size7_Class5' },
		
		44850 : { mtype:'cls', cost:  697590, name:'Life Support', class:8, rating:'E', mass:160.00, integ:120, pwrdraw:0.80, boottime:1, emgcylife: 300, fdid:128064173, fdname:'Int_LifeSupport_Size8_Class1' }, // verify
		44840 : { mtype:'cls', cost: 1743970, name:'Life Support', class:8, rating:'D', mass: 64.00, integ:135, pwrdraw:0.90, boottime:1, emgcylife: 450, fdid:128064174, fdname:'Int_LifeSupport_Size8_Class2' }, // verify
		44830 : { mtype:'cls', cost: 4359900, name:'Life Support', class:8, rating:'C', mass:160.00, integ:150, pwrdraw:1.00, boottime:1, emgcylife: 600, fdid:128064175, fdname:'Int_LifeSupport_Size8_Class3' }, // verify
		44820 : { mtype:'cls', cost:10899770, name:'Life Support', class:8, rating:'B', mass:256.00, integ:165, pwrdraw:1.10, boottime:1, emgcylife: 900, fdid:128064176, fdname:'Int_LifeSupport_Size8_Class4' }, // verify
		44810 : { mtype:'cls', cost:27249400, name:'Life Support', class:8, rating:'A', mass:160.00, integ:180, pwrdraw:1.20, boottime:1, emgcylife:1500, fdid:128064177, fdname:'Int_LifeSupport_Size8_Class5' }, // verify
		
		
		45150 : { mtype:'cpd', cost:     520, name:'Power Distributor', class:1, rating:'E', mass:  1.30, integ: 36, pwrdraw:0.32, boottime:5, wepcap:10.00, wepchg:1.20, engcap: 8.00, engchg:0.40, syscap: 8.00, syschg:0.40, fdid:128064178, fdname:'Int_PowerDistributor_Size1_Class1' },
		45140 : { mtype:'cpd', cost:    1290, name:'Power Distributor', class:1, rating:'D', mass:  0.50, integ: 32, pwrdraw:0.36, boottime:5, wepcap:11.00, wepchg:1.40, engcap: 9.00, engchg:0.50, syscap: 9.00, syschg:0.50, fdid:128064179, fdname:'Int_PowerDistributor_Size1_Class2' },
		45130 : { mtype:'cpd', cost:    3230, name:'Power Distributor', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.40, boottime:5, wepcap:12.00, wepchg:1.50, engcap:10.00, engchg:0.50, syscap:10.00, syschg:0.50, fdid:128064180, fdname:'Int_PowerDistributor_Size1_Class3' },
		45120 : { mtype:'cpd', cost:    8080, name:'Power Distributor', class:1, rating:'B', mass:  2.00, integ: 48, pwrdraw:0.44, boottime:5, wepcap:13.00, wepchg:1.70, engcap:11.00, engchg:0.60, syscap:11.00, syschg:0.60, fdid:128064181, fdname:'Int_PowerDistributor_Size1_Class4' },
		45110 : { mtype:'cpd', cost:   20200, name:'Power Distributor', class:1, rating:'A', mass:  1.30, integ: 44, pwrdraw:0.48, boottime:5, wepcap:14.00, wepchg:1.80, engcap:12.00, engchg:0.60, syscap:12.00, syschg:0.60, fdid:128064182, fdname:'Int_PowerDistributor_Size1_Class5' },
		
		45250 : { mtype:'cpd', cost:    1450, name:'Power Distributor', class:2, rating:'E', mass:  2.50, integ: 46, pwrdraw:0.36, boottime:5, wepcap:12.00, wepchg:1.40, engcap:10.00, engchg:0.60, syscap:10.00, syschg:0.60, fdid:128064183, fdname:'Int_PowerDistributor_Size2_Class1' },
		45240 : { mtype:'cpd', cost:    3620, name:'Power Distributor', class:2, rating:'D', mass:  1.00, integ: 41, pwrdraw:0.41, boottime:5, wepcap:14.00, wepchg:1.60, engcap:11.00, engchg:0.60, syscap:11.00, syschg:0.60, fdid:128064184, fdname:'Int_PowerDistributor_Size2_Class2' },
		45230 : { mtype:'cpd', cost:    9050, name:'Power Distributor', class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw:0.45, boottime:5, wepcap:15.00, wepchg:1.80, engcap:12.00, engchg:0.70, syscap:12.00, syschg:0.70, fdid:128064185, fdname:'Int_PowerDistributor_Size2_Class3' },
		45220 : { mtype:'cpd', cost:   22620, name:'Power Distributor', class:2, rating:'B', mass:  4.00, integ: 61, pwrdraw:0.50, boottime:5, wepcap:17.00, wepchg:2.00, engcap:13.00, engchg:0.80, syscap:13.00, syschg:0.80, fdid:128064186, fdname:'Int_PowerDistributor_Size2_Class4' },
		45210 : { mtype:'cpd', cost:   56550, name:'Power Distributor', class:2, rating:'A', mass:  2.50, integ: 56, pwrdraw:0.54, boottime:5, wepcap:18.00, wepchg:2.20, engcap:14.00, engchg:0.80, syscap:14.00, syschg:0.80, fdid:128064187, fdname:'Int_PowerDistributor_Size2_Class5' },
		
		45350 : { mtype:'cpd', cost:    4050, name:'Power Distributor', class:3, rating:'E', mass:  5.00, integ: 58, pwrdraw:0.40, boottime:5, wepcap:16.00, wepchg:1.80, engcap:12.00, engchg:0.90, syscap:12.00, syschg:0.90, fdid:128064188, fdname:'Int_PowerDistributor_Size3_Class1' },
		45340 : { mtype:'cpd', cost:   10130, name:'Power Distributor', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw:0.45, boottime:5, wepcap:18.00, wepchg:2.10, engcap:14.00, engchg:1.00, syscap:14.00, syschg:1.00, fdid:128064189, fdname:'Int_PowerDistributor_Size3_Class2' },
		45330 : { mtype:'cpd', cost:   25330, name:'Power Distributor', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.50, boottime:5, wepcap:20.00, wepchg:2.30, engcap:15.00, engchg:1.10, syscap:15.00, syschg:1.10, fdid:128064190, fdname:'Int_PowerDistributor_Size3_Class3' },
		45320 : { mtype:'cpd', cost:   63330, name:'Power Distributor', class:3, rating:'B', mass:  8.00, integ: 77, pwrdraw:0.55, boottime:5, wepcap:22.00, wepchg:2.50, engcap:17.00, engchg:1.20, syscap:17.00, syschg:1.20, fdid:128064191, fdname:'Int_PowerDistributor_Size3_Class4' },
		45310 : { mtype:'cpd', cost:  158330, name:'Power Distributor', class:3, rating:'A', mass:  5.00, integ: 70, pwrdraw:0.60, boottime:5, wepcap:24.00, wepchg:2.80, engcap:18.00, engchg:1.30, syscap:18.00, syschg:1.30, fdid:128064192, fdname:'Int_PowerDistributor_Size3_Class5' },
		
		45450 : { mtype:'cpd', cost:   11350, name:'Power Distributor', class:4, rating:'E', mass: 10.00, integ: 72, pwrdraw:0.45, boottime:5, wepcap:22.00, wepchg:2.30, engcap:15.00, engchg:1.30, syscap:15.00, syschg:1.30, fdid:128064193, fdname:'Int_PowerDistributor_Size4_Class1' },
		45440 : { mtype:'cpd', cost:   28370, name:'Power Distributor', class:4, rating:'D', mass:  4.00, integ: 64, pwrdraw:0.50, boottime:5, wepcap:24.00, wepchg:2.60, engcap:17.00, engchg:1.40, syscap:17.00, syschg:1.40, fdid:128064194, fdname:'Int_PowerDistributor_Size4_Class2' },
		45430 : { mtype:'cpd', cost:   70930, name:'Power Distributor', class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw:0.56, boottime:5, wepcap:27.00, wepchg:2.90, engcap:19.00, engchg:1.60, syscap:19.00, syschg:1.60, fdid:128064195, fdname:'Int_PowerDistributor_Size4_Class3' },
		45420 : { mtype:'cpd', cost:  177330, name:'Power Distributor', class:4, rating:'B', mass: 16.00, integ: 96, pwrdraw:0.62, boottime:5, wepcap:30.00, wepchg:3.20, engcap:21.00, engchg:1.80, syscap:21.00, syschg:1.80, fdid:128064196, fdname:'Int_PowerDistributor_Size4_Class4' },
		45410 : { mtype:'cpd', cost:  443330, name:'Power Distributor', class:4, rating:'A', mass: 10.00, integ: 88, pwrdraw:0.67, boottime:5, wepcap:32.00, wepchg:3.50, engcap:23.00, engchg:1.90, syscap:23.00, syschg:1.90, fdid:128064197, fdname:'Int_PowerDistributor_Size4_Class5' },
		
		45550 : { mtype:'cpd', cost:   31780, name:'Power Distributor', class:5, rating:'E', mass: 20.00, integ: 86, pwrdraw:0.50, boottime:5, wepcap:27.00, wepchg:2.90, engcap:19.00, engchg:1.70, syscap:19.00, syschg:1.70, fdid:128064198, fdname:'Int_PowerDistributor_Size5_Class1' },
		45540 : { mtype:'cpd', cost:   79440, name:'Power Distributor', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw:0.56, boottime:5, wepcap:31.00, wepchg:3.20, engcap:22.00, engchg:1.90, syscap:22.00, syschg:1.90, fdid:128064199, fdname:'Int_PowerDistributor_Size5_Class2' },
		45530 : { mtype:'cpd', cost:  198610, name:'Power Distributor', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.62, boottime:5, wepcap:34.00, wepchg:3.60, engcap:24.00, engchg:2.10, syscap:24.00, syschg:2.10, fdid:128064200, fdname:'Int_PowerDistributor_Size5_Class3' },
		45520 : { mtype:'cpd', cost:  496530, name:'Power Distributor', class:5, rating:'B', mass: 32.00, integ:115, pwrdraw:0.68, boottime:5, wepcap:37.00, wepchg:4.00, engcap:26.00, engchg:2.30, syscap:26.00, syschg:2.30, fdid:128064201, fdname:'Int_PowerDistributor_Size5_Class4' },
		45510 : { mtype:'cpd', cost: 1241320, name:'Power Distributor', class:5, rating:'A', mass: 20.00, integ:106, pwrdraw:0.74, boottime:5, wepcap:41.00, wepchg:4.30, engcap:29.00, engchg:2.50, syscap:29.00, syschg:2.50, fdid:128064202, fdname:'Int_PowerDistributor_Size5_Class5' },
		
		45650 : { mtype:'cpd', cost:   88980, name:'Power Distributor', class:6, rating:'E', mass: 40.00, integ:102, pwrdraw:0.54, boottime:5, wepcap:34.00, wepchg:3.40, engcap:23.00, engchg:2.20, syscap:23.00, syschg:2.20, fdid:128064203, fdname:'Int_PowerDistributor_Size6_Class1' },
		45640 : { mtype:'cpd', cost:  222440, name:'Power Distributor', class:6, rating:'D', mass: 16.00, integ: 90, pwrdraw:0.61, boottime:5, wepcap:38.00, wepchg:3.90, engcap:26.00, engchg:2.40, syscap:26.00, syschg:2.40, fdid:128064204, fdname:'Int_PowerDistributor_Size6_Class2' },
		45630 : { mtype:'cpd', cost:  556110, name:'Power Distributor', class:6, rating:'C', mass: 40.00, integ:113, pwrdraw:0.68, boottime:5, wepcap:42.00, wepchg:4.30, engcap:29.00, engchg:2.70, syscap:29.00, syschg:2.70, fdid:128064205, fdname:'Int_PowerDistributor_Size6_Class3' },
		45620 : { mtype:'cpd', cost: 1390280, name:'Power Distributor', class:6, rating:'B', mass: 64.00, integ:136, pwrdraw:0.75, boottime:5, wepcap:46.00, wepchg:4.70, engcap:32.00, engchg:3.00, syscap:32.00, syschg:3.00, fdid:128064206, fdname:'Int_PowerDistributor_Size6_Class4' },
		45610 : { mtype:'cpd', cost: 3475690, name:'Power Distributor', class:6, rating:'A', mass: 40.00, integ:124, pwrdraw:0.82, boottime:5, wepcap:50.00, wepchg:5.20, engcap:35.00, engchg:3.20, syscap:35.00, syschg:3.20, fdid:128064207, fdname:'Int_PowerDistributor_Size6_Class5' },
		
		45750 : { mtype:'cpd', cost:  249140, name:'Power Distributor', class:7, rating:'E', mass: 80.00, integ:118, pwrdraw:0.59, boottime:5, wepcap:41.00, wepchg:4.10, engcap:27.00, engchg:2.60, syscap:27.00, syschg:2.60, fdid:128064208, fdname:'Int_PowerDistributor_Size7_Class1' },
		45740 : { mtype:'cpd', cost:  622840, name:'Power Distributor', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw:0.67, boottime:5, wepcap:46.00, wepchg:4.60, engcap:31.00, engchg:3.00, syscap:31.00, syschg:3.00, fdid:128064209, fdname:'Int_PowerDistributor_Size7_Class2' },
		45730 : { mtype:'cpd', cost: 1557110, name:'Power Distributor', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.74, boottime:5, wepcap:51.00, wepchg:5.10, engcap:34.00, engchg:3.30, syscap:34.00, syschg:3.30, fdid:128064210, fdname:'Int_PowerDistributor_Size7_Class3' },
		45720 : { mtype:'cpd', cost: 3892770, name:'Power Distributor', class:7, rating:'B', mass:128.00, integ:157, pwrdraw:0.81, boottime:5, wepcap:56.00, wepchg:5.60, engcap:37.00, engchg:3.60, syscap:37.00, syschg:3.60, fdid:128064211, fdname:'Int_PowerDistributor_Size7_Class4' },
		45710 : { mtype:'cpd', cost: 9731930, name:'Power Distributor', class:7, rating:'A', mass: 80.00, integ:144, pwrdraw:0.89, boottime:5, wepcap:61.00, wepchg:6.10, engcap:41.00, engchg:4.00, syscap:41.00, syschg:4.00, fdid:128064212, fdname:'Int_PowerDistributor_Size7_Class5' },
		
		45850 : { mtype:'cpd', cost:  697580, name:'Power Distributor', class:8, rating:'E', mass:160.00, integ:135, pwrdraw:0.64, boottime:5, wepcap:48.00, wepchg:4.80, engcap:32.00, engchg:3.20, syscap:32.00, syschg:3.20, fdid:128064213, fdname:'Int_PowerDistributor_Size8_Class1' },
		45840 : { mtype:'cpd', cost: 1743960, name:'Power Distributor', class:8, rating:'D', mass: 64.00, integ:120, pwrdraw:0.72, boottime:5, wepcap:54.00, wepchg:5.40, engcap:36.00, engchg:3.60, syscap:36.00, syschg:3.60, fdid:128064214, fdname:'Int_PowerDistributor_Size8_Class2' },
		45830 : { mtype:'cpd', cost: 4359900, name:'Power Distributor', class:8, rating:'C', mass:160.00, integ:150, pwrdraw:0.80, boottime:5, wepcap:60.00, wepchg:6.00, engcap:40.00, engchg:4.00, syscap:40.00, syschg:4.00, fdid:128064215, fdname:'Int_PowerDistributor_Size8_Class3' },
		45820 : { mtype:'cpd', cost:10899760, name:'Power Distributor', class:8, rating:'B', mass:256.00, integ:180, pwrdraw:0.88, boottime:5, wepcap:66.00, wepchg:6.60, engcap:44.00, engchg:4.40, syscap:44.00, syschg:4.40, fdid:128064216, fdname:'Int_PowerDistributor_Size8_Class4' },
		45810 : { mtype:'cpd', cost:27249390, name:'Power Distributor', class:8, rating:'A', mass:160.00, integ:165, pwrdraw:0.96, boottime:5, wepcap:72.00, wepchg:7.20, engcap:48.00, engchg:4.80, syscap:48.00, syschg:4.80, fdid:128064217, fdname:'Int_PowerDistributor_Size8_Class5' },
		
		
		46150 : { mtype:'cs', cost:     520, name:'Sensors', class:1, rating:'E', mass:  1.30, integ: 36, pwrdraw:0.16, boottime:5, maxrng:8000, maxangle:30.00, typemis:4000, fdid:128064218, fdname:'Int_Sensors_Size1_Class1' }, // verify price
		46140 : { mtype:'cs', cost:    1290, name:'Sensors', class:1, rating:'D', mass:  0.50, integ: 32, pwrdraw:0.18, boottime:5, maxrng:8000, maxangle:30.00, typemis:4500, fdid:128064219, fdname:'Int_Sensors_Size1_Class2' }, // verify price
		46130 : { mtype:'cs', cost:    3230, name:'Sensors', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.20, boottime:5, maxrng:8000, maxangle:30.00, typemis:5000, fdid:128064220, fdname:'Int_Sensors_Size1_Class3' }, // verify price
		46120 : { mtype:'cs', cost:    8080, name:'Sensors', class:1, rating:'B', mass:  2.00, integ: 48, pwrdraw:0.33, boottime:5, maxrng:8000, maxangle:30.00, typemis:5500, fdid:128064221, fdname:'Int_Sensors_Size1_Class4' }, // verify price
		46110 : { mtype:'cs', cost:   20200, name:'Sensors', class:1, rating:'A', mass:  1.30, integ: 44, pwrdraw:0.60, boottime:5, maxrng:8000, maxangle:30.00, typemis:6000, fdid:128064222, fdname:'Int_Sensors_Size1_Class5' }, // verify price
		
		46250 : { mtype:'cs', cost:    1450, name:'Sensors', class:2, rating:'E', mass:  2.50, integ: 46, pwrdraw:0.18, boottime:5, maxrng:8000, maxangle:30.00, typemis:4160, fdid:128064223, fdname:'Int_Sensors_Size2_Class1' }, // verify price
		46240 : { mtype:'cs', cost:    3620, name:'Sensors', class:2, rating:'D', mass:  1.00, integ: 41, pwrdraw:0.21, boottime:5, maxrng:8000, maxangle:30.00, typemis:4680, fdid:128064224, fdname:'Int_Sensors_Size2_Class2' }, // verify price
		46230 : { mtype:'cs', cost:    9050, name:'Sensors', class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw:0.23, boottime:5, maxrng:8000, maxangle:30.00, typemis:5200, fdid:128064225, fdname:'Int_Sensors_Size2_Class3' }, // verify price
		46220 : { mtype:'cs', cost:   22620, name:'Sensors', class:2, rating:'B', mass:  4.00, integ: 61, pwrdraw:0.38, boottime:5, maxrng:8000, maxangle:30.00, typemis:5720, fdid:128064226, fdname:'Int_Sensors_Size2_Class4' }, // verify price
		46210 : { mtype:'cs', cost:   56550, name:'Sensors', class:2, rating:'A', mass:  2.50, integ: 56, pwrdraw:0.69, boottime:5, maxrng:8000, maxangle:30.00, typemis:6240, fdid:128064227, fdname:'Int_Sensors_Size2_Class5' }, // verify price
		
		46350 : { mtype:'cs', cost:    4050, name:'Sensors', class:3, rating:'E', mass:  5.00, integ: 58, pwrdraw:0.22, boottime:5, maxrng:8000, maxangle:30.00, typemis:4320, fdid:128064228, fdname:'Int_Sensors_Size3_Class1' },
		46340 : { mtype:'cs', cost:   10130, name:'Sensors', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw:0.25, boottime:5, maxrng:8000, maxangle:30.00, typemis:4860, fdid:128064229, fdname:'Int_Sensors_Size3_Class2' },
		46330 : { mtype:'cs', cost:   25330, name:'Sensors', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.28, boottime:5, maxrng:8000, maxangle:30.00, typemis:5400, fdid:128064230, fdname:'Int_Sensors_Size3_Class3' },
		46320 : { mtype:'cs', cost:   63330, name:'Sensors', class:3, rating:'B', mass:  8.00, integ: 77, pwrdraw:0.46, boottime:5, maxrng:8000, maxangle:30.00, typemis:5940, fdid:128064231, fdname:'Int_Sensors_Size3_Class4' },
		46310 : { mtype:'cs', cost:  158330, name:'Sensors', class:3, rating:'A', mass:  5.00, integ: 70, pwrdraw:0.84, boottime:5, maxrng:8000, maxangle:30.00, typemis:6480, fdid:128064232, fdname:'Int_Sensors_Size3_Class5' },
		
		46450 : { mtype:'cs', cost:   11350, name:'Sensors', class:4, rating:'E', mass: 10.00, integ: 72, pwrdraw:0.27, boottime:5, maxrng:8000, maxangle:30.00, typemis:4480, fdid:128064233, fdname:'Int_Sensors_Size4_Class1' },
		46440 : { mtype:'cs', cost:   28370, name:'Sensors', class:4, rating:'D', mass:  4.00, integ: 64, pwrdraw:0.31, boottime:5, maxrng:8000, maxangle:30.00, typemis:5040, fdid:128064234, fdname:'Int_Sensors_Size4_Class2' },
		46430 : { mtype:'cs', cost:   70930, name:'Sensors', class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw:0.34, boottime:5, maxrng:8000, maxangle:30.00, typemis:5600, fdid:128064235, fdname:'Int_Sensors_Size4_Class3' },
		46420 : { mtype:'cs', cost:  177330, name:'Sensors', class:4, rating:'B', mass: 16.00, integ: 96, pwrdraw:0.56, boottime:5, maxrng:8000, maxangle:30.00, typemis:6160, fdid:128064236, fdname:'Int_Sensors_Size4_Class4' },
		46410 : { mtype:'cs', cost:  443330, name:'Sensors', class:4, rating:'A', mass: 10.00, integ: 88, pwrdraw:1.02, boottime:5, maxrng:8000, maxangle:30.00, typemis:6720, fdid:128064237, fdname:'Int_Sensors_Size4_Class5' },
		
		46550 : { mtype:'cs', cost:   31780, name:'Sensors', class:5, rating:'E', mass: 20.00, integ: 86, pwrdraw:0.33, boottime:5, maxrng:8000, maxangle:30.00, typemis:4640, fdid:128064238, fdname:'Int_Sensors_Size5_Class1' },
		46540 : { mtype:'cs', cost:   79440, name:'Sensors', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw:0.37, boottime:5, maxrng:8000, maxangle:30.00, typemis:5220, fdid:128064239, fdname:'Int_Sensors_Size5_Class2' },
		46530 : { mtype:'cs', cost:  198610, name:'Sensors', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.41, boottime:5, maxrng:8000, maxangle:30.00, typemis:5800, fdid:128064240, fdname:'Int_Sensors_Size5_Class3' },
		46520 : { mtype:'cs', cost:  496530, name:'Sensors', class:5, rating:'B', mass: 32.00, integ:115, pwrdraw:0.68, boottime:5, maxrng:8000, maxangle:30.00, typemis:6380, fdid:128064241, fdname:'Int_Sensors_Size5_Class4' },
		46510 : { mtype:'cs', cost: 1241320, name:'Sensors', class:5, rating:'A', mass: 20.00, integ:106, pwrdraw:1.23, boottime:5, maxrng:8000, maxangle:30.00, typemis:6960, fdid:128064242, fdname:'Int_Sensors_Size5_Class5' }, // verify price
		
		46650 : { mtype:'cs', cost:   88980, name:'Sensors', class:6, rating:'E', mass: 40.00, integ:102, pwrdraw:0.40, boottime:5, maxrng:8000, maxangle:30.00, typemis:4800, fdid:128064243, fdname:'Int_Sensors_Size6_Class1' },
		46640 : { mtype:'cs', cost:  222440, name:'Sensors', class:6, rating:'D', mass: 16.00, integ: 90, pwrdraw:0.45, boottime:5, maxrng:8000, maxangle:30.00, typemis:5400, fdid:128064244, fdname:'Int_Sensors_Size6_Class2' },
		46630 : { mtype:'cs', cost:  556110, name:'Sensors', class:6, rating:'C', mass: 40.00, integ:113, pwrdraw:0.50, boottime:5, maxrng:8000, maxangle:30.00, typemis:6000, fdid:128064245, fdname:'Int_Sensors_Size6_Class3' }, // verify price
		46620 : { mtype:'cs', cost: 1390280, name:'Sensors', class:6, rating:'B', mass: 64.00, integ:136, pwrdraw:0.83, boottime:5, maxrng:8000, maxangle:30.00, typemis:6600, fdid:128064246, fdname:'Int_Sensors_Size6_Class4' }, // verify price
		46610 : { mtype:'cs', cost: 3475690, name:'Sensors', class:6, rating:'A', mass: 40.00, integ:124, pwrdraw:1.50, boottime:5, maxrng:8000, maxangle:30.00, typemis:7200, fdid:128064247, fdname:'Int_Sensors_Size6_Class5' },
		
		46750 : { mtype:'cs', cost:  249140, name:'Sensors', class:7, rating:'E', mass: 80.00, integ:118, pwrdraw:0.47, boottime:5, maxrng:8000, maxangle:30.00, typemis:4960, fdid:128064248, fdname:'Int_Sensors_Size7_Class1' },
		46740 : { mtype:'cs', cost:  622840, name:'Sensors', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw:0.53, boottime:5, maxrng:8000, maxangle:30.00, typemis:5580, fdid:128064249, fdname:'Int_Sensors_Size7_Class2' },
		46730 : { mtype:'cs', cost: 1557110, name:'Sensors', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.59, boottime:5, maxrng:8000, maxangle:30.00, typemis:6200, fdid:128064250, fdname:'Int_Sensors_Size7_Class3' },
		46720 : { mtype:'cs', cost: 3892770, name:'Sensors', class:7, rating:'B', mass:128.00, integ:157, pwrdraw:0.97, boottime:5, maxrng:8000, maxangle:30.00, typemis:6820, fdid:128064251, fdname:'Int_Sensors_Size7_Class4' },
		46710 : { mtype:'cs', cost: 9731930, name:'Sensors', class:7, rating:'A', mass: 80.00, integ:144, pwrdraw:1.77, boottime:5, maxrng:8000, maxangle:30.00, typemis:7440, fdid:128064252, fdname:'Int_Sensors_Size7_Class5' },
		
		46850 : { mtype:'cs', cost:  697580, name:'Sensors', class:8, rating:'E', mass:160.00, integ:135, pwrdraw:0.55, boottime:5, maxrng:8000, maxangle:30.00, typemis:5120, fdid:128064253, fdname:'Int_Sensors_Size8_Class1' },
		46840 : { mtype:'cs', cost: 1743960, name:'Sensors', class:8, rating:'D', mass: 64.00, integ:120, pwrdraw:0.62, boottime:5, maxrng:8000, maxangle:30.00, typemis:5760, fdid:128064254, fdname:'Int_Sensors_Size8_Class2' },
		46830 : { mtype:'cs', cost: 4359900, name:'Sensors', class:8, rating:'C', mass:160.00, integ:150, pwrdraw:0.69, boottime:5, maxrng:8000, maxangle:30.00, typemis:6400, fdid:128064255, fdname:'Int_Sensors_Size8_Class3' },
		46820 : { mtype:'cs', cost:10899760, name:'Sensors', class:8, rating:'B', mass:256.00, integ:180, pwrdraw:1.14, boottime:5, maxrng:8000, maxangle:30.00, typemis:7040, fdid:128064256, fdname:'Int_Sensors_Size8_Class4' },
		46810 : { mtype:'cs', cost:27249390, name:'Sensors', class:8, rating:'A', mass:160.00, integ:165, pwrdraw:2.07, boottime:5, maxrng:8000, maxangle:30.00, typemis:7680, fdid:128064257, fdname:'Int_Sensors_Size8_Class5' },
		
		
		47130 : { mtype:'cft', cost:   1000, name:'Fuel Tank (Cap: 2)',   class:1, rating:'C', fuelcap:  2.0, fdid:128064346, fdname:'Int_FuelTank_Size1_Class3' },
		47230 : { mtype:'cft', cost:   3750, name:'Fuel Tank (Cap: 4)',   class:2, rating:'C', fuelcap:  4.0, fdid:128064347, fdname:'Int_FuelTank_Size2_Class3' },
		47330 : { mtype:'cft', cost:   7060, name:'Fuel Tank (Cap: 8)',   class:3, rating:'C', fuelcap:  8.0, fdid:128064348, fdname:'Int_FuelTank_Size3_Class3' },
		47430 : { mtype:'cft', cost:  24730, name:'Fuel Tank (Cap: 16)',  class:4, rating:'C', fuelcap: 16.0, fdid:128064349, fdname:'Int_FuelTank_Size4_Class3' },
		47530 : { mtype:'cft', cost:  97750, name:'Fuel Tank (Cap: 32)',  class:5, rating:'C', fuelcap: 32.0, fdid:128064350, fdname:'Int_FuelTank_Size5_Class3' },
		47630 : { mtype:'cft', cost: 341580, name:'Fuel Tank (Cap: 64)',  class:6, rating:'C', fuelcap: 64.0, fdid:128064351, fdname:'Int_FuelTank_Size6_Class3' },
		47730 : { mtype:'cft', cost:1780910, name:'Fuel Tank (Cap: 128)', class:7, rating:'C', fuelcap:128.0, fdid:128064352, fdname:'Int_FuelTank_Size7_Class3' },
		47830 : { mtype:'cft', cost:5428430, name:'Fuel Tank (Cap: 256)', class:8, rating:'C', fuelcap:256.0, fdid:128064353, fdname:'Int_FuelTank_Size8_Class3' },
		
		
		// OPTIONAL INTERNALS
		
		
		 1150 : { mtype:'iafmu', cost:   10000, name:'Auto Field-Maintenance Unit', class:1, rating:'E', integ: 32, pwrdraw:0.54, boottime:9, repaircap: 1000, repaircon:10.0, repairrtg:0.012, fdid:128667598, fdname:'Int_Repairer_Size1_Class1' },
		 1140 : { mtype:'iafmu', cost:   30000, name:'Auto Field-Maintenance Unit', class:1, rating:'D', integ: 24, pwrdraw:0.72, boottime:9, repaircap:  900, repaircon:10.0, repairrtg:0.016, fdid:128667606, fdname:'Int_Repairer_Size1_Class2' },
		 1130 : { mtype:'iafmu', cost:   90000, name:'Auto Field-Maintenance Unit', class:1, rating:'C', integ: 40, pwrdraw:0.90, boottime:9, repaircap: 1000, repaircon:10.0, repairrtg:0.020, fdid:128667614, fdname:'Int_Repairer_Size1_Class3' },
		 1120 : { mtype:'iafmu', cost:  270000, name:'Auto Field-Maintenance Unit', class:1, rating:'B', integ: 56, pwrdraw:1.04, boottime:9, repaircap: 1200, repaircon:10.0, repairrtg:0.023, fdid:128667622, fdname:'Int_Repairer_Size1_Class4' },
		 1110 : { mtype:'iafmu', cost:  810000, name:'Auto Field-Maintenance Unit', class:1, rating:'A', integ: 46, pwrdraw:1.26, boottime:9, repaircap: 1100, repaircon:10.0, repairrtg:0.028, fdid:128667630, fdname:'Int_Repairer_Size1_Class5' },
		
		 1250 : { mtype:'iafmu', cost:   18000, name:'Auto Field-Maintenance Unit', class:2, rating:'E', integ: 41, pwrdraw:0.68, boottime:9, repaircap: 2300, repaircon:10.0, repairrtg:0.012, fdid:128667599, fdname:'Int_Repairer_Size2_Class1' },
		 1240 : { mtype:'iafmu', cost:   54000, name:'Auto Field-Maintenance Unit', class:2, rating:'D', integ: 31, pwrdraw:0.90, boottime:9, repaircap: 2100, repaircon:10.0, repairrtg:0.016, fdid:128667607, fdname:'Int_Repairer_Size2_Class2' },
		 1230 : { mtype:'iafmu', cost:  162000, name:'Auto Field-Maintenance Unit', class:2, rating:'C', integ: 51, pwrdraw:1.13, boottime:9, repaircap: 2300, repaircon:10.0, repairrtg:0.020, fdid:128667615, fdname:'Int_Repairer_Size2_Class3' },
		 1220 : { mtype:'iafmu', cost:  486000, name:'Auto Field-Maintenance Unit', class:2, rating:'B', integ: 71, pwrdraw:1.29, boottime:9, repaircap: 2800, repaircon:10.0, repairrtg:0.023, fdid:128667623, fdname:'Int_Repairer_Size2_Class4' },
		 1210 : { mtype:'iafmu', cost: 1458000, name:'Auto Field-Maintenance Unit', class:2, rating:'A', integ: 59, pwrdraw:1.58, boottime:9, repaircap: 2500, repaircon:10.0, repairrtg:0.028, fdid:128667631, fdname:'Int_Repairer_Size2_Class5' },
		
		 1350 : { mtype:'iafmu', cost:   32400, name:'Auto Field-Maintenance Unit', class:3, rating:'E', integ: 51, pwrdraw:0.81, boottime:9, repaircap: 3600, repaircon:10.0, repairrtg:0.012, fdid:128667600, fdname:'Int_Repairer_Size3_Class1' },
		 1340 : { mtype:'iafmu', cost:   97200, name:'Auto Field-Maintenance Unit', class:3, rating:'D', integ: 38, pwrdraw:1.08, boottime:9, repaircap: 3200, repaircon:10.0, repairrtg:0.016, fdid:128667608, fdname:'Int_Repairer_Size3_Class2' },
		 1330 : { mtype:'iafmu', cost:  291600, name:'Auto Field-Maintenance Unit', class:3, rating:'C', integ: 64, pwrdraw:1.35, boottime:9, repaircap: 3600, repaircon:10.0, repairrtg:0.020, fdid:128667616, fdname:'Int_Repairer_Size3_Class3' },
		 1320 : { mtype:'iafmu', cost:  874800, name:'Auto Field-Maintenance Unit', class:3, rating:'B', integ: 90, pwrdraw:1.55, boottime:9, repaircap: 4300, repaircon:10.0, repairrtg:0.023, fdid:128667624, fdname:'Int_Repairer_Size3_Class4' },
		 1310 : { mtype:'iafmu', cost: 2624400, name:'Auto Field-Maintenance Unit', class:3, rating:'A', integ: 74, pwrdraw:1.89, boottime:9, repaircap: 4000, repaircon:10.0, repairrtg:0.028, fdid:128667632, fdname:'Int_Repairer_Size3_Class5' },
		
		 1450 : { mtype:'iafmu', cost:   58320, name:'Auto Field-Maintenance Unit', class:4, rating:'E', integ: 64, pwrdraw:0.99, boottime:9, repaircap: 4900, repaircon:10.0, repairrtg:0.012, fdid:128667601, fdname:'Int_Repairer_Size4_Class1' },
		 1440 : { mtype:'iafmu', cost:  174960, name:'Auto Field-Maintenance Unit', class:4, rating:'D', integ: 48, pwrdraw:1.32, boottime:9, repaircap: 4400, repaircon:10.0, repairrtg:0.016, fdid:128667609, fdname:'Int_Repairer_Size4_Class2' },
		 1430 : { mtype:'iafmu', cost:  524880, name:'Auto Field-Maintenance Unit', class:4, rating:'C', integ: 80, pwrdraw:1.65, boottime:9, repaircap: 4900, repaircon:10.0, repairrtg:0.020, fdid:128667617, fdname:'Int_Repairer_Size4_Class3' },
		 1420 : { mtype:'iafmu', cost: 1574640, name:'Auto Field-Maintenance Unit', class:4, rating:'B', integ:112, pwrdraw:1.90, boottime:9, repaircap: 5900, repaircon:10.0, repairrtg:0.023, fdid:128667625, fdname:'Int_Repairer_Size4_Class4' },
		 1410 : { mtype:'iafmu', cost: 4723920, name:'Auto Field-Maintenance Unit', class:4, rating:'A', integ: 92, pwrdraw:2.31, boottime:9, repaircap: 5400, repaircon:10.0, repairrtg:0.028, fdid:128667633, fdname:'Int_Repairer_Size4_Class5' },
		
		 1550 : { mtype:'iafmu', cost:  104980, name:'Auto Field-Maintenance Unit', class:5, rating:'E', integ: 77, pwrdraw:1.17, boottime:9, repaircap: 6100, repaircon:10.0, repairrtg:0.012, fdid:128667602, fdname:'Int_Repairer_Size5_Class1' },
		 1540 : { mtype:'iafmu', cost:  314930, name:'Auto Field-Maintenance Unit', class:5, rating:'D', integ: 58, pwrdraw:1.56, boottime:9, repaircap: 5500, repaircon:10.0, repairrtg:0.016, fdid:128667610, fdname:'Int_Repairer_Size5_Class2' },
		 1530 : { mtype:'iafmu', cost:  944780, name:'Auto Field-Maintenance Unit', class:5, rating:'C', integ: 96, pwrdraw:1.95, boottime:9, repaircap: 6100, repaircon:10.0, repairrtg:0.020, fdid:128667618, fdname:'Int_Repairer_Size5_Class3' },
		 1520 : { mtype:'iafmu', cost: 2834350, name:'Auto Field-Maintenance Unit', class:5, rating:'B', integ:134, pwrdraw:2.24, boottime:9, repaircap: 7300, repaircon:10.0, repairrtg:0.023, fdid:128667626, fdname:'Int_Repairer_Size5_Class4' },
		 1510 : { mtype:'iafmu', cost: 8503060, name:'Auto Field-Maintenance Unit', class:5, rating:'A', integ:110, pwrdraw:2.73, boottime:9, repaircap: 6700, repaircon:10.0, repairrtg:0.028, fdid:128667634, fdname:'Int_Repairer_Size5_Class5' },
		
		 1650 : { mtype:'iafmu', cost:  188960, name:'Auto Field-Maintenance Unit', class:6, rating:'E', integ: 90, pwrdraw:1.40, boottime:9, repaircap: 7400, repaircon:10.0, repairrtg:0.012, fdid:128667603, fdname:'Int_Repairer_Size6_Class1' },
		 1640 : { mtype:'iafmu', cost:  566870, name:'Auto Field-Maintenance Unit', class:6, rating:'D', integ: 68, pwrdraw:1.86, boottime:9, repaircap: 6700, repaircon:10.0, repairrtg:0.016, fdid:128667611, fdname:'Int_Repairer_Size6_Class2' },
		 1630 : { mtype:'iafmu', cost: 1700610, name:'Auto Field-Maintenance Unit', class:6, rating:'C', integ:113, pwrdraw:2.33, boottime:9, repaircap: 7400, repaircon:10.0, repairrtg:0.020, fdid:128667619, fdname:'Int_Repairer_Size6_Class3' },
		 1620 : { mtype:'iafmu', cost: 5101830, name:'Auto Field-Maintenance Unit', class:6, rating:'B', integ:158, pwrdraw:2.67, boottime:9, repaircap: 8900, repaircon:10.0, repairrtg:0.023, fdid:128667627, fdname:'Int_Repairer_Size6_Class4' },
		 1610 : { mtype:'iafmu', cost:15305500, name:'Auto Field-Maintenance Unit', class:6, rating:'A', integ:130, pwrdraw:3.26, boottime:9, repaircap: 8100, repaircon:10.0, repairrtg:0.028, fdid:128667635, fdname:'Int_Repairer_Size6_Class5' },
		
		 1750 : { mtype:'iafmu', cost:  340120, name:'Auto Field-Maintenance Unit', class:7, rating:'E', integ:105, pwrdraw:1.58, boottime:9, repaircap: 8700, repaircon:10.0, repairrtg:0.012, fdid:128667604, fdname:'Int_Repairer_Size7_Class1' },
		 1740 : { mtype:'iafmu', cost: 1020370, name:'Auto Field-Maintenance Unit', class:7, rating:'D', integ: 79, pwrdraw:2.10, boottime:9, repaircap: 7800, repaircon:10.0, repairrtg:0.016, fdid:128667612, fdname:'Int_Repairer_Size7_Class2' },
		 1730 : { mtype:'iafmu', cost: 3061100, name:'Auto Field-Maintenance Unit', class:7, rating:'C', integ:131, pwrdraw:2.63, boottime:9, repaircap: 8700, repaircon:10.0, repairrtg:0.020, fdid:128667620, fdname:'Int_Repairer_Size7_Class3' },
		 1720 : { mtype:'iafmu', cost: 9183300, name:'Auto Field-Maintenance Unit', class:7, rating:'B', integ:183, pwrdraw:3.02, boottime:9, repaircap:10400, repaircon:10.0, repairrtg:0.023, fdid:128667628, fdname:'Int_Repairer_Size7_Class4' },
		 1710 : { mtype:'iafmu', cost:27549900, name:'Auto Field-Maintenance Unit', class:7, rating:'A', integ:151, pwrdraw:3.68, boottime:9, repaircap: 9600, repaircon:10.0, repairrtg:0.028, fdid:128667636, fdname:'Int_Repairer_Size7_Class5' },
		
		 1850 : { mtype:'iafmu', cost:  612220, name:'Auto Field-Maintenance Unit', class:8, rating:'E', integ:120, pwrdraw:1.80, boottime:9, repaircap:10000, repaircon:10.0, repairrtg:0.012, fdid:128667605, fdname:'Int_Repairer_Size8_Class1' },
		 1840 : { mtype:'iafmu', cost: 1836660, name:'Auto Field-Maintenance Unit', class:8, rating:'D', integ: 90, pwrdraw:2.40, boottime:9, repaircap: 9000, repaircon:10.0, repairrtg:0.016, fdid:128667613, fdname:'Int_Repairer_Size8_Class2' },
		 1830 : { mtype:'iafmu', cost: 5509980, name:'Auto Field-Maintenance Unit', class:8, rating:'C', integ:150, pwrdraw:3.00, boottime:9, repaircap:10000, repaircon:10.0, repairrtg:0.020, fdid:128667621, fdname:'Int_Repairer_Size8_Class3' },
		 1820 : { mtype:'iafmu', cost:16529940, name:'Auto Field-Maintenance Unit', class:8, rating:'B', integ:210, pwrdraw:3.45, boottime:9, repaircap:12000, repaircon:10.0, repairrtg:0.023, fdid:128667629, fdname:'Int_Repairer_Size8_Class4' },
		 1810 : { mtype:'iafmu', cost:49589820, name:'Auto Field-Maintenance Unit', class:8, rating:'A', integ:173, pwrdraw:4.20, boottime:9, repaircap:11000, repaircon:10.0, repairrtg:0.028, fdid:128667637, fdname:'Int_Repairer_Size8_Class5' },
		
		
		  150 : { mtype:'icr', cost:   1000, name:'Cargo Rack (Cap: 2)',   class:1, rating:'E', cargocap:  2, fdid:128064338, fdname:'Int_CargoRack_Size1_Class1' },
		  250 : { mtype:'icr', cost:   3250, name:'Cargo Rack (Cap: 4)',   class:2, rating:'E', cargocap:  4, fdid:128064339, fdname:'Int_CargoRack_Size2_Class1' },
		  350 : { mtype:'icr', cost:  10560, name:'Cargo Rack (Cap: 8)',   class:3, rating:'E', cargocap:  8, fdid:128064340, fdname:'Int_CargoRack_Size3_Class1' },
		  450 : { mtype:'icr', cost:  34330, name:'Cargo Rack (Cap: 16)',  class:4, rating:'E', cargocap: 16, fdid:128064341, fdname:'Int_CargoRack_Size4_Class1' },
		  550 : { mtype:'icr', cost: 111570, name:'Cargo Rack (Cap: 32)',  class:5, rating:'E', cargocap: 32, fdid:128064342, fdname:'Int_CargoRack_Size5_Class1' },
		  650 : { mtype:'icr', cost: 362590, name:'Cargo Rack (Cap: 64)',  class:6, rating:'E', cargocap: 64, fdid:128064343, fdname:'Int_CargoRack_Size6_Class1' },
		  750 : { mtype:'icr', cost:1178420, name:'Cargo Rack (Cap: 128)', class:7, rating:'E', cargocap:128, fdid:128064344, fdname:'Int_CargoRack_Size7_Class1' },
		  850 : { mtype:'icr', cost:3829870, name:'Cargo Rack (Cap: 256)', class:8, rating:'E', cargocap:256, fdid:128064345, fdname:'Int_CargoRack_Size8_Class1' },
		  151 : { mtype:'icr', cost:   6250, name:'Corrosion Resistant Cargo Rack (Cap: 1)',  class:1, rating:'E', cargocap: 1, fdid:128681641, fdname:'Int_CorrosionProofCargoRack_Size1_Class1' },
		  161 : { mtype:'icr', cost:  12560, name:'Corrosion Resistant Cargo Rack (Cap: 2)',  class:1, rating:'F', cargocap: 2, fdid:128681992, fdname:'Int_CorrosionProofCargoRack_Size1_Class2' },
	//	  251 : { mtype:'icr', cost:    NaN, name:'Corrosion Resistant Cargo Rack (Cap: 4)',  class:2, rating:'E', cargocap: 4, fdid:     null, fdname:'Int_CorrosionProofCargoRack_Size2_Class1' }, // TODO: verify; cost,fdid
		  451 : { mtype:'icr', cost:  94330, name:'Corrosion Resistant Cargo Rack (Cap: 16)', class:4, rating:'E', cargocap:16, fdid:128833944, fdname:'Int_CorrosionProofCargoRack_Size4_Class1' }, // TODO: verify; cost
		
		
		22150 : { mtype:'iclc', cost:    600, name:'Collector Limpet Controller', class:1, rating:'E', mass:  0.50, integ: 24, pwrdraw:0.14, boottime:6, maxlimpet: 1, targetrng: 800, limpettime:300, maxspd:200, multispd:60, fdid:128671229, fdname:'Int_DroneControl_Collection_Size1_Class1' },
		22140 : { mtype:'iclc', cost:   1200, name:'Collector Limpet Controller', class:1, rating:'D', mass:  0.50, integ: 32, pwrdraw:0.18, boottime:6, maxlimpet: 1, targetrng: 600, limpettime:600, maxspd:200, multispd:60, fdid:128671230, fdname:'Int_DroneControl_Collection_Size1_Class2' },
		22130 : { mtype:'iclc', cost:   2400, name:'Collector Limpet Controller', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.23, boottime:6, maxlimpet: 1, targetrng:1000, limpettime:510, maxspd:200, multispd:60, fdid:128671231, fdname:'Int_DroneControl_Collection_Size1_Class3' },
		22120 : { mtype:'iclc', cost:   4800, name:'Collector Limpet Controller', class:1, rating:'B', mass:  2.00, integ: 48, pwrdraw:0.28, boottime:6, maxlimpet: 1, targetrng:1400, limpettime:420, maxspd:200, multispd:60, fdid:128671232, fdname:'Int_DroneControl_Collection_Size1_Class4' },
		22110 : { mtype:'iclc', cost:   9600, name:'Collector Limpet Controller', class:1, rating:'A', mass:  2.00, integ: 56, pwrdraw:0.32, boottime:6, maxlimpet: 1, targetrng:1200, limpettime:720, maxspd:200, multispd:60, fdid:128671233, fdname:'Int_DroneControl_Collection_Size1_Class5' },
		
		22350 : { mtype:'iclc', cost:   5400, name:'Collector Limpet Controller', class:3, rating:'E', mass:  2.00, integ: 38, pwrdraw:0.20, boottime:6, maxlimpet: 2, targetrng: 880, limpettime:300, maxspd:200, multispd:60, fdid:128671234, fdname:'Int_DroneControl_Collection_Size3_Class1' },
		22340 : { mtype:'iclc', cost:  10800, name:'Collector Limpet Controller', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw:0.27, boottime:6, maxlimpet: 2, targetrng: 660, limpettime:600, maxspd:200, multispd:60, fdid:128671235, fdname:'Int_DroneControl_Collection_Size3_Class2' },
		22330 : { mtype:'iclc', cost:  21600, name:'Collector Limpet Controller', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.34, boottime:6, maxlimpet: 2, targetrng:1100, limpettime:510, maxspd:200, multispd:60, fdid:128671236, fdname:'Int_DroneControl_Collection_Size3_Class3' },
		22320 : { mtype:'iclc', cost:  43200, name:'Collector Limpet Controller', class:3, rating:'B', mass:  8.00, integ: 77, pwrdraw:0.41, boottime:6, maxlimpet: 2, targetrng:1540, limpettime:420, maxspd:200, multispd:60, fdid:128671237, fdname:'Int_DroneControl_Collection_Size3_Class4' },
		22310 : { mtype:'iclc', cost:  86400, name:'Collector Limpet Controller', class:3, rating:'A', mass:  8.00, integ: 90, pwrdraw:0.48, boottime:6, maxlimpet: 2, targetrng:1320, limpettime:720, maxspd:200, multispd:60, fdid:128671238, fdname:'Int_DroneControl_Collection_Size3_Class5' },
		
		22550 : { mtype:'iclc', cost:  48600, name:'Collector Limpet Controller', class:5, rating:'E', mass:  8.00, integ: 58, pwrdraw:0.30, boottime:6, maxlimpet: 3, targetrng:1040, limpettime:300, maxspd:200, multispd:60, fdid:128671239, fdname:'Int_DroneControl_Collection_Size5_Class1' },
		22540 : { mtype:'iclc', cost:  97200, name:'Collector Limpet Controller', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw:0.40, boottime:6, maxlimpet: 3, targetrng: 780, limpettime:600, maxspd:200, multispd:60, fdid:128671240, fdname:'Int_DroneControl_Collection_Size5_Class2' },
		22530 : { mtype:'iclc', cost: 194400, name:'Collector Limpet Controller', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.50, boottime:6, maxlimpet: 3, targetrng:1300, limpettime:510, maxspd:200, multispd:60, fdid:128671241, fdname:'Int_DroneControl_Collection_Size5_Class3' },
		22520 : { mtype:'iclc', cost: 388800, name:'Collector Limpet Controller', class:5, rating:'B', mass: 32.00, integ:115, pwrdraw:0.60, boottime:6, maxlimpet: 3, targetrng:1820, limpettime:420, maxspd:200, multispd:60, fdid:128671242, fdname:'Int_DroneControl_Collection_Size5_Class4' },
		22510 : { mtype:'iclc', cost: 777600, name:'Collector Limpet Controller', class:5, rating:'A', mass: 32.00, integ:134, pwrdraw:0.70, boottime:6, maxlimpet: 3, targetrng:1560, limpettime:720, maxspd:200, multispd:60, fdid:128671243, fdname:'Int_DroneControl_Collection_Size5_Class5' },
		
		22750 : { mtype:'iclc', cost: 437400, name:'Collector Limpet Controller', class:7, rating:'E', mass: 32.00, integ: 79, pwrdraw:0.41, boottime:6, maxlimpet: 4, targetrng:1360, limpettime:300, maxspd:200, multispd:60, fdid:128671244, fdname:'Int_DroneControl_Collection_Size7_Class1' },
		22740 : { mtype:'iclc', cost: 874800, name:'Collector Limpet Controller', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw:0.55, boottime:6, maxlimpet: 4, targetrng:1020, limpettime:600, maxspd:200, multispd:60, fdid:128671245, fdname:'Int_DroneControl_Collection_Size7_Class2' },
		22730 : { mtype:'iclc', cost:1749600, name:'Collector Limpet Controller', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.69, boottime:6, maxlimpet: 4, targetrng:1700, limpettime:510, maxspd:200, multispd:60, fdid:128671246, fdname:'Int_DroneControl_Collection_Size7_Class3' },
		22720 : { mtype:'iclc', cost:3499200, name:'Collector Limpet Controller', class:7, rating:'B', mass:128.00, integ:157, pwrdraw:0.83, boottime:6, maxlimpet: 4, targetrng:2380, limpettime:420, maxspd:200, multispd:60, fdid:128671247, fdname:'Int_DroneControl_Collection_Size7_Class4' },
		22710 : { mtype:'iclc', cost:6998400, name:'Collector Limpet Controller', class:7, rating:'A', mass:128.00, integ:183, pwrdraw:0.97, boottime:6, maxlimpet: 4, targetrng:2040, limpettime:720, maxspd:200, multispd:60, fdid:128671248, fdname:'Int_DroneControl_Collection_Size7_Class5' },
		
		
		29150 : { mtype:'idlc', cost:   3600, name:'Decontamination Limpet Controller', class:1, rating:'E', mass:  1.30, integ: 24, pwrdraw:0.18, boottime:10, maxlimpet: 1, targetrng: 600, limpettime:300, maxspd:200, repaircap: 30, fdid:128793941, fdname:'Int_DroneControl_Decontamination_Size1_Class1' },
		29350 : { mtype:'idlc', cost:  16200, name:'Decontamination Limpet Controller', class:3, rating:'E', mass:  2.00, integ: 51, pwrdraw:0.20, boottime:10, maxlimpet: 2, targetrng: 880, limpettime:300, maxspd:200, repaircap: 70, fdid:128793942, fdname:'Int_DroneControl_Decontamination_Size3_Class1' },
		29550 : { mtype:'idlc', cost: 145800, name:'Decontamination Limpet Controller', class:5, rating:'E', mass: 20.00, integ: 96, pwrdraw:0.50, boottime:10, maxlimpet: 3, targetrng:1300, limpettime:300, maxspd:200, repaircap:120, fdid:128793943, fdname:'Int_DroneControl_Decontamination_Size5_Class1' },
		29750 : { mtype:'idlc', cost:1312200, name:'Decontamination Limpet Controller', class:7, rating:'E', mass:128.00, integ:157, pwrdraw:0.97, boottime:10, maxlimpet: 4, targetrng:2040, limpettime:300, maxspd:200, repaircap:180, fdid:128793944, fdname:'Int_DroneControl_Decontamination_Size7_Class1' },
		
		
		 3150 : { mtype:'idc', cost:4500, name:'Standard Docking Computer', class:1, rating:'E', integ:10, pwrdraw:0.39, boottime:3, fdid:128049549, fdname:'Int_DockingComputer_Standard' },
		
		
		25150 : { mtype:'ifsdi', cost:   12000, name:'Frame Shift Drive Interdictor', class:1, rating:'E', mass: 1.30, integ: 32, pwrdraw:0.14, boottime:15, timerng: 3, facinglim:50, fdid:128666704, fdname:'Int_FSDInterdictor_Size1_Class1' },
		25140 : { mtype:'ifsdi', cost:   36000, name:'Frame Shift Drive Interdictor', class:1, rating:'D', mass: 0.50, integ: 24, pwrdraw:0.18, boottime:15, timerng: 4, facinglim:50, fdid:128666708, fdname:'Int_FSDInterdictor_Size1_Class2' },
		25130 : { mtype:'ifsdi', cost:  108000, name:'Frame Shift Drive Interdictor', class:1, rating:'C', mass: 1.30, integ: 40, pwrdraw:0.23, boottime:15, timerng: 5, facinglim:50, fdid:128666712, fdname:'Int_FSDInterdictor_Size1_Class3' },
		25120 : { mtype:'ifsdi', cost:  324000, name:'Frame Shift Drive Interdictor', class:1, rating:'B', mass: 2.00, integ: 56, pwrdraw:0.28, boottime:15, timerng: 6, facinglim:50, fdid:128666716, fdname:'Int_FSDInterdictor_Size1_Class4' },
		25110 : { mtype:'ifsdi', cost:  972000, name:'Frame Shift Drive Interdictor', class:1, rating:'A', mass: 1.30, integ: 48, pwrdraw:0.32, boottime:15, timerng: 7, facinglim:50, fdid:128666720, fdname:'Int_FSDInterdictor_Size1_Class5' },
		
		25250 : { mtype:'ifsdi', cost:   33600, name:'Frame Shift Drive Interdictor', class:2, rating:'E', mass: 2.50, integ: 41, pwrdraw:0.17, boottime:15, timerng: 6, facinglim:50, fdid:128666705, fdname:'Int_FSDInterdictor_Size2_Class1' },
		25240 : { mtype:'ifsdi', cost:  100800, name:'Frame Shift Drive Interdictor', class:2, rating:'D', mass: 1.00, integ: 31, pwrdraw:0.22, boottime:15, timerng: 7, facinglim:50, fdid:128666709, fdname:'Int_FSDInterdictor_Size2_Class2' },
		25230 : { mtype:'ifsdi', cost:  302400, name:'Frame Shift Drive Interdictor', class:2, rating:'C', mass: 2.50, integ: 51, pwrdraw:0.28, boottime:15, timerng: 8, facinglim:50, fdid:128666713, fdname:'Int_FSDInterdictor_Size2_Class3' },
		25220 : { mtype:'ifsdi', cost:  907200, name:'Frame Shift Drive Interdictor', class:2, rating:'B', mass: 4.00, integ: 71, pwrdraw:0.34, boottime:15, timerng: 9, facinglim:50, fdid:128666717, fdname:'Int_FSDInterdictor_Size2_Class4' },
		25210 : { mtype:'ifsdi', cost: 2721600, name:'Frame Shift Drive Interdictor', class:2, rating:'A', mass: 2.50, integ: 61, pwrdraw:0.39, boottime:15, timerng:10, facinglim:50, fdid:128666721, fdname:'Int_FSDInterdictor_Size2_Class5' },
		
		25350 : { mtype:'ifsdi', cost:   94080, name:'Frame Shift Drive Interdictor', class:3, rating:'E', mass: 5.00, integ: 51, pwrdraw:0.20, boottime:15, timerng: 9, facinglim:50, fdid:128666706, fdname:'Int_FSDInterdictor_Size3_Class1' },
		25340 : { mtype:'ifsdi', cost:  282240, name:'Frame Shift Drive Interdictor', class:3, rating:'D', mass: 2.00, integ: 38, pwrdraw:0.27, boottime:15, timerng:10, facinglim:50, fdid:128666710, fdname:'Int_FSDInterdictor_Size3_Class2' },
		25330 : { mtype:'ifsdi', cost:  846720, name:'Frame Shift Drive Interdictor', class:3, rating:'C', mass: 5.00, integ: 64, pwrdraw:0.34, boottime:15, timerng:11, facinglim:50, fdid:128666714, fdname:'Int_FSDInterdictor_Size3_Class3' },
		25320 : { mtype:'ifsdi', cost: 2540160, name:'Frame Shift Drive Interdictor', class:3, rating:'B', mass: 8.00, integ: 90, pwrdraw:0.41, boottime:15, timerng:12, facinglim:50, fdid:128666718, fdname:'Int_FSDInterdictor_Size3_Class4' },
		25310 : { mtype:'ifsdi', cost: 7620480, name:'Frame Shift Drive Interdictor', class:3, rating:'A', mass: 5.00, integ: 77, pwrdraw:0.48, boottime:15, timerng:13, facinglim:50, fdid:128666722, fdname:'Int_FSDInterdictor_Size3_Class5' },
		
		25450 : { mtype:'ifsdi', cost:  263420, name:'Frame Shift Drive Interdictor', class:4, rating:'E', mass:10.00, integ: 64, pwrdraw:0.25, boottime:15, timerng:12, facinglim:50, fdid:128666707, fdname:'Int_FSDInterdictor_Size4_Class1' },
		25440 : { mtype:'ifsdi', cost:  790270, name:'Frame Shift Drive Interdictor', class:4, rating:'D', mass: 4.00, integ: 48, pwrdraw:0.33, boottime:15, timerng:13, facinglim:50, fdid:128666711, fdname:'Int_FSDInterdictor_Size4_Class2' },
		25430 : { mtype:'ifsdi', cost: 2370820, name:'Frame Shift Drive Interdictor', class:4, rating:'C', mass:10.00, integ: 80, pwrdraw:0.41, boottime:15, timerng:14, facinglim:50, fdid:128666715, fdname:'Int_FSDInterdictor_Size4_Class3' },
		25420 : { mtype:'ifsdi', cost: 7112450, name:'Frame Shift Drive Interdictor', class:4, rating:'B', mass:16.00, integ:112, pwrdraw:0.49, boottime:15, timerng:15, facinglim:50, fdid:128666719, fdname:'Int_FSDInterdictor_Size4_Class4' },
		25410 : { mtype:'ifsdi', cost:21337340, name:'Frame Shift Drive Interdictor', class:4, rating:'A', mass:10.00, integ: 96, pwrdraw:0.57, boottime:15, timerng:16, facinglim:50, fdid:128666723, fdname:'Int_FSDInterdictor_Size4_Class5' },
		
		
		 7540 : { mtype:'ifh', cost: 575660, name:'Fighter Hangar', class:5, rating:'D', mass:20.00, integ: 60, pwrdraw:0.25, boottime:5, vslots:1, vcount: 6, reserved:{35:1,27:1,34:1,6:1,61:1,62:1,52:1,36:1}, fdid:128727930, fdname:'Int_FighterBay_Size5_Class1' },
		 7640 : { mtype:'ifh', cost:1869350, name:'Fighter Hangar', class:6, rating:'D', mass:40.00, integ: 80, pwrdraw:0.35, boottime:5, vslots:2, vcount: 8, reserved:{35:1,27:1,34:1,6:1,61:1,62:1,52:1,36:1}, fdid:128727931, fdname:'Int_FighterBay_Size6_Class1' },
		 7740 : { mtype:'ifh', cost:2369330, name:'Fighter Hangar', class:7, rating:'D', mass:60.00, integ:120, pwrdraw:0.35, boottime:5, vslots:2, vcount:15, reserved:{35:1,27:1,34:1,6:1,61:1,62:1,52:1,36:1}, fdid:128727932, fdname:'Int_FighterBay_Size7_Class1' },
		
		
		20150 : { mtype:'ifs', cost:      310, name:'Fuel Scoop', class:1, rating:'E', integ: 32, pwrdraw:0.14, boottime:4, scooprate:0.018, fdid:128666644, fdname:'Int_FuelScoop_Size1_Class1' },
		20140 : { mtype:'ifs', cost:     1290, name:'Fuel Scoop', class:1, rating:'D', integ: 24, pwrdraw:0.18, boottime:4, scooprate:0.024, fdid:128666652, fdname:'Int_FuelScoop_Size1_Class2' },
		20130 : { mtype:'ifs', cost:     5140, name:'Fuel Scoop', class:1, rating:'C', integ: 40, pwrdraw:0.23, boottime:4, scooprate:0.030, fdid:128666660, fdname:'Int_FuelScoop_Size1_Class3' },
		20120 : { mtype:'ifs', cost:    20570, name:'Fuel Scoop', class:1, rating:'B', integ: 56, pwrdraw:0.28, boottime:4, scooprate:0.036, fdid:128666668, fdname:'Int_FuelScoop_Size1_Class4' },
		20110 : { mtype:'ifs', cost:    82270, name:'Fuel Scoop', class:1, rating:'A', integ: 48, pwrdraw:0.32, boottime:4, scooprate:0.042, fdid:128666676, fdname:'Int_FuelScoop_Size1_Class5' },
		
		20250 : { mtype:'ifs', cost:     1070, name:'Fuel Scoop', class:2, rating:'E', integ: 41, pwrdraw:0.17, boottime:4, scooprate:0.032, fdid:128666645, fdname:'Int_FuelScoop_Size2_Class1' },
		20240 : { mtype:'ifs', cost:     4450, name:'Fuel Scoop', class:2, rating:'D', integ: 31, pwrdraw:0.22, boottime:4, scooprate:0.043, fdid:128666653, fdname:'Int_FuelScoop_Size2_Class2' },
		20230 : { mtype:'ifs', cost:    17800, name:'Fuel Scoop', class:2, rating:'C', integ: 51, pwrdraw:0.28, boottime:4, scooprate:0.054, fdid:128666661, fdname:'Int_FuelScoop_Size2_Class3' },
		20220 : { mtype:'ifs', cost:    71210, name:'Fuel Scoop', class:2, rating:'B', integ: 70, pwrdraw:0.34, boottime:4, scooprate:0.065, fdid:128666669, fdname:'Int_FuelScoop_Size2_Class4' },
		20210 : { mtype:'ifs', cost:   284840, name:'Fuel Scoop', class:2, rating:'A', integ: 61, pwrdraw:0.39, boottime:4, scooprate:0.075, fdid:128666677, fdname:'Int_FuelScoop_Size2_Class5' },
		
		20350 : { mtype:'ifs', cost:     3390, name:'Fuel Scoop', class:3, rating:'E', integ: 51, pwrdraw:0.20, boottime:4, scooprate:0.075, fdid:128666646, fdname:'Int_FuelScoop_Size3_Class1' },
		20340 : { mtype:'ifs', cost:    14110, name:'Fuel Scoop', class:3, rating:'D', integ: 38, pwrdraw:0.27, boottime:4, scooprate:0.100, fdid:128666654, fdname:'Int_FuelScoop_Size3_Class2' },
		20330 : { mtype:'ifs', cost:    56440, name:'Fuel Scoop', class:3, rating:'C', integ: 64, pwrdraw:0.34, boottime:4, scooprate:0.126, fdid:128666662, fdname:'Int_FuelScoop_Size3_Class3' },
		20320 : { mtype:'ifs', cost:   225740, name:'Fuel Scoop', class:3, rating:'B', integ: 90, pwrdraw:0.41, boottime:4, scooprate:0.151, fdid:128666670, fdname:'Int_FuelScoop_Size3_Class4' },
		20310 : { mtype:'ifs', cost:   902950, name:'Fuel Scoop', class:3, rating:'A', integ: 77, pwrdraw:0.48, boottime:4, scooprate:0.176, fdid:128666678, fdname:'Int_FuelScoop_Size3_Class5' },
		
		20450 : { mtype:'ifs', cost:    10730, name:'Fuel Scoop', class:4, rating:'E', integ: 64, pwrdraw:0.25, boottime:4, scooprate:0.147, fdid:128666647, fdname:'Int_FuelScoop_Size4_Class1' },
		20440 : { mtype:'ifs', cost:    44720, name:'Fuel Scoop', class:4, rating:'D', integ: 48, pwrdraw:0.33, boottime:4, scooprate:0.196, fdid:128666655, fdname:'Int_FuelScoop_Size4_Class2' },
		20430 : { mtype:'ifs', cost:   178900, name:'Fuel Scoop', class:4, rating:'C', integ: 80, pwrdraw:0.41, boottime:4, scooprate:0.245, fdid:128666663, fdname:'Int_FuelScoop_Size4_Class3' },
		20420 : { mtype:'ifs', cost:   715590, name:'Fuel Scoop', class:4, rating:'B', integ:112, pwrdraw:0.49, boottime:4, scooprate:0.294, fdid:128666671, fdname:'Int_FuelScoop_Size4_Class4' },
		20410 : { mtype:'ifs', cost:  2862360, name:'Fuel Scoop', class:4, rating:'A', integ: 96, pwrdraw:0.57, boottime:4, scooprate:0.342, fdid:128666679, fdname:'Int_FuelScoop_Size4_Class5' },
		
		20550 : { mtype:'ifs', cost:    34030, name:'Fuel Scoop', class:5, rating:'E', integ: 77, pwrdraw:0.30, boottime:4, scooprate:0.247, fdid:128666648, fdname:'Int_FuelScoop_Size5_Class1' },
		20540 : { mtype:'ifs', cost:   141780, name:'Fuel Scoop', class:5, rating:'D', integ: 58, pwrdraw:0.40, boottime:4, scooprate:0.330, fdid:128666656, fdname:'Int_FuelScoop_Size5_Class2' },
		20530 : { mtype:'ifs', cost:   567110, name:'Fuel Scoop', class:5, rating:'C', integ: 96, pwrdraw:0.50, boottime:4, scooprate:0.412, fdid:128666664, fdname:'Int_FuelScoop_Size5_Class3' },
		20520 : { mtype:'ifs', cost:  2268420, name:'Fuel Scoop', class:5, rating:'B', integ:134, pwrdraw:0.60, boottime:4, scooprate:0.494, fdid:128666672, fdname:'Int_FuelScoop_Size5_Class4' },
		20510 : { mtype:'ifs', cost:  9073690, name:'Fuel Scoop', class:5, rating:'A', integ:115, pwrdraw:0.70, boottime:4, scooprate:0.577, fdid:128666680, fdname:'Int_FuelScoop_Size5_Class5' },
		
		20650 : { mtype:'ifs', cost:   107860, name:'Fuel Scoop', class:6, rating:'E', integ: 90, pwrdraw:0.35, boottime:4, scooprate:0.376, fdid:128666649, fdname:'Int_FuelScoop_Size6_Class1' },
		20640 : { mtype:'ifs', cost:   449430, name:'Fuel Scoop', class:6, rating:'D', integ: 68, pwrdraw:0.47, boottime:4, scooprate:0.502, fdid:128666657, fdname:'Int_FuelScoop_Size6_Class2' },
		20630 : { mtype:'ifs', cost:  1797730, name:'Fuel Scoop', class:6, rating:'C', integ:113, pwrdraw:0.59, boottime:4, scooprate:0.627, fdid:128666665, fdname:'Int_FuelScoop_Size6_Class3' },
		20620 : { mtype:'ifs', cost:  7190900, name:'Fuel Scoop', class:6, rating:'B', integ:158, pwrdraw:0.71, boottime:4, scooprate:0.752, fdid:128666673, fdname:'Int_FuelScoop_Size6_Class4' },
		20610 : { mtype:'ifs', cost: 28763610, name:'Fuel Scoop', class:6, rating:'A', integ:136, pwrdraw:0.83, boottime:4, scooprate:0.878, fdid:128666681, fdname:'Int_FuelScoop_Size6_Class5' },
		
		20750 : { mtype:'ifs', cost:   341930, name:'Fuel Scoop', class:7, rating:'E', integ:105, pwrdraw:0.41, boottime:4, scooprate:0.534, fdid:128666650, fdname:'Int_FuelScoop_Size7_Class1' },
		20740 : { mtype:'ifs', cost:  1424700, name:'Fuel Scoop', class:7, rating:'D', integ: 79, pwrdraw:0.55, boottime:4, scooprate:0.712, fdid:128666658, fdname:'Int_FuelScoop_Size7_Class2' },
		20730 : { mtype:'ifs', cost:  5698790, name:'Fuel Scoop', class:7, rating:'C', integ:131, pwrdraw:0.69, boottime:4, scooprate:0.890, fdid:128666666, fdname:'Int_FuelScoop_Size7_Class3' },
		20720 : { mtype:'ifs', cost: 22795160, name:'Fuel Scoop', class:7, rating:'B', integ:183, pwrdraw:0.83, boottime:4, scooprate:1.068, fdid:128666674, fdname:'Int_FuelScoop_Size7_Class4' },
		20710 : { mtype:'ifs', cost: 91180640, name:'Fuel Scoop', class:7, rating:'A', integ:157, pwrdraw:0.97, boottime:4, scooprate:1.245, fdid:128666682, fdname:'Int_FuelScoop_Size7_Class5' },
		
		20850 : { mtype:'ifs', cost:  1083910, name:'Fuel Scoop', class:8, rating:'E', integ:120, pwrdraw:0.48, boottime:4, scooprate:0.720, fdid:128666651, fdname:'Int_FuelScoop_Size8_Class1' },
		20840 : { mtype:'ifs', cost:  4516290, name:'Fuel Scoop', class:8, rating:'D', integ: 90, pwrdraw:0.64, boottime:4, scooprate:0.960, fdid:128666659, fdname:'Int_FuelScoop_Size8_Class2' },
		20830 : { mtype:'ifs', cost: 18065170, name:'Fuel Scoop', class:8, rating:'C', integ:150, pwrdraw:0.80, boottime:4, scooprate:1.200, fdid:128666667, fdname:'Int_FuelScoop_Size8_Class3' },
		20820 : { mtype:'ifs', cost: 72260660, name:'Fuel Scoop', class:8, rating:'B', integ:210, pwrdraw:0.96, boottime:4, scooprate:1.440, fdid:128666675, fdname:'Int_FuelScoop_Size8_Class4' },
		20810 : { mtype:'ifs', cost:289042640, name:'Fuel Scoop', class:8, rating:'A', integ:180, pwrdraw:1.12, boottime:4, scooprate:1.680, fdid:128666683, fdname:'Int_FuelScoop_Size8_Class5' },
		
		
		23150 : { mtype:'iftlc', cost:    600, name:'Fuel Transfer Limpet Controller', class:1, rating:'E', mass:  1.30, integ: 24, pwrdraw:0.18, boottime:10, maxlimpet: 1, targetrng: 600, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671249, fdname:'Int_DroneControl_FuelTransfer_Size1_Class1' },
		23140 : { mtype:'iftlc', cost:   1200, name:'Fuel Transfer Limpet Controller', class:1, rating:'D', mass:  0.50, integ: 32, pwrdraw:0.14, boottime:10, maxlimpet: 1, targetrng: 800, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671250, fdname:'Int_DroneControl_FuelTransfer_Size1_Class2' },
		23130 : { mtype:'iftlc', cost:   2400, name:'Fuel Transfer Limpet Controller', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.23, boottime:10, maxlimpet: 1, targetrng:1000, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671251, fdname:'Int_DroneControl_FuelTransfer_Size1_Class3' },
		23120 : { mtype:'iftlc', cost:   4800, name:'Fuel Transfer Limpet Controller', class:1, rating:'B', mass:  2.00, integ: 48, pwrdraw:0.32, boottime:10, maxlimpet: 1, targetrng:1200, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671252, fdname:'Int_DroneControl_FuelTransfer_Size1_Class4' },
		23110 : { mtype:'iftlc', cost:   9600, name:'Fuel Transfer Limpet Controller', class:1, rating:'A', mass:  1.30, integ: 56, pwrdraw:0.28, boottime:10, maxlimpet: 1, targetrng:1400, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671253, fdname:'Int_DroneControl_FuelTransfer_Size1_Class5' },
		
		23350 : { mtype:'iftlc', cost:   5400, name:'Fuel Transfer Limpet Controller', class:3, rating:'E', mass:  5.00, integ: 38, pwrdraw:0.27, boottime:10, maxlimpet: 2, targetrng: 660, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671254, fdname:'Int_DroneControl_FuelTransfer_Size3_Class1' },
		23340 : { mtype:'iftlc', cost:  10800, name:'Fuel Transfer Limpet Controller', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw:0.20, boottime:10, maxlimpet: 2, targetrng: 880, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671255, fdname:'Int_DroneControl_FuelTransfer_Size3_Class2' },
		23330 : { mtype:'iftlc', cost:  21600, name:'Fuel Transfer Limpet Controller', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.34, boottime:10, maxlimpet: 2, targetrng:1100, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671256, fdname:'Int_DroneControl_FuelTransfer_Size3_Class3' },
		23320 : { mtype:'iftlc', cost:  43200, name:'Fuel Transfer Limpet Controller', class:3, rating:'B', mass:  8.00, integ: 77, pwrdraw:0.48, boottime:10, maxlimpet: 2, targetrng:1320, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671257, fdname:'Int_DroneControl_FuelTransfer_Size3_Class4' },
		23310 : { mtype:'iftlc', cost:  86400, name:'Fuel Transfer Limpet Controller', class:3, rating:'A', mass:  5.00, integ: 90, pwrdraw:0.41, boottime:10, maxlimpet: 2, targetrng:1540, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671258, fdname:'Int_DroneControl_FuelTransfer_Size3_Class5' },
		
		23550 : { mtype:'iftlc', cost:  48600, name:'Fuel Transfer Limpet Controller', class:5, rating:'E', mass: 20.00, integ: 58, pwrdraw:0.40, boottime:10, maxlimpet: 4, targetrng: 780, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671259, fdname:'Int_DroneControl_FuelTransfer_Size5_Class1' },
		23540 : { mtype:'iftlc', cost:  97200, name:'Fuel Transfer Limpet Controller', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw:0.30, boottime:10, maxlimpet: 4, targetrng:1040, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671260, fdname:'Int_DroneControl_FuelTransfer_Size5_Class2' },
		23530 : { mtype:'iftlc', cost: 194400, name:'Fuel Transfer Limpet Controller', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.50, boottime:10, maxlimpet: 4, targetrng:1300, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671261, fdname:'Int_DroneControl_FuelTransfer_Size5_Class3' },
		23520 : { mtype:'iftlc', cost: 388800, name:'Fuel Transfer Limpet Controller', class:5, rating:'B', mass: 32.00, integ:157, pwrdraw:0.97, boottime:10, maxlimpet: 4, targetrng:1560, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671262, fdname:'Int_DroneControl_FuelTransfer_Size5_Class4' }, // TODO BUG? pwrdraw:0.70
		23510 : { mtype:'iftlc', cost: 777600, name:'Fuel Transfer Limpet Controller', class:5, rating:'A', mass: 20.00, integ:134, pwrdraw:0.60, boottime:10, maxlimpet: 4, targetrng:1820, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671263, fdname:'Int_DroneControl_FuelTransfer_Size5_Class5' },
		
		23750 : { mtype:'iftlc', cost: 437400, name:'Fuel Transfer Limpet Controller', class:7, rating:'E', mass: 80.00, integ: 79, pwrdraw:0.55, boottime:10, maxlimpet: 8, targetrng:1020, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671264, fdname:'Int_DroneControl_FuelTransfer_Size7_Class1' },
		23740 : { mtype:'iftlc', cost: 874800, name:'Fuel Transfer Limpet Controller', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw:0.41, boottime:10, maxlimpet: 8, targetrng:1360, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671265, fdname:'Int_DroneControl_FuelTransfer_Size7_Class2' },
		23730 : { mtype:'iftlc', cost:1749600, name:'Fuel Transfer Limpet Controller', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.69, boottime:10, maxlimpet: 8, targetrng:1700, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671266, fdname:'Int_DroneControl_FuelTransfer_Size7_Class3' },
		23720 : { mtype:'iftlc', cost:3499200, name:'Fuel Transfer Limpet Controller', class:7, rating:'B', mass:128.00, integ:157, pwrdraw:0.97, boottime:10, maxlimpet: 8, targetrng:2040, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671267, fdname:'Int_DroneControl_FuelTransfer_Size7_Class4' },
		23710 : { mtype:'iftlc', cost:6998400, name:'Fuel Transfer Limpet Controller', class:7, rating:'A', mass: 80.00, integ:183, pwrdraw:0.83, boottime:10, maxlimpet: 8, targetrng:2380, limpettime: 60, maxspd:200, fuelxfer:1.0, fdid:128671268, fdname:'Int_DroneControl_FuelTransfer_Size7_Class5' },
		
		
		// TODO: thmload added in 3.0?
		26150 : { mtype:'ihblc', cost:    600, name:'Hatch Breaker Limpet Controller', class:1, rating:'E', mass:  1.30, integ: 32, pwrdraw:0.12, boottime:3, maxlimpet: 2, targetrng:1500, lpactrng:1600, limpettime:120, maxspd:500, hacktime:22, mincargo:1, maxcargo: 6, fdid:128066532, fdname:'Int_DroneControl_ResourceSiphon_Size1_Class1' },
		26140 : { mtype:'ihblc', cost:   1200, name:'Hatch Breaker Limpet Controller', class:1, rating:'D', mass:  0.50, integ: 24, pwrdraw:0.16, boottime:3, maxlimpet: 1, targetrng:2000, lpactrng:2100, limpettime:120, maxspd:500, hacktime:19, mincargo:2, maxcargo: 7, fdid:128066533, fdname:'Int_DroneControl_ResourceSiphon_Size1_Class2' },
		26130 : { mtype:'ihblc', cost:   2400, name:'Hatch Breaker Limpet Controller', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.20, boottime:3, maxlimpet: 1, targetrng:2500, lpactrng:2600, limpettime:120, maxspd:500, hacktime:16, mincargo:3, maxcargo: 8, fdid:128066534, fdname:'Int_DroneControl_ResourceSiphon_Size1_Class3' },
		26120 : { mtype:'ihblc', cost:   4800, name:'Hatch Breaker Limpet Controller', class:1, rating:'B', mass:  2.00, integ: 56, pwrdraw:0.24, boottime:3, maxlimpet: 2, targetrng:3000, lpactrng:3100, limpettime:120, maxspd:500, hacktime:13, mincargo:4, maxcargo: 9, fdid:128066535, fdname:'Int_DroneControl_ResourceSiphon_Size1_Class4' },
		26110 : { mtype:'ihblc', cost:   9600, name:'Hatch Breaker Limpet Controller', class:1, rating:'A', mass:  1.30, integ: 48, pwrdraw:0.28, boottime:3, maxlimpet: 1, targetrng:3500, lpactrng:3600, limpettime:120, maxspd:500, hacktime:10, mincargo:5, maxcargo:10, fdid:128066536, fdname:'Int_DroneControl_ResourceSiphon_Size1_Class5' },
		
		26350 : { mtype:'ihblc', cost:   5400, name:'Hatch Breaker Limpet Controller', class:3, rating:'E', mass:  5.00, integ: 51, pwrdraw:0.18, boottime:3, maxlimpet: 4, targetrng:1620, lpactrng:1720, limpettime:120, maxspd:500, hacktime:17, mincargo:1, maxcargo: 6, fdid:128066537, fdname:'Int_DroneControl_ResourceSiphon_Size3_Class1' },
		26340 : { mtype:'ihblc', cost:  10800, name:'Hatch Breaker Limpet Controller', class:3, rating:'D', mass:  2.00, integ: 38, pwrdraw:0.24, boottime:3, maxlimpet: 3, targetrng:2160, lpactrng:2260, limpettime:120, maxspd:500, hacktime:14, mincargo:2, maxcargo: 7, fdid:128066538, fdname:'Int_DroneControl_ResourceSiphon_Size3_Class2' },
		26330 : { mtype:'ihblc', cost:  21600, name:'Hatch Breaker Limpet Controller', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.30, boottime:3, maxlimpet: 3, targetrng:2700, lpactrng:2800, limpettime:120, maxspd:500, hacktime:12, mincargo:3, maxcargo: 8, fdid:128066539, fdname:'Int_DroneControl_ResourceSiphon_Size3_Class3' },
		26320 : { mtype:'ihblc', cost:  43200, name:'Hatch Breaker Limpet Controller', class:3, rating:'B', mass:  8.00, integ: 90, pwrdraw:0.36, boottime:3, maxlimpet: 4, targetrng:3240, lpactrng:3340, limpettime:120, maxspd:500, hacktime:10, mincargo:4, maxcargo: 9, fdid:128066540, fdname:'Int_DroneControl_ResourceSiphon_Size3_Class4' },
		26310 : { mtype:'ihblc', cost:  86400, name:'Hatch Breaker Limpet Controller', class:3, rating:'A', mass:  5.00, integ: 77, pwrdraw:0.42, boottime:3, maxlimpet: 3, targetrng:3780, lpactrng:3870, limpettime:120, maxspd:500, hacktime: 7, mincargo:5, maxcargo:10, fdid:128066541, fdname:'Int_DroneControl_ResourceSiphon_Size3_Class5' },
		
		26550 : { mtype:'ihblc', cost:  48600, name:'Hatch Breaker Limpet Controller', class:5, rating:'E', mass: 20.00, integ: 77, pwrdraw:0.30, boottime:3, maxlimpet: 9, targetrng:1980, lpactrng:2080, limpettime:120, maxspd:500, hacktime:11, mincargo:1, maxcargo: 6, fdid:128066542, fdname:'Int_DroneControl_ResourceSiphon_Size5_Class1' },
		26540 : { mtype:'ihblc', cost:  97200, name:'Hatch Breaker Limpet Controller', class:5, rating:'D', mass:  8.00, integ: 58, pwrdraw:0.40, boottime:3, maxlimpet: 6, targetrng:2640, lpactrng:2740, limpettime:120, maxspd:500, hacktime:10, mincargo:2, maxcargo: 7, fdid:128066543, fdname:'Int_DroneControl_ResourceSiphon_Size5_Class2' },
		26530 : { mtype:'ihblc', cost: 194400, name:'Hatch Breaker Limpet Controller', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.50, boottime:3, maxlimpet: 7, targetrng:3300, lpactrng:3400, limpettime:120, maxspd:500, hacktime: 8, mincargo:3, maxcargo: 8, fdid:128066544, fdname:'Int_DroneControl_ResourceSiphon_Size5_Class3' },
		26520 : { mtype:'ihblc', cost: 388800, name:'Hatch Breaker Limpet Controller', class:5, rating:'B', mass: 32.00, integ:134, pwrdraw:0.60, boottime:3, maxlimpet: 9, targetrng:3960, lpactrng:4060, limpettime:120, maxspd:500, hacktime: 6, mincargo:4, maxcargo: 9, fdid:128066545, fdname:'Int_DroneControl_ResourceSiphon_Size5_Class4' },
		26510 : { mtype:'ihblc', cost: 777600, name:'Hatch Breaker Limpet Controller', class:5, rating:'A', mass: 20.00, integ:115, pwrdraw:0.70, boottime:3, maxlimpet: 6, targetrng:4620, lpactrng:4720, limpettime:120, maxspd:500, hacktime: 5, mincargo:5, maxcargo:10, fdid:128066546, fdname:'Int_DroneControl_ResourceSiphon_Size5_Class5' },
		
		26750 : { mtype:'ihblc', cost: 437400, name:'Hatch Breaker Limpet Controller', class:7, rating:'E', mass: 80.00, integ:105, pwrdraw:0.42, boottime:3, maxlimpet:18, targetrng:2580, lpactrng:2680, limpettime:120, maxspd:500, hacktime: 6, mincargo:1, maxcargo: 6, fdid:128066547, fdname:'Int_DroneControl_ResourceSiphon_Size7_Class1' },
		26740 : { mtype:'ihblc', cost: 874800, name:'Hatch Breaker Limpet Controller', class:7, rating:'D', mass: 32.00, integ: 79, pwrdraw:0.56, boottime:3, maxlimpet:12, targetrng:3440, lpactrng:3540, limpettime:120, maxspd:500, hacktime: 5, mincargo:2, maxcargo: 7, fdid:128066548, fdname:'Int_DroneControl_ResourceSiphon_Size7_Class2' },
		26730 : { mtype:'ihblc', cost:1749600, name:'Hatch Breaker Limpet Controller', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.70, boottime:3, maxlimpet:15, targetrng:4300, lpactrng:4400, limpettime:120, maxspd:500, hacktime: 4, mincargo:3, maxcargo: 8, fdid:128066549, fdname:'Int_DroneControl_ResourceSiphon_Size7_Class3' },
		26720 : { mtype:'ihblc', cost:3499200, name:'Hatch Breaker Limpet Controller', class:7, rating:'B', mass:128.00, integ:183, pwrdraw:0.84, boottime:3, maxlimpet:18, targetrng:5160, lpactrng:5260, limpettime:120, maxspd:500, hacktime: 3, mincargo:4, maxcargo: 9, fdid:128066550, fdname:'Int_DroneControl_ResourceSiphon_Size7_Class4' },
		26710 : { mtype:'ihblc', cost:6998400, name:'Hatch Breaker Limpet Controller', class:7, rating:'A', mass: 80.00, integ:157, pwrdraw:0.98, boottime:3, maxlimpet:12, targetrng:6020, lpactrng:6120, limpettime:120, maxspd:500, hacktime: 2, mincargo:5, maxcargo:10, fdid:128066551, fdname:'Int_DroneControl_ResourceSiphon_Size7_Class5' },
		
		
		 4150 : { mtype:'ihrp', cost:     5000, name:'Hull Reinforcement Package', class:1, rating:'E', mass: 2.00, hullrnf: 80, kinres:0.5, thmres:0.5, expres:0.5, fdid:128668537, fdname:'Int_HullReinforcement_Size1_Class1' },
		 4140 : { mtype:'ihrp', cost:    15000, name:'Hull Reinforcement Package', class:1, rating:'D', mass: 1.00, hullrnf:110, kinres:0.5, thmres:0.5, expres:0.5, fdid:128668538, fdname:'Int_HullReinforcement_Size1_Class2' },
		 4250 : { mtype:'ihrp', cost:    12000, name:'Hull Reinforcement Package', class:2, rating:'E', mass: 4.00, hullrnf:150, kinres:1.0, thmres:1.0, expres:1.0, fdid:128668539, fdname:'Int_HullReinforcement_Size2_Class1' },
		 4240 : { mtype:'ihrp', cost:    36000, name:'Hull Reinforcement Package', class:2, rating:'D', mass: 2.00, hullrnf:190, kinres:1.0, thmres:1.0, expres:1.0, fdid:128668540, fdname:'Int_HullReinforcement_Size2_Class2' },
		 4350 : { mtype:'ihrp', cost:    28000, name:'Hull Reinforcement Package', class:3, rating:'E', mass: 8.00, hullrnf:230, kinres:1.5, thmres:1.5, expres:1.5, fdid:128668541, fdname:'Int_HullReinforcement_Size3_Class1' },
		 4340 : { mtype:'ihrp', cost:    84000, name:'Hull Reinforcement Package', class:3, rating:'D', mass: 4.00, hullrnf:260, kinres:1.5, thmres:1.5, expres:1.5, fdid:128668542, fdname:'Int_HullReinforcement_Size3_Class2' },
		 4450 : { mtype:'ihrp', cost:    65000, name:'Hull Reinforcement Package', class:4, rating:'E', mass:16.00, hullrnf:300, kinres:2.0, thmres:2.0, expres:2.0, fdid:128668543, fdname:'Int_HullReinforcement_Size4_Class1' },
		 4440 : { mtype:'ihrp', cost:   195000, name:'Hull Reinforcement Package', class:4, rating:'D', mass: 8.00, hullrnf:330, kinres:2.0, thmres:2.0, expres:2.0, fdid:128668544, fdname:'Int_HullReinforcement_Size4_Class2' },
		 4550 : { mtype:'ihrp', cost:   150000, name:'Hull Reinforcement Package', class:5, rating:'E', mass:32.00, hullrnf:360, kinres:2.5, thmres:2.5, expres:2.5, fdid:128668545, fdname:'Int_HullReinforcement_Size5_Class1' },
		 4540 : { mtype:'ihrp', cost:   450000, name:'Hull Reinforcement Package', class:5, rating:'D', mass:16.00, hullrnf:390, kinres:2.5, thmres:2.5, expres:2.5, fdid:128668546, fdname:'Int_HullReinforcement_Size5_Class2' },
		
		
		 9151 : { mtype:'imahrp', cost:  7500, name:'Meta Alloy Hull Reinforcement Package', class:1, rating:'E', mass:  2, hullrnf: 72, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size1_Class1' }, // TODO: fdid
		 9141 : { mtype:'imahrp', cost: 22500, name:'Meta Alloy Hull Reinforcement Package', class:1, rating:'D', mass:  2, hullrnf: 99, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size1_Class2' }, // TODO: fdid
		 9251 : { mtype:'imahrp', cost: 18000, name:'Meta Alloy Hull Reinforcement Package', class:2, rating:'E', mass:  4, hullrnf:135, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size2_Class1' }, // TODO: fdid
		 9241 : { mtype:'imahrp', cost: 54000, name:'Meta Alloy Hull Reinforcement Package', class:2, rating:'D', mass:  2, hullrnf:171, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size2_Class2' }, // TODO: fdid
		 9351 : { mtype:'imahrp', cost: 42000, name:'Meta Alloy Hull Reinforcement Package', class:3, rating:'E', mass:  8, hullrnf:207, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size3_Class1' }, // TODO: fdid
		 9341 : { mtype:'imahrp', cost:126000, name:'Meta Alloy Hull Reinforcement Package', class:3, rating:'D', mass:  4, hullrnf:234, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size3_Class2' }, // TODO: fdid
		 9451 : { mtype:'imahrp', cost: 97500, name:'Meta Alloy Hull Reinforcement Package', class:4, rating:'E', mass: 16, hullrnf:270, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size4_Class1' }, // TODO: fdid
		 9441 : { mtype:'imahrp', cost:292500, name:'Meta Alloy Hull Reinforcement Package', class:4, rating:'D', mass:  8, hullrnf:297, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size4_Class2' }, // TODO: fdid
		 9551 : { mtype:'imahrp', cost:225000, name:'Meta Alloy Hull Reinforcement Package', class:5, rating:'E', mass: 32, hullrnf:324, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size5_Class1' }, // TODO: fdid
		 9541 : { mtype:'imahrp', cost:675000, name:'Meta Alloy Hull Reinforcement Package', class:5, rating:'D', mass: 16, hullrnf:351, caures:3.0, fdid:null, fdname:'Int_MetaAlloyHullReinforcement_Size5_Class2' }, // TODO: fdid
		
		
		 8150 : { mtype:'imrp', cost:     5000, name:'Module Reinforcement Package', class:1, rating:'E', mass: 2.00, integ: 77, dmgprot:30, fdid:128737270, fdname:'Int_ModuleReinforcement_Size1_Class1' },
		 8140 : { mtype:'imrp', cost:    15000, name:'Module Reinforcement Package', class:1, rating:'D', mass: 1.00, integ: 70, dmgprot:60, fdid:128737271, fdname:'Int_ModuleReinforcement_Size1_Class2' },
		 8250 : { mtype:'imrp', cost:    12000, name:'Module Reinforcement Package', class:2, rating:'E', mass: 4.00, integ:115, dmgprot:30, fdid:128737272, fdname:'Int_ModuleReinforcement_Size2_Class1' },
		 8240 : { mtype:'imrp', cost:    36000, name:'Module Reinforcement Package', class:2, rating:'D', mass: 2.00, integ:105, dmgprot:60, fdid:128737273, fdname:'Int_ModuleReinforcement_Size2_Class2' },
		 8350 : { mtype:'imrp', cost:    28000, name:'Module Reinforcement Package', class:3, rating:'E', mass: 8.00, integ:170, dmgprot:30, fdid:128737274, fdname:'Int_ModuleReinforcement_Size3_Class1' },
		 8340 : { mtype:'imrp', cost:    84000, name:'Module Reinforcement Package', class:3, rating:'D', mass: 4.00, integ:155, dmgprot:60, fdid:128737275, fdname:'Int_ModuleReinforcement_Size3_Class2' },
		 8450 : { mtype:'imrp', cost:    65000, name:'Module Reinforcement Package', class:4, rating:'E', mass:16.00, integ:260, dmgprot:30, fdid:128737276, fdname:'Int_ModuleReinforcement_Size4_Class1' },
		 8440 : { mtype:'imrp', cost:   195000, name:'Module Reinforcement Package', class:4, rating:'D', mass: 8.00, integ:235, dmgprot:60, fdid:128737277, fdname:'Int_ModuleReinforcement_Size4_Class2' },
		 8550 : { mtype:'imrp', cost:   150000, name:'Module Reinforcement Package', class:5, rating:'E', mass:32.00, integ:385, dmgprot:30, fdid:128737278, fdname:'Int_ModuleReinforcement_Size5_Class1' },
		 8540 : { mtype:'imrp', cost:   450000, name:'Module Reinforcement Package', class:5, rating:'D', mass:16.00, integ:350, dmgprot:60, fdid:128737279, fdname:'Int_ModuleReinforcement_Size5_Class2' },
		
		
		 6250 : { mtype:'ipc', cost:   4320, name:'Economy Class Passenger Cabin',  class:2, rating:'E', mass: 2.50, cabincap: 2, cabincls:'E', fdid:128734690, fdname:'Int_PassengerCabin_Size2_Class1' },
	//	 6251 : { mtype:'ipc', cost:    NaN, name:'Prisoner Cells',                 class:2, rating:'E', mass: 2.50, cabincap: 2, cabincls:'P', fdid:null,      fdname:'Int_PassengerCabin_Size2_Class0' }, // TODO: cost,fdid
		 6350 : { mtype:'ipc', cost:   8670, name:'Economy Class Passenger Cabin',  class:3, rating:'E', mass: 5.00, cabincap: 4, cabincls:'E', fdid:128734691, fdname:'Int_PassengerCabin_Size3_Class1' },
	//	 6351 : { mtype:'ipc', cost:    NaN, name:'Prisoner Cells',                 class:3, rating:'E', mass: 5.00, cabincap: 4, cabincls:'P', fdid:null,      fdname:'Int_PassengerCabin_Size3_Class0' }, // TODO: cost,fdid
		 6340 : { mtype:'ipc', cost:  26720, name:'Business Class Passenger Cabin', class:3, rating:'D', mass: 5.00, cabincap: 3, cabincls:'B', fdid:128734692, fdname:'Int_PassengerCabin_Size3_Class2' },
		 6450 : { mtype:'ipc', cost:  18960, name:'Economy Class Passenger Cabin',  class:4, rating:'E', mass:10.00, cabincap: 8, cabincls:'E', fdid:128727922, fdname:'Int_PassengerCabin_Size4_Class1' },
	//	 6451 : { mtype:'ipc', cost:    NaN, name:'Prisoner Cells',                 class:4, rating:'E', mass:10.00, cabincap: 8, cabincls:'P', fdid:null,      fdname:'Int_PassengerCabin_Size4_Class0' }, // TODO: cost,fdid
		 6440 : { mtype:'ipc', cost:  56870, name:'Business Class Passenger Cabin', class:4, rating:'D', mass:10.00, cabincap: 6, cabincls:'B', fdid:128727923, fdname:'Int_PassengerCabin_Size4_Class2' },
		 6430 : { mtype:'ipc', cost: 170600, name:'First Class Passenger Cabin',    class:4, rating:'C', mass:10.00, cabincap: 3, cabincls:'F', fdid:128727924, fdname:'Int_PassengerCabin_Size4_Class3' },
		 6550 : { mtype:'ipc', cost:  34960, name:'Economy Class Passenger Cabin',  class:5, rating:'E', mass:20.00, cabincap:16, cabincls:'E', fdid:128734693, fdname:'Int_PassengerCabin_Size5_Class1' },
	//	 6551 : { mtype:'ipc', cost:    NaN, name:'Prisoner Cells',                 class:5, rating:'E', mass:20.00, cabincap:16, cabincls:'P', fdid:null,      fdname:'Int_PassengerCabin_Size5_Class0' }, // TODO: cost,fdid
		 6540 : { mtype:'ipc', cost:  92370, name:'Business Class Passenger Cabin', class:5, rating:'D', mass:20.00, cabincap:10, cabincls:'B', fdid:128734694, fdname:'Int_PassengerCabin_Size5_Class2' },
		 6530 : { mtype:'ipc', cost: 340540, name:'First Class Passenger Cabin',    class:5, rating:'C', mass:20.00, cabincap: 6, cabincls:'F', fdid:128734695, fdname:'Int_PassengerCabin_Size5_Class3' },
		 6520 : { mtype:'ipc', cost:1658100, name:'Luxury Class Passenger Cabin',   class:5, rating:'B', mass:20.00, cabincap: 4, cabincls:'L', reserved:{51:1,52:1,53:1}, fdid:128727925, fdname:'Int_PassengerCabin_Size5_Class4' },
		 6650 : { mtype:'ipc', cost:  61420, name:'Economy Class Passenger Cabin',  class:6, rating:'E', mass:40.00, cabincap:32, cabincls:'E', fdid:128727926, fdname:'Int_PassengerCabin_Size6_Class1' },
	//	 6651 : { mtype:'ipc', cost:    NaN, name:'Prisoner Cells',                 class:6, rating:'E', mass:40.00, cabincap:32, cabincls:'P', fdid:null,      fdname:'Int_PassengerCabin_Size6_Class0' }, // TODO: cost,fdid
		 6640 : { mtype:'ipc', cost: 184240, name:'Business Class Passenger Cabin', class:6, rating:'D', mass:40.00, cabincap:16, cabincls:'B', fdid:128727927, fdname:'Int_PassengerCabin_Size6_Class2' },
		 6630 : { mtype:'ipc', cost: 552700, name:'First Class Passenger Cabin',    class:6, rating:'C', mass:40.00, cabincap:12, cabincls:'F', fdid:128727928, fdname:'Int_PassengerCabin_Size6_Class3' },
		 6620 : { mtype:'ipc', cost:4974300, name:'Luxury Class Passenger Cabin',   class:6, rating:'B', mass:40.00, cabincap: 8, cabincls:'L', reserved:{51:1,52:1,53:1}, fdid:128727929, fdname:'Int_PassengerCabin_Size6_Class4' },
		
		 5280 : { mtype:'ipvh', cost: 18000, name:'Planetary Vehicle Hangar', class:2, rating:'H', mass:12.00, integ:30, pwrdraw:0.25, boottime:5, vslots:1, vcount:1, fdid:128672288, fdname:'Int_BuggyBay_Size2_Class1' },
		 5270 : { mtype:'ipvh', cost: 21600, name:'Planetary Vehicle Hangar', class:2, rating:'G', mass: 6.00, integ:30, pwrdraw:0.75, boottime:5, vslots:1, vcount:1, fdid:128672289, fdname:'Int_BuggyBay_Size2_Class2' },
		 5480 : { mtype:'ipvh', cost: 72000, name:'Planetary Vehicle Hangar', class:4, rating:'H', mass:20.00, integ:30, pwrdraw:0.40, boottime:5, vslots:2, vcount:1, fdid:128672290, fdname:'Int_BuggyBay_Size4_Class1' },
		 5470 : { mtype:'ipvh', cost: 86400, name:'Planetary Vehicle Hangar', class:4, rating:'G', mass:10.00, integ:30, pwrdraw:1.20, boottime:5, vslots:2, vcount:1, fdid:128672291, fdname:'Int_BuggyBay_Size4_Class2' },
		 5680 : { mtype:'ipvh', cost:576000, name:'Planetary Vehicle Hangar', class:6, rating:'H', mass:34.00, integ:30, pwrdraw:0.60, boottime:5, vslots:4, vcount:1, fdid:128672292, fdname:'Int_BuggyBay_Size6_Class1' },
		 5670 : { mtype:'ipvh', cost:691200, name:'Planetary Vehicle Hangar', class:6, rating:'G', mass:17.00, integ:30, pwrdraw:1.80, boottime:5, vslots:4, vcount:1, fdid:128672293, fdname:'Int_BuggyBay_Size6_Class2' },
		
		
		24150 : { mtype:'iplc', cost:    600, name:'Prospector Limpet Controller', class:1, rating:'E', mass:  1.30, integ: 24, pwrdraw:0.18, boottime:4, maxlimpet: 1, lpactrng: 3000, limpettime:600, maxspd:200, minebonus:1.0, fdid:128671269, fdname:'Int_DroneControl_Prospector_Size1_Class1' },
		24140 : { mtype:'iplc', cost:   1200, name:'Prospector Limpet Controller', class:1, rating:'D', mass:  0.50, integ: 32, pwrdraw:0.14, boottime:4, maxlimpet: 1, lpactrng: 4000, limpettime:600, maxspd:200, minebonus:2.0, fdid:128671270, fdname:'Int_DroneControl_Prospector_Size1_Class2' },
		24130 : { mtype:'iplc', cost:   2400, name:'Prospector Limpet Controller', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.23, boottime:4, maxlimpet: 1, lpactrng: 5000, limpettime:600, maxspd:200, minebonus:2.5, fdid:128671271, fdname:'Int_DroneControl_Prospector_Size1_Class3' },
		24120 : { mtype:'iplc', cost:   4800, name:'Prospector Limpet Controller', class:1, rating:'B', mass:  2.00, integ: 48, pwrdraw:0.32, boottime:4, maxlimpet: 1, lpactrng: 6000, limpettime:600, maxspd:200, minebonus:3.0, fdid:128671272, fdname:'Int_DroneControl_Prospector_Size1_Class4' },
		24110 : { mtype:'iplc', cost:   9600, name:'Prospector Limpet Controller', class:1, rating:'A', mass:  1.30, integ: 56, pwrdraw:0.28, boottime:4, maxlimpet: 1, lpactrng: 7000, limpettime:600, maxspd:200, minebonus:3.5, fdid:128671273, fdname:'Int_DroneControl_Prospector_Size1_Class5' },
		
		24350 : { mtype:'iplc', cost:   5400, name:'Prospector Limpet Controller', class:3, rating:'E', mass:  5.00, integ: 38, pwrdraw:0.27, boottime:4, maxlimpet: 2, lpactrng: 3300, limpettime:600, maxspd:200, minebonus:1.0, fdid:128671274, fdname:'Int_DroneControl_Prospector_Size3_Class1' },
		24340 : { mtype:'iplc', cost:  10800, name:'Prospector Limpet Controller', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw:0.20, boottime:4, maxlimpet: 2, lpactrng: 4400, limpettime:600, maxspd:200, minebonus:2.0, fdid:128671275, fdname:'Int_DroneControl_Prospector_Size3_Class2' },
		24330 : { mtype:'iplc', cost:  21600, name:'Prospector Limpet Controller', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.34, boottime:4, maxlimpet: 2, lpactrng: 5500, limpettime:600, maxspd:200, minebonus:2.5, fdid:128671276, fdname:'Int_DroneControl_Prospector_Size3_Class3' },
		24320 : { mtype:'iplc', cost:  43200, name:'Prospector Limpet Controller', class:3, rating:'B', mass:  8.00, integ: 77, pwrdraw:0.48, boottime:4, maxlimpet: 2, lpactrng: 6600, limpettime:600, maxspd:200, minebonus:3.0, fdid:128671277, fdname:'Int_DroneControl_Prospector_Size3_Class4' },
		24310 : { mtype:'iplc', cost:  86400, name:'Prospector Limpet Controller', class:3, rating:'A', mass:  5.00, integ: 90, pwrdraw:0.41, boottime:4, maxlimpet: 2, lpactrng: 7700, limpettime:600, maxspd:200, minebonus:3.5, fdid:128671278, fdname:'Int_DroneControl_Prospector_Size3_Class5' },
		
		24550 : { mtype:'iplc', cost:  48600, name:'Prospector Limpet Controller', class:5, rating:'E', mass: 20.00, integ: 58, pwrdraw:0.40, boottime:4, maxlimpet: 4, lpactrng: 3900, limpettime:600, maxspd:200, minebonus:1.0, fdid:128671279, fdname:'Int_DroneControl_Prospector_Size5_Class1' },
		24540 : { mtype:'iplc', cost:  97200, name:'Prospector Limpet Controller', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw:0.30, boottime:4, maxlimpet: 4, lpactrng: 5200, limpettime:600, maxspd:200, minebonus:2.0, fdid:128671280, fdname:'Int_DroneControl_Prospector_Size5_Class2' },
		24530 : { mtype:'iplc', cost: 194400, name:'Prospector Limpet Controller', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.50, boottime:4, maxlimpet: 4, lpactrng: 6500, limpettime:600, maxspd:200, minebonus:2.5, fdid:128671281, fdname:'Int_DroneControl_Prospector_Size5_Class3' },
		24520 : { mtype:'iplc', cost: 388800, name:'Prospector Limpet Controller', class:5, rating:'B', mass: 32.00, integ:157, pwrdraw:0.97, boottime:4, maxlimpet: 4, lpactrng: 7800, limpettime:600, maxspd:200, minebonus:3.0, fdid:128671282, fdname:'Int_DroneControl_Prospector_Size5_Class4' }, // TODO BUG? pwrdraw:0.70
		24510 : { mtype:'iplc', cost: 777600, name:'Prospector Limpet Controller', class:5, rating:'A', mass: 20.00, integ:134, pwrdraw:0.60, boottime:4, maxlimpet: 4, lpactrng: 9100, limpettime:600, maxspd:200, minebonus:3.5, fdid:128671283, fdname:'Int_DroneControl_Prospector_Size5_Class5' },
		
		24750 : { mtype:'iplc', cost: 437400, name:'Prospector Limpet Controller', class:7, rating:'E', mass: 80.00, integ: 79, pwrdraw:0.55, boottime:4, maxlimpet: 8, lpactrng: 5100, limpettime:600, maxspd:200, minebonus:1.0, fdid:128671284, fdname:'Int_DroneControl_Prospector_Size7_Class1' },
		24740 : { mtype:'iplc', cost: 874800, name:'Prospector Limpet Controller', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw:0.41, boottime:4, maxlimpet: 8, lpactrng: 6800, limpettime:600, maxspd:200, minebonus:2.0, fdid:128671285, fdname:'Int_DroneControl_Prospector_Size7_Class2' },
		24730 : { mtype:'iplc', cost:1749600, name:'Prospector Limpet Controller', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.69, boottime:4, maxlimpet: 8, lpactrng: 8500, limpettime:600, maxspd:200, minebonus:2.5, fdid:128671286, fdname:'Int_DroneControl_Prospector_Size7_Class3' },
		24720 : { mtype:'iplc', cost:3499200, name:'Prospector Limpet Controller', class:7, rating:'B', mass:128.00, integ:157, pwrdraw:0.97, boottime:4, maxlimpet: 8, lpactrng:10200, limpettime:600, maxspd:200, minebonus:3.0, fdid:128671287, fdname:'Int_DroneControl_Prospector_Size7_Class4' },
		24710 : { mtype:'iplc', cost:6998400, name:'Prospector Limpet Controller', class:7, rating:'A', mass: 80.00, integ:183, pwrdraw:0.83, boottime:4, maxlimpet: 8, lpactrng:11900, limpettime:600, maxspd:200, minebonus:3.5, fdid:128671288, fdname:'Int_DroneControl_Prospector_Size7_Class5' },
		
		
		// TODO: thmload added in 3.0?
		21150 : { mtype:'inlc', cost:  2600, name:'Recon Limpet Controller', class:1, rating:'E', mass:  1.30, integ: 24, pwrdraw:0.18, boottime:10, maxlimpet: 1, targetrng:1200, maxspd:100, hacktime:22, fdid:128837858, fdname:'Int_DroneControl_Recon_Size1_Class1' },
		21350 : { mtype:'inlc', cost:  8200, name:'Recon Limpet Controller', class:3, rating:'E', mass:  2.00, integ: 51, pwrdraw:0.20, boottime:10, maxlimpet: 1, targetrng:1400, maxspd:100, hacktime:17, fdid:128841592, fdname:'Int_DroneControl_Recon_Size3_Class1' },
		21550 : { mtype:'inlc', cost: 75800, name:'Recon Limpet Controller', class:5, rating:'E', mass: 20.00, integ: 96, pwrdraw:0.50, boottime:10, maxlimpet: 1, targetrng:1700, maxspd:100, hacktime:13, fdid:128841593, fdname:'Int_DroneControl_Recon_Size5_Class1' },
		21750 : { mtype:'inlc', cost:612200, name:'Recon Limpet Controller', class:7, rating:'E', mass:128.00, integ:157, pwrdraw:0.97, boottime:10, maxlimpet: 1, targetrng:2000, maxspd:100, hacktime:10, fdid:128841594, fdname:'Int_DroneControl_Recon_Size7_Class1' },
		
		
		 2150 : { mtype:'ir', cost:    6000, name:'Refinery', class:1, rating:'E', integ: 32, pwrdraw:0.14, boottime:10, bins: 1, fdid:128666684, fdname:'Int_Refinery_Size1_Class1' },
		 2140 : { mtype:'ir', cost:   18000, name:'Refinery', class:1, rating:'D', integ: 24, pwrdraw:0.18, boottime:10, bins: 1, fdid:128666688, fdname:'Int_Refinery_Size1_Class2' },
		 2130 : { mtype:'ir', cost:   54000, name:'Refinery', class:1, rating:'C', integ: 40, pwrdraw:0.23, boottime:10, bins: 2, fdid:128666692, fdname:'Int_Refinery_Size1_Class3' },
		 2120 : { mtype:'ir', cost:  162000, name:'Refinery', class:1, rating:'B', integ: 56, pwrdraw:0.28, boottime:10, bins: 3, fdid:128666696, fdname:'Int_Refinery_Size1_Class4' },
		 2110 : { mtype:'ir', cost:  486000, name:'Refinery', class:1, rating:'A', integ: 48, pwrdraw:0.32, boottime:10, bins: 4, fdid:128666700, fdname:'Int_Refinery_Size1_Class5' },
		
		 2250 : { mtype:'ir', cost:   12600, name:'Refinery', class:2, rating:'E', integ: 41, pwrdraw:0.17, boottime:10, bins: 2, fdid:128666685, fdname:'Int_Refinery_Size2_Class1' },
		 2240 : { mtype:'ir', cost:   37800, name:'Refinery', class:2, rating:'D', integ: 31, pwrdraw:0.22, boottime:10, bins: 3, fdid:128666689, fdname:'Int_Refinery_Size2_Class2' },
		 2230 : { mtype:'ir', cost:  113400, name:'Refinery', class:2, rating:'C', integ: 51, pwrdraw:0.28, boottime:10, bins: 4, fdid:128666693, fdname:'Int_Refinery_Size2_Class3' },
		 2220 : { mtype:'ir', cost:  340200, name:'Refinery', class:2, rating:'B', integ: 71, pwrdraw:0.34, boottime:10, bins: 5, fdid:128666697, fdname:'Int_Refinery_Size2_Class4' },
		 2210 : { mtype:'ir', cost: 1020600, name:'Refinery', class:2, rating:'A', integ: 61, pwrdraw:0.39, boottime:10, bins: 6, fdid:128666701, fdname:'Int_Refinery_Size2_Class5' },
		
		 2350 : { mtype:'ir', cost:   26460, name:'Refinery', class:3, rating:'E', integ: 51, pwrdraw:0.20, boottime:10, bins: 3, fdid:128666686, fdname:'Int_Refinery_Size3_Class1' },
		 2340 : { mtype:'ir', cost:   79380, name:'Refinery', class:3, rating:'D', integ: 38, pwrdraw:0.27, boottime:10, bins: 4, fdid:128666690, fdname:'Int_Refinery_Size3_Class2' },
		 2330 : { mtype:'ir', cost:  238140, name:'Refinery', class:3, rating:'C', integ: 64, pwrdraw:0.34, boottime:10, bins: 6, fdid:128666694, fdname:'Int_Refinery_Size3_Class3' },
		 2320 : { mtype:'ir', cost:  714420, name:'Refinery', class:3, rating:'B', integ: 90, pwrdraw:0.41, boottime:10, bins: 7, fdid:128666698, fdname:'Int_Refinery_Size3_Class4' },
		 2310 : { mtype:'ir', cost: 2143260, name:'Refinery', class:3, rating:'A', integ: 77, pwrdraw:0.48, boottime:10, bins: 8, fdid:128666702, fdname:'Int_Refinery_Size3_Class5' },
		
		 2450 : { mtype:'ir', cost:   55570, name:'Refinery', class:4, rating:'E', integ: 64, pwrdraw:0.25, boottime:10, bins: 4, fdid:128666687, fdname:'Int_Refinery_Size4_Class1' },
		 2440 : { mtype:'ir', cost:  166700, name:'Refinery', class:4, rating:'D', integ: 48, pwrdraw:0.33, boottime:10, bins: 5, fdid:128666691, fdname:'Int_Refinery_Size4_Class2' },
		 2430 : { mtype:'ir', cost:  500090, name:'Refinery', class:4, rating:'C', integ: 80, pwrdraw:0.41, boottime:10, bins: 7, fdid:128666695, fdname:'Int_Refinery_Size4_Class3' },
		 2420 : { mtype:'ir', cost: 1500280, name:'Refinery', class:4, rating:'B', integ:112, pwrdraw:0.49, boottime:10, bins: 9, fdid:128666699, fdname:'Int_Refinery_Size4_Class4' },
		 2410 : { mtype:'ir', cost: 4500850, name:'Refinery', class:4, rating:'A', integ: 96, pwrdraw:0.57, boottime:10, bins:10, fdid:128666703, fdname:'Int_Refinery_Size4_Class5' },
		
		
		27150 : { mtype:'irlc', cost:    600, name:'Repair Limpet Controller', class:1, rating:'E', mass:  1.30, integ: 24, pwrdraw:0.18, boottime:10, maxlimpet: 1, targetrng: 600, limpettime:300, maxspd:200, repaircap: 60, fdid:128777327, fdname:'Int_DroneControl_Repair_Size1_Class1' },
		27140 : { mtype:'irlc', cost:   1200, name:'Repair Limpet Controller', class:1, rating:'D', mass:  0.50, integ: 32, pwrdraw:0.14, boottime:10, maxlimpet: 1, targetrng: 800, limpettime:300, maxspd:200, repaircap: 60, fdid:128777328, fdname:'Int_DroneControl_Repair_Size1_Class2' },
		27130 : { mtype:'irlc', cost:   2400, name:'Repair Limpet Controller', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.23, boottime:10, maxlimpet: 1, targetrng:1000, limpettime:300, maxspd:200, repaircap: 60, fdid:128777329, fdname:'Int_DroneControl_Repair_Size1_Class3' },
		27120 : { mtype:'irlc', cost:   4800, name:'Repair Limpet Controller', class:1, rating:'B', mass:  2.00, integ: 48, pwrdraw:0.32, boottime:10, maxlimpet: 1, targetrng:1200, limpettime:300, maxspd:200, repaircap: 60, fdid:128777330, fdname:'Int_DroneControl_Repair_Size1_Class4' },
		27110 : { mtype:'irlc', cost:   9600, name:'Repair Limpet Controller', class:1, rating:'A', mass:  1.30, integ: 56, pwrdraw:0.28, boottime:10, maxlimpet: 1, targetrng:1400, limpettime:300, maxspd:200, repaircap: 60, fdid:128777331, fdname:'Int_DroneControl_Repair_Size1_Class5' },
		
		27350 : { mtype:'irlc', cost:   5400, name:'Repair Limpet Controller', class:3, rating:'E', mass:  5.00, integ: 38, pwrdraw:0.27, boottime:10, maxlimpet: 2, targetrng: 660, limpettime:300, maxspd:200, repaircap:180, fdid:128777332, fdname:'Int_DroneControl_Repair_Size3_Class1' },
		27340 : { mtype:'irlc', cost:  10800, name:'Repair Limpet Controller', class:3, rating:'D', mass:  2.00, integ: 51, pwrdraw:0.20, boottime:10, maxlimpet: 2, targetrng: 880, limpettime:300, maxspd:200, repaircap:180, fdid:128777333, fdname:'Int_DroneControl_Repair_Size3_Class2' },
		27330 : { mtype:'irlc', cost:  21600, name:'Repair Limpet Controller', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:0.34, boottime:10, maxlimpet: 2, targetrng:1100, limpettime:300, maxspd:200, repaircap:180, fdid:128777334, fdname:'Int_DroneControl_Repair_Size3_Class3' },
		27320 : { mtype:'irlc', cost:  43200, name:'Repair Limpet Controller', class:3, rating:'B', mass:  8.00, integ: 77, pwrdraw:0.48, boottime:10, maxlimpet: 2, targetrng:1320, limpettime:300, maxspd:200, repaircap:180, fdid:128777335, fdname:'Int_DroneControl_Repair_Size3_Class4' },
		27310 : { mtype:'irlc', cost:  86400, name:'Repair Limpet Controller', class:3, rating:'A', mass:  5.00, integ: 90, pwrdraw:0.41, boottime:10, maxlimpet: 2, targetrng:1540, limpettime:300, maxspd:200, repaircap:180, fdid:128777336, fdname:'Int_DroneControl_Repair_Size3_Class5' },
		
		27550 : { mtype:'irlc', cost:  48600, name:'Repair Limpet Controller', class:5, rating:'E', mass: 20.00, integ: 58, pwrdraw:0.40, boottime:10, maxlimpet: 3, targetrng: 780, limpettime:300, maxspd:200, repaircap:310, fdid:128777337, fdname:'Int_DroneControl_Repair_Size5_Class1' },
		27540 : { mtype:'irlc', cost:  97200, name:'Repair Limpet Controller', class:5, rating:'D', mass:  8.00, integ: 77, pwrdraw:0.30, boottime:10, maxlimpet: 3, targetrng:1040, limpettime:300, maxspd:200, repaircap:310, fdid:128777338, fdname:'Int_DroneControl_Repair_Size5_Class2' },
		27530 : { mtype:'irlc', cost: 194400, name:'Repair Limpet Controller', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:0.50, boottime:10, maxlimpet: 3, targetrng:1300, limpettime:300, maxspd:200, repaircap:310, fdid:128777339, fdname:'Int_DroneControl_Repair_Size5_Class3' },
		27520 : { mtype:'irlc', cost: 388800, name:'Repair Limpet Controller', class:5, rating:'B', mass: 32.00, integ:157, pwrdraw:0.97, boottime:10, maxlimpet: 3, targetrng:1560, limpettime:300, maxspd:200, repaircap:310, fdid:128777340, fdname:'Int_DroneControl_Repair_Size5_Class4' }, // TODO BUG? pwrdraw:0.70
		27510 : { mtype:'irlc', cost: 777600, name:'Repair Limpet Controller', class:5, rating:'A', mass: 20.00, integ:134, pwrdraw:0.60, boottime:10, maxlimpet: 3, targetrng:1820, limpettime:300, maxspd:200, repaircap:310, fdid:128777341, fdname:'Int_DroneControl_Repair_Size5_Class5' },
		
		27750 : { mtype:'irlc', cost: 437400, name:'Repair Limpet Controller', class:7, rating:'E', mass: 80.00, integ: 79, pwrdraw:0.55, boottime:10, maxlimpet: 4, targetrng:1020, limpettime:300, maxspd:200, repaircap:450, fdid:128777342, fdname:'Int_DroneControl_Repair_Size7_Class1' },
		27740 : { mtype:'irlc', cost: 874800, name:'Repair Limpet Controller', class:7, rating:'D', mass: 32.00, integ:105, pwrdraw:0.41, boottime:10, maxlimpet: 4, targetrng:1360, limpettime:300, maxspd:200, repaircap:450, fdid:128777343, fdname:'Int_DroneControl_Repair_Size7_Class2' },
		27730 : { mtype:'irlc', cost:1749600, name:'Repair Limpet Controller', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:0.69, boottime:10, maxlimpet: 4, targetrng:1700, limpettime:300, maxspd:200, repaircap:450, fdid:128777344, fdname:'Int_DroneControl_Repair_Size7_Class3' },
		27720 : { mtype:'irlc', cost:3499200, name:'Repair Limpet Controller', class:7, rating:'B', mass:128.00, integ:157, pwrdraw:0.97, boottime:10, maxlimpet: 4, targetrng:2040, limpettime:300, maxspd:200, repaircap:450, fdid:128777345, fdname:'Int_DroneControl_Repair_Size7_Class4' },
		27710 : { mtype:'irlc', cost:6998400, name:'Repair Limpet Controller', class:7, rating:'A', mass: 80.00, integ:183, pwrdraw:0.83, boottime:10, maxlimpet: 4, targetrng:2380, limpettime:300, maxspd:200, repaircap:450, fdid:128777346, fdname:'Int_DroneControl_Repair_Size7_Class5' },
		
		
		28150 : { mtype:'islc', cost:1749600, name:'Research Limpet Controller', class:1, rating:'E', mass:  1.30, integ: 20, pwrdraw:0.40, boottime:0, maxlimpet: 1, targetrng:2000, limpettime:300, maxspd:200, fdid:128793116, fdname:'Int_DroneControl_UnkVesselResearch' },
		
		
		31150 : { mtype:'iscb', cost:     520, name:'Shield Cell Bank', class:1, rating:'E', mass:  1.30, integ: 32, pwrdraw:0.41, boottime:25, spinup:5, duration: 1.0, shieldrnf:12.0, thmload:170.0, ammoclip:1, ammomax:3, fdid:128064298, fdname:'Int_ShieldCellBank_Size1_Class1' },
		31140 : { mtype:'iscb', cost:    1290, name:'Shield Cell Bank', class:1, rating:'D', mass:  0.50, integ: 24, pwrdraw:0.55, boottime:25, spinup:5, duration: 1.0, shieldrnf:16.0, thmload:170.0, ammoclip:1, ammomax:1, fdid:128064299, fdname:'Int_ShieldCellBank_Size1_Class2' },
		31130 : { mtype:'iscb', cost:    3230, name:'Shield Cell Bank', class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:0.69, boottime:25, spinup:5, duration: 1.0, shieldrnf:20.0, thmload:170.0, ammoclip:1, ammomax:2, fdid:128064300, fdname:'Int_ShieldCellBank_Size1_Class3' },
		31120 : { mtype:'iscb', cost:    8080, name:'Shield Cell Bank', class:1, rating:'B', mass:  2.00, integ: 56, pwrdraw:0.83, boottime:25, spinup:5, duration: 1.0, shieldrnf:24.0, thmload:170.0, ammoclip:1, ammomax:3, fdid:128064301, fdname:'Int_ShieldCellBank_Size1_Class4' },
		31110 : { mtype:'iscb', cost:   20200, name:'Shield Cell Bank', class:1, rating:'A', mass:  1.30, integ: 48, pwrdraw:0.97, boottime:25, spinup:5, duration: 1.0, shieldrnf:28.0, thmload:170.0, ammoclip:1, ammomax:2, fdid:128064302, fdname:'Int_ShieldCellBank_Size1_Class5' },
		
		31250 : { mtype:'iscb', cost:    1450, name:'Shield Cell Bank', class:2, rating:'E', mass:  2.50, integ: 41, pwrdraw:0.50, boottime:25, spinup:5, duration: 1.5, shieldrnf:14.0, thmload:240.0, ammoclip:1, ammomax:4, fdid:128064303, fdname:'Int_ShieldCellBank_Size2_Class1' },
		31240 : { mtype:'iscb', cost:    3620, name:'Shield Cell Bank', class:2, rating:'D', mass:  1.00, integ: 31, pwrdraw:0.67, boottime:25, spinup:5, duration: 1.5, shieldrnf:18.0, thmload:240.0, ammoclip:1, ammomax:2, fdid:128064304, fdname:'Int_ShieldCellBank_Size2_Class2' },
		31230 : { mtype:'iscb', cost:    9050, name:'Shield Cell Bank', class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw:0.84, boottime:25, spinup:5, duration: 1.5, shieldrnf:23.0, thmload:240.0, ammoclip:1, ammomax:3, fdid:128064305, fdname:'Int_ShieldCellBank_Size2_Class3' },
		31220 : { mtype:'iscb', cost:   22620, name:'Shield Cell Bank', class:2, rating:'B', mass:  4.00, integ: 71, pwrdraw:1.01, boottime:25, spinup:5, duration: 1.5, shieldrnf:28.0, thmload:240.0, ammoclip:1, ammomax:4, fdid:128064306, fdname:'Int_ShieldCellBank_Size2_Class4' },
		31210 : { mtype:'iscb', cost:   56550, name:'Shield Cell Bank', class:2, rating:'A', mass:  2.50, integ: 61, pwrdraw:1.18, boottime:25, spinup:5, duration: 1.5, shieldrnf:32.0, thmload:240.0, ammoclip:1, ammomax:3, fdid:128064307, fdname:'Int_ShieldCellBank_Size2_Class5' },
		
		31350 : { mtype:'iscb', cost:    4050, name:'Shield Cell Bank', class:3, rating:'E', mass:  5.00, integ: 51, pwrdraw:0.61, boottime:25, spinup:5, duration: 2.3, shieldrnf:17.0, thmload:340.0, ammoclip:1, ammomax:4, fdid:128064308, fdname:'Int_ShieldCellBank_Size3_Class1' },
		31340 : { mtype:'iscb', cost:   10130, name:'Shield Cell Bank', class:3, rating:'D', mass:  2.00, integ: 38, pwrdraw:0.82, boottime:25, spinup:5, duration: 2.3, shieldrnf:23.0, thmload:340.0, ammoclip:1, ammomax:2, fdid:128064309, fdname:'Int_ShieldCellBank_Size3_Class2' },
		31330 : { mtype:'iscb', cost:   25330, name:'Shield Cell Bank', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:1.02, boottime:25, spinup:5, duration: 2.3, shieldrnf:29.0, thmload:340.0, ammoclip:1, ammomax:3, fdid:128064310, fdname:'Int_ShieldCellBank_Size3_Class3' },
		31320 : { mtype:'iscb', cost:   63330, name:'Shield Cell Bank', class:3, rating:'B', mass:  8.00, integ: 90, pwrdraw:1.22, boottime:25, spinup:5, duration: 2.3, shieldrnf:35.0, thmload:340.0, ammoclip:1, ammomax:4, fdid:128064311, fdname:'Int_ShieldCellBank_Size3_Class4' },
		31310 : { mtype:'iscb', cost:  158330, name:'Shield Cell Bank', class:3, rating:'A', mass:  5.00, integ: 77, pwrdraw:1.43, boottime:25, spinup:5, duration: 2.3, shieldrnf:41.0, thmload:340.0, ammoclip:1, ammomax:3, fdid:128064312, fdname:'Int_ShieldCellBank_Size3_Class5' },
		
		31450 : { mtype:'iscb', cost:   11350, name:'Shield Cell Bank', class:4, rating:'E', mass: 10.00, integ: 64, pwrdraw:0.74, boottime:25, spinup:5, duration: 3.4, shieldrnf:20.0, thmload:410.0, ammoclip:1, ammomax:4, fdid:128064313, fdname:'Int_ShieldCellBank_Size4_Class1' },
		31440 : { mtype:'iscb', cost:   28370, name:'Shield Cell Bank', class:4, rating:'D', mass:  4.00, integ: 48, pwrdraw:0.98, boottime:25, spinup:5, duration: 3.4, shieldrnf:26.0, thmload:410.0, ammoclip:1, ammomax:2, fdid:128064314, fdname:'Int_ShieldCellBank_Size4_Class2' },
		31430 : { mtype:'iscb', cost:   70930, name:'Shield Cell Bank', class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw:1.23, boottime:25, spinup:5, duration: 3.4, shieldrnf:33.0, thmload:410.0, ammoclip:1, ammomax:3, fdid:128064315, fdname:'Int_ShieldCellBank_Size4_Class3' },
		31420 : { mtype:'iscb', cost:  177330, name:'Shield Cell Bank', class:4, rating:'B', mass: 16.00, integ:112, pwrdraw:1.48, boottime:25, spinup:5, duration: 3.4, shieldrnf:39.0, thmload:410.0, ammoclip:1, ammomax:4, fdid:128064316, fdname:'Int_ShieldCellBank_Size4_Class4' },
		31410 : { mtype:'iscb', cost:  443330, name:'Shield Cell Bank', class:4, rating:'A', mass: 10.00, integ: 96, pwrdraw:1.72, boottime:25, spinup:5, duration: 3.4, shieldrnf:46.0, thmload:410.0, ammoclip:1, ammomax:3, fdid:128064317, fdname:'Int_ShieldCellBank_Size4_Class5' },
		
		31550 : { mtype:'iscb', cost:   31780, name:'Shield Cell Bank', class:5, rating:'E', mass: 20.00, integ: 77, pwrdraw:0.90, boottime:25, spinup:5, duration: 5.1, shieldrnf:21.0, thmload:540.0, ammoclip:1, ammomax:4, fdid:128064318, fdname:'Int_ShieldCellBank_Size5_Class1' },
		31540 : { mtype:'iscb', cost:   79440, name:'Shield Cell Bank', class:5, rating:'D', mass:  8.00, integ: 58, pwrdraw:1.20, boottime:25, spinup:5, duration: 5.1, shieldrnf:28.0, thmload:540.0, ammoclip:1, ammomax:2, fdid:128064319, fdname:'Int_ShieldCellBank_Size5_Class2' },
		31530 : { mtype:'iscb', cost:  198610, name:'Shield Cell Bank', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:1.50, boottime:25, spinup:5, duration: 5.1, shieldrnf:35.0, thmload:540.0, ammoclip:1, ammomax:3, fdid:128064320, fdname:'Int_ShieldCellBank_Size5_Class3' },
		31520 : { mtype:'iscb', cost:  496530, name:'Shield Cell Bank', class:5, rating:'B', mass: 32.00, integ:134, pwrdraw:1.80, boottime:25, spinup:5, duration: 5.1, shieldrnf:41.0, thmload:540.0, ammoclip:1, ammomax:4, fdid:128064321, fdname:'Int_ShieldCellBank_Size5_Class4' },
		31510 : { mtype:'iscb', cost: 1241320, name:'Shield Cell Bank', class:5, rating:'A', mass: 20.00, integ:115, pwrdraw:2.10, boottime:25, spinup:5, duration: 5.1, shieldrnf:48.0, thmload:540.0, ammoclip:1, ammomax:3, fdid:128064322, fdname:'Int_ShieldCellBank_Size5_Class5' },
		
		31650 : { mtype:'iscb', cost:   88980, name:'Shield Cell Bank', class:6, rating:'E', mass: 40.00, integ: 90, pwrdraw:1.06, boottime:25, spinup:5, duration: 7.6, shieldrnf:20.0, thmload:640.0, ammoclip:1, ammomax:5, fdid:128064323, fdname:'Int_ShieldCellBank_Size6_Class1' },
		31640 : { mtype:'iscb', cost:  222440, name:'Shield Cell Bank', class:6, rating:'D', mass: 16.00, integ: 68, pwrdraw:1.42, boottime:25, spinup:5, duration: 7.6, shieldrnf:26.0, thmload:640.0, ammoclip:1, ammomax:3, fdid:128064324, fdname:'Int_ShieldCellBank_Size6_Class2' },
		31630 : { mtype:'iscb', cost:  556110, name:'Shield Cell Bank', class:6, rating:'C', mass: 40.00, integ:113, pwrdraw:1.77, boottime:25, spinup:5, duration: 7.6, shieldrnf:33.0, thmload:640.0, ammoclip:1, ammomax:4, fdid:128064325, fdname:'Int_ShieldCellBank_Size6_Class3' },
		31620 : { mtype:'iscb', cost: 1390280, name:'Shield Cell Bank', class:6, rating:'B', mass: 64.00, integ:158, pwrdraw:2.12, boottime:25, spinup:5, duration: 7.6, shieldrnf:39.0, thmload:640.0, ammoclip:1, ammomax:5, fdid:128064326, fdname:'Int_ShieldCellBank_Size6_Class4' },
		31610 : { mtype:'iscb', cost: 3475690, name:'Shield Cell Bank', class:6, rating:'A', mass: 40.00, integ:136, pwrdraw:2.48, boottime:25, spinup:5, duration: 7.6, shieldrnf:46.0, thmload:640.0, ammoclip:1, ammomax:4, fdid:128064327, fdname:'Int_ShieldCellBank_Size6_Class5' },
		
		31750 : { mtype:'iscb', cost:  249140, name:'Shield Cell Bank', class:7, rating:'E', mass: 80.00, integ:105, pwrdraw:1.24, boottime:25, spinup:5, duration:11.4, shieldrnf:24.0, thmload:720.0, ammoclip:1, ammomax:5, fdid:128064328, fdname:'Int_ShieldCellBank_Size7_Class1' },
		31740 : { mtype:'iscb', cost:  622840, name:'Shield Cell Bank', class:7, rating:'D', mass: 32.00, integ: 79, pwrdraw:1.66, boottime:25, spinup:5, duration:11.4, shieldrnf:32.0, thmload:720.0, ammoclip:1, ammomax:3, fdid:128064329, fdname:'Int_ShieldCellBank_Size7_Class2' },
		31730 : { mtype:'iscb', cost: 1557110, name:'Shield Cell Bank', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:2.07, boottime:25, spinup:5, duration:11.4, shieldrnf:41.0, thmload:720.0, ammoclip:1, ammomax:4, fdid:128064330, fdname:'Int_ShieldCellBank_Size7_Class3' },
		31720 : { mtype:'iscb', cost: 3892770, name:'Shield Cell Bank', class:7, rating:'B', mass:128.00, integ:183, pwrdraw:2.48, boottime:25, spinup:5, duration:11.4, shieldrnf:49.0, thmload:720.0, ammoclip:1, ammomax:5, fdid:128064331, fdname:'Int_ShieldCellBank_Size7_Class4' },
		31710 : { mtype:'iscb', cost: 9731930, name:'Shield Cell Bank', class:7, rating:'A', mass: 80.00, integ:157, pwrdraw:2.90, boottime:25, spinup:5, duration:11.4, shieldrnf:57.0, thmload:720.0, ammoclip:1, ammomax:4, fdid:128064332, fdname:'Int_ShieldCellBank_Size7_Class5' },
		
		31850 : { mtype:'iscb', cost:  697580, name:'Shield Cell Bank', class:8, rating:'E', mass:160.00, integ:120, pwrdraw:1.44, boottime:25, spinup:5, duration:17.1, shieldrnf:28.0, thmload:800.0, ammoclip:1, ammomax:5, fdid:128064333, fdname:'Int_ShieldCellBank_Size8_Class1' },
		31840 : { mtype:'iscb', cost: 1743960, name:'Shield Cell Bank', class:8, rating:'D', mass: 64.00, integ: 90, pwrdraw:1.92, boottime:25, spinup:5, duration:17.1, shieldrnf:37.0, thmload:800.0, ammoclip:1, ammomax:3, fdid:128064334, fdname:'Int_ShieldCellBank_Size8_Class2' },
		31830 : { mtype:'iscb', cost: 4359900, name:'Shield Cell Bank', class:8, rating:'C', mass:160.00, integ:150, pwrdraw:2.40, boottime:25, spinup:5, duration:17.1, shieldrnf:47.0, thmload:800.0, ammoclip:1, ammomax:4, fdid:128064335, fdname:'Int_ShieldCellBank_Size8_Class3' },
		31820 : { mtype:'iscb', cost:10899760, name:'Shield Cell Bank', class:8, rating:'B', mass:256.00, integ:210, pwrdraw:2.88, boottime:25, spinup:5, duration:17.1, shieldrnf:56.0, thmload:800.0, ammoclip:1, ammomax:5, fdid:128064336, fdname:'Int_ShieldCellBank_Size8_Class4' },
		31810 : { mtype:'iscb', cost:27249390, name:'Shield Cell Bank', class:8, rating:'A', mass:160.00, integ:180, pwrdraw:3.36, boottime:25, spinup:5, duration:17.1, shieldrnf:65.0, thmload:800.0, ammoclip:1, ammomax:4, fdid:128064337, fdname:'Int_ShieldCellBank_Size8_Class5' },
		
		
	//	30150 : { mtype:'isg', cost:      NaN, name:'Shield Generator', class:1, rating:'E', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:1, minmass: 13.0, optmass:  25.0, maxmass:  63.0, minmul:30, optmul: 80, maxmul:130, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:null, fdname:null }, // TODO
	//	30140 : { mtype:'isg', cost:      NaN, name:'Shield Generator', class:1, rating:'D', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:1, minmass: 13.0, optmass:  25.0, maxmass:  63.0, minmul:40, optmul: 90, maxmul:140, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:null, fdname:null }, // TODO
	//	30130 : { mtype:'isg', cost:      NaN, name:'Shield Generator', class:1, rating:'C', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:1, minmass: 13.0, optmass:  25.0, maxmass:  63.0, minmul:50, optmul:100, maxmul:150, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:null, fdname:null }, // TODO
	//	30120 : { mtype:'isg', cost:      NaN, name:'Shield Generator', class:1, rating:'B', mass:   NaN, integ:NaN, pwrdraw: NaN, boottime:1, minmass: 13.0, optmass:  25.0, maxmass:  63.0, minmul:60, optmul:110, maxmul:160, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:null, fdname:null }, // TODO
		30110 : { mtype:'isg', cost:    88075, name:'Shield Generator', class:1, rating:'A', mass:  1.30, integ: 48, pwrdraw:1.68, boottime:1, minmass: 13.0, optmass:  25.0, maxmass:  63.0, minmul:70, optmul:120, maxmul:170, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064262, fdname:'Int_ShieldGenerator_Size1_Class5' },
		
		30250 : { mtype:'isg', cost:     1980, name:'Shield Generator', class:2, rating:'E', mass:  2.50, integ: 41, pwrdraw:0.90, boottime:1, minmass: 28.0, optmass:  55.0, maxmass: 138.0, minmul:30, optmul: 80, maxmul:130, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064263, fdname:'Int_ShieldGenerator_Size2_Class1' },
		30240 : { mtype:'isg', cost:     5930, name:'Shield Generator', class:2, rating:'D', mass:  1.00, integ: 31, pwrdraw:1.20, boottime:1, minmass: 28.0, optmass:  55.0, maxmass: 138.0, minmul:40, optmul: 90, maxmul:140, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064264, fdname:'Int_ShieldGenerator_Size2_Class2' },
		30230 : { mtype:'isg', cost:    17800, name:'Shield Generator', class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw:1.50, boottime:1, minmass: 28.0, optmass:  55.0, maxmass: 138.0, minmul:50, optmul:100, maxmul:150, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064265, fdname:'Int_ShieldGenerator_Size2_Class3' },
		30220 : { mtype:'isg', cost:    53410, name:'Shield Generator', class:2, rating:'B', mass:  4.00, integ: 71, pwrdraw:1.80, boottime:1, minmass: 28.0, optmass:  55.0, maxmass: 138.0, minmul:60, optmul:110, maxmul:160, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064266, fdname:'Int_ShieldGenerator_Size2_Class4' },
		30210 : { mtype:'isg', cost:   160220, name:'Shield Generator', class:2, rating:'A', mass:  2.50, integ: 61, pwrdraw:2.10, boottime:1, minmass: 28.0, optmass:  55.0, maxmass: 138.0, minmul:70, optmul:120, maxmul:170, genrate:1.0, bgenrate:1.60, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064267, fdname:'Int_ShieldGenerator_Size2_Class5' },
		
		30350 : { mtype:'isg', cost:     6270, name:'Shield Generator', class:3, rating:'E', mass:  5.00, integ: 51, pwrdraw:1.08, boottime:1, minmass: 83.0, optmass: 165.0, maxmass: 413.0, minmul:30, optmul: 80, maxmul:130, genrate:1.0, bgenrate:1.87, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064268, fdname:'Int_ShieldGenerator_Size3_Class1' },
		30340 : { mtype:'isg', cost:    18810, name:'Shield Generator', class:3, rating:'D', mass:  2.00, integ: 38, pwrdraw:1.44, boottime:1, minmass: 83.0, optmass: 165.0, maxmass: 413.0, minmul:40, optmul: 90, maxmul:140, genrate:1.0, bgenrate:1.87, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064269, fdname:'Int_ShieldGenerator_Size3_Class2' },
		30330 : { mtype:'isg', cost:    56440, name:'Shield Generator', class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:1.80, boottime:1, minmass: 83.0, optmass: 165.0, maxmass: 413.0, minmul:50, optmul:100, maxmul:150, genrate:1.0, bgenrate:1.87, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064270, fdname:'Int_ShieldGenerator_Size3_Class3' },
		30320 : { mtype:'isg', cost:   169300, name:'Shield Generator', class:3, rating:'B', mass:  8.00, integ: 90, pwrdraw:2.16, boottime:1, minmass: 83.0, optmass: 165.0, maxmass: 413.0, minmul:60, optmul:110, maxmul:160, genrate:1.0, bgenrate:1.87, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064271, fdname:'Int_ShieldGenerator_Size3_Class4' },
		30310 : { mtype:'isg', cost:   507910, name:'Shield Generator', class:3, rating:'A', mass:  5.00, integ: 77, pwrdraw:2.52, boottime:1, minmass: 83.0, optmass: 165.0, maxmass: 413.0, minmul:70, optmul:120, maxmul:170, genrate:1.0, bgenrate:1.87, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064272, fdname:'Int_ShieldGenerator_Size3_Class5' },
		
		30450 : { mtype:'isg', cost:    19880, name:'Shield Generator', class:4, rating:'E', mass: 10.00, integ: 64, pwrdraw:1.32, boottime:1, minmass:143.0, optmass: 285.0, maxmass: 713.0, minmul:30, optmul: 80, maxmul:130, genrate:1.0, bgenrate:2.53, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064273, fdname:'Int_ShieldGenerator_Size4_Class1' },
		30440 : { mtype:'isg', cost:    59630, name:'Shield Generator', class:4, rating:'D', mass:  4.00, integ: 48, pwrdraw:1.76, boottime:1, minmass:143.0, optmass: 285.0, maxmass: 713.0, minmul:40, optmul: 90, maxmul:140, genrate:1.0, bgenrate:2.53, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064274, fdname:'Int_ShieldGenerator_Size4_Class2' },
		30430 : { mtype:'isg', cost:   178900, name:'Shield Generator', class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw:2.20, boottime:1, minmass:143.0, optmass: 285.0, maxmass: 713.0, minmul:50, optmul:100, maxmul:150, genrate:1.0, bgenrate:2.53, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064275, fdname:'Int_ShieldGenerator_Size4_Class3' },
		30420 : { mtype:'isg', cost:   536690, name:'Shield Generator', class:4, rating:'B', mass: 16.00, integ:112, pwrdraw:2.64, boottime:1, minmass:143.0, optmass: 285.0, maxmass: 713.0, minmul:60, optmul:110, maxmul:160, genrate:1.0, bgenrate:2.53, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064276, fdname:'Int_ShieldGenerator_Size4_Class4' },
		30410 : { mtype:'isg', cost:  1610080, name:'Shield Generator', class:4, rating:'A', mass: 10.00, integ: 96, pwrdraw:3.08, boottime:1, minmass:143.0, optmass: 285.0, maxmass: 713.0, minmul:70, optmul:120, maxmul:170, genrate:1.0, bgenrate:2.53, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064277, fdname:'Int_ShieldGenerator_Size4_Class5' },
		
		30550 : { mtype:'isg', cost:    63010, name:'Shield Generator', class:5, rating:'E', mass: 20.00, integ: 77, pwrdraw:1.56, boottime:1, minmass:203.0, optmass: 405.0, maxmass:1013.0, minmul:30, optmul: 80, maxmul:130, genrate:1.0, bgenrate:3.75, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064278, fdname:'Int_ShieldGenerator_Size5_Class1' },
		30540 : { mtype:'isg', cost:   189040, name:'Shield Generator', class:5, rating:'D', mass:  8.00, integ: 58, pwrdraw:2.08, boottime:1, minmass:203.0, optmass: 405.0, maxmass:1013.0, minmul:40, optmul: 90, maxmul:140, genrate:1.0, bgenrate:3.75, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064279, fdname:'Int_ShieldGenerator_Size5_Class2' },
		30530 : { mtype:'isg', cost:   567110, name:'Shield Generator', class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:2.60, boottime:1, minmass:203.0, optmass: 405.0, maxmass:1013.0, minmul:50, optmul:100, maxmul:150, genrate:1.0, bgenrate:3.75, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064280, fdname:'Int_ShieldGenerator_Size5_Class3' },
		30520 : { mtype:'isg', cost:  1701320, name:'Shield Generator', class:5, rating:'B', mass: 32.00, integ:134, pwrdraw:3.12, boottime:1, minmass:203.0, optmass: 405.0, maxmass:1013.0, minmul:60, optmul:110, maxmul:160, genrate:1.0, bgenrate:3.75, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064281, fdname:'Int_ShieldGenerator_Size5_Class4' },
		30510 : { mtype:'isg', cost:  5103950, name:'Shield Generator', class:5, rating:'A', mass: 20.00, integ:115, pwrdraw:3.64, boottime:1, minmass:203.0, optmass: 405.0, maxmass:1013.0, minmul:70, optmul:120, maxmul:170, genrate:1.0, bgenrate:3.75, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064282, fdname:'Int_ShieldGenerator_Size5_Class5' },
		
		30650 : { mtype:'isg', cost:   199750, name:'Shield Generator', class:6, rating:'E', mass: 40.00, integ: 90, pwrdraw:1.86, boottime:1, minmass:270.0, optmass: 540.0, maxmass:1350.0, minmul:30, optmul: 80, maxmul:130, genrate:1.3, bgenrate:5.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064283, fdname:'Int_ShieldGenerator_Size6_Class1' },
		30640 : { mtype:'isg', cost:   599240, name:'Shield Generator', class:6, rating:'D', mass: 16.00, integ: 68, pwrdraw:2.48, boottime:1, minmass:270.0, optmass: 540.0, maxmass:1350.0, minmul:40, optmul: 90, maxmul:140, genrate:1.3, bgenrate:5.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064284, fdname:'Int_ShieldGenerator_Size6_Class2' },
		30630 : { mtype:'isg', cost:  1797730, name:'Shield Generator', class:6, rating:'C', mass: 40.00, integ:113, pwrdraw:3.10, boottime:1, minmass:270.0, optmass: 540.0, maxmass:1350.0, minmul:50, optmul:100, maxmul:150, genrate:1.3, bgenrate:5.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064285, fdname:'Int_ShieldGenerator_Size6_Class3' },
		30620 : { mtype:'isg', cost:  5393180, name:'Shield Generator', class:6, rating:'B', mass: 64.00, integ:158, pwrdraw:3.72, boottime:1, minmass:270.0, optmass: 540.0, maxmass:1350.0, minmul:60, optmul:110, maxmul:160, genrate:1.3, bgenrate:5.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064286, fdname:'Int_ShieldGenerator_Size6_Class4' },
		30610 : { mtype:'isg', cost: 16179530, name:'Shield Generator', class:6, rating:'A', mass: 40.00, integ:136, pwrdraw:4.34, boottime:1, minmass:270.0, optmass: 540.0, maxmass:1350.0, minmul:70, optmul:120, maxmul:170, genrate:1.3, bgenrate:5.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064287, fdname:'Int_ShieldGenerator_Size6_Class5' },
		
		30750 : { mtype:'isg', cost:   633200, name:'Shield Generator', class:7, rating:'E', mass: 80.00, integ:105, pwrdraw:2.10, boottime:1, minmass:530.0, optmass:1060.0, maxmass:2650.0, minmul:30, optmul: 80, maxmul:130, genrate:1.8, bgenrate:7.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064288, fdname:'Int_ShieldGenerator_Size7_Class1' },
		30740 : { mtype:'isg', cost:  1899600, name:'Shield Generator', class:7, rating:'D', mass: 32.00, integ: 79, pwrdraw:2.80, boottime:1, minmass:530.0, optmass:1060.0, maxmass:2650.0, minmul:40, optmul: 90, maxmul:140, genrate:1.8, bgenrate:7.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064289, fdname:'Int_ShieldGenerator_Size7_Class2' },
		30730 : { mtype:'isg', cost:  5698790, name:'Shield Generator', class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:3.50, boottime:1, minmass:530.0, optmass:1060.0, maxmass:2650.0, minmul:50, optmul:100, maxmul:150, genrate:1.8, bgenrate:7.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064290, fdname:'Int_ShieldGenerator_Size7_Class3' },
		30720 : { mtype:'isg', cost: 17096370, name:'Shield Generator', class:7, rating:'B', mass:128.00, integ:183, pwrdraw:4.20, boottime:1, minmass:530.0, optmass:1060.0, maxmass:2650.0, minmul:60, optmul:110, maxmul:160, genrate:1.8, bgenrate:7.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064291, fdname:'Int_ShieldGenerator_Size7_Class4' },
		30710 : { mtype:'isg', cost: 51289110, name:'Shield Generator', class:7, rating:'A', mass: 80.00, integ:157, pwrdraw:4.90, boottime:1, minmass:530.0, optmass:1060.0, maxmass:2650.0, minmul:70, optmul:120, maxmul:170, genrate:1.8, bgenrate:7.33, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064292, fdname:'Int_ShieldGenerator_Size7_Class5' },
		
		30850 : { mtype:'isg', cost:  2007240, name:'Shield Generator', class:8, rating:'E', mass:160.00, integ:120, pwrdraw:2.40, boottime:1, minmass:900.0, optmass:1800.0, maxmass:4500.0, minmul:30, optmul: 80, maxmul:130, genrate:2.4, bgenrate:9.6 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064293, fdname:'Int_ShieldGenerator_Size8_Class1' },
		30840 : { mtype:'isg', cost:  6021720, name:'Shield Generator', class:8, rating:'D', mass: 64.00, integ: 90, pwrdraw:3.20, boottime:1, minmass:900.0, optmass:1800.0, maxmass:4500.0, minmul:40, optmul: 90, maxmul:140, genrate:2.4, bgenrate:9.6 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064294, fdname:'Int_ShieldGenerator_Size8_Class2' },
		30830 : { mtype:'isg', cost: 18065170, name:'Shield Generator', class:8, rating:'C', mass:160.00, integ:150, pwrdraw:4.00, boottime:1, minmass:900.0, optmass:1800.0, maxmass:4500.0, minmul:50, optmul:100, maxmul:150, genrate:2.4, bgenrate:9.6 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064295, fdname:'Int_ShieldGenerator_Size8_Class3' },
		30820 : { mtype:'isg', cost: 54195500, name:'Shield Generator', class:8, rating:'B', mass:256.00, integ:210, pwrdraw:4.80, boottime:1, minmass:900.0, optmass:1800.0, maxmass:4500.0, minmul:60, optmul:110, maxmul:160, genrate:2.4, bgenrate:9.6 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064296, fdname:'Int_ShieldGenerator_Size8_Class4' },
		30810 : { mtype:'isg', cost:162586490, name:'Shield Generator', class:8, rating:'A', mass:160.00, integ:180, pwrdraw:5.60, boottime:1, minmass:900.0, optmass:1800.0, maxmass:4500.0, minmul:70, optmul:120, maxmul:170, genrate:2.4, bgenrate:9.6 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128064297, fdname:'Int_ShieldGenerator_Size8_Class5' },
		
		30132 : { mtype:'isg', cost:     7710, name:'Bi-Weave Shield Generator',  class:1, rating:'C', mass:  1.30, integ: 40, pwrdraw:1.20, boottime:1, minmass: 13.0, optmass:  25.0, maxmass:  63.0, minmul: 40, optmul: 90, maxmul:140, genrate: 1.8, bgenrate: 2.400, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671331, fdname:'Int_ShieldGenerator_Size1_Class3_Fast' }, // TODO: verify bgenrate
		30232 : { mtype:'isg', cost:    26710, name:'Bi-Weave Shield Generator',  class:2, rating:'C', mass:  2.50, integ: 51, pwrdraw:1.50, boottime:1, minmass: 28.0, optmass:  55.0, maxmass: 138.0, minmul: 40, optmul: 90, maxmul:140, genrate: 1.8, bgenrate: 2.400, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671332, fdname:'Int_ShieldGenerator_Size2_Class3_Fast' }, // TODO: verify bgenrate
		30332 : { mtype:'isg', cost:    84650, name:'Bi-Weave Shield Generator',  class:3, rating:'C', mass:  5.00, integ: 64, pwrdraw:1.80, boottime:1, minmass: 83.0, optmass: 165.0, maxmass: 413.0, minmul: 40, optmul: 90, maxmul:140, genrate: 1.8, bgenrate: 2.805, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671333, fdname:'Int_ShieldGenerator_Size3_Class3_Fast' }, // TODO: verify bgenrate
		30432 : { mtype:'isg', cost:   268350, name:'Bi-Weave Shield Generator',  class:4, rating:'C', mass: 10.00, integ: 80, pwrdraw:2.20, boottime:1, minmass:143.0, optmass: 285.0, maxmass: 713.0, minmul: 40, optmul: 90, maxmul:140, genrate: 1.8, bgenrate: 3.795, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671334, fdname:'Int_ShieldGenerator_Size4_Class3_Fast' }, // TODO: verify bgenrate
		30532 : { mtype:'isg', cost:   850660, name:'Bi-Weave Shield Generator',  class:5, rating:'C', mass: 20.00, integ: 96, pwrdraw:2.60, boottime:1, minmass:203.0, optmass: 405.0, maxmass:1013.0, minmul: 40, optmul: 90, maxmul:140, genrate: 2.2, bgenrate: 5.625, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671335, fdname:'Int_ShieldGenerator_Size5_Class3_Fast' }, // TODO: verify bgenrate
		30632 : { mtype:'isg', cost:  2696590, name:'Bi-Weave Shield Generator',  class:6, rating:'C', mass: 40.00, integ:113, pwrdraw:3.10, boottime:1, minmass:270.0, optmass: 540.0, maxmass:1350.0, minmul: 40, optmul: 90, maxmul:140, genrate: 3.2, bgenrate: 7.995, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671336, fdname:'Int_ShieldGenerator_Size6_Class3_Fast' }, // TODO: verify bgenrate
		30732 : { mtype:'isg', cost:  8548190, name:'Bi-Weave Shield Generator',  class:7, rating:'C', mass: 80.00, integ:131, pwrdraw:3.50, boottime:1, minmass:530.0, optmass:1060.0, maxmass:2650.0, minmul: 40, optmul: 90, maxmul:140, genrate: 4.4, bgenrate:10.995, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671337, fdname:'Int_ShieldGenerator_Size7_Class3_Fast' }, // TODO: verify bgenrate
		30832 : { mtype:'isg', cost: 27097750, name:'Bi-Weave Shield Generator',  class:8, rating:'C', mass:160.00, integ:150, pwrdraw:4.00, boottime:1, minmass:900.0, optmass:1800.0, maxmass:4500.0, minmul: 40, optmul: 90, maxmul:140, genrate: 5.8, bgenrate:14.400, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671338, fdname:'Int_ShieldGenerator_Size8_Class3_Fast' }, // TODO: verify bgenrate
		
		30111 : { mtype:'isg', cost:   132200, name:'Prismatic Shield Generator', class:1, rating:'A', mass:  2.60, integ: 48, pwrdraw:2.52, boottime:1, minmass: 13.0, optmass:  25.0, maxmass:  63.0, minmul:100, optmul:150, maxmul:200, genrate: 1.0, bgenrate: 1.2 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671323, fdname:'Int_ShieldGenerator_Size1_Class5_Strong' }, // TODO: verify bgenrate
		30211 : { mtype:'isg', cost:   240340, name:'Prismatic Shield Generator', class:2, rating:'A', mass:  5.00, integ: 61, pwrdraw:3.15, boottime:1, minmass: 28.0, optmass:  55.0, maxmass: 138.0, minmul:100, optmul:150, maxmul:200, genrate: 1.0, bgenrate: 1.2 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671324, fdname:'Int_ShieldGenerator_Size2_Class5_Strong' }, // TODO: verify bgenrate
		30311 : { mtype:'isg', cost:   761870, name:'Prismatic Shield Generator', class:3, rating:'A', mass: 10.00, integ: 77, pwrdraw:3.78, boottime:1, minmass: 83.0, optmass: 165.0, maxmass: 413.0, minmul:100, optmul:150, maxmul:200, genrate: 1.0, bgenrate: 1.3 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671325, fdname:'Int_ShieldGenerator_Size3_Class5_Strong' }, // TODO: verify bgenrate
		30411 : { mtype:'isg', cost:  2415120, name:'Prismatic Shield Generator', class:4, rating:'A', mass: 20.00, integ: 96, pwrdraw:4.62, boottime:1, minmass:143.0, optmass: 285.0, maxmass: 713.0, minmul:100, optmul:150, maxmul:200, genrate: 1.0, bgenrate: 1.66, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671326, fdname:'Int_ShieldGenerator_Size4_Class5_Strong' },
		30511 : { mtype:'isg', cost:  7655930, name:'Prismatic Shield Generator', class:5, rating:'A', mass: 40.00, integ:115, pwrdraw:5.46, boottime:1, minmass:203.0, optmass: 405.0, maxmass:1013.0, minmul:100, optmul:150, maxmul:200, genrate: 1.0, bgenrate: 2.34, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671327, fdname:'Int_ShieldGenerator_Size5_Class5_Strong' }, // TODO: verify bgenrate
		30611 : { mtype:'isg', cost: 24269300, name:'Prismatic Shield Generator', class:6, rating:'A', mass: 80.00, integ:136, pwrdraw:6.51, boottime:1, minmass:270.0, optmass: 540.0, maxmass:1350.0, minmul:100, optmul:150, maxmul:200, genrate: 1.0, bgenrate: 3.2 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671328, fdname:'Int_ShieldGenerator_Size6_Class5_Strong' }, // TODO: verify bgenrate
		30711 : { mtype:'isg', cost: 76933670, name:'Prismatic Shield Generator', class:7, rating:'A', mass:160.00, integ:157, pwrdraw:7.35, boottime:1, minmass:530.0, optmass:1060.0, maxmass:2650.0, minmul:100, optmul:150, maxmul:200, genrate: 1.1, bgenrate: 4.25, thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671329, fdname:'Int_ShieldGenerator_Size7_Class5_Strong' }, // TODO: verify bgenrate
		30811 : { mtype:'isg', cost:243879730, name:'Prismatic Shield Generator', class:8, rating:'A', mass:320.00, integ:180, pwrdraw:8.40, boottime:1, minmass:900.0, optmass:1800.0, maxmass:4500.0, minmul:100, optmul:150, maxmul:200, genrate: 1.4, bgenrate: 5.4 , thmload:1.2, distdraw:0.6, kinres:40.0, thmres:-20.0, expres:50.0, fdid:128671330, fdname:'Int_ShieldGenerator_Size8_Class5_Strong' }, // TODO: verify bgenrate
		
		
		10150 : { mtype:'isbs', cost:   1000, name:'Basic Discovery Scanner',        class:1, rating:'E', mass:2.00, integ:40, activerng: 500, passiverng: 0.33, maxangle:10.00, scantime:5, fdid:128662535, fdname:'Int_StellarBodyDiscoveryScanner_Standard' },
		10140 : { mtype:'isbs', cost: 505000, name:'Intermediate Discovery Scanner', class:1, rating:'D', mass:2.00, integ:40, activerng:1000, passiverng: 3.34, maxangle:10.00, scantime:5, fdid:128663560, fdname:'Int_StellarBodyDiscoveryScanner_Intermediate' },
		10130 : { mtype:'isbs', cost:1545000, name:'Advanced Discovery Scanner',     class:1, rating:'C', mass:2.00, integ:40, activerng: 1/0, passiverng:33.36, maxangle:10.00, scantime:5, fdid:128663561, fdname:'Int_StellarBodyDiscoveryScanner_Advanced' },
		
		
		11130 : { mtype:'iss', cost: 250000, name:'Detailed Surface Scanner',       class:1, rating:'C', mass:1.30, fdid:128666634, fdname:'Int_DetailedSurfaceScanner_Tiny' },
		
/* TODO
Size 4 Meta Alloy Hull Reinforcement Package
*/
	}, // eddb.module{}
}; // eddb{}
