/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import ProgressBar from './ProgressBar';
import NotNetwork from './NotNetwork';
import colors from './colors';
import i18n from '../../i18n';
import {
  getPokemonByName,
  getPokemonImage,
  getPokemonSpeciesByName,
} from '../../services/api';
const {height} = Dimensions.get('window');
const localization = i18n.getLanguage();

const Details = ({route}) => {
  const [name, setName] = useState('');
  const [ability, setAbility] = useState('');

  const [details, setDetails] = useState([]);
  const [loanding, setLoanding] = useState(false);
  const [network, setNetwork] = useState(true);

  const [stats, setStats] = useState([]);

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  const getValue = array =>
    array.find(word => word.language.name === localization);

  const fetchPokemonDetails = () => {
    const {params} = route;
    const {pokemon} = params;
    setLoanding(true);
    getPokemonByName(pokemon.name)
      .then(response => {
        setDetails(response);
        setLoanding(false);
        setStats(response.stats);
      })
      .catch(() => setNetwork(false))
      .finally(() => setLoanding(false));

    getPokemonSpeciesByName(pokemon.name)
      .then(({names, flavor_text_entries}) => {
        let a = getValue(flavor_text_entries).flavor_text || '';
        a = a.replace(/[\r\n]+/gm, '');
        setAbility(a);
        setName(getValue(names).name || '');
      })
      .catch(function (error) {
        console.log('There was an ERROR: ', error);
      });
  };

  const separator = title => (
    <View style={styles.sepContainer}>
      <View style={styles.sepView} />
      <View>
        <Text style={styles.textCenter}>{title}</Text>
      </View>
      <View style={styles.sepView} />
    </View>
  );

  const componentStatics = ({key, stat, base_stat}) => {
    const title = i18n[stat.name] || stat.name;
    return (
      <View style={[styles.row, styles.padding]} key={key}>
        <View style={styles.staticsViewDescription}>
          <Text numberOfLines={1}>{title}</Text>
        </View>
        <View style={styles.staticsViewGraph}>
          <ProgressBar progress={base_stat} />
        </View>
      </View>
    );
  };

  const componentLoanding = () => {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator size="large" color={colors.red} />
      </View>
    );
  };

  const componentNotNetwork = () => {
    return <NotNetwork />;
  };

  return loanding ? (
    componentLoanding()
  ) : !network ? (
    componentNotNetwork()
  ) : (
    <View
      style={styles.container}
      shadowColor="rgba(0,0,0,0.25)"
      shadowOffset={styles.shadowOffset}
      shadowOpacity={0.5}
      shadowRadius={1}>
      <View>
        <View>
          <View style={styles.row}>
            <View style={styles.flex}>
              <Image
                style={styles.image}
                source={{uri: getPokemonImage(details.name)}}
              />
            </View>
            <View style={styles.features}>
              <Text style={styles.text}>#{('000' + details.id).slice(-3)}</Text>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={[styles.text, styles.measures]}>
                  {i18n.height}:
                </Text>
                <Text style={styles.text}> {details.height / 10}m</Text>
              </View>
              <View style={styles.row}>
                <Text style={[styles.text, styles.measures]}>
                  {i18n.weight}:
                </Text>
                <Text style={styles.text}> {details.weight / 10}kg</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text style={styles.description}>{ability}</Text>
        </View>
      </View>

      {separator(i18n.statistics)}
      {stats.map((s, index) => componentStatics(s, index))}
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    margin: height * 0.01,
    paddingBottom: height * 0.02,
  },
  row: {
    flexDirection: 'row',
  },
  flex: {
    flex: 1,
  },
  features: {
    flex: 1,
    marginTop: height * 0.02,
  },
  image: {
    height: height * 0.2,
  },
  text: {
    fontSize: height * 0.02,
    marginTop: height * 0.01,
  },
  textCenter: {
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: height * 0.04,
  },
  description: {
    textAlign: 'center',
    marginTop: height * 0.01,
    lineHeight: height * 0.035,
  },
  measures: {
    fontWeight: 'bold',
  },
  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.02,
    marginBottom: height * 0.02,
  },
  sepView: {
    flex: 1,
    height: height * 0.0005,
    backgroundColor: colors.hardGrey,
    margin: height * 0.02,
  },
  padding: {
    paddingTop: height * 0.015,
    paddingLeft: height * 0.02,
    paddingRight: height * 0.02,
  },
  staticsViewDescription: {
    flex: 3,
  },
  staticsViewGraph: {
    flex: 7,
  },
});
