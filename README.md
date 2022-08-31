### Hexlet tests and linter status:
[![node CI](https://github.com/zhenia-chugaev/gendiff/actions/workflows/node-ci.yml/badge.svg)](https://github.com/zhenia-chugaev/gendiff/actions/workflows/node-ci.yml)
[![Actions Status](https://github.com/anorone/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/anorone/frontend-project-lvl2/actions/workflows/hexlet-check.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/6d0d6094b7fd5450c2be/maintainability)](https://codeclimate.com/github/zhenia-chugaev/gendiff/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/6d0d6094b7fd5450c2be/test_coverage)](https://codeclimate.com/github/zhenia-chugaev/gendiff/test_coverage)

## Description
The utility compares two config files (json or yaml) and shows the difference (possible formats: stylish (default), plain, json). If the value of the config key is a complex structure the utility shows the difference recursively.

## Demo
### Formats
#### stylish
[![asciicast](https://asciinema.org/a/517621.svg)](https://asciinema.org/a/517621?cols=242&rows=48)

#### plain
[![asciicast](https://asciinema.org/a/517864.svg)](https://asciinema.org/a/517864?cols=220&rows=35)

#### json
[![asciicast](https://asciinema.org/a/518106.svg)](https://asciinema.org/a/518106)

## Installation & Usage
Clone the repo.  
Run commands:
```shell
$ cd <project folder>
$ make install
```
From now on there will be `gendiff` command available in the global scope.
```shell
# Run to see the help page
$ gendiff -h
```

## Uninstallation
The package installation using instructions above links the package to the global scope of your computer just like `npm link` command does. To remove it totally you can run the following:
```shell
$ make uninstall
```
