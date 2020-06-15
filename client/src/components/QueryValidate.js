function queryValidate(query) {
    const str = query.replace(/\s+/g, "");
    const conditionsArray = [
        str === "",
        str === "{",
        str === "}",
        str === "{}",
    ];
    if (conditionsArray.includes(true)) {
        return true;
    } else {
        return false;
    }
}
module.exports = queryValidate;
