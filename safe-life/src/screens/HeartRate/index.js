import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import styles from './styles';

const HeartRateScreen = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [currentDay, setCurrentDay] = useState('');
  const [heartRateData, setHeartRateData] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateHeartRateData = () => {
    const newHeartRateValue = Math.floor(Math.random() * (180 - 60 + 1)) + 60;
    const timestamp = new Date().getTime();
  
    setHeartRateData((prevData) => {
      const newData = [...prevData, { timestamp, value: newHeartRateValue }];
      return newData.slice(-10);
    });
  
    setTimeout(generateHeartRateData, 2000);
  };
  
  const startGenerating = () => {
    generateHeartRateData();
    setIsGenerating(true);
  };

  const stopGenerating = (intervalId) => {
    clearInterval(intervalId);
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

  useEffect(() => {
    const intervalId = isGenerating ? startGenerating() : null;
    return () => {
      if (intervalId) {
        stopGenerating(intervalId);
      }
    };
  }, [isGenerating]);

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

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(138, 43, 226, ${opacity})`,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Frequência cardíaca</Text>
      <Text style={styles.subtitleDate}>{currentDay + " " + currentDate}</Text>
      <ScrollView contentContainerStyle={styles.containerContent}>
        <View style={styles.heartRateContainer}>
          {isGenerating ? (
            <View style={styles.containerFrequency}>
              <LineChart
                data={{
                  datasets: [{ data: heartRateData.map((data) => data.value) }],
                }}
                width={500}
                height={200}
                withDots={false}
                chartConfig={chartConfig}
                bezier={true}
                withHorizontalLabels={false}
              />
              <Text style={styles.textDefault}>A frequência cardíaca no momento é:</Text>
              <Text style={{ color: getHeartRateColor(heartRateData[heartRateData.length - 1]?.value), fontSize: 30, marginHorizontal: 110 }}>{heartRateData[heartRateData.length - 1]?.value} BPM</Text>
            </View>
          ) : (
            <Text style={styles.textDefault}>Clique no botão para ativar o Sensor</Text>
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
