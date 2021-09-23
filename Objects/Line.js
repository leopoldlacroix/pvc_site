class Line {

    /**
     * attributs
     * @param {number} n number of towns
     * @param {number} min 
     * @param {number} max 
     */
    constructor(ville1, ville2) {

        `<line x1="${ville1.x}" y1="${ville1.y}" x2="${ville2.x}" y2="${ville2.y}" style="stroke:rgb(255,0,0);stroke-width:2" />`

    }

}

export { Line };