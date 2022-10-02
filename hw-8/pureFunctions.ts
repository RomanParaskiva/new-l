// Задание 1
export type Team = { name: string; score: number };

export const getTopName = (teams: Team[]): string => {
 const max = teams.reduce((el, c) => {
    return el.score > c.score ? el : c  })
  return max.name
};

// Задание 2
export type QsObj = Record<string, string | number | boolean | object>;

export const createQs = (qsObj: QsObj): string => {
  const str: string[] = [];

  for (let k in qsObj) {
    const value: string | boolean | number | object = qsObj[k];

    if (typeof value !== "object") {
      str.push(encodeURIComponent(k) + "=" + encodeURIComponent(value));
    } else {
      str.push(createQs(value as typeof qsObj));
    }
  }

  return "?" + str.join("&").replace("?", "");
};

// Задание 3

export const parseQs = (qs: string): QsObj => {
  return JSON.parse(
    '{"' +
      decodeURI(qs)
        .replace("?", "")
        .replace(/"/g, '\\"')
        .replace(/&/g, '","')
        .replace(/=/g, '":"') +
      '"}'
  );
};
