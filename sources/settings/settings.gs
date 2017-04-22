

namespace Settings
	
	
	def initialize()
		var program_address = GLib.Environment.get_variable ("_")
		Settings.program_directory = GLib.Path.get_dirname (program_address)
		GLib.Environment.set_current_dir (program_directory)
		
		var settings_text = read_settings ()
		parse_settings_text (default_settings_text)
		parse_settings_text (settings_text)
		
		
		//print @"color scheme: $color_scheme"
		//print @"cell size: $cell_size"
	
