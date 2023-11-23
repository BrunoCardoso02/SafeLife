import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import styles from './styles';

const HeartRateScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [latestHeartRate, setLatestHeartRate] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateHeartRateData = () => {
    const newHeartRateValue = Math.floor(Math.random() * (180 - 60 + 1)) + 60;

    setLatestHeartRate({value: newHeartRateValue });
  };

  const startGenerating = () => {
    setInterval(generateHeartRateData, 2000);
    setIsGenerating(true);
  };

  const stopGenerating = () => {
    setIsGenerating(false);
  };

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate();
    const months = [
      'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
      'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ'
    ];
    const month = months[date.getMonth()];
    const formattedDate = `${day} ${month}`;
    const daysOfWeek = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
    const dayOfWeek = daysOfWeek[date.getDay()];

    setCurrentDate(formattedDate);
    setCurrentDay(dayOfWeek);
  };

  useEffect(() => {
    getCurrentDate();
  }, []);

  const handleToggleGenerating = () => {
    if (isGenerating) {
      stopGenerating();
    } else {
      startGenerating();
    }
  };

  const getHeartRateColor = (value) => {
    if (value < 90 || value > 170) {
      return 'red';
    } else if ((value >= 91 && value <= 99) || (value >= 160 && value <= 169)) {
      return 'orange';
    } else {
      return 'green';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Frequência cardíaca</Text>
      <Text style={styles.subtitleDate}>{currentDay + " " + currentDate}</Text>
      <ScrollView contentContainerStyle={styles.containerContent}>
        <View style={styles.heartRateContainer}>
          {isGenerating ? (
            <View style={styles.containerFrequency}>
            <Text style={styles.textDefault}>A frequência cardíaca no momento é:</Text>
            <Text style={{ color: getHeartRateColor(latestHeartRate?.value), fontSize: 30, marginHorizontal: 110 }}>{latestHeartRate?.value} BPM</Text>
            </View>
          ) : (
            <Text style={styles.textDefault}>Você deve ativar o dispositivo antes</Text>
          )}
        </View>
        <TouchableOpacity onPress={handleToggleGenerating} style={styles.button}>
          <Text style={styles.buttonText}>{isGenerating ? 'Desativar' : 'Ativar'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default HeartRateScreen;
