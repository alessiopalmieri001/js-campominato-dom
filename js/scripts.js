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
        
        //creo un ciclo definito per avere dei numeri da 1 a 100
        for(i = 1; i <= difficoltà; i++){
        //creo un tag e lo metto in una variabile
        let cella = document.createElement('div');
        //al tag dellA VARIABILE  aggiungo una classe 
        cella.classList.add('cella', 'cell-' + difficoltà);
        //cosi aggiungo dentro le celle i numeri che mi escono 
        cella.append(i);
        
        
        //creo un altro evento click per colorare le celle quando si attivano 
        cella.addEventListener('click', function(){
            //con questo comando sto dicendo di prendere il tag della variabile cella e aggiungi la classe active come un interrutore
            this.classList.toggle('active');
            console.log(this.innerHTML);
        });
        //qui appendo cioè stampo nel container 
        grid.append(cella);

    }
    
});