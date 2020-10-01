const names = ['Lisa', 'Kaitlin', 'Jan'];
const event = "surprise";

function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
}

function countDown(i) {
    let n = i;
    while (n > -1) {
        console.log(n--);
    }
}