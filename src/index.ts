/* /// <reference path="index.d.ts"/> */
import './index.d.ts'

// Components
export { default as ArticleGrid } from './components/ArticleGrid'
export { default as Article } from './components/Article'
export { default as Footer } from './components/Footer'
export { default as Head } from './components/Head'
export { default as Headline } from './components/Headline'
export { default as Image } from './components/Image'

// Utils
export { default as styles } from './utils/styles'
export { default as toSentence } from './utils/toSentence'
export {
  default as convertEdgesToArticles,
  ArticleData,
} from './utils/convertEdgesToArticles'
