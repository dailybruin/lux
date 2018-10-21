import doczPluginNetlify from 'docz-plugin-netlify'
import { css } from 'docz-plugin-css'

export default {
  title: 'Lux',
  typescript: true,
  plugins: [doczPluginNetlify(), css()],
}
