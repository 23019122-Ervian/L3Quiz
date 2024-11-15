import React, { useState } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert, StatusBar, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6"

// Reusable Question component
const Question = ({ questionText, imageSource, options, onAnswerSelect }) => {
    return (
        <View style={styles.questionContainer}>
            <Image source={imageSource} style={styles.image} />
            <Text style={styles.questionText}>{questionText}</Text>
            <Text style={styles.answerText}>Answer:</Text>
            <RNPickerSelect
                onValueChange={onAnswerSelect}
                items={options}
                placeholder={{ label: "Select an answer", value: null }}
                style={{
                    inputAndroid: styles.pickerInput,
                    inputIOS: styles.pickerInput,
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    icon: {
        marginRight: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    scrollContainer: {
        paddingBottom: 20,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#555',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        fontSize: 16,
    },
    questionContainer: {
        marginBottom: 30,
        padding: 10,
        backgroundColor: '#2374e7',
        borderStyle: 'solid',
        borderColor: '#000000',
        borderWidth: 1
    },
    questionText: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
        textAlign: "center"
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 10,
    },
    answerText: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: '#333',
    },
    pickerInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#fff',
        fontSize: 16,
    },
});

const App = () => {
    // State to store selected answers
    const [question1, setQuestion1] = useState('');
    const [question2, setQuestion2] = useState('');
    const [question3, setQuestion3] = useState('');

    // Correct answers
    const correctAnswers = {
        question1: 'Em',
        question2: 'Bm7',
        question3: 'D7',
    };

    // Function to handle answer submission
    const handleSubmit = () => {
        let correctCount = 0;

        // Check each answer
        if (question1 === correctAnswers.question1) correctCount += 1;
        if (question2 === correctAnswers.question2) correctCount += 1;
        if (question3 === correctAnswers.question3) correctCount += 1;

        // Show alert with result
        Alert.alert(`You have ${correctCount} correct answers!`);
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden={true} />
            <View style={styles.header}>
                <Icon name="music" size={24} color="#B23B23" style={styles.icon} />
                <Text style={styles.headerText}>Music Quiz</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.label}>User Name:</Text>
                <TextInput style={styles.input} />

                {/* Question 1 */}
                <Question
                    questionText="What chord is this?"
                    imageSource={require('./img/Em.png')}
                    options={[
                        { label: 'Em', value: 'Em' },
                        { label: 'Emaj', value: 'Emaj' },
                        { label: 'Em7', value: 'Em7' },
                    ]}
                    onAnswerSelect={(value) => setQuestion1(value)}
                />

                {/* Question 2 */}
                <Question
                    questionText="What chord is this?"
                    imageSource={require('./img/Bm7.png')}
                    options={[
                        { label: 'Bmaj', value: 'Bmaj' },
                        { label: 'B7', value: 'B7' },
                        { label: 'Bm7', value: 'Bm7' },
                    ]}
                    onAnswerSelect={(value) => setQuestion2(value)}
                />

                {/* Question 3 */}
                <Question
                    questionText="What chord is this?"
                    imageSource={require('./img/D7.png')}
                    options={[
                        { label: 'Fmaj', value: 'Fmaj' },
                        { label: 'Adim7', value: 'Adim7' },
                        { label: 'D7', value: 'D7' },
                    ]}
                    onAnswerSelect={(value) => setQuestion3(value)}
                />

                {/* Submit Button */}
                <Button
                    title="Submit Answers"
                    onPress={handleSubmit}
                    color="#B23B23"
                />
            </ScrollView>
        </View>
    );
};



export default App;
