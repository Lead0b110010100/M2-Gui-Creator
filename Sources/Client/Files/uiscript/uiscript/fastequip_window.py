## -- ©2013, ®iWizz™. --
## ---------------------

# --<
import item
import uiScriptLocale

window = {
	"name" : "FastEquipWindow",
	
	"x" : SCREEN_WIDTH - 360,
	"y" : 140,
	
	"style" : ("movable", "float",),
	
	"width" : 212,
	"height" : 290,
	
	"children" :
	(
		{
			"name" : "board",
			"type" : "board",
			"style" : ("attach",),
			
			"x" : 0,
			"y" : 0,
			
			"width" : 212,
			"height" : 290,
			
			"children" :
			(
				{
					"name" : "TitleBar",
					"type" : "titlebar",
					"style" : ("attach",),
					
					"x" : 6,
					"y" : 6,
					
					"width" : 200,
					"color" : "yellow",
					
					"children" :
					(
						{ "name":"TitleName", "type":"text", "x":100, "y":3, "text":uiScriptLocale.FAST_EQUIP, "text_horizontal_align":"center" },
					),
				},
				
				{
					"name" : "equip_Base",
					"type" : "image",
					
					"x" : 27,
					"y" : 38,
					
					"image" : "d:/ymir work/ui/game/windows/fastequip_base.sub",
				},
				
				{
					"name" : "equipslot",
					"type" : "slot",
					"x" : 30,
					"y" : 41,
					
					"width" : 145,
					"height" : 172,
					
					"slot" : (
								{"index":1, "x":41, "y":37, "width":32, "height":64},
								{"index":2, "x":41, "y":2, "width":32, "height":32},
								{"index":3, "x":41, "y":145, "width":32, "height":32},
								{"index":4, "x":75, "y":67, "width":32, "height":32},
								{"index":5, "x":3, "y":3, "width":32, "height":96},
								{"index":6, "x":114, "y":84, "width":32, "height":32},
								{"index":7, "x":114, "y":52, "width":32, "height":32},
								{"index":8, "x":75, "y":35, "width":32, "height":32},
								{"index":9, "x":114, "y":1, "width":32, "height":32},
							),
				},
				
				{
					"name" : "change_button",
					"type" : "button",
					
					"x" : 16,
					"y" : 235,
					
					"text" : "Wechseln",
					
					"default_image" : "d:/ymir work/ui/public/Large_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Large_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Large_Button_03.sub",
				},
				
				{
					"name" : "clear_button",
					"type" : "button",
					
					"x" : 109,
					"y" : 235,
					
					"text" : "Zurücksetzen",
					
					"default_image" : "d:/ymir work/ui/public/Large_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Large_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Large_Button_03.sub",
				},
				
				{
					"name" : "page1_button",
					"type" : "radio_button",
					
					"x" : 10,
					"y" : 260,
					
					"text" : "Equip 1",
					
					"default_image" : "d:/ymir work/ui/public/Small_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Small_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Small_Button_03.sub",
				},
				
				{
					"name" : "page2_button",
					"type" : "radio_button",
					
					"x" : 60,
					"y" : 260,
					
					"text" : "Equip 2",
					
					"default_image" : "d:/ymir work/ui/public/Small_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Small_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Small_Button_03.sub",
				},
				
				{
					"name" : "page3_button",
					"type" : "radio_button",
					
					"x" : 110,
					"y" : 260,
					
					"text" : "Equip 3",
					
					"default_image" : "d:/ymir work/ui/public/Small_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Small_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Small_Button_03.sub",
				},
				
				{
					"name" : "page4_button",
					"type" : "radio_button",
					
					"x" : 160,
					"y" : 260,
					
					"text" : "Equip 4",
					
					"default_image" : "d:/ymir work/ui/public/Small_Button_01.sub",
					"over_image" : "d:/ymir work/ui/public/Small_Button_02.sub",
					"down_image" : "d:/ymir work/ui/public/Small_Button_03.sub",
				},
			),
		},
	),
}
# -->

