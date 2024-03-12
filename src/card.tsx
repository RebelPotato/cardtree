import { marked } from "marked";
import { Signal } from "@preact/signals";
import "./card.css"

type CardProps = {
  markdown: Signal<string>;
};

function Card(props: CardProps) {
  const { markdown } = props;
  const parse = (markdown: string) => {
    const str = marked.parse(markdown);
    if (str instanceof Promise)
      throw new Error(
        "marked configuration error: marked() returned a Promise<string>.\nMaybe your options are wrong?"
      );
    return str;
  };
  const html = parse(markdown.value);

  const handleInputChange = (e: InputEvent) => {
    const target = e.target! as HTMLTextAreaElement;
    markdown.value = target.value;
  };

  return (
    <div class="card">
      <textarea value={markdown.value} onInput={handleInputChange} />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export { Card };
