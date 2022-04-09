import styles from "./pull-quote.module.css";

export const PullQuote = ({ quote, author }) => {
  if (!quote) {
    return null;
  }

  return (
    <div className={styles.wrap}>
      <figure className="mx-auto max-w-4xl">
        <blockquote className="text-2xl md:text-4xl font-serif">{quote}</blockquote>
        {author && <figcaption className={styles.author}>{author}</figcaption>}
      </figure>
    </div>
  );
};
