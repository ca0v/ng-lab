# python3
import os
import sys


def git_mv(old, new):
    print("git mv " + old + " " + new)


def rename_files(dir_path):
    dirs = os.listdir(dir_path)
    for item in dirs:
        # is it a directory or file?
        if os.path.isdir(dir_path + item):
            rename_files(dir_path + item + "/")
            if item.startswith("ng-"):
                new_name = item[3:]
                git_mv(dir_path + item, dir_path + new_name)

        else:
            # remove the ng- from item
            if item.startswith("ng-"):
                new_name = item[3:]
                git_mv(dir_path + item, dir_path + new_name)


rename_files("./")
