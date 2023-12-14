//mi seleziono il bottone 
const bPlay = document.getElementById('gioca');
console.log(bPlay);
//mi seleziono div con la classe container 
const grid = document.querySelector('.container');
console.log(grid);







// creo un evento al click che mi aggiunge 100 celle con i numeri  da 1 a 100
bPlay.addEventListener('click', function(){
        let difficoltà = parseInt(document.getElementById('difficoltà').value);
        console.log(difficoltà);
        grid.innerHTML = "";

        const randombomb = [];

        for (let j = 0; j < 16; j++) {
            // Genero un numero casuale
            let bomb = generateRandomNumber(1, difficoltà);
            console.log(bomb);
        
            // Controllo se questo numero appena generato è già presente nell'array
            let foundInArray = randombomb.includes(bomb);
            while (foundInArray == true) {
                bomb = generateRandomNumber(1, difficoltà);
                console.log(bomb);
                foundInArray = randombomb.includes(bomb);
            }
        
            randombomb.push(bomb);
            
            
        }

        console.log(randombomb);
        

        
        //creo un ciclo definito per avere dei numeri da 1 a 100
        for(i = 1; i <= difficoltà; i++){

            //creo un tag e lo metto in una variabile
            let cella = document.createElement('div');
            //al tag dellA VARIABILE  aggiungo una classe 
            cella.classList.add('cella', 'cell-' + difficoltà);
            //cosi aggiungo dentro le celle i numeri che mi escono 
            cella.append(i);

            console.log('i', i);

            if(randombomb.includes(i)){
                
                cella.classList.add('is-bomb');
            
            }
            
            
            //qui appendo cioè stampo nel container 
            grid.append(cella);
            
                
            cella.addEventListener('click', function(){
                //con questo comando sto dicendo di prendere il tag della variabile cella e aggiungi la classe active come un interrutore
                console.log('randombomb', randombomb)
                console.log('i', i)
                console.log('randombomb.includes(i): ', randombomb.includes(i))

                if(this.classList.contains('is-bomb')){
                    this.classList.add('bomb');
                    console.log(this);
                    alert('hai perso');
                    //grid.innerHTML = '';
                }
                else{
                    this.classList.add('active');
                }
                console.log(this.innerHTML);
            });
                
        }

});



//funzioni

function generateRandomNumber(min, max) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}


