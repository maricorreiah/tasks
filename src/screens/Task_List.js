import React, {Component} from "react" //import dos componentes
import {StylesSheet, View, Text, ImageBackground} from "react-native" //import do css, view e text

//referenciar a imagemm
//../ sai da pasta
import today_Image from "../../assets/imgs/today.jpg"

// cria uma classe padrão que será usada em outras partes do programa
export default class TaskList extends Component{ // tem todas as características de um componente (herança)
    render(){
        return(
            <view style ={styles.container}>
                <ImageBackground source={today_Image} style={styles.background}> 

                </ImageBackground>
                <view>

                </view>
            </view>
        )
    }
} 

//esquema de css
const styles = StylesSheet.create({ //variável q guarda os estilos
    container: {
        flex: 1
    },
 //css background
    background:{
        flex: 3
    },
//css lista de tarefas
    taskList:{
        flex: 7
    }


})


