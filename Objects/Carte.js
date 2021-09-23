import { Ville } from "./Ville.js";

class Carte {
    static count = 0;    // a remmettre a zero si plus de deux appelés

    static MIN = 0;      // min absisse/ordonnee des villes
    static MAX = 650;    // max absisse/ordonnee des villes

    /**
     * attributs nombres_de_villes, villeDepart, villes
     * @param {number} n number of towns
     * @param {number} min 
     * @param {number} max 
     */
    constructor(n, min, max) {

        this.nombre_de_villes = n;

        //ville de depart
        this.villeDepart = new Ville(min, max);
        Ville.count = 1;

        this.villes = [];
        for (let i = 1; i < n; i++) {
            this.villes.push(new Ville(min, max));
        }

    }

}

export { Carte };