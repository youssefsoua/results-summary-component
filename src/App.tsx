import React from "react";

interface IScoreItemProps {
  category: categories;
  score: number;
  icon: string;
}

type categories = "Reaction" | "Memory" | "Verbal" | "Visual";

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

const ScoreItemConfig: Record<categories, { color: string; bgColor: string }> =
  {
    Reaction: {
      color: "text-light-red",
      bgColor: "bg-light-red/10",
    },
    Memory: {
      color: "text-orangey-yellow",
      bgColor: "bg-orangey-yellow/10",
    },
    Verbal: {
      color: "text-green-teal",
      bgColor: "bg-green-teal/10",
    },
    Visual: {
      color: "text-cobalt-blue",
      bgColor: "bg-cobalt-blue/10",
    },
  };

const ScoreItem: React.FC<IScoreItemProps> = ({ category, icon, score }) => {
  const itemConfig = ScoreItemConfig[category];

  return (
    <div
      className={`mb-3 flex flex-row justify-between rounded-md ${itemConfig.bgColor} p-2`}
    >
      <div className="flex flex-row items-center">
        <img src={icon} alt={category} className="mr-2" />
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
    <div className="flex flex-col overflow-hidden shadow-2xl md:flex-row md:rounded-3xl">
      <div className="flex w-[290px] flex-col items-center rounded-b-3xl bg-gradient-to-b from-light-slate-blue to-light-royal-blue p-8 text-center md:rounded-r-3xl md:px-14">
        <h1 className="mb-5 font-bold text-light-lavender">Your Result</h1>
        <div className=" mb-4 flex h-36 w-36 flex-col items-center justify-center rounded-full bg-gradient-to-b from-violet-blue to-persian-blue">
          <p className="mb-1 text-6xl font-bold text-white">76</p>
          <p className="text-sm font-medium text-light-lavender">of 100</p>
        </div>
        <h2 className="mb-4 text-2xl font-bold text-white">Great</h2>
        <p className="text-sm font-medium text-light-lavender">
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
      <div className="flex w-[290px] flex-col p-8">
        <h1 className="mb-4 text-xl font-bold text-dark-gray-blue">Summary</h1>
        {data.map((item) => (
          <ScoreItem key={item.category} {...item} />
        ))}
        <a className=" mt-4 rounded-full bg-dark-gray-blue py-2.5 text-center text-sm text-white hover:bg-violet-blue">
          Continue
        </a>
      </div>
    </div>
  );
};

export default App;
