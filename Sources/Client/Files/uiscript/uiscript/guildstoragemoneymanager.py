#|--------------------------------------------------------------------------------------|
#|    __________                  _____                                      			|
#|    \______   \_______   ____ _/ ____\ ____    ______  ______ ____ _______ 			|
#|     |     ___/\_  __ \ /  _ \\   __\_/ __ \  /  ___/ /  ___//  _ \\_  __ \			|
#|     |    |     |  | \/(  <_> )|  |  \  ___/  \___ \  \___ \(  <_> )|  | \/			|
#|     |____|     |__|    \____/ |__|   \___  >/____  >/____  >\____/ |__|   			|
#|                                          \/      \/      \/               			|
#|                       ___________         __           								|
#|                       \_   _____/  ____ _/  |_   ____  								|
#|                        |    __)_  /    \\   __\_/ __ \ 								|
#|                        |        \|   |  \|  |  \  ___/ 								|
#|                       /_______  /|___|  /|__|   \___  >								|
#|                               \/      \/            \/ 								|
#|--------------------------------------------------------------------------------------|

import uiScriptLocale
BOARDWIDTH = 190
BOARDHEIGHT = 70

window = {
	"name" : "GuildStorageMoneyManager",
	"style" : ("movable", "float",),

	"x" : SCREEN_WIDTH/2-BOARDWIDTH/2,
	"y" : SCREEN_HEIGHT/2-BOARDHEIGHT/2,

	"width" : BOARDWIDTH,
	"height" : BOARDHEIGHT,

	"children" :
	(
		{
			"name" : "Board",
			"type" : "board",
			"style" : ("attach",),

			"x" : 0,
			"y" : 0,

			"width" : BOARDWIDTH,
			"height" : BOARDHEIGHT,

			"children" :
			(
				{
					"name" : "TitleBar",
					"type" : "titlebar",
					"style" : ("attach",),

					"x" : 8,
					"y" : 8,

					"width" : BOARDWIDTH-15,
					"color" : "red",

					"children" :
					(
						{
							"name" : "TitleName",
							"type" : "text",
							"text" : "Geldverwaltung",
							"horizontal_align" : "center",
							"text_horizontal_align" : "center",
							"x" : 0,
							"y" : 3,
						},
					),
				},
				{
					"name" : "BetragLabel",
					"type" : "text",
					"text" : "Betrag",
					"horizontal_align" : "Center",
					"x" : 15,
					"y" : 40,
				},
				{
					"name" : "BetragInputImage",
					"type" : "image",
					"horizontal_align" : "Center",
					"x" : 48,
					"y" : 40,
	
					"image" : "d:/ymir work/ui/public/Parameter_Slot_03.sub",
				},
				{
					"name" : "AmountInput",
					"type" : "editline",
					"text" : "1",
					"horizontal_align" : "Center",
					"width" : 90,
					"height" : 18,
					"input_limit" : 9,
					"enable_codepage" : 0,
					"x" : 50+2,
					"y" : 40,
					
					"children" :
					(
						{
							"name" : "YangText",
							"type" : "text",
							"text" : "Yang",
							"x" : 60,
							"y" : 2,
						},
					),
				},
				{
					"name" : "CashInButton",
					"type" : "button",

					"x" : 145,
					"y" : 42,
					
					"tooltip_text" : 'Yang aufladen',
					"tooltip_x" : 0,
					"tooltip_y" : 35,


					"default_image" : "d:/ymir work/ui/game/windows/btn_plus_up.sub", 
					"over_image" : "d:/ymir work/ui/game/windows/btn_plus_over.sub",
					"down_image" : "d:/ymir work/ui/game/windows/btn_plus_down.sub", 
				},
				{
					"name" : "CashOutButton",
					"type" : "button",

					"x" : 145+17,
					"y" : 42,
					
					"tooltip_text" : 'Yang abheben',
					"tooltip_x" : 0,
					"tooltip_y" : 35,

					"default_image" : "d:/ymir work/ui/game/windows/btn_minus_up.sub", 
					"over_image" : "d:/ymir work/ui/game/windows/btn_minus_over.sub",
					"down_image" : "d:/ymir work/ui/game/windows/btn_minus_down.sub", 
				},
			),
		},
	),
}