function playGame() {
    const name1 = document.getElementById("name1").value.toLowerCase();
    const name2 = document.getElementById("name2").value.toLowerCase();

    let newName1 = name1;
    let newName2 = name2;

    while (true) {
        const commonLetter = getCommonLetter(newName1, newName2);
        if (commonLetter === null) {
            break;
        }

        newName1 = removeLetter(newName1, commonLetter);
        newName2 = removeLetter(newName2, commonLetter);
    }

    const totalOutputLetters = countOutputLetters(newName1) + countOutputLetters(newName2);

    const flamesResult = calculateFLAMES(totalOutputLetters);
    document.getElementById("result").innerHTML = `FLAMES result: ${flamesResult}`;
}

function getCommonLetter(name1, name2) {
    for (let i = 0; i < name1.length; i++) {
        if (name2.indexOf(name1[i]) !== -1) {
            return name1[i];
        }
    }
    return null;
}

function removeLetter(name, letter) {
    return name.replace(letter, "");
}

function countOutputLetters(outputName) {
    let letterCount = 0;
    for (let i = 0; i < outputName.length; i++) {
        letterCount++;
    }
    return letterCount;
}

function calculateFLAMES(totalOutputLetters) {
    const flames = "FLAMES";
    let index = totalOutputLetters % flames.length;
    if (index === 0) {
        index = flames.length - 1;
    } else {
        index--;
    }
    return flames[index];
}