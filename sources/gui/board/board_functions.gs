uses Gtk


namespace Gui.Board

	def create_cells()
		var outer_cells_images_addresses = new dict of BoardBorders,string
	
		for var x1 = 1  to 10
			outer_cells_images_addresses.@set ( Gui.Board.BoardBorders.get_value ( x1 - 1 ), @"./images/cells/top_line-$(x1).svg" )
		
		for var x1 = 1  to 10
			outer_cells_images_addresses[ Gui.Board.BoardBorders[x1 + 9] ] = @"./images/cells/left_line-$(x1).svg"
		
		for var x1 = 1  to 10
			outer_cells_images_addresses[ Gui.Board.BoardBorders[x1 + 19] ] = @"./images/cells/right_line-$(x1).svg"
			
		for var x1 = 1  to 10
			outer_cells_images_addresses[ Gui.Board.BoardBorders[x1 - 29] ] = @"./images/cells/bottom_line-$(x1).svg"
		
		Gui.Board.outer_cells_images_addresses = outer_cells_images_addresses
