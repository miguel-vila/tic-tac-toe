const startGameCommand = "StartGame";
const putMarkCommand = "PlayAtPosition";

const Messages = {
    startGameCommand,
    putMarkCommand,
    startGameMessage: { command : startGameCommand },
    putMarkMessage: (position) =>  {
        return { command : putMarkCommand, position };
    }
};

export default Messages;