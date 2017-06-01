'use strict';

var _clear = require('clear');

var _clear2 = _interopRequireDefault(_clear);

var _jojAi = require('joj-ai');

var AI = _interopRequireWildcard(_jojAi);

var _jojCore = require('joj-core');

var J = _interopRequireWildcard(_jojCore);

var _readline = require('readline');

var _readline2 = _interopRequireDefault(_readline);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rl = _readline2.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
var getMenu = function getMenu() {
    return 'Welcome to Jump Over Jump! \n\n' + 'What do you wanna do? \n' + '1 - Play vs AI \n' + '2 - Play offline \n' + '0 - quit \n';
};
var isAiTurn = function isAiTurn(game) {
    return J.Game.getPlayerTurn(game).isAi;
};
function askForMove(game) {
    console.log(J.Board.printUnicodeBoard(game.board));
    if (isAiTurn(game)) {
        var aiMove = AI.getComputerMove(game);
        return askForMove(J.Move.getGameAfterMove(game, aiMove));
    }
    rl.question('Move (fromXfromYtoXtoY):', function (m) {
        var move = {
            from: { x: Number(m[0]), y: Number(m[1]) },
            to: { x: Number(m[2]), y: Number(m[3]) }
        };
        askForMove(J.Move.getGameAfterMove(game, move));
    });
}
function playAi() {
    var game = J.Game.createGame({
        players: {
            black: { isAi: true, name: 'black' },
            white: { name: 'white' }
        }
    });
    askForMove(game);
}
function playOffline() {
    var game = J.Game.createGame();
    askForMove(game);
}
function openMenu() {
    (0, _clear2.default)();
    rl.question(getMenu(), function (answer) {
        switch (answer) {
            case '1':
                return playAi();
            case '2':
                return playOffline();
            case '0':
                return rl.close();
            default:
                console.log('invalid answer!');
                openMenu();
        }
    });
}
openMenu();
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map