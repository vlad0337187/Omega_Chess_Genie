uses Gtk
uses GLib
//uses Settings




init
	Settings.initialize ()
	Gui.create_main_window (ref args)
	Gui.Board.create_cells()
	
	Gtk.main ()
