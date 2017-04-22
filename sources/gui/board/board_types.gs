uses Gtk
uses Gee


namespace Gui.Board
	
	enum CellColors
		DARK
		LIGHT
	
	enum BoardBorders  // идут слева-направо, сверху-вниз		
		TOP_A_W4
		TOP_B
		TOP_C
		TOP_D
		TOP_E
		TOP_F
		TOP_G
		TOP_H
		TOP_I
		TOP_J_W3
		
		LEFT_9_W4
		LEFT_8
		LEFT_7
		LEFT_6
		LEFT_5
		LEFT_4
		LEFT_3
		LEFT_2
		LEFT_1
		LEFT_0_W1
		
		RIGHT_9_W3
		RIGHT_8
		RIGHT_7
		RIGHT_6
		RIGHT_5
		RIGHT_4
		RIGHT_3
		RIGHT_2
		RIGHT_1
		RIGHT_0_W1
		
		BOTTOM_A_W1
		BOTTOM_B
		BOTTOM_C
		BOTTOM_D
		BOTTOM_E
		BOTTOM_F
		BOTTOM_G
		BOTTOM_H
		BOTTOM_I
		BOTTOM_J_W2
	
	outer_cells_images_addresses: dict of BoardBorders,string
	


	//var outer_cells_rsvg_handles = new dict of BoardBorders,string
	
	/*struct Cell
		image: Gtk.Image
		type: string
		color: cell_colors*/
	
	class Cell : Object
		prop image : Gtk.Image
		//prop type : string
		prop color : CellColors
		
		construct ( color : CellColors)
			image = new Gtk.Image()
