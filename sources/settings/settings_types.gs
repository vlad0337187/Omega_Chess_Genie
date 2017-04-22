/* This file belongs to settings.gs file (sources/settings/settings.gs).
Here types and constants for settings are defined. */


namespace Settings

	const settings_file_relative_address : string = "./settings/settings.txt"

	const default_settings_text: string = """
# Lines, started with "#" are ignored. They are used for tips.

color scheme: classic
# availible values: general, classic, gray, green

cell size: 25
#specified cell size of board in pixels
"""
	
	
	program_directory : string  // will be same, as executable directory
	settings_text : string 
	cell_size: int  
	
	enum EnumColorScheme
		GENERAL
		CLASSIC
		GRAY
		GREEN
	
	color_scheme: EnumColorScheme
	
