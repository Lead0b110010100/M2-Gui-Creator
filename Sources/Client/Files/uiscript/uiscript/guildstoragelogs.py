import uiScriptLocale
BOARDWIDTH = 730
BOARDHEIGHT = 300

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
							"text" : "Gildenlager - Logs",
							"horizontal_align" : "center",
							"text_horizontal_align" : "center",
							"x" : 0,
							"y" : 3,
						},
					),
				},
				{
					"name": "GS_LogsMain",
					
					"x" : 10,
					"y" : 70,
					
					"width" : 580+115,
					"height" : 230,
					
					"children": 
					(
						{
							"name" : "SearchBoard",
							"type" : "thinboard",
							
							"x" : 0,
							"y" : 0,
							
							"width" : 580+115,
							"height" : 185,
							"children": 
							(
								{
									"name" : "LM_LogsGroupBox",
									"type" : "listbox_scroll",
									
									"x" : 10,
									"y" : 10,
									
									"width" : 580+100,
									"height" : 180-5,
								},
							),
						},
						
						{
							"name" : "LM_Delete", 
							"type" : "button",
							"text" : "Logs leeren",
							"x" : 10,
							"y" : 200,
							"default_image" : "d:/ymir work/ui/public/Large_Button_01.sub",
							"over_image" : "d:/ymir work/ui/public/Large_Button_02.sub",
							"down_image" : "d:/ymir work/ui/public/Large_Button_03.sub",
						},
					),
				},
				################################
				## Logs Search Menue Start
				################################
				{
					"name": "GS_LogsSearch",
					
					"x" : 10,
					"y" : 30,
					
					"width" : 230,
					"height" : 40,
					
					"children": 
					(
						{
							"name" : "LS_Label1",
							"type" : "text",
							
							"x" : 0,
							"y" : 0,
							
							"text" : "Nach Namen suchen:",
						},
						{
							"name" : "LS_SearchInputLineBG",
							"type" : "image",
							
							"x" : 0,
							"y" : 20,
			
							"image" : "d:/ymir work/ui/public/Parameter_Slot_03.sub",
							
							"children" :
							(
								{
									"name" : "LS_SearchInputLine",
									"type" : "editline",
									
									"width" : 90,
									"height" : 14,
									
									"text"	: "",
									
									"input_limit" : 15,
									
									"x" : 2,
									"y" : 2,
								},
							),
						},
						{
							"name" : "LS_Search", 
							"type" : "button",
							"text" : "Suchen",
							"x" : 110,
							"y" : 20,
							"default_image" : "d:/ymir work/ui/public/Middle_Button_01.sub",
							"over_image" : "d:/ymir work/ui/public/Middle_Button_02.sub",
							"down_image" : "d:/ymir work/ui/public/Middle_Button_03.sub",
						},
					),
				},
				################################
				## Logs Search Menue End
				################################
			),
		},
	),
}