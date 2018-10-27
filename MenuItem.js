class MenuItem extends Phaser.GameObjects.Container{
    MenuItem(x, y, text, scene){
        Phaser.GameObjects.Text.call(this,scene, x, y, text, {color : '0xffffff', align : 'left', fontSize: 15 });
    }
    
    select(){
        this.setColor('0xf8ff38');
    }
    deselct(){
        this.setColor('0xffffff');
    }
}