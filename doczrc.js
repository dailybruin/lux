import doczPluginNetlify from 'docz-plugin-netlify'
import { css } from 'docz-plugin-css'

export default {
  title: 'Lux',
  codeSandbox: false,
  typescript: true,
  plugins: [doczPluginNetlify(), css()],
  filterComponents: files =>
    files.filter(filepath =>
      /src\/components\/.*\/*\.(js|jsx|ts|tsx)$/.test(filepath)
    ),
}
