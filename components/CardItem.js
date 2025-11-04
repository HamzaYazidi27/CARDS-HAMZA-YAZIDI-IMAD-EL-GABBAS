import React from 'react'; 
import { View, Text, Image, StyleSheet, Button, Linking } from 'react-native'; 

// export par défaut 
export default function CardItem({ title, description, image }) { 
  const getWebsiteUrl = (title) => {
    switch(title) {
      case 'React Native':
        return 'https://reactnative.dev';
      case 'Expo':
        return 'https://expo.dev';
      case 'Flexbox':
        return 'https://developer.mozilla.org/fr/docs/Web/CSS/CSS_Flexible_Box_Layout';
      default:
        return null;
    }
  };

  const openWebsite = () => {
    const url = getWebsiteUrl(title);
    if (url) {
      Linking.openURL(url);
    }
  };

  return ( 

    <View style={styles.card}> 

      <Image source={{ uri: image }} style={styles.cover} /> 

      <View style={styles.body}> 
        <Text style={styles.title}>{title}</Text> 
        <Text style={styles.desc}>{description}</Text> 
        <Button
          title="Visiter le site web"
          onPress={openWebsite}
        />
      </View> 
    </View> 

  ); 

} 

 

const styles = StyleSheet.create({ 

  card: { 

    width: '100%', 

    backgroundColor: '#fff', 

    borderRadius: 12, 

    overflow: 'hidden', 

    marginBottom: 16, 

    elevation: 3, // ombre Android 

  }, 

  cover: { width: '100%', height: 150 }, 

  body: { padding: 12 }, 

  title: { fontSize: 16, fontWeight: 'bold', marginBottom: 6 }, 

  desc: { color: '#555', marginBottom: 12 }
}); 