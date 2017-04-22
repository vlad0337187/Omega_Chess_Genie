uses Gtk
uses Cairo
uses Rsvg
uses Gdk
uses Settings


namespace Gui.Board

	
	//color_cells: array of Cell
	
	/*def dfdf()
		print "df"*/
	x_image_address : string
	
	def test_images ()
		/*var x_image_address = GLib.Path.build_filename (Settings.program_directory, "./images/cells/left_line-4.svg")
		var x_handle = new Rsvg.Handle.from_file ( Gui.Board.x_image_address )
		var x_pixbuf = x_handle.get_pixbuf ()
		var x_image = new Gtk.Image.from_pixbuf (x_pixbuf)
		
		Gui.window.add(x_image)*/
		
		var x_image_address = GLib.Path.build_filename (Settings.program_directory, "./images/cells/left_line-4.svg")
		var x_handle = new Rsvg.Handle.from_file ( x_image_address )
		
		x: double
		y: double
		x = 1
		y = 4
		
		var x_surface = new Cairo.ImageSurface (Cairo.Format.ARGB32, 512, 512)
		var x_context = new Cairo.Context ( x_surface )
		//x_context.scale (y, y) 
		var x_rendered = x_handle.render_cairo ( x_context )
		print @"Was rendered : $x_rendered"
		
		x_context.scale (y, y) 
		x_handle.render_cairo ( x_context )
		
		var x_image = new Gtk.Image.from_surface ( x_surface )
		
		Gui.window.add(x_image)
	
