function SortMessage(a, b) {
    const bandA = a.message.timestamp;
    const bandB = b.message.timestamp;

    let comparison = 0;
    if (bandA.seconds > bandB.seconds) {
        comparison = 1;
    } else if (bandA.seconds < bandB.seconds) {
        comparison = -1;
    }
    return comparison;
}
module.exports = SortMessage;
