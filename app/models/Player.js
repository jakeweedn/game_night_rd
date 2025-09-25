export class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;



    }

    get PlayerTemplateCard() {

        return /*html*/ `
            <div  class = "card my-2">
                <div class = "card-body p-5 d-flex justify-content-around">
                    ${this.name}-${this.score}
                    <button onclick="app.playersController.scorePoint('${this.name}')" class="btn-primary"> + </button>

                </div>
            </div>

       `
    }


}