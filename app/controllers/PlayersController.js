import { AppState } from "../AppState.js"
import { playersService } from "../services/PlayersService.js"


export class PlayersController {

    constructor() {
        console.log('🧙🎮 text')
        this.drawPlayers()


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
        playersService.scorePoint(playerName)

        this.drawPlayers()

    }





}