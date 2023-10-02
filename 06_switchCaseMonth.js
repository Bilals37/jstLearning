var monthOfYear = function (monNum) {
    switch (monNum) {
        case 1:
            console.log(`${monNum}==> January `);
            break;
        case 2:
            console.log(`${monNum}==> February`);
            break;
        case 3:
            console.log(`${monNum}==> March`);
            break;
        case 4:
            console.log(`${monNum}==> April`);
            break;
        case 5:
            console.log(`${monNum}==> May`);
            break;
        case 6:
            console.log(`${monNum}==> June`);
            break;
        case 7:
            console.log(`${monNum}==> July`);
            break;
        case 8:
            console.log(`${monNum}==> August `);
            break;
        case 9:
            console.log(`${monNum}==> September`);
            break;
        case 10:
            console.log(`${monNum}==> October`);
            break;
        case 11:
            console.log(`${monNum}==> November`);
            break;
        case 12:
            console.log(`${monNum}==> December`);
            break;
        default:
            console.log(`${monNum}==> Please Insert Valid Input.`);
            break;
    }
};
monthOfYear(1);
monthOfYear(2);
monthOfYear(3);
monthOfYear(4);
monthOfYear(5);
monthOfYear(6);
monthOfYear(15);
monthOfYear(7);
monthOfYear(8);
monthOfYear(9);
monthOfYear(-10);
monthOfYear(10);
monthOfYear(11);
monthOfYear(12);