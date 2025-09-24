import { AppState } from "../AppState.js"


export class PlayersController {

    constructor() {
        console.log('🧙🎮')
        this.drawPlayers()
        this.scorePoint()
    }

    drawPlayers() {
        const players = AppState.players
        console.log('✏️', players);
        let playerListElement = document.getElementById('player-list')
        playerListElement.innerHTML = ''
        players.forEach((player) => {
            playerListElement.innerHTML += player.PlayerTemplateCard


        })

    }

    scorePoint(playerName) {
        console.log('clicked', playerName);
    }


}