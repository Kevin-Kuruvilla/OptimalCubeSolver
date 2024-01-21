# utils.py
import numpy as np

def cube_state_to_json_object(cube_state):
    return {
        "top_sticker_0": cube_state[0],
        "top_sticker_1": cube_state[1],
        "top_sticker_2": cube_state[2],
        "top_sticker_3": cube_state[3],
        "front_sticker_0": cube_state[4],
        "front_sticker_1": cube_state[5],
        "front_sticker_2": cube_state[6],
        "front_sticker_3": cube_state[7],
        "right_sticker_0": cube_state[8],
        "right_sticker_1": cube_state[9],
        "right_sticker_2": cube_state[10],
        "right_sticker_3": cube_state[11],
        "back_sticker_0": cube_state[12],
        "back_sticker_1": cube_state[13],
        "back_sticker_2": cube_state[14],
        "back_sticker_3": cube_state[15],
        "left_sticker_0": cube_state[16],
        "left_sticker_1": cube_state[17],
        "left_sticker_2": cube_state[18],
        "left_sticker_3": cube_state[19],
        "bottom_sticker_0": cube_state[20],
        "bottom_sticker_1": cube_state[21],
        "bottom_sticker_2": cube_state[22],
        "bottom_sticker_3": cube_state[23],
    }

def path_to_json_object(path):
    return {"Path": [cube_state_to_json_object(cube_state) for cube_state in path]}

def json_object_to_cube_state(json_object):
    top = [
        json_object["top_sticker_0"],
        json_object["top_sticker_1"],
        json_object["top_sticker_2"],
        json_object["top_sticker_3"]
    ]
    front = [
        json_object["front_sticker_0"],
        json_object["front_sticker_1"],
        json_object["front_sticker_2"],
        json_object["front_sticker_3"]
    ]
    right = [
        json_object["right_sticker_0"],
        json_object["right_sticker_1"],
        json_object["right_sticker_2"],
        json_object["right_sticker_3"]
    ]
    back = [
        json_object["back_sticker_0"],
        json_object["back_sticker_1"],
        json_object["back_sticker_2"],
        json_object["back_sticker_3"]
    ]
    left = [
        json_object["left_sticker_0"],
        json_object["left_sticker_1"],
        json_object["left_sticker_2"],
        json_object["left_sticker_3"]
    ]
    bottom = [
        json_object["bottom_sticker_0"],
        json_object["bottom_sticker_1"],
        json_object["bottom_sticker_2"],
        json_object["bottom_sticker_3"]
    ]

    return np.concatenate((top, front, right, back, left, bottom))


def json_object_to_path(json_object):
    return [json_object_to_cube_state(state_obj) for state_obj in json_object["Path"]]