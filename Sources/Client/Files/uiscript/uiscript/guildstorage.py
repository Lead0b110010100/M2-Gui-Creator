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

window = {
	"name" : "GuildStorage",

	"x" : SCREEN_WIDTH/2 - 250,
	"y" : SCREEN_HEIGHT/2 - 160,

	"style" : ("movable", "float",),

	"width" : 500,
	"height" : 320,

	"children" :
	(
		{
			"name" : "Board",
			"type" : "board",
			"style" : ("attach",),

			"x" : 0,
			"y" : 0,

			"width" : 500,
			"height" : 320,

			"children" :
			(
				{
					"name" : "TitleBar",
					"type" : "titlebar",
					"style" : ("attach",),

					"x" : 8,
					"y" : 8,

					"width" : 500-15,

					"children" :
					(
						{ "name":"TitleName", "type":"text", "x":0, "y":3, "text":'Gildenlager',"horizontal_align" : "center", "text_horizontal_align":"center",},
					),
				},
				
				################################
				## GuildStorage START
				################################
				
				{
					"name": "GuildStorage",
					
					"x" : 10,
					"y" : 35,
					
					"width" : 490,
					"height" : 280,
					
					"children": 
					(
						{
							"name" : "GS_Slots",
							"type" : "grid_table",

							"x" : 0,
							"y" : 0,

							"start_index" : 1,
							"x_count" : 15,
							"y_count" : 8,
							"x_step" : 32,
							"y_step" : 32,

							"image" : "d:/ymir work/ui/public/Slot_Base.sub",
						},
						
						{
							"name" : "GS_Tabs",
							
							"x"	: 340,
							"y"	: 292-35,
							
							"width" : 160,
							"height" : 20,
							
							"horizontal_align" : "right",
							
							"children":
							(
								{
									"name" : "GS_Tab_00",
									"type" : "radio_button",

									"x" : 0,
									"y" : 0,
									

									"default_image" : "d:/ymir work/ui/game/windows/tab_button_middle_01.sub",
									"over_image" : "d:/ymir work/ui/game/windows/tab_button_middle_02.sub",
									"down_image" : "d:/ymir work/ui/game/windows/tab_button_middle_03.sub",
									"tooltip_text" : "Gildenlager Seite 1",

									"children" :
									(
										{
											"name" : "GS_Tab_00_Print",
											"type" : "text",

											"x" : 0,
											"y" : 0,

											"all_align" : "center",

											"text" : "I",
										},
									),
								},
								{
									"name" : "GS_Tab_01",
									"type" : "radio_button",

									"x" : 0+53,
									"y" : 0,

									"default_image" : "d:/ymir work/ui/game/windows/tab_button_middle_01.sub",
									"over_image" : "d:/ymir work/ui/game/windows/tab_button_middle_02.sub",
									"down_image" : "d:/ymir work/ui/game/windows/tab_button_middle_03.sub",
									"tooltip_text" : "Gildenlager Seite 2",

									"children" :
									(
										{
											"name" : "GS_Tab_01_Print",
											"type" : "text",

											"x" : 0,
											"y" : 0,

											"all_align" : "center",

											"text" : "II",
										},
									),
								},
								{
									"name" : "GS_Tab_02",
									"type" : "radio_button",

									"x" : 0+53+53,
									"y" : 0,

									"default_image" : "d:/ymir work/ui/game/windows/tab_button_middle_01.sub",
									"over_image" : "d:/ymir work/ui/game/windows/tab_button_middle_02.sub",
									"down_image" : "d:/ymir work/ui/game/windows/tab_button_middle_03.sub",
									"tooltip_text" : "Gildenlager Seite 3",

									"children" :
									(
										{
											"name" : "GS_Tab_02_Print",
											"type" : "text",

											"x" : 0,
											"y" : 0,

											"all_align" : "center",

											"text" : "III",
										},
									),
								},
							),
						},
					),
				},
				
				################################
				## GuildStorage END
				################################
				
				################################
				## MoneyBox START
				################################
				{
					"name" : "MoneyBoard",
					"type" : "button",
					
					"x" : 140,
					"y" : 292,
					
					"horizontal_align" : "right",

					"default_image" : "d:/ymir work/ui/public/parameter_slot_05.sub",
					"over_image" : "d:/ymir work/ui/public/parameter_slot_05.sub",
					"down_image" : "d:/ymir work/ui/public/parameter_slot_05.sub",
					
					"children" :
					(
						{
							"name" : "MB_Icon",
							"type" : "image",

							"x" : -18,
							"y" : 2,

							"image":"d:/ymir work/ui/game/windows/money_icon.sub",
						},
						{
							"name" : "MB_Text",
							"type" : "text",
							
							"text_horizontal_align" : "center",
							"horizontal_align" : "center",
							"x" : 2,
							"y" : 2,
							
							"text" : "1234567890",
						},
					),
				},
				
				################################
				## MoneyBox END
				################################
				
				################################
				## Menue START
				################################
				
				{ 
					"name" : "GS_AdministrationButton", 
					"type" : "button",
					"text" : "Rechteverwaltung",
					"x" : 10,
					"y" : 292,
					"default_image" : "d:/ymir work/ui/public/Large_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Large_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Large_Button_03.sub",
				},
				
				{ 
					"name" : "GS_LogsButton", 
					"type" : "button",
					"text" : "Logs",
					"x" : 110,
					"y" : 292,
					"default_image" : "d:/ymir work/ui/public/Small_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Small_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Small_Button_03.sub",
				},
				################################
				## Menue END
				################################
			),
		},
	),
}