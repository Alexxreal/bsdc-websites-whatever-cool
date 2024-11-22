let onSite = 0.0
let iaas = 0.0
let paas = 0.0
let saas = 0.0
let q1
let q2
let q3
let answer = 0
let questions = [
    [["What is your business size?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]], ["AAA", [2.0, 1.5, 0.0, 0.0]]]],
    [["What is your budget?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]]]],
    [["What type of service is needed?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]]]],
    [["Are there any security requirements for your business?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]]]],
    [["What is your budget?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]]]],
    [["What is your budget?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]]]],
    [["What is your budget?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]]]],
    [["What is your budget?"], [["Small", [0.0, 0.0, 0.0, 2.0]], ["Medium", [0.0, 1.0, 1.5, 0.0]], ["Large", [2.0, 1.5, 0.0, 0.0]]]]
]

async function forLoop() {
    for (let x = 0; x < questions.length; x++) {
        for (let y = 0; y < questions[x][1].length; y++) {
            await getUserOption();
            console.log(questions[x][1][y])
        }
    }
}

function awaiting() {
    return new Promise(resolve => {
      // Your asynchronous operation here
      resolve()
    });
  }

function getUserOption(option) {
    return (option);
  }