interface Course {
  id: number;
  name: string;
  description: string;
  url: string;
}

export const courses: Course[] = [
  {
    id: 1,
    name: "Angular",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit ligula, faucibus eget nibh ut, hendrerit gravida neque. Vestibulum tristique condimentum tortor, vel condimentum leo rhoncus non. Aenean quis posuere lectus. Etiam purus sapien, fringilla vel dictum quis, hendrerit at odio.",
    url: "https://miro.medium.com/max/720/1*eOE7VhXBlqdIJ9weEdHbQQ.webp",
  },
  {
    id: 2,
    name: "Reactjs",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit ligula, faucibus eget nibh ut, hendrerit gravida neque. Vestibulum tristique condimentum tortor, vel condimentum leo rhoncus non. Aenean quis posuere lectus. Etiam purus sapien, fringilla vel dictum quis, hendrerit at odio.",
    url: "https://cdn-media-1.freecodecamp.org/ghost/2019/03/vueart.png",
  },
  {
    id: 3,
    name: "Vue.js",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur elit ligula, faucibus eget nibh ut, hendrerit gravida neque. Vestibulum tristique condimentum tortor, vel condimentum leo rhoncus non. Aenean quis posuere lectus. Etiam purus sapien, fringilla vel dictum quis, hendrerit at odio.",
    url: "https://cdn-media-1.freecodecamp.org/images/1*3WTslHrSuJfqlj3qZRRFPQ.png",
  },
];
