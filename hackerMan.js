const hackStart = async () => {
    var commandStart = ['Performing DNS Lookups for', 'Searching ', 'Analyzing ', 'Estimating Approximate Location of ', 'Compressing ', 'Requesting Authorization From : ', 'wget -a -t ', 'tar -xzf ', 'Entering Location ', 'Compilation Started of ', 'Downloading ']
    for (i of commandStart) {
        console.log(i);
    }
}

const hackConnection = () => {
    var commandParts = ['Data Structure', 'http://wwjd.com?au&2', 'Texture', 'TPS Reports', ' .... Searching ... ', 'http://zanb.se/?23&88&far=2', 'http://ab.ret45-33/?timing=1ww']
    for (i of commandParts) {
        console.log(i);
    }
}
const hackCompleted = () => {
    var commandResponses = ['Authorizing ', 'Authorized...', 'Access Granted..', 'Going Deeper....', 'Compression Complete.', 'Compilation of Data Structures Complete..', 'Entering Security Console...', 'Encryption Unsuccesful Attempting Retry...', 'Waiting for response...', '....Searching...', 'Calculating Space Requirements ']
    for (i of commandResponses) {
        console.log(i);
    }
}

const hackerManSetup = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hackStart();
            resolve('here');
        }, 3000)
    }
    )
}
const hackerManConnecting = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hackConnection();
            resolve('we');
        }, 5000)
    }
    )
}
const hackerManCompleted = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            hackCompleted();
            resolve('go');
        }, 7000)
    }
    )
}
const startHack = async () => {
    console.time('taskCompleted in');

    let step1 = hackerManSetup();
    let step2 = hackerManConnecting();
    let step3 = hackerManCompleted();

    await Promise.all([step1, step2, step3]);
    console.timeEnd('taskCompleted in');
}
//use startHack() in console to start hacking anybodys account you dessire...
