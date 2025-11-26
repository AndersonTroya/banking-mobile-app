import { useEffect } from 'react';
import {
    View,
    Image, 
    StyleSheet 
} from 'react-native';

const Splash = ({onFinish}:{onFinish: () => void } ) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onFinish();
        }, 5000); //tiempo en milisegundos
        return () => clearTimeout(timer);
    }, [onFinish]);

    return (
        <View style={styles.container}>
            <Image
                source={require('../assets/images/money-bag.png')}
                style={styles.logo}
                resizeMode='contain'
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(34, 154, 98, 1)'
    },
    logo: {
        width: 200,
        height: 200
    }
});

export default Splash;//obligatorio exportar para poder usarlos