class Canvas{

    constructor(){

        var canvas = document.querySelector('canvas');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        this.c = canvas.getContext('2d');

    }

    /**
     * 
     * @param {carte[]} carte 
     */
    drawTowns(carte){
        this.c.fillStyle = "#ff1010"

        let x = carte.villeDepart.x * window.innerWidth;
        let y = carte.villeDepart.y * window.innerHeight;
        this.c.fillRect(x, y, 30, 30);

        carte.villes.forEach(ville => {
            x = ville.x * window.innerWidth;
            y = ville.y * window.innerHeight;
            this.c.fillRect(x, y, 30, 30);
        });
    }

    /**
     * 
     * @param {Chemin} chemin 
     */
    drawPath(chemin){
        this.c.beginPath();

        chemin.chemin.forEach(ville => {
            let x = ville.x * window.innerWidth;
            let y = ville.y * window.innerHeight;
            this.c.lineTo(x,y);
        });

        this.c.strokeStyle = 'black';
        this.c.stroke();
    }

    animatedPath(chemin){
        this.c.beginPath();

        var villes = chemin.chemin;
        var index = 0;
        var c = this.c;

        function animate(){
            console.log(11111);
            requestAnimationFrame(animate);
            let x = villes[index].x * window.innerWidth;
            let y = villes[index].y * window.innerHeight;
            // console.log(x,y);
            c.lineTo(x,y);
            c.strokeStyle = 'black';
            c.stroke();

            index+=1
        }

        animate();
    }
}


export {Canvas};