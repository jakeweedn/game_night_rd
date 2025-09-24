import { Player } from './models/player.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  /**@type {import('./models/Example.js').Example[]} */
  examples = []

  players = [

    new Player("Oslo"),

    new Player("Bob"),

    new Player("Sally"),

    new Player("Sue")
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())