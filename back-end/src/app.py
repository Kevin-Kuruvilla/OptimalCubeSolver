# app.py
from rubiks_cube import RubiksCube
from utils import path_to_json_object
import json

cube = RubiksCube()

cube.perform_algorithm("U' R U2 R' U F2 R' F' R' U")

path, moves = cube.solve_cube()

print("it looks like this", moves)

json_data = path_to_json_object(path)
with open('path.json', 'w') as json_file:
    json.dump(json_data, json_file)

