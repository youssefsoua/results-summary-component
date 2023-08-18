interface IScoreItemProps {
  category: "Reaction" | "Memory" | "Verbal" | "Visual";
  score: number;
  icon: string;
}

const data: IScoreItemProps[] = [
  {
    category: "Reaction",
    score: 80,
    icon: "./icon-reaction.svg",
  },
  {
    category: "Memory",
    score: 92,
    icon: "./icon-memory.svg",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "./icon-verbal.svg",
  },
  {
    category: "Visual",
    score: 72,
    icon: "./icon-visual.svg",
  },
];

const ScoreItemConfig: Record<
  IScoreItemProps["category"],
  { color: string; bgColor: string }
> = {
  Reaction: {
    color: "text-light-red",
    bgColor: "bg-light-red/5",
  },
  Memory: {
    color: "text-orangey-yellow",
    bgColor: "bg-orangey-yellow/5",
  },
  Verbal: {
    color: "text-green-teal",
    bgColor: "bg-green-teal/5",
  },
  Visual: {
    color: "text-cobalt-blue",
    bgColor: "bg-cobalt-blue/5",
  },
};

const ScoreItem = (props: IScoreItemProps) => {
  const { category, icon, score } = props;
  const itemConfig = ScoreItemConfig[category];

  return (
    <div
      className={`mb-4 flex flex-row justify-between rounded-md ${itemConfig.bgColor} p-3`}
    >
      <div className="flex flex-row items-center">
        <img
          src={icon}
          alt={category}
          className="mr-2"
          width={20}
          height={20}
        />
        <p className={`font-medium ${itemConfig.color} text-base`}>
          {category}
        </p>
      </div>
      <p className="font-bold text-dark-gray-blue">
        {score}
        <span className="text-dark-gray-blue/50"> / 100</span>
      </p>
    </div>
  );
};

const App = () => {
  return (
    <article className="flex w-full flex-col shadow-2xl md:h-[512px] md:w-[736px] md:flex-row md:rounded-3xl">
      <section className="flex flex-1 flex-col items-center rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue px-12 py-8 text-center md:rounded-3xl">
        <h1 className="mb-10 text-2xl font-bold text-light-lavender">
          Your Result
        </h1>
        <div className="flex h-48 w-48 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue">
          <span className="mb-1 text-6xl font-bold text-white">76</span>
          <p className="text-base font-medium text-light-lavender">of 100</p>
        </div>
        <p className="mb-4 mt-8 text-2xl font-bold text-white md:text-3xl">
          Great
        </p>
        <p className="text-base font-medium leading-tight text-light-lavender md:max-w-[260px] md:text-lg">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </section>
      <section className="flex flex-1 flex-col px-12 py-8">
        <h2 className="mb-8 text-2xl font-extrabold text-dark-gray-blue">
          Summary
        </h2>
        {data.map((item) => (
          <ScoreItem key={item.category} {...item} />
        ))}
        <button className=" mt-8 rounded-full bg-dark-gray-blue py-4 text-center text-sm text-white hover:bg-violet-blue md:text-base">
          Continue
        </button>
      </section>
    </article>
  );
};

export default App;
