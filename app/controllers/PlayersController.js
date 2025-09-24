import { AppState } from "../AppState.js"


export class PlayersController {

    constructor() {
        console.log('🧙🎮')
        this.drawPlayers()
    }

    drawPlayers() {
        const players = AppState.players
        console.log('✏️', players);
        let playerListElement = document.getElementById('player-list')

    }


}