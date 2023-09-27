function isSubsequent(s, t) {
    var subTracker = 0, stringTracker = 0;
    
    while(stringTracker < t.length) {
        if (s[subTracker] == t[stringTracker])
            subTracker++;
        stringTracker++;
    }
 
    return subTracker >= s.length;
}