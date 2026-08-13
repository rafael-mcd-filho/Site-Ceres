type MarkedTitleProps = {
  text: string;
  /** Trecho exato de `text` que recebe o traço em brass. */
  mark?: string;
};

/** Destaca uma frase-chave do título sem quebrar a leitura em várias linhas. */
export function MarkedTitle({ text, mark }: MarkedTitleProps) {
  if (!mark) return <>{text}</>;

  const start = text.indexOf(mark);
  if (start === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, start)}
      <span className="headline-mark">{mark}</span>
      {text.slice(start + mark.length)}
    </>
  );
}
