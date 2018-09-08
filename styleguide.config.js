module.exports = {
  title: 'Lux',
  serverPort: 1234,
  components: 'src/components/**/*.tsx',
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig({
    propFilter: { skipPropsWithoutDoc: false },
  }).parse,
};
