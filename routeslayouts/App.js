import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text style={styles.title}>⚡ CYBER PROFILE ⚡</Text>

      {/* Neon Table */}
      <View style={styles.table}>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>Name</Text>
          <Text style={styles.rowValue}>Nandhu</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>USN</Text>
          <Text style={styles.rowValue}>161</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.rowLabel}>College</Text>
          <Text style={styles.rowValue}>NIE</Text>
        </View>
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0f1f', // dark cyberpunk background
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ff00e6',
    textShadowColor: '#ff00e6',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 18,
    marginBottom: 40,
  },

  table: {
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.4)',
    borderWidth: 2,
    borderColor: '#00eaff',
    borderRadius: 12,
    padding: 20,
    shadowColor: '#00eaff',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 12,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#00eaff',
  },

  rowLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#ff00e6',
    textShadowColor: '#ff00e6',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 8,
  },

  rowValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#39ff14',
    textShadowColor: '#39ff14',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});
