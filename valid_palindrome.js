function validPalindrome (s) {
    let phrase = s.toLowerCase().replace(/[^a-z0-9]/gi, '');

    let a = 0;
    let b = phrase.length - 1;

    for (let i = 0; i < phrase.length - 1 / 2; i++) {
        if (phrase[a] != phrase[b])
            return false;
        else {
            a++;
            b--;
        }
    }

    return true;
}