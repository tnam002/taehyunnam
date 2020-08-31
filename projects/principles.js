// record of sleep score over time
var sleepScores = [
    { date: '8/19/2020', score: 3 },
    { date: '8/20/2020', score: 10 }
];

function calculateSleepScore() {
    // define variable for user input, sleep score, and array of yes/no questions (positive is +1 if 'yes, negative is -1 if 'yes')
    var input = "";
    var sleepScore = 0;
    var positiveQuestions =
    ['Did you sleep at a time consistent with your schedule?', 'Did you read or listen to relaxing music before bed?',
    'Did you take a hot bath before bed?', 'Is your bedroom quiet?', 'Is your bed comfortable?'];
    var negativeQuestions =
    ['Did you exercise less than 3 hours before sleep time?', 'Did you fluids less than 2 hours before sleep time?',
    'Did you eat less than 2 hours before sleep time?', 'Did you drink any caffeine after 3pm?',
    'Did you take any nicotine before 3pm?', 'Did you take a nap after 3pm?', 'Did you drink alcohol before falling asleep?',
    'Are you taking any medication?', 'Did you use any screens (TV, Computer, Cellphone) on your bed?'];

    // ask all array questions while keeping track of sleep score
    positiveQuestions.forEach(x => getInput(x, true));
    negativeQuestions.forEach(x => getInput(x, false));

    // alert the sleep score to user
    alert('Your sleep score is ' + sleepScore + ' \n +10: High Quality Sleep \n +5: Good Quality Sleep \n 0: Average Sleep \n -5: Bad Quality Sleep \n -10: Awful Quality Sleep');

    // function for prompting user, taking the answer, and adding/subtracting sleep score
    function getInput(question, questionIsPositive) {
        input = prompt (question + ' (y/n)');
        if (input === 'y') {
            if (questionIsPositive) { ++sleepScore; }
            else { --sleepScore; }
        }
        else {
            if (questionIsPositive) { --sleepScore; }
            else { ++sleepScore; }
        }
    }
}

function food() {
    foodList = [
        { name: 'Carrot', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'D',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Apple', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'D',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Bananas', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'B',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Pears', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'D',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Peaches', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'C',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Plums', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'B',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Cherries', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'B',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Berries', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'C',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Vons Whole Chicken', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'D',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Nuts', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'C',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },

        { name: 'Rice', location: 'Michelle', moneyCost: 0, timeCost: 0, nutrients: 'C', taste: 'C',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Egg', location: 'Michelle', moneyCost: 0, timeCost: 0, nutrients: 'A', taste: 'B',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Carrot', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'D',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
        { name: 'Carrot', location: 'Arcadia', moneyCost: -1, timeCost: 0, nutrients: 'A', taste: 'D',
        availableTime: [[6,23], [6,23], [6,23], [6,23], [6,23], [6,23], [6,23]] },
    ]


    /*
    potential factors: 
    cost (minimize)
    nutrients (maximize)
    taste (maximize after nutrient/cost)
    time spent (minimize)
    gas spent (minimize)
    availability (time open)
    location (where you are)

    Rice (cost 0, nutrients S, taste M, time spent 20 mins, gas spent 0)
    Eggs (cost 0, nutrients M, taste M, time spent 20 mins, gas spent 0)
    

    Outside:
    Vons (Whole Chicken, Fried Chicken, Mango Habanero Chicken)
    Costco Pizza
    7-Eleven Taquito / Mini Taco

    Emphasizes vegetables, fruits, whole grains, and fat-free or low-fat dairy products
    Includes lean meats, poultry, fish, beans, eggs, and nuts
    Limits saturated and trans fats, sodium, and added sugars
    */
}

/*
Criteria for working out while at Michelle's place
- It should be something I can do 2 - 3 times a day
- It should be a full body workout
- Duration (It should be as efficient as possible)
- Preferably it has other benefits as well
- It should start slow (maybe warm-up) to minimize the chance of injury
- The regimen should come from a credible source
- 
*/