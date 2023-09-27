/* 
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
*/

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

/* 
This algorithm has a time complexity of O(s), where s is the size of the string.
I tried to find a way to make it O(c) (where c is the amount of bracket charaters in the string) by iterating only through the brackets, but I couldn't find a way.
Also, I know that using stack was ideal for this problem, but I'm yet studying data structures and I don't know yet how to use stacks.
*/