const path = require('path');
const glob = require('glob');

module.exports = {
  title: 'React Style Guide Example',
  components: 'src/**/*.tsx',
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: true },
  }).parse,
};
