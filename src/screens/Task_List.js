import React, {Component} from "react" //import dos componentes
import {StylesSheets, View, Text} from "react-native" //import do css, view e text

// cria uma classe padrão que será usada em outras partes do programa
export default class TaskList extends Component{ // tem todas as características de um componente (herança)
    render(){
        return(
            <view>
                <Text> Lista de Tarefas</Text>
            </view>
        )
    }
} 

//esquema de css
const styles = StylesSheets.create({
    container: {
        flex: 1
    }

})


