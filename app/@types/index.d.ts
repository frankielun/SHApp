export interface ISuperHeros {
    image: {
      url: string;
    };
    name: string;
    biography: {
      'first-appearance': string;
      publisher: string;
    },
    powerstats: {
      intelligence: string;
      strength: string;
      speed: string;
      durability: string;
      power: string;
      combat: string;
    }
  }