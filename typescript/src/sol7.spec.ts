const isValid = (s: string): boolean => {
    const stack: string[] = [];
    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        if (c === '(' || c === '{' || c === '[') {
            stack.push(c);
        } else if (c === ')') {
            if (stack.pop() !== '(') {
                return false;
            }
        } else if (c === '}') {
            if (stack.pop() !== '{') {
                return false;
            }
        } else if (c === ']') {
            if (stack.pop() !== '[') {
                return false;
            }
        }
    }
    return stack.length === 0;
}

describe('isValid', () => {
    it('returns true for valid parentheses', () => {
        expect(isValid('()')).toBe(true);
        expect(isValid('()[]{}')).toBe(true);
        expect(isValid('{[]}')).toBe(true);
    });
    it('returns false for invalid parentheses', () => {
        expect(isValid('(]')).toBe(false);
        expect(isValid('([)]')).toBe(false);
    });
}
      );
