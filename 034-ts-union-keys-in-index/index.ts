type Language = "mm" | "en";

type LangConfig = {
  [Lang in Language]: {
    color: string;
    fontSize: number;
  };
};

const langConfig: LangConfig = {
  mm: {
    color: "red",
    fontSize: 20,
  },
  en: {
    color: "black",
    fontSize: 16,
  },
};

console.log(langConfig);
