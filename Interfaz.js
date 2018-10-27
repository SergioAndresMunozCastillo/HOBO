class Interfaz extends Phaser.Scene{
    //var button_stats;
    constructor(){
        super({key: "Interfaz"});
    }
    
    preload() {
        this.load.image('background', '../assets/background.jpg');  
        this.load.image('button_stats', '../assets/button_stats.png');
        this.load.image('button_inventario', '../assets/button_inventario.png');
        this.load.image('button_equip', '../assets/button_equip.png');
        this.load.image('cafe_entrada', '../assets/escenarios/cafe_entrada.jpg');
        this.load.image('bajo_puente', '../assets/escenarios/bajo_puente.jpg');
        this.load.image('cementerio_de_barcos', '../assets/escenarios/cementerio_de_barcos.jpg');
        this.load.image('muelle_lejano', '../assets/escenarios/muelle_lejano.jpg');
        this.load.image('muelle_theodore', '../assets/escenarios/muelle_theodore.jpg');
        this.load.image('playa_bajo_canon', '../assets/escenarios/playa_bajo_canon.jpg');
        this.load.image('playa_sobre_el_canon', '../assets/escenarios/playa_sobre_el_canon.jpg');
        this.load.image('pueblo_fantasma', '../assets/escenarios/pueblo_fantasma.jpg');
    }

    create() {
        
        // Arreglo que contiene los nombres de los escenarios Y el indice que indica la posicion del arreglo
        let indiceEscenarios = 2;
        let escenario = ['pueblo_fantasma', 'bajo_puente', 'cafe_entrada', 'cementerio_de_barcos', 'muelle_lejano',
                         'muelle_theodore', 'playa_bajo_canon', 'playa_sobre_el_canon'];
        
        this.cameras.main.setBackgroundColor('rgba(164, 129, 96, 1)');
        this.graphics = this.add.graphics();
        this.graphics.lineStyle(2, 0x000000);
        this.graphics.fillStyle(0x68492c, 1);
        
        //Medidas de módulos
        var xModulo = [0,777.57,777.57,777.57, (777.57 + (((1280-777.57)*2.8)/8.4)), 
                       ((777.57 + (((1280-777.57)*2.8)/8.4)) + (((1280-777.57)*2.8)/8.4)),0,777.57];
        var yModulo = [0,0,((720*1)/17.4),((720*9.4)/17.4), ((720*9.4)/17.4),((720*9.4)/17.4),((720*11.4)/17.4),((720*11.4)/17.4)];
        var wModulo = [777.57,(1280-777.57),(1280-777.57), (((1280-777.57)*2.8)/8.4), (((1280-777.57)*2.8)/8.4), (((1280-777.57)*2.8)/8.4), ((1280*13)/21.4), (1280-777.57)];
        var hModulo = [((720*11.4)/17.4), ((720*1)/17.4), ((720*8.4)/17.4), ((720*2)/17.4), ((720*2)/17.4), ((720*2)/17.4), ((720*6)/17.4), ((720*6)/17.4)];
        
        //Módulo de la imágen del escenario
        this.graphics.strokeRect(xModulo[0], yModulo[0], wModulo[0], hModulo[0]);
        this.graphics.fillRect(xModulo[0], yModulo[0], wModulo[0], hModulo[0]);
        //Módulo de etiqueta de acciones
        this.graphics.strokeRect(xModulo[1], yModulo[1], wModulo[1], hModulo[1]);
        this.graphics.fillRect(xModulo[1], yModulo[1], wModulo[1], hModulo[1]);
        //Módulo de menú de acciones
        this.graphics.strokeRect(xModulo[2], yModulo[2], wModulo[2], hModulo[2]);
        this.graphics.fillRect(xModulo[2], yModulo[2], wModulo[2], hModulo[2]);
        //Módulo de menú de stats/inventario/equipamiento
        this.graphics.strokeRect(xModulo[3], yModulo[3], wModulo[3], hModulo[3]);
        this.graphics.fillRect(xModulo[3], yModulo[3], wModulo[3], hModulo[3]);    
        
        this.graphics.strokeRect(xModulo[4], yModulo[4], wModulo[4], hModulo[4]);
        this.graphics.fillRect(xModulo[4], yModulo[4], wModulo[4], hModulo[4]);
        
        this.graphics.strokeRect(xModulo[5], yModulo[5], wModulo[5], hModulo[5]);
        this.graphics.fillRect(xModulo[5], yModulo[5], wModulo[5], hModulo[5]); 
        
        //Módulo de descripción del escenario
        this.graphics.strokeRect(xModulo[6], yModulo[6], wModulo[6], hModulo[6]);
        this.graphics.fillRect(xModulo[6], yModulo[6], wModulo[6], hModulo[6]); 
        //Módulo de detalle de menú de stats/inventario/equipamiento
        this.graphics.strokeRect(xModulo[7], yModulo[7], wModulo[7], hModulo[7]);
        this.graphics.fillRect(xModulo[7], yModulo[7], wModulo[7], hModulo[7]); 
        //AGREGAR IMAGENES
        this.escenarioActual = this.add.image(wModulo[0]/2, hModulo[0]/2, 'cafe_entrada');
        //CREACION DE BOTONES
        const button_stats = this.add.image(xModulo[3] + (wModulo[3]/2),yModulo[3] + (hModulo[3]/2), 'button_stats');
        const button_inventario = this.add.image(xModulo[4] + (wModulo[4]/2),yModulo[4] + (hModulo[4]/2), 'button_inventario');
        const button_equip = this.add.image(xModulo[5] + (wModulo[5]/2),yModulo[5] + (hModulo[5]/2), 'button_equip');
        
        //HACER LOS BOTONES INTERACTIVOS
        button_stats.setInteractive({useHandCursor : true});
        button_inventario.setInteractive({useHandCursor : true});
        button_equip.setInteractive({useHandCursor : true});
        
        button_stats.on('pointerdown', () => {alert("STATS are under construction...");});        
        button_inventario.on('pointerdown', () => {alert("INVENTARIO está en construccion...");});
        button_equip.on('pointerdown', () => {alert("EQUIP is under construction...");});        
        
        /*          MENU DE ACCIONES CONTEXTUALES
                    SECCION ENTERA
                    */
        //CREACION DE TEXTOS
        this.irNorte = new Phaser.GameObjects.Text(this, xModulo[2] + 5, yModulo[2] + 5, "IR A NORTE", {color : '0xffffff', align : 'left', fontSize: 37 });
        this.irEste = new Phaser.GameObjects.Text(this, xModulo[2] + 5 , yModulo[2] + 65, "IR A ESTE", {color : '0xffffff', align : 'left', fontSize: 37 });
        this.irOeste = new Phaser.GameObjects.Text(this, xModulo[2] + 5 , yModulo[2] + 125, "IR A OESTE", {color : '0xffffff', align : 'left', fontSize: 37 });
        
        this.add.existing(this.irNorte);
        this.add.existing(this.irEste);
        this.add.existing(this.irOeste);
        //TEXTO INTERACTUABLE
        this.irNorte.setInteractive({useHandCursor : true});
        this.irEste.setInteractive({useHandCursor : true});
        this.irOeste.setInteractive({useHandCursor : true});
        
        this.irNorte.on('pointerover',() =>{alert("Hay una sospechosa niebla al norte sin importar a donde vaya, será mejor no acercarse...")});
        this.irEste.on('pointerdown',() =>{
            if(indiceEscenarios == 7){
                alert("El inmenso mar se interpone en mi camino... \n No puedo ir más al este.");
            }else{
            indiceEscenarios++;
            alert("Voy al Este");
            this.add.image(wModulo[0]/2,hModulo[0]/2, escenario[indiceEscenarios]);}});
        this.irOeste.on('pointerdown',() =>{
            if(indiceEscenarios == 0){
                alert("El insondable y peligroso bosque del álamo Muerto acabará con mi vida al dar la primera pisada... \n No puedo ir más al Oeste.");
            }else{
            
            indiceEscenarios--;
            alert("Voy al Oeste");
            this.add.image(wModulo[0]/2,hModulo[0]/2, escenario[indiceEscenarios]);}});
            
    }
}