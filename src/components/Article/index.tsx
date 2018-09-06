import * as React from 'react';
import { css } from 'react-emotion';

enum ContentType {
  Text,
  Photo,
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
  dropcap: boolean;
}

/** A footer to go at the bottom of every page. */
export default function Footer(props: ArticleProps) {
  return <article>{}</article>;
}
