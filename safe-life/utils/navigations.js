import { useNavigation } from "@react-navigation/native";


export function useNavigateToScreen() {
    const navigation = useNavigation()
    
    function navigationScreen(screenPath) {
        navigation.navigate(screenPath);
    }
    return navigationScreen
}

