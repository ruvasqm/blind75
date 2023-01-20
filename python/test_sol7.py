def isValid(s: str) -> bool:
    stack = []
    for c in s:
        if c == '(' or c == '[' or c == '{':
            stack.append(c)
        else:
            if len(stack) == 0:
                return False
            if c == ')' and stack[-1] != '(':
                return False
            if c == ']' and stack[-1] != '[':
                return False
            if c == '}' and stack[-1] != '{':
                return False
            stack.pop()
    return len(stack) == 0


def test_isValid():
    assert isValid("()") is True
    assert isValid("()[]{}") is True
    assert isValid("(]") is False
    assert isValid("([)]") is False
    assert isValid("{[]}") is True
    assert isValid("]") is False
    assert isValid("{([{]})}") is False
