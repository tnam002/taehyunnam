/*
Characters should have:
- Name
- Max / Current HP (Health Points)
- Max / Current MP (Mana Points) ?
- Magic Power ?
- Physical Power ?
- Speed
- Moveset
    - Name: 'Flame Punch'
    - Types: PHYS, FIRE, WATER, EARTH, WIND, LIGHT, DARK
    - Target: SELF, OPPONENT, ALLY (?)
    - Effect: Function that takes a character as an argument
- Personality Type ? or Individual Traits (Introverted = true, Extroverted = false, etc.)
- Accuracy
- Status: A function that takes the current character as an argument at the end of every turn.

Ideas:
- There should be 85% ~ 100% so that damage is not constant
- Each player chooses a move simultaneously, and if one is super effective, it's damage doubles while the other attack is halved
    - WATER > FIRE > WIND > EARTH > WATER
    - LIGHT > DARK & DARK > LIGHT
- AI should choose a random random number based on the number of moves it has (i.e. 3 moves = random number from 0 - 2)

User Stories:
- I'm able to pick a personality type
- I'm able to name the character
- I'm able to generate the character
- 
*/