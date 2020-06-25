const queryValidate = require("../components/QueryValidate");

test("query is not only include curly braces", () => {
    expect(queryValidate("{")).toBeTruthy();
});
test("query is not only include curly braces", () => {
    expect(queryValidate("}")).toBeTruthy();
});
test("query is not only include {}", () => {
    expect(queryValidate("{ }")).toBeTruthy();
});
test("query is not only include empty character", () => {
    expect(queryValidate("")).toBeTruthy();
});
test("query is not only include space and curly braces ", () => {
    expect(queryValidate("     } ")).toBeTruthy();
});
test("the query may contain the appropriate graphQL syntax", () => {
    expect(queryValidate("{	user {		name	}}")).toBeFalsy();
});
