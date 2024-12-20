'use client';
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// PDF Styles
const styles = StyleSheet.create({
    page: {
        padding: 20,
        fontSize: 12,
        fontFamily: 'Helvetica',
    },
    header: {
        borderBottom: '1px solid #ccc',
        marginBottom: 10,
        paddingBottom: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    summary: {
        marginVertical: 10,
        padding: 10,
        backgroundColor: '#e3f2fd',
        borderRadius: 5,
    },
    questionBlock: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f5f5f5',
        borderRadius: 5,
    },
    optionsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allows wrapping to next line if space is limited
        gap: 8, // Space between options
    },
    option: {
        padding: 5,
        borderRadius: 4,
        marginBottom: 5,
        textAlign: 'center',
        display: "inline-block"
    },
    correct: {
        backgroundColor: 'green',
        color: 'white',
    },
    wrong: {
        backgroundColor: 'red',
        color: 'white',
    },
    neutral: {
        backgroundColor: '#f5f5f5',
        color: '#000',
    },
});

// PDF Design Component
export const ResultsPDF = ({ result }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>{result.questionCategory}</Text>
                <Text>{result.questionTitle}</Text>
                <Text>📅 {result.examDate} | ⏰ {result.examTime}</Text>
            </View>

            {/* Summary */}
            <View style={styles.summary}>
                <Text>Total Questions: {result.rightAnswers + result.wrongAnswers}</Text>
                <Text>Right Answers: {result.rightAnswers}</Text>
                <Text>Wrong Answers: {result.wrongAnswers}</Text>
            </View>

            {/* Questions */}
            {result.questions.map((q, index) => (
                <View key={index} style={styles.questionBlock}>
                    <Text style={{ marginBottom: "10px" }}>Q{index + 1}: {q.questionText}</Text>
                    <View style={styles.optionsContainer}>
                        {q.options.map((option, i) => (
                            <Text
                                key={i}
                                style={[
                                    styles.option,
                                    option === q.correctAnswer
                                        ? styles.correct
                                        : option === q.selectedAns
                                            ? styles.wrong
                                            : styles.neutral,
                                ]}
                            >
                                {option}
                            </Text>
                        ))}
                    </View>
                </View>
            ))}
        </Page>
    </Document>
);
