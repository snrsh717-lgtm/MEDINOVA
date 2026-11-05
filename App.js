
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

const translations = {
  English: {
    welcome: 'Welcome to MEDINOVA',
    subtitle: 'Healthcare. Simplified.',
    health: 'Health Information',
    healthDesc: 'Learn about health and wellness',
    doctor: 'Doctor Appointments',
    doctorDesc: 'Get help with doctor appointments',
    pharmacy: 'Pharmacy Information',
    pharmacyDesc: 'Find pharmacy details and support',
    support: 'Customer Support',
    supportDesc: 'We are here to help you',
    language: 'Choose Language'
  },
  Telugu: {
    welcome: 'MEDINOVA కు స్వాగతం',
    subtitle: 'ఆరోగ్యం ఇక సులభం',
    health: 'ఆరోగ్య సమాచారం',
    healthDesc: 'ఆరోగ్యం గురించి తెలుసుకోండి',
    doctor: 'డాక్టర్ అపాయింట్‌మెంట్లు',
    doctorDesc: 'డాక్టర్ అపాయింట్‌మెంట్ సహాయం',
    pharmacy: 'ఫార్మసీ సమాచారం',
    pharmacyDesc: 'ఫార్మసీ వివరాలు తెలుసుకోండి',
    support: 'కస్టమర్ సపోర్ట్',
    supportDesc: 'మీకు సహాయం చేయడానికి మేమున్నాం',
    language: 'భాషను ఎంచుకోండి'
  },
  Hindi: {
    welcome: 'MEDINOVA में आपका स्वागत है',
    subtitle: 'स्वास्थ्य अब आसान',
    health: 'स्वास्थ्य जानकारी',
    healthDesc: 'स्वास्थ्य और तंदुरुस्ती जानें',
    doctor: 'डॉक्टर अपॉइंटमेंट',
    doctorDesc: 'डॉक्टर अपॉइंटमेंट सहायता',
    pharmacy: 'फार्मेसी जानकारी',
    pharmacyDesc: 'फार्मेसी की जानकारी पाएं',
    support: 'ग्राहक सहायता',
    supportDesc: 'हम आपकी मदद के लिए हैं',
    language: 'भाषा चुनें'
  }
};

export default function App() {
  const [language, setLanguage] = useState('English');
  const t = translations[language];

  const services = [
    { icon: '❤', title: t.health, desc: t.healthDesc },
    { icon: '🩺', title: t.doctor, desc: t.doctorDesc },
    { icon: '✚', title: t.pharmacy, desc: t.pharmacyDesc },
    { icon: '☎', title: t.support, desc: t.supportDesc }
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#087F5B" barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.logo}>✚ MEDINOVA</Text>
          <Text style={styles.welcome}>{t.welcome}</Text>
          <Text style={styles.subtitle}>{t.subtitle}</Text>
        </View>

        <View style={styles.languageBox}>
          <Text style={styles.languageTitle}>{t.language}</Text>
          <View style={styles.languageRow}>
            {['English', 'Telugu', 'Hindi'].map(item => (
              <TouchableOpacity
                key={item}
                style={[
                  styles.languageButton,
                  language === item && styles.selectedLanguage
                ]}
                onPress={() => setLanguage(item)}
              >
                <Text style={[
                  styles.languageText,
                  language === item && styles.selectedLanguageText
                ]}>
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <Text style={styles.sectionTitle}>Our Services</Text>

        {services.map((service, index) => (
          <TouchableOpacity
            key={index}
            style={styles.card}
            onPress={() => {}}
          >
            <Text style={styles.icon}>{service.icon}</Text>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{service.title}</Text>
              <Text style={styles.cardDesc}>{service.desc}</Text>
            </View>
            <Text style={styles.arrow}>›</Text>
          </TouchableOpacity>
        ))}

        <View style={styles.footer}>
          <Text style={styles.footerTitle}>MEDINOVA</Text>
          <Text style={styles.footerText}>
            Healthcare. Simplified.
          </Text>
          <Text style={styles.footerText}>
            Your health matters to us.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3FAF8'
  },
  header: {
    backgroundColor: '#087F5B',
    padding: 28,
    paddingTop: 55,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 29,
    fontWeight: 'bold',
    marginBottom: 25
  },
  welcome: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold'
  },
  subtitle: {
    color: '#D9F7E9',
    fontSize: 15,
    marginTop: 8
  },
  languageBox: {
    backgroundColor: '#FFFFFF',
    margin: 18,
    padding: 16,
    borderRadius: 15
  },
  languageTitle: {
    color: '#174A68',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12
  },
  languageRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  languageButton: {
    borderWidth: 1,
    borderColor: '#087F5B',
    borderRadius: 9,
    paddingVertical: 9,
    paddingHorizontal: 13
  },
  selectedLanguage: {
    backgroundColor: '#087F5B'
  },
  languageText: {
    color: '#087F5B',
    fontWeight: '600'
  },
  selectedLanguageText: {
    color: '#FFFFFF'
  },
  sectionTitle: {
    color: '#174A68',
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginBottom: 10
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 18,
    marginVertical: 7,
    padding: 17,
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 2
  },
  icon: {
    fontSize: 27,
    color: '#087F5B',
    marginRight: 15
  },
  cardContent: {
    flex: 1
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#174A68'
  },
  cardDesc: {
    fontSize: 12,
    color: '#687D89',
    marginTop: 5
  },
  arrow: {
    fontSize: 26,
    color: '#087F5B'
  },
  footer: {
    alignItems: 'center',
    padding: 28
  },
  footerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#087F5B'
  },
  footerText: {
    color: '#687D89',
    marginTop: 5
  }
});
