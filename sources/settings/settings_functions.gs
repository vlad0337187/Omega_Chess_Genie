/* This file belongs to settings.gs file (sources/settings/settings.gs).
Here functions for settings are defined. */


namespace Settings	
	
	
	def read_settings () : string
		/* We will read settings to string and return it.
		If settings file was absent - we will create it with default values.
		*/
		var settings_file_full_address = GLib.Path.build_filename (Settings.program_directory, settings_file_relative_address)
		
		settings_file_text : string 
		settings_file_length : size_t  //not needed
		
		try
			print "Reading settings file."
			GLib.FileUtils.get_contents (settings_file_full_address, out settings_file_text, out settings_file_length)
		except ex: FileError
			print "File with settings was absent. We'll create it."
			var default_settings_text_length = (ssize_t)default_settings_text.length
			try
				GLib.FileUtils.set_contents (settings_file_full_address, default_settings_text, default_settings_text_length)
			except ex2: FileError
				print "Cannot write settings file. Using defaults."
				settings_file_text = default_settings_text
		
		return settings_file_text
	
	
	
	
	def parse_settings_text (settings_text : string)
		/* Reads settings from file "./settings/settings.txt"
		and writes them to their variables.
		NEW settings add here, declare them in settings_types.gs !
		Launches from read_settings().
		*/
		
		for line in settings_text.split ("\n")
			if line.length == 0
				continue
			else if line.has_prefix ("#")
				continue
			
			var words = line.split (": ")
			
			if words[0] == "color scheme"
				if words[1] == "general"
					color_scheme = EnumColorScheme.GENERAL
				else if words[1] == "classic"
					color_scheme = EnumColorScheme.CLASSIC
				else if (words[1] == "grey") or (words[1] == "gray")
					color_scheme = EnumColorScheme.GRAY
				else if words[1] == "green"
					color_scheme = EnumColorScheme.GREEN
				else
					print "color scheme value is wrong. Using defaults."
			
			else if words[0] == "cell size"
				var cell_size_probably = int.parse ( words[1] )
				if cell_size_probably == 0
					print "Wrong cell size: {value}. It must be integer and > 0.".replace ("{value}", words[1])
					print "(using defaults)"
				else
					cell_size = cell_size_probably
			
			else
				print @"Warning: found unknown setting '$( words[0] )'."






