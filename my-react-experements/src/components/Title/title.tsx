interface TitleProps {
  title: string;
  subtitle: string;
}

const Title: React.FC<TitleProps> = (titleAndSubtitle: TitleProps) => {
  return (
    <div>
      <h1>{titleAndSubtitle.title}</h1>
      <h2>{titleAndSubtitle.subtitle}</h2>
    </div>
  );
};

export default Title;
