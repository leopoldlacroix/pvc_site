class Ville {

    static count = 0; //nombre de villes créées

    /**
     * attributes: index, x, y, html
     * also sommon town on screen
     * @param {number} min 
     * @param {number} max 
     */
    constructor (min, max) {

        this.index = Ville.count;

        //%
        this.x = Math.random(); 
        this.y = Math.random();  
        
        this.html = 
            `<span id='${this.index}' style='left: ${this.x * 100}%; top: ${this.y * 100}%;' class='city' >
            ${this.index}
            <img src='./Images/pkmPoint.png' alt='city'>
            </span>`;

        if (this.index == 0) {
            this.html = 
            `<span id='${this.index}' style='left: ${this.x * 100}%; top: ${this.y * 100}%;' class='city' >
            ${this.index}
            <img src='./Images/pkmCenter.png' alt='city'>
            </span>`;
        }

        Ville.count += 1;

        let div = document.getElementById("carte");
        div.innerHTML += this.html;
    }
    
    distanceTo(ville) {
        
        return Math.sqrt((ville.x - this.x)**2 + (ville.y - this.y)**2); 
    }
}

export {Ville};