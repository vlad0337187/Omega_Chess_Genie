uses Gtk




namespace Gui.Board
	
	window_scrollable: Gtk.ScrolledWindow  // Расположены в порядке наложения друг на друга
	overlay: Gtk.Overlay
		
	grid_cells: Gtk.Grid
	grid_pieces: Gtk.Grid
	grid_highlights: Gtk.Grid
	grid_buttons: Gtk.Grid
	
	
	def create_board()
		Board.window_scrollable = new Gtk.ScrolledWindow(null, null)
		Board.overlay = new Gtk.Overlay()
			
		Board.grid_cells = new Gtk.Grid()
		Board.grid_pieces = new Gtk.Grid()
		Board.grid_highlights = new Gtk.Grid()
		Board.grid_buttons = new Gtk.Grid()
