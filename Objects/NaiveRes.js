import { Chemin } from "./Chemin.js";

class NaiveRes {

    /**
     * attributes: chemin
     * @param {Carte} carte 
     */
    constructor(carte) {
        
        this.chemin = new Chemin();
        this.chemin.push(carte.villeDepart);
        
        let villesRestantes = [...carte.villes];

        while (villesRestantes.length != 0) {

            //la ville ou on s'est arreté
            let villeActuelle = this.chemin.get(-1);

            //tri la liste des villes restantes en fonction de la distance a la ville actuelle
            villesRestantes.sort( (ville1,ville2) => {
                let diff = ville1.distanceTo(villeActuelle) - ville2.distanceTo(villeActuelle);
                return (diff > 0) ? 1: -1;
            });

            //ajoute la ville la plus proche et la supprime des villes restantes 
            this.chemin.push(villesRestantes.shift());
        }

        //finalise la construction
        this.chemin.end();
    }

    resultat(){
        return this.chemin;
    }
}


export { NaiveRes };