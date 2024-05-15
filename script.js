let buttonContainer = document.querySelector("#number-buttons");

createNumberButtons();

function createNumberButtons(){

    for(let i = 0; i < 3; i++){

        let buttonRow = document.createElement("div");

        buttonRow.classList.add("row");

        buttonContainer.appendChild(buttonRow);

        for(let j = 0; j < gridSizeValue; j++){
            let gridCell = document.createElement("div");

            gridCell.classList.add("cell");

            gridRow.appendChild(gridCell);

            gridCell.addEventListener("mouseover", function(e){
                if(e.buttons == 1 || e.buttons == 3){
                    this.classList.add("shade");
                }
            });
        }

    }
};
