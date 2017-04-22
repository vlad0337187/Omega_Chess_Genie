#! /usr/bin/python3


output_file = "omega_chess"

dependencies = ["glib-2.0", "gdk-3.0", "librsvg-2.0", "gtk+-3.0", "cairo", "gee-0.8"]

source_files = [
	"./sources/omega_chess.gs",
	
		"./sources/gui/window.gs",
			"./sources/gui/board/board.gs",
				"./sources/gui/board/board_cells.gs",
				"./sources/gui/board/board_types.gs",
				"./sources/gui/board/board_functions.gs",
		
		"./sources/settings/settings.gs",
			"./sources/settings/settings_types.gs",
			"./sources/settings/settings_functions.gs",
]

compiler = "valac"




import os
import os.path


dependencies_list = [" --pkg " + x1 for x1 in dependencies]
packages = ""
for x1 in dependencies_list:
	packages += x1
packages = packages.lstrip()


sources = ""
for x1 in source_files:
	sources += (x1 + " ")
sources = sources.rstrip()


output = "--output " + output_file


command = "{compiler} {packages} {sources} {output}".format(
			compiler = compiler,
			packages = packages,
			sources = sources,
			output = output)


new_current_directory = os.path.dirname(__file__)
os.chdir(new_current_directory)

print("\n", command, "\n")
os.system(command)
