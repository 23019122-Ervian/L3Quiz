import React, { useState } from 'react';
import { Image, Text, View, TextInput, ScrollView, Button, Alert } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from "react-native-vector-icons/FontAwesome6"

// Reusable Question component
const Question = ({ questionText, imageSource, options, onAnswerSelect }) => {
    return (
        <View>
            <Text>{questionText}</Text>
            <Image source={imageSource} />
            <Text>Answer:</Text>
            <RNPickerSelect
                onValueChange={onAnswerSelect}
                items={options}
                placeholder={{ label: "Select an answer", value: null }}
            />
        </View>
    );
};

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
        <View style={{ padding: 20, paddingTop: 50 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                <Icon name="music" size={24} color="#B23B23" style={{ marginRight: 10 }} />
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Music Quiz</Text>
            </View>

            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <Text>User Name:</Text>
                <TextInput style={{ borderWidth: 1, marginBottom: 20 }} />

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
                />
            </ScrollView>
        </View>
    );
};

export default App;
