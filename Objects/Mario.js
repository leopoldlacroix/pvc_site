class Mario {

    static count = 0;

    /**
     * attributes: index, home, x, y, html, lastShow
     * also summons mario at hometown
     * @param {Ville} ville
     */
    constructor (ville) {

        this.index = Mario.count;
        this.home = ville;
        this.x = ville.x;
        this.y = ville.y;

        this.html =
        `<span id='mario${this.index}' style='left: ${this.x}%; bottom: ${this.y}%;' class='city' >
        ${this.index}
        <img src='./Images/mario.gif' alt='Its a me Mario'>
        </span>`; 
        let div = document.getElementById("carte");
        div.innerHTML += this.html;

        this.lastShow = performance.now();
        Mario.count+=1;
    }

    /**
     * 
     * @param {number} alongX
     * @param {number} alongY 
     * @returns 
     */
    walk(alongX, alongY) {

        let marioHTML = document.getElementById("mario" + this.index);
        
        this.x += alongX;
        this.y += alongY;

        marioHTML.style.left = this.x + '%';
        marioHTML.style.bottom = this.y + '%';

    }

// let mario = new Mario(carte.villeDepart);

// let resTime = 6; //mario animation will last in ms
// let stepPerSecond = 30;
// let totalSteps = stepPerSecond * resTime;

// let totDistance = naivePath.distance();

// console.log(naivePath.length());

// for (let i = 0; i < naivePath.length() - 1; i++) {
//     let currentVille = naivePath.get(i);
//     let nextVille = naivePath.get(i+1);

//     let curentNextDistance = currentVille.distanceTo(nextVille);
//     let currentNextSteps = totalSteps * curentNextDistance/totDistance;

//     let xStep = (nextVille.x - currentVille.x)/currentNextSteps;
//     let yStep = (nextVille.y - currentVille.y)/currentNextSteps;

    
//     console.log(xStep, yStep);

//     //demande à mario de marcher dans les diretions
//     setInterval(function(){mario.walk(xStep, yStep)}, 1);

// }

}

export {Mario};