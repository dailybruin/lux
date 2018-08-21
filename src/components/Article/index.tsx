import * as React from 'react';
import { css } from 'react-emotion';

enum ContentType {
  Text,
}

interface Content {
  type: Content;
  content: string;
}

/**
 * Article properties.
 */
interface ArticleProps {
  /** The paragraphs of content for the story. */
  content: Array<Content>;
}

/** A footer to go at the bottom of every page. */
export default function Footer(props: ArticleProps) {
  const renderedContent;
  return <article>{}</article>;
}
