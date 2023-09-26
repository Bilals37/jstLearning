function stringHandsOn() {
    var str = '   Hey you are doing good, keep it up    '
    console.log(`(01==>) String is: ${str}.`);
    console.log(' ');
    var strLength = str.length;
    console.log(`(02==>) The length of "${str}" is: ${strLength}.`);
    console.log(' ');
    var strSpaceRm = str.trim();
    var strSpLn = strSpaceRm.length
    console.log(`(03==>) By removing spaces from "${strSpaceRm}" the remaning length of string is: ${strSpLn}.`);
    console.log(' ');
    var extraSpace = strLength - strSpLn;
    console.log(`(04==>) The total number of Extra spaces removed from "${str}" is: ${extraSpace}.`);
    console.log(' ');
    console.log(`(05==>) First and last character of "${strSpaceRm}" is "${strSpaceRm[0]}" and "${strSpaceRm[strSpaceRm.length - 1]}". `);
    console.log(' ');
    var words = strSpaceRm.split(" ");
    console.log(`(06==>) Total words in Trimmed string is: ${words.length}.`);
    console.log(' ');
    var indexOfG = strSpaceRm.search("good");
    console.log(`(07==>) Index of "good" in the Trimmed string is: ${indexOfG}.`);
    console.log(' ');
    var substring1 = strSpaceRm.substring(22);
    var substring2 = strSpaceRm.slice(22);
    console.log(`(08==>)`);
    console.log(`   i) Substring using substring: "${substring1}".`);
    console.log(`   ii)Substring using slice: "${substring2}".`);
    console.log(' ');
    var strEnds = strSpaceRm.endsWith("up")
    console.log(`(09==>)String Ends with "up" is: ${strEnds}.`);
    console.log(' ');
    var strStart = strSpaceRm.startsWith("Hey")
    console.log(`(10==>)String Starts with "Hey" is: ${strStart}.`);
}
stringHandsOn()