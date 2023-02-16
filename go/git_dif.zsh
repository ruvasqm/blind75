# !/usr/bin/env zsh
echo $(git ls-files --mo | awk '/^sol|go%/')
