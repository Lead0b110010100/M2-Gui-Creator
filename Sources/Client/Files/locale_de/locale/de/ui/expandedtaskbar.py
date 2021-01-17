import uiScriptLocale

window = {
	"name" : "ExpandTaskBar",

	"x" : SCREEN_WIDTH/2 - 5,
	"y" : SCREEN_HEIGHT - 74,

	"width" : 37*2,
	"height" : 37,

	"children" :
	(
		{
			"name" : "ExpanedTaskBar_Board",
			"type" : "window",
			
			"x" : 0,
			"y" : 0,
			
			"width" : 66,
			"height" : 32,
			
			"children" :
			(
				{
					"name" : "DragonSoulButton",
					"type" : "button",

					"x" : 0,
					"y" : 0,

					"tooltip_text" : uiScriptLocale.TASKBAR_DISABLE,
							
					"default_image" : "d:/ymir work/ui/dragonsoul/DragonSoul_Button_01.tga",
					"over_image" : "d:/ymir work/ui/dragonsoul/DragonSoul_Button_02.tga",
					"down_image" : "d:/ymir work/ui/dragonsoul/DragonSoul_Button_03.tga",
				},
				
				{
					"name" : "FastEquipButton",
					"type" : "button",
					
					"x" : 34,
					"y" : 0,
					
					"tooltip_text" : uiScriptLocale.FAST_EQUIP,
					
					"default_image" : "locale/de/ui/button/fast_equip_1.tga",
					"over_image" : "locale/de/ui/button/fast_equip_2.tga",
					"down_image" : "locale/de/ui/button/fast_equip_3.tga",
				},
			),
		},
	),
}