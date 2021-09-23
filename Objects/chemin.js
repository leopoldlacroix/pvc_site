class Chemin {
     
    constructor(chemin = []){
        chemin = JSON.parse(JSON.stringify(chemin));
        this.chemin = chemin;
    }

    // distance tot d'un chemin
    distance() {
        let distance = 0;
        for (let i = 0; i < this.chemin.length - 1; i++) {

            distance += this.chemin[i].distanceTo(this.chemin[i+1]);
        }
        return distance;
    }

    //ajoute ville au chemin
    push(ville){
        this.chemin.push(ville);
        return this;
    }

    //dernier element
    get(i){
        let ville = this.chemin[(i+this.chemin.length)%this.chemin.length];
        return ville;
    }

    /**
     * adds the first town to the path
     * @returns 
     */
	end() {
		this.chemin.push(this.chemin[0]);
        return this;
	}


    length() {
        return this.chemin.length;
	}

}

export { Chemin };