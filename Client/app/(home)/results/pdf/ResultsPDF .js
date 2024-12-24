'use client';
import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image } from '@react-pdf/renderer';

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
        textAlign :"center",
        margin :"10px"
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
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: '50%',
        marginRight: 15,
    },
    mainTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1D4ED8', // Blue color
    },
    examSummary: {
        backgroundColor: '#EFF6FF', // Light blue background
        color: '#2563EB', // Blue text
        padding: 8,
        borderRadius: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
    },
});

// PDF Design Component (used -> results page)
const ResultsPDF = ({ result }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                {/* Website Name and Logo */}
                <View style={styles.logoContainer}>
                    <Image
                        src="https://placehold.co/600x400/png"
                        style={styles.logo}
                        alt="TickMarkQ Logo"
                    />
                    <Text style={styles.mainTitle}>TickMarkQ</Text>
                </View>
                <Text style={{ fontSize: 10, fontStyle: 'italic', color: '#6B7280' }}>
                    Empowering Knowledge, One Question at a Time
                </Text>

                {/* Title and Category */}
                <Text style={styles.title}>Result Sheet</Text>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#4B5563' }}>
                    Category: {result.questionCategory}
                </Text>
                <Text style={{ fontSize: 14, color: '#6B7280', marginTop: 5 }}>
                    Course: {result.questionTitle}
                </Text>

                {/* Exam Summary */}
                <View style={styles.examSummary}>
                    <Text>Exam Summary</Text>
                </View>
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

export default ResultsPDF;
