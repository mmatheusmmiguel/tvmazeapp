import DetailsService from '.';

const withFetch = async () => {
  const res = await DetailsService.get('6771', [
    {name: 'embed', value: 'episodes'},
  ]);

  return res;
};

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () =>
        Promise.resolve({
          id: 6771,
          url: 'https://www.tvmaze.com/shows/6771/the-powerpuff-girls',
          name: 'The Powerpuff Girls',
          type: 'Animation',
          language: 'English',
          genres: ['Comedy', 'Action', 'Science-Fiction'],
          status: 'Running',
          runtime: 15,
          averageRuntime: 15,
          premiered: '2016-04-04',
          ended: null,
          officialSite:
            'https://www.cartoonnetwork.com/video/powerpuff-girls/index.html',
          schedule: {
            time: '17:30',
            days: ['Sunday'],
          },
          rating: {
            average: 5.5,
          },
          weight: 83,
          network: {
            id: 11,
            name: 'Cartoon Network',
            country: {
              name: 'United States',
              code: 'US',
              timezone: 'America/New_York',
            },
            officialSite: null,
          },
          webChannel: null,
          dvdCountry: null,
          externals: {
            tvrage: null,
            thetvdb: 307473,
            imdb: 'tt4718304',
          },
          image: {
            medium:
              'https://static.tvmaze.com/uploads/images/medium_portrait/60/151357.jpg',
            original:
              'https://static.tvmaze.com/uploads/images/original_untouched/60/151357.jpg',
          },
          summary:
            "<p>The city of Townsville may be a beautiful, bustling metropolis, but don't be fooled! There's evil afoot! And only three things can keep the bad guys at bay: Blossom, Bubbles and Buttercup, three super-powered little girls, known to their fans (and villains everywhere) as <b>The Powerpuff Girls</b>. Juggling school, bedtimes, and beating up giant monsters may be daunting, but together the Powerpuff Girls are up to the task. Battling a who's who of evil, they show what it really means to \"fight like a girl.\"</p>",
          updated: 1573685920,
          _links: {
            self: {
              href: 'https://api.tvmaze.com/shows/6771',
            },
            previousepisode: {
              href: 'https://api.tvmaze.com/episodes/1662010',
            },
          },
          _embedded: {
            episodes: [
              {
                id: 657308,
                url: 'https://www.tvmaze.com/episodes/657308/the-powerpuff-girls-1x01-escape-from-monster-island',
                name: 'Escape from Monster Island',
                season: 1,
                number: 1,
                type: 'regular',
                airdate: '2016-04-04',
                airtime: '18:00',
                airstamp: '2016-04-04T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132617.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132617.jpg',
                },
                summary:
                  "<p>Bubbles wins two tickets to a concert and has to pick between Blossom and Buttercup to go with her. Meanwhile, the Mayor's plane goes down over Monster Island and it's up to the girls to rescue him.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/657308',
                  },
                },
              },
              {
                id: 657309,
                url: 'https://www.tvmaze.com/episodes/657309/the-powerpuff-girls-1x02-princess-buttercup',
                name: 'Princess Buttercup',
                season: 1,
                number: 2,
                type: 'regular',
                airdate: '2016-04-04',
                airtime: '18:00',
                airstamp: '2016-04-04T22:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132618.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132618.jpg',
                },
                summary:
                  '<p>Buttercup becomes enamored with a team of roller derby girls called the Derbytantes. When she starts spending all of her time with them, Princess Morbucks seeks to be her replacement in the Powerpuff Girls.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/657309',
                  },
                },
              },
              {
                id: 691590,
                url: 'https://www.tvmaze.com/episodes/691590/the-powerpuff-girls-1x03-the-stayover',
                name: 'The Stayover',
                season: 1,
                number: 3,
                type: 'regular',
                airdate: '2016-04-05',
                airtime: '18:00',
                airstamp: '2016-04-05T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132627.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132627.jpg',
                },
                summary:
                  '<p>Blossom and Buttercup suffer a candy hangover, and they must retrace their steps to find where they left Bubbles.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691590',
                  },
                },
              },
              {
                id: 691591,
                url: 'https://www.tvmaze.com/episodes/691591/the-powerpuff-girls-1x04-painbow',
                name: 'Painbow',
                season: 1,
                number: 4,
                type: 'regular',
                airdate: '2016-04-06',
                airtime: '18:00',
                airstamp: '2016-04-06T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132628.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132628.jpg',
                },
                summary:
                  '<p>A rainbow causes Townsville to become uncomfortably happy.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691591',
                  },
                },
              },
              {
                id: 691592,
                url: 'https://www.tvmaze.com/episodes/691592/the-powerpuff-girls-1x05-horn-sweet-horn',
                name: 'Horn, Sweet Horn',
                season: 1,
                number: 5,
                type: 'regular',
                airdate: '2016-04-07',
                airtime: '18:00',
                airstamp: '2016-04-07T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132629.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132629.jpg',
                },
                summary:
                  '<p>Donny the Pony is transformed into a monster that threatens Townsville.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691592',
                  },
                },
              },
              {
                id: 691593,
                url: 'https://www.tvmaze.com/episodes/691593/the-powerpuff-girls-1x06-man-up',
                name: 'Man Up',
                season: 1,
                number: 6,
                type: 'regular',
                airdate: '2016-04-08',
                airtime: '18:00',
                airstamp: '2016-04-08T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132630.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132630.jpg',
                },
                summary:
                  '<p>Buttercup adopts a New Age attitude after letting Man-Boy the villain escape in her anger. In order to defeat Man-Boy when he returns to take revenge, Buttercup aims to strike a balance between peace and struggle.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691593',
                  },
                },
              },
              {
                id: 691594,
                url: 'https://www.tvmaze.com/episodes/691594/the-powerpuff-girls-1x07-bye-bye-bellum',
                name: 'Bye Bye, Bellum',
                season: 1,
                number: 7,
                type: 'regular',
                airdate: '2016-04-11',
                airtime: '18:00',
                airstamp: '2016-04-11T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132631.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132631.jpg',
                },
                summary:
                  '<p>The Mayor of Townsville overworks the Powerpuff Girls after his secretary Sara Bellum quits</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691594',
                  },
                },
              },
              {
                id: 691595,
                url: 'https://www.tvmaze.com/episodes/691595/the-powerpuff-girls-1x08-little-octi-lost',
                name: 'Little Octi Lost',
                season: 1,
                number: 8,
                type: 'regular',
                airdate: '2016-04-12',
                airtime: '18:00',
                airstamp: '2016-04-12T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132632.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132632.jpg',
                },
                summary:
                  '<p>Buttercup tries to teach Bubbles a lesson with her stuffed animal Octi, but her plan backfires when Octi is stolen by the villain Pack Rat.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691595',
                  },
                },
              },
              {
                id: 691596,
                url: 'https://www.tvmaze.com/episodes/691596/the-powerpuff-girls-1x09-strong-armed',
                name: 'Strong Armed',
                season: 1,
                number: 9,
                type: 'regular',
                airdate: '2016-04-13',
                airtime: '18:00',
                airstamp: '2016-04-13T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132633.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132633.jpg',
                },
                summary:
                  '<p>Bubbles breaks her arm and gets a powerful robotic cast just in time to face the villain Pack Rat.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691596',
                  },
                },
              },
              {
                id: 691597,
                url: 'https://www.tvmaze.com/episodes/691597/the-powerpuff-girls-1x10-power-up-puff',
                name: 'Power Up Puff',
                season: 1,
                number: 10,
                type: 'regular',
                airdate: '2016-04-14',
                airtime: '18:00',
                airstamp: '2016-04-14T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/132808.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/132808.jpg',
                },
                summary:
                  '<p>During a fight, both Buttercup and Bubbles are surprised to discover that they have finally leveled up, which leaves Blossom wondering about the full extent of her own abilities.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691597',
                  },
                },
              },
              {
                id: 691598,
                url: 'https://www.tvmaze.com/episodes/691598/the-powerpuff-girls-1x11-tiara-trouble',
                name: 'Tiara Trouble',
                season: 1,
                number: 11,
                type: 'regular',
                airdate: '2016-04-15',
                airtime: '18:00',
                airstamp: '2016-04-15T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/53/133032.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/53/133032.jpg',
                },
                summary:
                  "<p>A mysterious tiara curses Townsville's pageant of Beauty, Talent, and All-Around Flair.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691598',
                  },
                },
              },
              {
                id: 691600,
                url: 'https://www.tvmaze.com/episodes/691600/the-powerpuff-girls-1x12-the-wrinklegruff-gals',
                name: 'The Wrinklegruff Gals',
                season: 1,
                number: 12,
                type: 'regular',
                airdate: '2016-04-21',
                airtime: '18:00',
                airstamp: '2016-04-21T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/54/135496.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/54/135496.jpg',
                },
                summary:
                  '<p>A potion to make the Powerpuff Girls older backfires, causing them to become senior citizens.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691600',
                  },
                },
              },
              {
                id: 691601,
                url: 'https://www.tvmaze.com/episodes/691601/the-powerpuff-girls-1x13-arachno-romance',
                name: 'Arachno Romance',
                season: 1,
                number: 13,
                type: 'regular',
                airdate: '2016-04-28',
                airtime: '18:00',
                airstamp: '2016-04-28T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/55/138102.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/55/138102.jpg',
                },
                summary:
                  '<p>The Professor has a new girlfriend, and the girls plot and scheme to break up their budding relationship.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691601',
                  },
                },
              },
              {
                id: 691602,
                url: 'https://www.tvmaze.com/episodes/691602/the-powerpuff-girls-1x14-puffdoras-box',
                name: "Puffdora's Box",
                season: 1,
                number: 14,
                type: 'regular',
                airdate: '2016-05-05',
                airtime: '18:00',
                airstamp: '2016-05-05T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/56/140362.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/56/140362.jpg',
                },
                summary:
                  '<p>While Spring cleaning the house in the middle of Fall, Blossom accidentally releases of group of party-loving ghosts from a three thousand-year-old, mystical chest.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/691602',
                  },
                },
              },
              {
                id: 770609,
                url: 'https://www.tvmaze.com/episodes/770609/the-powerpuff-girls-1x15-blue-ribbon-blues',
                name: 'Blue Ribbon Blues',
                season: 1,
                number: 15,
                type: 'regular',
                airdate: '2016-05-12',
                airtime: '18:00',
                airstamp: '2016-05-12T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/57/144042.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/57/144042.jpg',
                },
                summary:
                  '<p>A famous scientist visits the school and Blossom tries to impress him.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/770609',
                  },
                },
              },
              {
                id: 772889,
                url: 'https://www.tvmaze.com/episodes/772889/the-powerpuff-girls-1x16-frenemy',
                name: 'Frenemy',
                season: 1,
                number: 16,
                type: 'regular',
                airdate: '2016-05-19',
                airtime: '18:00',
                airstamp: '2016-05-19T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/58/146906.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/58/146906.jpg',
                },
                summary:
                  '<p>The girls befriend the coolest girl in school and become accomplices in her adventurous crimes.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/772889',
                  },
                },
              },
              {
                id: 777840,
                url: 'https://www.tvmaze.com/episodes/777840/the-powerpuff-girls-1x17-once-upon-a-townsville',
                name: 'Once Upon a Townsville',
                season: 1,
                number: 17,
                type: 'regular',
                airdate: '2016-05-26',
                airtime: '18:00',
                airstamp: '2016-05-26T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/59/149245.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/59/149245.jpg',
                },
                summary:
                  "<p>When a dainty princess on a mission comes to Townsville, the girls must learn that the superhero way isn't always the right way.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/777840',
                  },
                },
              },
              {
                id: 805275,
                url: 'https://www.tvmaze.com/episodes/805275/the-powerpuff-girls-1x18-man-up-2-still-man-ing',
                name: 'Man Up 2: Still Man-ing',
                season: 1,
                number: 18,
                type: 'regular',
                airdate: '2016-05-30',
                airtime: '18:00',
                airstamp: '2016-05-30T22:00:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/60/150512.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/60/150512.jpg',
                },
                summary:
                  '<p>When Manboy steals all the water in Townsville, Blossom and Bubbles race through the Townsville Wastelands to retrieve it. Buttercup is obsessed with detecting bottle caps of her favorite soft drink mascot, until she realizes that her obsession has led to her sisters being defeated and captured.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/805275',
                  },
                },
              },
              {
                id: 820919,
                url: 'https://www.tvmaze.com/episodes/820919/the-powerpuff-girls-1x19-viral-spiral',
                name: 'Viral Spiral',
                season: 1,
                number: 19,
                type: 'regular',
                airdate: '2016-06-09',
                airtime: '18:45',
                airstamp: '2016-06-09T22:45:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/61/154095.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/61/154095.jpg',
                },
                summary:
                  '<p>When the Amoeba Boys wreak havoc on the internet, Bubbles has to hack her sisters in to stop them.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/820919',
                  },
                },
              },
              {
                id: 831263,
                url: 'https://www.tvmaze.com/episodes/831263/the-powerpuff-girls-1x20-bubbles-of-the-opera',
                name: 'Bubbles of the Opera',
                season: 1,
                number: 20,
                type: 'regular',
                airdate: '2016-06-16',
                airtime: '18:30',
                airstamp: '2016-06-16T22:30:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/62/157077.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/62/157077.jpg',
                },
                summary:
                  '<p>After suffering a bad photograph on Picture Day, Bubbles becomes depressed and more vicious.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/831263',
                  },
                },
              },
              {
                id: 831264,
                url: 'https://www.tvmaze.com/episodes/831264/the-powerpuff-girls-1x21-sister-sitter',
                name: 'Sister Sitter',
                season: 1,
                number: 21,
                type: 'regular',
                airdate: '2016-06-23',
                airtime: '18:30',
                airstamp: '2016-06-23T22:30:00+00:00',
                runtime: 11,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/63/159911.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/63/159911.jpg',
                },
                summary:
                  '<p>Blossom and Bubbles get sick with the flu, so Buttercup reluctantly plays nursemaid to them.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/831264',
                  },
                },
              },
              {
                id: 882630,
                url: 'https://www.tvmaze.com/episodes/882630/the-powerpuff-girls-1x22-odd-bubbles-out',
                name: 'Odd Bubbles Out',
                season: 1,
                number: 22,
                type: 'regular',
                airdate: '2016-09-01',
                airtime: '17:30',
                airstamp: '2016-09-01T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/74/186190.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/74/186190.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/882630',
                  },
                },
              },
              {
                id: 904659,
                url: 'https://www.tvmaze.com/episodes/904659/the-powerpuff-girls-1x23-presidential-punchout',
                name: 'Presidential Punchout',
                season: 1,
                number: 23,
                type: 'regular',
                airdate: '2016-09-08',
                airtime: '17:30',
                airstamp: '2016-09-08T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/74/186191.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/74/186191.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/904659',
                  },
                },
              },
              {
                id: 917876,
                url: 'https://www.tvmaze.com/episodes/917876/the-powerpuff-girls-1x24-cheep-thrills',
                name: 'Cheep Thrills',
                season: 1,
                number: 24,
                type: 'regular',
                airdate: '2016-09-15',
                airtime: '17:30',
                airstamp: '2016-09-15T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/74/187309.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/74/187309.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/917876',
                  },
                },
              },
              {
                id: 904660,
                url: 'https://www.tvmaze.com/episodes/904660/the-powerpuff-girls-1x25-fashion-forward',
                name: 'Fashion Forward',
                season: 1,
                number: 25,
                type: 'regular',
                airdate: '2016-09-19',
                airtime: '17:30',
                airstamp: '2016-09-19T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/75/189519.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/75/189519.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/904660',
                  },
                },
              },
              {
                id: 904661,
                url: 'https://www.tvmaze.com/episodes/904661/the-powerpuff-girls-1x26-in-the-garden-of-good-and-eddie',
                name: 'In The Garden of Good and Eddie',
                season: 1,
                number: 26,
                type: 'regular',
                airdate: '2016-09-20',
                airtime: '17:30',
                airstamp: '2016-09-20T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/76/190585.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/76/190585.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/904661',
                  },
                },
              },
              {
                id: 904662,
                url: 'https://www.tvmaze.com/episodes/904662/the-powerpuff-girls-1x27-road-trippin',
                name: "Road Trippin'",
                season: 1,
                number: 27,
                type: 'regular',
                airdate: '2016-09-21',
                airtime: '17:30',
                airstamp: '2016-09-21T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/76/192000.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/76/192000.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/904662',
                  },
                },
              },
              {
                id: 904663,
                url: 'https://www.tvmaze.com/episodes/904663/the-powerpuff-girls-1x28-the-big-sleep',
                name: 'The Big Sleep',
                season: 1,
                number: 28,
                type: 'regular',
                airdate: '2016-09-22',
                airtime: '17:30',
                airstamp: '2016-09-22T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/81/203955.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/81/203955.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/904663',
                  },
                },
              },
              {
                id: 904664,
                url: 'https://www.tvmaze.com/episodes/904664/the-powerpuff-girls-1x29-the-secret-life-of-blossom-powerpuff',
                name: 'The Secret Life of Blossom Powerpuff',
                season: 1,
                number: 29,
                type: 'regular',
                airdate: '2016-09-23',
                airtime: '17:30',
                airstamp: '2016-09-23T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/76/192002.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/76/192002.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/904664',
                  },
                },
              },
              {
                id: 942511,
                url: 'https://www.tvmaze.com/episodes/942511/the-powerpuff-girls-1x30-halt-and-catch-silico',
                name: 'Halt and Catch Silico',
                season: 1,
                number: 30,
                type: 'regular',
                airdate: '2016-10-08',
                airtime: '17:30',
                airstamp: '2016-10-08T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/81/203932.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/81/203932.jpg',
                },
                summary:
                  '<p>Negative articles surface on the internet and paint the Girls in a bad light, so they try to track down the author.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/942511',
                  },
                },
              },
              {
                id: 948697,
                url: 'https://www.tvmaze.com/episodes/948697/the-powerpuff-girls-1x31-secret-swapper-of-doom',
                name: 'Secret Swapper of Doom',
                season: 1,
                number: 31,
                type: 'regular',
                airdate: '2016-10-15',
                airtime: '17:30',
                airstamp: '2016-10-15T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/81/203933.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/81/203933.jpg',
                },
                summary: '',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/948697',
                  },
                },
              },
              {
                id: 948698,
                url: 'https://www.tvmaze.com/episodes/948698/the-powerpuff-girls-1x32-rainy-day',
                name: 'Rainy Day',
                season: 1,
                number: 32,
                type: 'regular',
                airdate: '2016-10-22',
                airtime: '17:30',
                airstamp: '2016-10-22T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/83/209125.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/83/209125.jpg',
                },
                summary:
                  '<p>The girls find trouble when they try to occupy themselves on a rainy day.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/948698',
                  },
                },
              },
              {
                id: 948699,
                url: 'https://www.tvmaze.com/episodes/948699/the-powerpuff-girls-1x33-the-squashening',
                name: 'The Squashening',
                season: 1,
                number: 33,
                type: 'regular',
                airdate: '2016-10-27',
                airtime: '17:30',
                airstamp: '2016-10-27T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/83/209130.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/83/209130.jpg',
                },
                summary:
                  '<p>In order to escape a monster, the girls must tell him a scary story.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/948699',
                  },
                },
              },
              {
                id: 961257,
                url: 'https://www.tvmaze.com/episodes/961257/the-powerpuff-girls-1x34-electric-buttercup',
                name: 'Electric Buttercup',
                season: 1,
                number: 34,
                type: 'regular',
                airdate: '2016-11-28',
                airtime: '17:00',
                airstamp: '2016-11-28T22:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/86/217144.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/86/217144.jpg',
                },
                summary:
                  "<p>Buttercup gets more than she bargained for when she makes a deal with a cool '80s metalhead to get a sweet new guitar.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/961257',
                  },
                },
              },
              {
                id: 979337,
                url: 'https://www.tvmaze.com/episodes/979337/the-powerpuff-girls-1x35-professor-proofed',
                name: 'Professor Proofed',
                season: 1,
                number: 35,
                type: 'regular',
                airdate: '2016-11-29',
                airtime: '17:00',
                airstamp: '2016-11-29T22:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/87/218829.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/87/218829.jpg',
                },
                summary:
                  "<p>After the Professor's latest experiment goes awry, the girls become overprotective.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/979337',
                  },
                },
              },
              {
                id: 979338,
                url: 'https://www.tvmaze.com/episodes/979338/the-powerpuff-girls-1x36-poorbucks',
                name: 'Poorbucks',
                season: 1,
                number: 36,
                type: 'regular',
                airdate: '2016-11-30',
                airtime: '17:00',
                airstamp: '2016-11-30T22:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/87/218830.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/87/218830.jpg',
                },
                summary:
                  '<p>When Morbucks loses her money, Blossom tries to reform her.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/979338',
                  },
                },
              },
              {
                id: 982635,
                url: 'https://www.tvmaze.com/episodes/982635/the-powerpuff-girls-1x37-snow-month',
                name: 'Snow Month',
                season: 1,
                number: 37,
                type: 'regular',
                airdate: '2016-12-01',
                airtime: '17:00',
                airstamp: '2016-12-01T22:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/87/218832.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/87/218832.jpg',
                },
                summary:
                  "<p>After a snow day saves Blossom from having to face a boy who's asked her out, she decides to use her ice breath to keep it going even if that means plunging Townsville into eternal winter complete with monstrous yetis!.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/982635',
                  },
                },
              },
              {
                id: 982636,
                url: 'https://www.tvmaze.com/episodes/982636/the-powerpuff-girls-1x38-somewhere-over-the-swingset',
                name: 'Somewhere Over the Swingset',
                season: 1,
                number: 38,
                type: 'regular',
                airdate: '2016-12-02',
                airtime: '17:00',
                airstamp: '2016-12-02T22:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/87/218833.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/87/218833.jpg',
                },
                summary:
                  '<p>When the girls disobey the Professor and swing all the way over the swingset, they must deal with unexpected consequences.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/982636',
                  },
                },
              },
              {
                id: 998421,
                url: 'https://www.tvmaze.com/episodes/998421/the-powerpuff-girls-1x39-people-pleaser',
                name: 'People Pleaser',
                season: 1,
                number: 39,
                type: 'regular',
                airdate: '2016-12-24',
                airtime: '12:00',
                airstamp: '2016-12-24T17:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/91/227711.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/91/227711.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/998421',
                  },
                },
              },
              {
                id: 1076814,
                url: 'https://www.tvmaze.com/episodes/1076814/the-powerpuff-girls-2x01-the-last-donnycorn',
                name: 'The Last Donnycorn',
                season: 2,
                number: 1,
                type: 'regular',
                airdate: '2017-03-03',
                airtime: '18:30',
                airstamp: '2017-03-03T23:30:00+00:00',
                runtime: 30,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/100/251774.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/100/251774.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1076814',
                  },
                },
              },
              {
                id: 1089606,
                url: 'https://www.tvmaze.com/episodes/1089606/the-powerpuff-girls-2x02-green-wing',
                name: 'Green Wing',
                season: 2,
                number: 2,
                type: 'regular',
                airdate: '2017-03-10',
                airtime: '18:45',
                airstamp: '2017-03-10T23:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/101/254228.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/101/254228.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1089606',
                  },
                },
              },
              {
                id: 1090381,
                url: 'https://www.tvmaze.com/episodes/1090381/the-powerpuff-girls-2x03-15-minutes-of-fame',
                name: '15 Minutes of Fame',
                season: 2,
                number: 3,
                type: 'regular',
                airdate: '2017-03-17',
                airtime: '19:45',
                airstamp: '2017-03-17T23:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/103/259454.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/103/259454.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1090381',
                  },
                },
              },
              {
                id: 1100163,
                url: 'https://www.tvmaze.com/episodes/1100163/the-powerpuff-girls-2x04-splitsville',
                name: 'Splitsville',
                season: 2,
                number: 4,
                type: 'regular',
                airdate: '2017-03-24',
                airtime: '19:45',
                airstamp: '2017-03-24T23:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/104/260509.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/104/260509.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1100163',
                  },
                },
              },
              {
                id: 1104815,
                url: 'https://www.tvmaze.com/episodes/1104815/the-powerpuff-girls-2x05-clawdad',
                name: 'Clawdad',
                season: 2,
                number: 5,
                type: 'regular',
                airdate: '2017-03-31',
                airtime: '19:45',
                airstamp: '2017-03-31T23:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/105/263952.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/105/263952.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1104815',
                  },
                },
              },
              {
                id: 1156710,
                url: 'https://www.tvmaze.com/episodes/1156710/the-powerpuff-girls-2x06-super-sweet-6',
                name: 'Super Sweet 6',
                season: 2,
                number: 6,
                type: 'regular',
                airdate: '2017-04-30',
                airtime: '17:30',
                airstamp: '2017-04-30T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/112/281092.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/112/281092.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1156710',
                  },
                },
              },
              {
                id: 1156711,
                url: 'https://www.tvmaze.com/episodes/1156711/the-powerpuff-girls-2x07-a-star-is-blossom',
                name: 'A Star Is Blossom',
                season: 2,
                number: 7,
                type: 'regular',
                airdate: '2017-05-07',
                airtime: '17:30',
                airstamp: '2017-05-07T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/112/281093.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/112/281093.jpg',
                },
                summary:
                  "<p>When Bubbles gets the lead in the school play, Blossom's jealousy consumes her.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1156711',
                  },
                },
              },
              {
                id: 1156862,
                url: 'https://www.tvmaze.com/episodes/1156862/the-powerpuff-girls-2x08-mini-golf-madness',
                name: 'Mini Golf Madness',
                season: 2,
                number: 8,
                type: 'regular',
                airdate: '2017-05-21',
                airtime: '17:30',
                airstamp: '2017-05-21T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/115/288994.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/115/288994.jpg',
                },
                summary:
                  '<p>Buttercup takes her game winning mini-golf ball, in spite of ominous warnings of dire consequences.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1156862',
                  },
                },
              },
              {
                id: 1156863,
                url: 'https://www.tvmaze.com/episodes/1156863/the-powerpuff-girls-2x09-summer-bummer',
                name: 'Summer Bummer',
                season: 2,
                number: 9,
                type: 'regular',
                airdate: '2017-05-28',
                airtime: '17:30',
                airstamp: '2017-05-28T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/115/288993.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/115/288993.jpg',
                },
                summary:
                  '<p>When the beach is taken over by the most excellent Bro Sharks, will the Girls be gnarly enough to save the day?.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1156863',
                  },
                },
              },
              {
                id: 1156864,
                url: 'https://www.tvmaze.com/episodes/1156864/the-powerpuff-girls-2x10-the-tell-tale-schedulebot',
                name: 'The Tell Tale Schedulebot',
                season: 2,
                number: 10,
                type: 'regular',
                airdate: '2017-06-04',
                airtime: '17:30',
                airstamp: '2017-06-04T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/118/295540.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/118/295540.jpg',
                },
                summary:
                  "<p>After Blossom and Buttercup break Schedulebot, they'll do anything to keep the truth from coming out.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1156864',
                  },
                },
              },
              {
                id: 1201866,
                url: 'https://www.tvmaze.com/episodes/1201866/the-powerpuff-girls-2x11-musclecup',
                name: 'Musclecup',
                season: 2,
                number: 11,
                type: 'regular',
                airdate: '2017-06-11',
                airtime: '17:30',
                airstamp: '2017-06-11T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/118/295541.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/118/295541.jpg',
                },
                summary:
                  '<p>Feeling inadequate as a superhero, Buttercup bulks up.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1201866',
                  },
                },
              },
              {
                id: 1201867,
                url: 'https://www.tvmaze.com/episodes/1201867/the-powerpuff-girls-2x12-take-your-kids-to-dooms-day',
                name: 'Take Your Kids To Dooms Day',
                season: 2,
                number: 12,
                type: 'regular',
                airdate: '2017-06-18',
                airtime: '17:30',
                airstamp: '2017-06-18T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/119/297997.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/119/297997.jpg',
                },
                summary:
                  '<p>The Girls spend the day with the Professor at his boring office, only to find that the office comes with a terrible secret.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1201867',
                  },
                },
              },
              {
                id: 1201868,
                url: 'https://www.tvmaze.com/episodes/1201868/the-powerpuff-girls-2x13-the-bubbles-sitters-club',
                name: 'The Bubbles-sitters Club',
                season: 2,
                number: 13,
                type: 'regular',
                airdate: '2017-06-25',
                airtime: '17:30',
                airstamp: '2017-06-25T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/119/297998.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/119/297998.jpg',
                },
                summary:
                  "<p>Bubbles tries to prove that she's responsible enough to own a dog.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1201868',
                  },
                },
              },
              {
                id: 1214953,
                url: 'https://www.tvmaze.com/episodes/1214953/the-powerpuff-girls-2x14-buttercup-vs-math',
                name: 'Buttercup vs. Math',
                season: 2,
                number: 14,
                type: 'regular',
                airdate: '2017-07-02',
                airtime: '17:30',
                airstamp: '2017-07-02T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/121/304988.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/121/304988.jpg',
                },
                summary:
                  '<p>When Buttercup tests into Honors Math, she tries to avoid being labeled a nerd.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1214953',
                  },
                },
              },
              {
                id: 1214954,
                url: 'https://www.tvmaze.com/episodes/1214954/the-powerpuff-girls-2x15-home-sweet-homesick',
                name: 'Home, Sweet Homesick',
                season: 2,
                number: 15,
                type: 'regular',
                airdate: '2017-07-09',
                airtime: '17:30',
                airstamp: '2017-07-09T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/121/304989.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/121/304989.jpg',
                },
                summary:
                  '<p>When the girls go to camp, Blossom has a hard time leaving her schoolwork at home</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1214954',
                  },
                },
              },
              {
                id: 1214955,
                url: 'https://www.tvmaze.com/episodes/1214955/the-powerpuff-girls-2x16-memory-lane-of-pain',
                name: 'Memory Lane of Pain',
                season: 2,
                number: 16,
                type: 'regular',
                airdate: '2017-07-16',
                airtime: '17:30',
                airstamp: '2017-07-16T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/124/311534.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/124/311534.jpg',
                },
                summary:
                  "<p>While going through the Professor's scrapbook, Bubbles starts to question if she's ever been a hero.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1214955',
                  },
                },
              },
              {
                id: 1214956,
                url: 'https://www.tvmaze.com/episodes/1214956/the-powerpuff-girls-2x17-spider-sense',
                name: 'Spider Sense',
                season: 2,
                number: 17,
                type: 'regular',
                airdate: '2017-07-23',
                airtime: '17:30',
                airstamp: '2017-07-23T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/124/311535.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/124/311535.jpg',
                },
                summary:
                  '<p>When a monster ruins their relaxing vacation, the Girls run into a familiar face.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1214956',
                  },
                },
              },
              {
                id: 1233374,
                url: 'https://www.tvmaze.com/episodes/1233374/the-powerpuff-girls-2x18-imagine-that',
                name: 'Imagine That',
                season: 2,
                number: 18,
                type: 'regular',
                airdate: '2017-07-30',
                airtime: '17:30',
                airstamp: '2017-07-30T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/125/314741.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/125/314741.jpg',
                },
                summary:
                  "<p>The Girls have to battle Him after he causes Bubbles' imagination to run wild.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1233374',
                  },
                },
              },
              {
                id: 1260256,
                url: 'https://www.tvmaze.com/episodes/1260256/the-powerpuff-girls-2x19-phantasm-chasm',
                name: 'Phantasm Chasm',
                season: 2,
                number: 19,
                type: 'regular',
                airdate: '2017-08-20',
                airtime: '17:30',
                airstamp: '2017-08-20T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/125/314742.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/125/314742.jpg',
                },
                summary:
                  "<p>After getting sucked into Jared's favorite board game, Buttercup is forced to team-up with him in order to save her sisters.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1260256',
                  },
                },
              },
              {
                id: 1260257,
                url: 'https://www.tvmaze.com/episodes/1260257/the-powerpuff-girls-2x20-tooth-or-consequences',
                name: 'Tooth Or Consequences',
                season: 2,
                number: 20,
                type: 'regular',
                airdate: '2017-08-27',
                airtime: '17:30',
                airstamp: '2017-08-27T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/127/319447.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/127/319447.jpg',
                },
                summary:
                  "<p>Blossom's fear of the dentist's drill causes her to avoid it at all costs.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1260257',
                  },
                },
              },
              {
                id: 1277371,
                url: 'https://www.tvmaze.com/episodes/1277371/the-powerpuff-girls-2x21-monkey-love',
                name: 'Monkey Love',
                season: 2,
                number: 21,
                type: 'regular',
                airdate: '2017-09-03',
                airtime: '17:30',
                airstamp: '2017-09-03T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/127/319448.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/127/319448.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1277371',
                  },
                },
              },
              {
                id: 1284764,
                url: 'https://www.tvmaze.com/episodes/1284764/the-powerpuff-girls-2x22-bridezilla',
                name: 'Bridezilla',
                season: 2,
                number: 22,
                type: 'regular',
                airdate: '2017-09-10',
                airtime: '17:30',
                airstamp: '2017-09-10T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/139/348111.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/139/348111.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1284764',
                  },
                },
              },
              {
                id: 1289834,
                url: 'https://www.tvmaze.com/episodes/1289834/the-powerpuff-girls-2x23-power-of-four-find-your-bliss',
                name: 'Power of Four: Find Your Bliss',
                season: 2,
                number: 23,
                type: 'regular',
                airdate: '2017-09-17',
                airtime: '17:30',
                airstamp: '2017-09-17T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/139/348407.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/139/348407.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1289834',
                  },
                },
              },
              {
                id: 1318440,
                url: 'https://www.tvmaze.com/episodes/1318440/the-powerpuff-girls-2x24-power-of-four-bliss-reminisce',
                name: 'Power of Four: Bliss Reminisce',
                season: 2,
                number: 24,
                type: 'regular',
                airdate: '2017-09-17',
                airtime: '17:30',
                airstamp: '2017-09-17T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/139/348408.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/139/348408.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1318440',
                  },
                },
              },
              {
                id: 1318441,
                url: 'https://www.tvmaze.com/episodes/1318441/the-powerpuff-girls-2x25-power-of-four-blisster-sister',
                name: 'Power of Four: Blisster Sister',
                season: 2,
                number: 25,
                type: 'regular',
                airdate: '2017-09-17',
                airtime: '17:30',
                airstamp: '2017-09-17T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/139/348409.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/139/348409.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1318441',
                  },
                },
              },
              {
                id: 1318442,
                url: 'https://www.tvmaze.com/episodes/1318442/the-powerpuff-girls-2x26-power-of-four-breaking-bliss',
                name: 'Power of Four: Breaking Bliss',
                season: 2,
                number: 26,
                type: 'regular',
                airdate: '2017-09-17',
                airtime: '17:30',
                airstamp: '2017-09-17T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/139/348410.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/139/348410.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1318442',
                  },
                },
              },
              {
                id: 1318447,
                url: 'https://www.tvmaze.com/episodes/1318447/the-powerpuff-girls-2x27-power-of-four-blisstersweet-symphony',
                name: 'Power of Four: Blisstersweet Symphony',
                season: 2,
                number: 27,
                type: 'regular',
                airdate: '2017-09-17',
                airtime: '17:30',
                airstamp: '2017-09-17T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/139/348411.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/139/348411.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1318447',
                  },
                },
              },
              {
                id: 1319192,
                url: 'https://www.tvmaze.com/episodes/1319192/the-powerpuff-girls-2x28-midnight-at-the-mayors-mansion',
                name: "Midnight At The Mayor's Mansion",
                season: 2,
                number: 28,
                type: 'regular',
                airdate: '2017-10-29',
                airtime: '17:30',
                airstamp: '2017-10-29T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/139/348113.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/139/348113.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1319192',
                  },
                },
              },
              {
                id: 1355628,
                url: 'https://www.tvmaze.com/episodes/1355628/the-powerpuff-girls-2x29-youre-a-good-man-mojo-jojo',
                name: "You're A Good Man, Mojo Jojo",
                season: 2,
                number: 29,
                type: 'regular',
                airdate: '2017-12-03',
                airtime: '17:30',
                airstamp: '2017-12-03T22:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/153/383926.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/153/383926.jpg',
                },
                summary:
                  "<p>The holidays are Mojo's favorite time..for ruining everything! But this year, he may just learn the reason for the season.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1355628',
                  },
                },
              },
              {
                id: 1355629,
                url: 'https://www.tvmaze.com/episodes/1355629/the-powerpuff-girls-2x30-the-trouble-with-bubbles',
                name: 'The Trouble With Bubbles',
                season: 2,
                number: 30,
                type: 'regular',
                airdate: '2017-12-03',
                airtime: '17:45',
                airstamp: '2017-12-03T22:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/153/383927.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/153/383927.jpg',
                },
                summary:
                  '<p>When Bubbles is overworked, she uses her coding skills to come up with a new solution.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1355629',
                  },
                },
              },
              {
                id: 1430717,
                url: 'https://www.tvmaze.com/episodes/1430717/the-powerpuff-girls-2x31-never-been-blissed',
                name: 'Never Been Blissed',
                season: 2,
                number: 31,
                type: 'regular',
                airdate: '2018-04-08',
                airtime: '16:00',
                airstamp: '2018-04-08T20:00:00+00:00',
                runtime: 30,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/153/383928.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/153/383928.jpg',
                },
                summary:
                  '<p>With a parasitic alien on the loose in their school, the Powerpuff Girls and Bliss have to find a way to stop it before the big dance.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1430717',
                  },
                },
              },
              {
                id: 1430719,
                url: 'https://www.tvmaze.com/episodes/1430719/the-powerpuff-girls-2x32-sugar-spice-and-super-lice',
                name: 'Sugar, Spice, and Super Lice',
                season: 2,
                number: 32,
                type: 'regular',
                airdate: '2018-04-15',
                airtime: '16:00',
                airstamp: '2018-04-15T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/153/383929.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/153/383929.jpg',
                },
                summary:
                  '<p>When Buttercup gets super lice, her sisters must battle them to save her.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1430719',
                  },
                },
              },
              {
                id: 1430720,
                url: 'https://www.tvmaze.com/episodes/1430720/the-powerpuff-girls-2x33-the-buttercup-job',
                name: 'The Buttercup Job',
                season: 2,
                number: 33,
                type: 'regular',
                airdate: '2018-04-15',
                airtime: '16:15',
                airstamp: '2018-04-15T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/153/383930.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/153/383930.jpg',
                },
                summary:
                  '<p>Buttercup joins Jemmica in a quest for adventure, but how far will she go?.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1430720',
                  },
                },
              },
              {
                id: 1430721,
                url: 'https://www.tvmaze.com/episodes/1430721/the-powerpuff-girls-2x34-a-slight-hiccup',
                name: 'A Slight Hiccup',
                season: 2,
                number: 34,
                type: 'regular',
                airdate: '2018-04-22',
                airtime: '16:00',
                airstamp: '2018-04-22T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/154/385924.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/154/385924.jpg',
                },
                summary:
                  "<p>The Girls must overcome their supersonic hiccups to stop the Gnat's latest evil plan!.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1430721',
                  },
                },
              },
              {
                id: 1430722,
                url: 'https://www.tvmaze.com/episodes/1430722/the-powerpuff-girls-2x35-toy-ploy',
                name: 'Toy Ploy',
                season: 2,
                number: 35,
                type: 'regular',
                airdate: '2018-04-22',
                airtime: '16:15',
                airstamp: '2018-04-22T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/154/385926.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/154/385926.jpg',
                },
                summary:
                  "<p>When Mojo kidnaps the girls' favorite snuggle toys, he gets more than he bargained for.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1430722',
                  },
                },
              },
              {
                id: 1430723,
                url: 'https://www.tvmaze.com/episodes/1430723/the-powerpuff-girls-2x36-derby-dollies',
                name: 'Derby Dollies',
                season: 2,
                number: 36,
                type: 'regular',
                airdate: '2018-04-29',
                airtime: '16:00',
                airstamp: '2018-04-29T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/154/387482.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/154/387482.jpg',
                },
                summary:
                  '<p>When Bubbles joins the Derbytantes, Buttercup finds herself on the sidelines.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1430723',
                  },
                },
              },
              {
                id: 1430724,
                url: 'https://www.tvmaze.com/episodes/1430724/the-powerpuff-girls-2x37-bubbles-the-blue',
                name: 'Bubbles the Blue',
                season: 2,
                number: 37,
                type: 'regular',
                airdate: '2018-04-29',
                airtime: '16:15',
                airstamp: '2018-04-29T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/154/387483.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/154/387483.jpg',
                },
                summary:
                  "<p>When Bubbles isn't her normal, bubbly self, her sisters don't know how to handle it.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1430724',
                  },
                },
              },
              {
                id: 1454433,
                url: 'https://www.tvmaze.com/episodes/1454433/the-powerpuff-girls-2x38-deb-onair',
                name: "Deb O'Nair",
                season: 2,
                number: 38,
                type: 'regular',
                airdate: '2018-05-06',
                airtime: '17:30',
                airstamp: '2018-05-06T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/156/392040.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/156/392040.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1454433',
                  },
                },
              },
              {
                id: 1471719,
                url: 'https://www.tvmaze.com/episodes/1471719/the-powerpuff-girls-2x39-man-up-3-the-good-the-bad-and-the-manly',
                name: 'Man Up 3: The Good, The Bad, and the Manly',
                season: 2,
                number: 39,
                type: 'regular',
                airdate: '2018-05-06',
                airtime: '17:30',
                airstamp: '2018-05-06T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/156/392037.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/156/392037.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471719',
                  },
                },
              },
              {
                id: 1454436,
                url: 'https://www.tvmaze.com/episodes/1454436/the-powerpuff-girls-2x40-the-blossom-files',
                name: 'The Blossom Files',
                season: 2,
                number: 40,
                type: 'regular',
                airdate: '2018-05-13',
                airtime: '16:15',
                airstamp: '2018-05-13T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/156/390582.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/156/390582.jpg',
                },
                summary:
                  "<p>Blossom's skepticism is put to the test when she believes she's encountered a space alien.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1454436',
                  },
                },
              },
              {
                id: 1471716,
                url: 'https://www.tvmaze.com/episodes/1471716/the-powerpuff-girls-2x41-aliver',
                name: 'Aliver',
                season: 2,
                number: 41,
                type: 'regular',
                airdate: '2018-05-13',
                airtime: '16:30',
                airstamp: '2018-05-13T20:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/157/394147.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/157/394147.jpg',
                },
                summary:
                  "<p>The Girls compete for the title of World's Greatest Superheroes!.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471716',
                  },
                },
              },
              {
                id: 1454434,
                url: 'https://www.tvmaze.com/episodes/1454434/the-powerpuff-girls-3x01-not-so-secret-service',
                name: 'Not So Secret Service',
                season: 3,
                number: 1,
                type: 'regular',
                airdate: '2018-05-13',
                airtime: '16:45',
                airstamp: '2018-05-13T20:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/156/390583.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/156/390583.jpg',
                },
                summary:
                  "<p>After Mojo Jojo's latest creation threatens to blast him into tiny bits, the Powerpuff Girls are forced to take Mojo in.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1454434',
                  },
                },
              },
              {
                id: 1454435,
                url: 'https://www.tvmaze.com/episodes/1454435/the-powerpuff-girls-3x02-worship',
                name: 'Worship',
                season: 3,
                number: 2,
                type: 'regular',
                airdate: '2018-05-20',
                airtime: '17:30',
                airstamp: '2018-05-20T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: {
                  medium:
                    'https://static.tvmaze.com/uploads/images/medium_landscape/157/394148.jpg',
                  original:
                    'https://static.tvmaze.com/uploads/images/original_untouched/157/394148.jpg',
                },
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1454435',
                  },
                },
              },
              {
                id: 1471715,
                url: 'https://www.tvmaze.com/episodes/1471715/the-powerpuff-girls-3x03-blossom3',
                name: 'Blossom3',
                season: 3,
                number: 3,
                type: 'regular',
                airdate: '2018-05-20',
                airtime: '17:30',
                airstamp: '2018-05-20T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471715',
                  },
                },
              },
              {
                id: 1471717,
                url: 'https://www.tvmaze.com/episodes/1471717/the-powerpuff-girls-3x04-mojo-the-great',
                name: 'Mojo the Great',
                season: 3,
                number: 4,
                type: 'regular',
                airdate: '2018-05-20',
                airtime: '17:30',
                airstamp: '2018-05-20T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471717',
                  },
                },
              },
              {
                id: 1471709,
                url: 'https://www.tvmaze.com/episodes/1471709/the-powerpuff-girls-3x05-trouble-clef',
                name: 'Trouble Clef',
                season: 3,
                number: 5,
                type: 'regular',
                airdate: '2018-06-03',
                airtime: '16:00',
                airstamp: '2018-06-03T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>When Morbucks realizes that The Powerpuff Girls see her as a villain and not a friend, she sets out to turn the town against them.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471709',
                  },
                },
              },
              {
                id: 1471710,
                url: 'https://www.tvmaze.com/episodes/1471710/the-powerpuff-girls-3x06-save-the-date',
                name: 'Save the Date',
                season: 3,
                number: 6,
                type: 'regular',
                airdate: '2018-06-03',
                airtime: '16:15',
                airstamp: '2018-06-03T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary: '<p>Ms. Keane is nervous about a first date.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471710',
                  },
                },
              },
              {
                id: 1471711,
                url: 'https://www.tvmaze.com/episodes/1471711/the-powerpuff-girls-3x07-cant-buy-love',
                name: "Can't Buy Love",
                season: 3,
                number: 7,
                type: 'regular',
                airdate: '2018-06-09',
                airtime: '16:00',
                airstamp: '2018-06-09T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>When Morbucks falls in love, she finds the first thing money can't buy.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471711',
                  },
                },
              },
              {
                id: 1471712,
                url: 'https://www.tvmaze.com/episodes/1471712/the-powerpuff-girls-3x08-largo',
                name: 'Largo',
                season: 3,
                number: 8,
                type: 'regular',
                airdate: '2018-06-09',
                airtime: '16:15',
                airstamp: '2018-06-09T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>When a mysterious rain cloud plagues Townsville, Bubbles learns things aren't what they seem.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471712',
                  },
                },
              },
              {
                id: 1471713,
                url: 'https://www.tvmaze.com/episodes/1471713/the-powerpuff-girls-3x09-blundercup',
                name: 'Blundercup',
                season: 3,
                number: 9,
                type: 'regular',
                airdate: '2018-06-16',
                airtime: '16:00',
                airstamp: '2018-06-16T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>Buttercup is knocked off-kilter by a mysterious force.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471713',
                  },
                },
              },
              {
                id: 1471714,
                url: 'https://www.tvmaze.com/episodes/1471714/the-powerpuff-girls-3x10-ragnarock-and-roll',
                name: 'Ragnarock and Roll',
                season: 3,
                number: 10,
                type: 'regular',
                airdate: '2018-06-16',
                airtime: '16:15',
                airstamp: '2018-06-16T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>When an ancient prophecy spells doom for Townsville, the girls must race to stop it.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1471714',
                  },
                },
              },
              {
                id: 1502843,
                url: 'https://www.tvmaze.com/episodes/1502843/the-powerpuff-girls-3x11-total-eclipse-of-the-kart-parts-1-2',
                name: 'Total Eclipse Of The Kart, Parts 1 & 2',
                season: 3,
                number: 11,
                type: 'regular',
                airdate: '2018-08-12',
                airtime: '16:00',
                airstamp: '2018-08-12T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>The Powerpuff Girls compete in a race against some of their most vicious villains, to win whatever is in the Mayor\'s "Mysterious Box Of Mystery.".</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1502843',
                  },
                },
              },
              {
                id: 1502844,
                url: 'https://www.tvmaze.com/episodes/1502844/the-powerpuff-girls-3x12-the-long-skate-home',
                name: 'The Long Skate Home',
                season: 3,
                number: 12,
                type: 'regular',
                airdate: '2018-08-19',
                airtime: '16:00',
                airstamp: '2018-08-19T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>After they get accused of a crime they didn't commit, The Powerpuff Girls and The Derbytantes have to find a way to clear their name!.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1502844',
                  },
                },
              },
              {
                id: 1502845,
                url: 'https://www.tvmaze.com/episodes/1502845/the-powerpuff-girls-3x13-quarantine',
                name: 'Quarantine',
                season: 3,
                number: 13,
                type: 'regular',
                airdate: '2018-08-19',
                airtime: '16:15',
                airstamp: '2018-08-19T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>After a chemical spill, the girls and Mojo find themselves trapped together.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1502845',
                  },
                },
              },
              {
                id: 1502846,
                url: 'https://www.tvmaze.com/episodes/1502846/the-powerpuff-girls-3x14-in-the-doghouse',
                name: 'In The Doghouse',
                season: 3,
                number: 14,
                type: 'regular',
                airdate: '2018-08-26',
                airtime: '16:00',
                airstamp: '2018-08-26T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>Buttercup must go it alone to save her family from a kidnapping.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1502846',
                  },
                },
              },
              {
                id: 1502847,
                url: 'https://www.tvmaze.com/episodes/1502847/the-powerpuff-girls-3x15-salamander',
                name: 'Salamander',
                season: 3,
                number: 15,
                type: 'regular',
                airdate: '2018-08-26',
                airtime: '16:15',
                airstamp: '2018-08-26T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>When the professor is kidnapped, the girls must go to a mysterious island to save him.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1502847',
                  },
                },
              },
              {
                id: 1518396,
                url: 'https://www.tvmaze.com/episodes/1518396/the-powerpuff-girls-3x16-small-world-abra-disaster',
                name: 'Small World: Abra-disaster',
                season: 3,
                number: 16,
                type: 'regular',
                airdate: '2018-09-02',
                airtime: '16:00',
                airstamp: '2018-09-02T20:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>After defeating Mojo for the umpteenth time, The Powerpuff Girls are confident they are unstoppable.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1518396',
                  },
                },
              },
              {
                id: 1518397,
                url: 'https://www.tvmaze.com/episodes/1518397/the-powerpuff-girls-3x17-small-world-stone-cold-spider',
                name: 'Small World: Stone Cold Spider',
                season: 3,
                number: 17,
                type: 'regular',
                airdate: '2018-09-02',
                airtime: '16:15',
                airstamp: '2018-09-02T20:15:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>With Townsville in peril, the girls are sent to the arctic on a dangerous mission to find the key to saving the day.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1518397',
                  },
                },
              },
              {
                id: 1518398,
                url: 'https://www.tvmaze.com/episodes/1518398/the-powerpuff-girls-3x18-small-world-maze-daze',
                name: 'Small World: Maze Daze',
                season: 3,
                number: 18,
                type: 'regular',
                airdate: '2018-09-02',
                airtime: '16:30',
                airstamp: '2018-09-02T20:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary: null,
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1518398',
                  },
                },
              },
              {
                id: 1518399,
                url: 'https://www.tvmaze.com/episodes/1518399/the-powerpuff-girls-3x19-small-world-heart-to-heartstone',
                name: 'Small World: Heart To Heartstone',
                season: 3,
                number: 19,
                type: 'regular',
                airdate: '2018-09-02',
                airtime: '16:45',
                airstamp: '2018-09-02T20:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>In the stunning conclusion, the girls learn that Lester has one more trick up his sleeve.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1518399',
                  },
                },
              },
              {
                id: 1536459,
                url: 'https://www.tvmaze.com/episodes/1536459/the-powerpuff-girls-3x20-witchs-crew',
                name: "Witch's Crew",
                season: 3,
                number: 20,
                type: 'regular',
                airdate: '2018-10-21',
                airtime: '17:30',
                airstamp: '2018-10-21T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>On Halloween Night, Morbucks summons a monster that she didn't expect.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1536459',
                  },
                },
              },
              {
                id: 1567719,
                url: 'https://www.tvmaze.com/episodes/1567719/the-powerpuff-girls-3x21-the-gift',
                name: 'The Gift',
                season: 3,
                number: 21,
                type: 'regular',
                airdate: '2018-12-16',
                airtime: '16:00',
                airstamp: '2018-12-16T21:00:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>The girls must replace the Professor's Christmas present on Christmas Eve.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1567719',
                  },
                },
              },
              {
                id: 1615024,
                url: 'https://www.tvmaze.com/episodes/1615024/the-powerpuff-girls-3x22-oh-daisy',
                name: 'Oh, Daisy!',
                season: 3,
                number: 22,
                type: 'regular',
                airdate: '2019-03-17',
                airtime: '17:30',
                airstamp: '2019-03-17T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>Buttercup is not a fan of Bubbles' newly created digital assistant.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1615024',
                  },
                },
              },
              {
                id: 1615025,
                url: 'https://www.tvmaze.com/episodes/1615025/the-powerpuff-girls-3x23-brain-freeze',
                name: 'Brain Freeze',
                season: 3,
                number: 23,
                type: 'regular',
                airdate: '2019-03-17',
                airtime: '17:30',
                airstamp: '2019-03-17T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>When a mysterious new ice cream flavor takes Townsville by storm, the girls suspect there might be foul play.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1615025',
                  },
                },
              },
              {
                id: 1615026,
                url: 'https://www.tvmaze.com/episodes/1615026/the-powerpuff-girls-3x24-lights-out',
                name: 'Lights Out!',
                season: 3,
                number: 24,
                type: 'regular',
                airdate: '2019-03-24',
                airtime: '17:30',
                airstamp: '2019-03-24T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>When Bliss brings a new tech product to town, it's more powerful than imagined.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1615026',
                  },
                },
              },
              {
                id: 1615027,
                url: 'https://www.tvmaze.com/episodes/1615027/the-powerpuff-girls-3x25-bucketboy',
                name: 'Bucketboy!',
                season: 3,
                number: 25,
                type: 'regular',
                airdate: '2019-03-24',
                airtime: '17:30',
                airstamp: '2019-03-24T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>When the girls tell Barry he's a hero, he takes it too far.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1615027',
                  },
                },
              },
              {
                id: 1615028,
                url: 'https://www.tvmaze.com/episodes/1615028/the-powerpuff-girls-3x26-the-fog',
                name: 'The Fog',
                season: 3,
                number: 26,
                type: 'regular',
                airdate: '2019-03-31',
                airtime: '17:30',
                airstamp: '2019-03-31T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>A new villain arrives in Townsville and gives the old villains an enticing offer.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1615028',
                  },
                },
              },
              {
                id: 1615029,
                url: 'https://www.tvmaze.com/episodes/1615029/the-powerpuff-girls-3x27-the-spoon',
                name: 'The Spoon',
                season: 3,
                number: 27,
                type: 'regular',
                airdate: '2019-03-31',
                airtime: '17:30',
                airstamp: '2019-03-31T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>A crash landing sends Townsville over the edge.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1615029',
                  },
                },
              },
              {
                id: 1629436,
                url: 'https://www.tvmaze.com/episodes/1629436/the-powerpuff-girls-3x28-cat-burglar',
                name: 'Cat Burglar',
                season: 3,
                number: 28,
                type: 'regular',
                airdate: '2019-04-07',
                airtime: '16:30',
                airstamp: '2019-04-07T20:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>An alarmingly familiar cat burglar terrorizes Townsville.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629436',
                  },
                },
              },
              {
                id: 1629437,
                url: 'https://www.tvmaze.com/episodes/1629437/the-powerpuff-girls-3x29-hustlecup',
                name: 'Hustlecup',
                season: 3,
                number: 29,
                type: 'regular',
                airdate: '2019-04-07',
                airtime: '16:45',
                airstamp: '2019-04-07T20:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>When Buttercup loses the Professor's latest invention, she'll have to beat The Gangreen Gang at their own game to get it back.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629437',
                  },
                },
              },
              {
                id: 1629438,
                url: 'https://www.tvmaze.com/episodes/1629438/the-powerpuff-girls-3x30-rebel-rebel',
                name: 'Rebel Rebel',
                season: 3,
                number: 30,
                type: 'regular',
                airdate: '2019-04-14',
                airtime: '16:30',
                airstamp: '2019-04-14T20:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>The Professor makes new friends, but they may be the wrong crowd.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629438',
                  },
                },
              },
              {
                id: 1629439,
                url: 'https://www.tvmaze.com/episodes/1629439/the-powerpuff-girls-3x31-our-brand-is-chaos',
                name: 'Our Brand is Chaos',
                season: 3,
                number: 31,
                type: 'regular',
                airdate: '2019-04-14',
                airtime: '16:45',
                airstamp: '2019-04-14T20:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>Bubbles and Buttercup make a deal without realizing the consequences.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629439',
                  },
                },
              },
              {
                id: 1629440,
                url: 'https://www.tvmaze.com/episodes/1629440/the-powerpuff-girls-3x32-tagalong',
                name: 'Tagalong',
                season: 3,
                number: 32,
                type: 'regular',
                airdate: '2019-04-21',
                airtime: '16:30',
                airstamp: '2019-04-21T20:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>Buttercup is tired of Bubbles following her everywhere.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629440',
                  },
                },
              },
              {
                id: 1629441,
                url: 'https://www.tvmaze.com/episodes/1629441/the-powerpuff-girls-3x33-brainlord',
                name: 'Brainlord',
                season: 3,
                number: 33,
                type: 'regular',
                airdate: '2019-04-21',
                airtime: '16:45',
                airstamp: '2019-04-21T20:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>A new superhero arrives in Townsville with a dark secret.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629441',
                  },
                },
              },
              {
                id: 1629442,
                url: 'https://www.tvmaze.com/episodes/1629442/the-powerpuff-girls-3x34-checkin-out',
                name: "Checkin' Out!",
                season: 3,
                number: 34,
                type: 'regular',
                airdate: '2019-04-28',
                airtime: '16:30',
                airstamp: '2019-04-28T20:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>A trip to the supermarket has bizarre consequences.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629442',
                  },
                },
              },
              {
                id: 1629443,
                url: 'https://www.tvmaze.com/episodes/1629443/the-powerpuff-girls-3x35-drama-bomb',
                name: 'Drama Bomb',
                season: 3,
                number: 35,
                type: 'regular',
                airdate: '2019-04-28',
                airtime: '16:45',
                airstamp: '2019-04-28T20:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>The school play goes off the rails when the drama teacher interferes.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1629443',
                  },
                },
              },
              {
                id: 1643954,
                url: 'https://www.tvmaze.com/episodes/1643954/the-powerpuff-girls-3x36-watch-it',
                name: 'Watch It!',
                season: 3,
                number: 36,
                type: 'regular',
                airdate: '2019-05-05',
                airtime: '16:30',
                airstamp: '2019-05-05T20:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>The Powerpuff Girls are tasked with keeping a priceless gem safe from thieves.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1643954',
                  },
                },
              },
              {
                id: 1643951,
                url: 'https://www.tvmaze.com/episodes/1643951/the-powerpuff-girls-3x37-man-up-4-the-donnyest-game',
                name: 'Man Up 4: The Donnyest Game',
                season: 3,
                number: 37,
                type: 'regular',
                airdate: '2019-05-05',
                airtime: '16:45',
                airstamp: '2019-05-05T20:45:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>With Man-Boy on the loose, Donny must be prepared for anything.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1643951',
                  },
                },
              },
              {
                id: 1662009,
                url: 'https://www.tvmaze.com/episodes/1662009/the-powerpuff-girls-3x38-the-oct-father',
                name: 'The Oct-father',
                season: 3,
                number: 38,
                type: 'regular',
                airdate: '2019-06-16',
                airtime: '17:30',
                airstamp: '2019-06-16T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  "<p>When Princess Morbucks steals Octi, Bubbles' reaction surprises everyone, even her sisters.</p>",
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1662009',
                  },
                },
              },
              {
                id: 1662010,
                url: 'https://www.tvmaze.com/episodes/1662010/the-powerpuff-girls-3x39-sideline-dad',
                name: 'Sideline Dad',
                season: 3,
                number: 39,
                type: 'regular',
                airdate: '2019-06-16',
                airtime: '17:30',
                airstamp: '2019-06-16T21:30:00+00:00',
                runtime: 15,
                rating: {
                  average: null,
                },
                image: null,
                summary:
                  '<p>When the Girls start playing soccer, the Professor goes overboard.</p>',
                _links: {
                  self: {
                    href: 'https://api.tvmaze.com/episodes/1662010',
                  },
                },
              },
            ],
          },
        }),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe('withFetch', () => {
  test('works', async () => {
    const object = await withFetch();
    expect(Object.keys(object).length).toBeGreaterThan(1);
    //   expect(json.length).toEqual(1);
  });
  test('The show has at least one episode', async () => {
    const object = await withFetch();
    expect(object._embedded.episodes.length).toBeGreaterThan(0);
  });
});
