var voteEligiblity= function (age) {
    var result=+age
    console.log("");
    if (age<=0 || age>130  || isNaN(result)) {
        console.log(`**) The given age is "${age}" "That's the Invalid input"`);
    } else {
        if (age<18) {
            console.log(`**) The given age is "${age}" which is less then "18", Thus you are not Eligible to Give Vote this Year`);
        }
        else{
            console.log(`**) The given age is "${age}", Thus you are Eligible to give vote`);
        }
    }
}
voteEligiblity (45)
voteEligiblity (17)
voteEligiblity (20)
voteEligiblity (8)
voteEligiblity (-10)
voteEligiblity (200)
voteEligiblity (0)
voteEligiblity (null)
voteEligiblity ("College")


