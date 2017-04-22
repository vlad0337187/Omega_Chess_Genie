#! /usr/bin/python3

import os

os.system('hg addremove')
os.system('hg commit')
os.system('hg push git+ssh://git@github.com:vlad1777d/Omega_Chess_Genie.git')
print("Script finished.")
