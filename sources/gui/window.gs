uses Gtk
//uses GObject



namespace Gui
	
	window: Gtk.Window
	label: Gtk.Label
	

	def create_main_window (ref args: unowned array of string)
		Gtk.init (ref args)
		//print "Starting to create window."
		
		window = new Window (WindowType.TOPLEVEL)
		window.destroy.connect (Gtk.main_quit);
		window.size_allocate.connect (printer);
		window.title = "Omega Chess"
		
		/*label = new Label("Here will be the game")*/
		/*window.add(label)*/
		Gui.Board.test_images ()
		
		
		window.set_default_size (300, 200)
		window.show_all ()




	def printer ()
		print "resizing window"




	def quit_program ()
		GLib.Process.exit (0)
