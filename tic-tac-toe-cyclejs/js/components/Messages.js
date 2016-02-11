const startGameCommand = "StartGame";
const putMarkCommand = "PlayAtPosition";

export default {
    startGameCommand,
    putMarkCommand,
    startGameMessage: { command : startGameCommand },
    putMarkMessage: (position) => { command : putMarkCommand, position }
};