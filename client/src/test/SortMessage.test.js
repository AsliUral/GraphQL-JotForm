const sortMessage = require("../components/social/SortMessage");

obj1 = {
    message: {
        timestamp: {
            nanoseconds: 906000000,
            seconds: 1593592149,
        },
    },
};

obj2 = {
    message: {
        timestamp: {
            nanoseconds: 441000000,
            seconds: 1593592340,
        },
    },
};

obj3 = {
    message: {
        timestamp: {
            nanoseconds: 441000000,
            seconds: 1593592340,
        },
    },
};

test("time sorting must be true", () => {
    expect(sortMessage(obj1, obj2)).toBe(-1);
});
test("time sorting must be true", () => {
    expect(sortMessage(obj2, obj1)).toBe(1);
});
test("time sorting must be true", () => {
    expect(sortMessage(obj2, obj3)).toBe(0);
});
