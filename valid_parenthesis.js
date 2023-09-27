function validParenthesis (s) {
    /* 
    each number will represent a kind of bracket
    1 - ()
    2 - []
    3 - {}
    */
    
    var openBrackets = [];

    for (let c of s) {
        if (((c == ')') || (c == ']') || (c == '}')) && openBrackets.length == 0) {
            return false
        }
        // this statement tests if there an close bracket while there is no open brackets for it
        
        switch (c){
            case '(':
                openBrackets.push(1);
                break;
            case '[':
                openBrackets.push(2);
                break;
            case '{':
                openBrackets.push(3);
                break;
            case ')':
                if (openBrackets[openBrackets.length - 1] == 1){
                    openBrackets.pop();
                    break;
                }
                else {
                    return false
                }
            case ']':
                if (openBrackets[openBrackets.length - 1] == 2){
                    openBrackets.pop();
                    break;
                }
                else {
                    return false
                }
            case '}':
                if (openBrackets[openBrackets.length - 1] == 3){
                    openBrackets.pop();
                    break;
                }
                else {
                    return false
                }
        }    
    }

    if (openBrackets.length == 0) {
        return true;
    }
    else {
        return false;
    }
    // this last statement will check if any open brackets were left without being closed
}