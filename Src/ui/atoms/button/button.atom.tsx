import React from "react";
import {TouchableOpacity, Text, StyleProp, ViewStyle} from "react-native";
import styles from "./button.styles";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isActive?: boolean;
    style?: StyleProp<ViewStyle>;
}

const Button = ({ onPress, title, isActive = false, style }: ButtonProps) => {
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default Button;