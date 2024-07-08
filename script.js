const listOfMovies = [
    {
        id: 1,
        title: 'The Terminator',
        description: 'A human soldier is sent from 2029 to 1984 to stop an almost indestructible cyborg killing machine, sent from the same year, which has been programmed to execute a young woman whose unborn son is the key to humanity\'s future salvation.',
        movie_year: 1984,
        director: "James Cameron",
        actors: ["Arnold Schwarzenegger", "Linda Hamilton", "Michael Biehn", "Paul Winfield", "Lance Henriksen", "Rick Rossovich", "Bess Motta", "Earl Boen", "Bill Paxton"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q8ffBuxQlYOHrvPniLgCbmKK4Lv.jpg',
        price: '80.00'
    },
    {
        id: 2,
        title: 'Back to the Future',
        description: 'Marty McFly, a teenager, is accidentally sent thirty years into the past in a time-traveling DeLorean invented by his close friend, eccentric scientist Doc Brown.',
        movie_year: 1985,
        director: "Robert Zemeckis",
        actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson", "Crispin Glover", "Thomas F. Wilson"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg',
        price: '75.00'
    },
    {
        id: 3,
        title: 'Jurassic Park',
        description: 'During a preview tour, a theme park suffers a major power breakdown that allows its cloned dinosaur exhibits to run amok.',
        movie_year: 1993,
        director: "Steven Spielberg",
        actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum", "Richard Attenborough", "Bob Peck"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c414cDeQ9b6qLPLeKmiJuLDUREJ.jpg',
        price: '90.00'
    },
    {
        id: 4,
        title: 'The Matrix',
        description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.',
        movie_year: 1999,
        director: "Lana Wachowski, Lilly Wachowski",
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss", "Hugo Weaving"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg',
        price: '85.00'
    },
    {
        id: 5,
        title: 'Inception',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.',
        movie_year: 2010,
        director: "Christopher Nolan",
        actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy", "Ken Watanabe", "Dileep Rao", "Cillian Murphy"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg',
        price: '95.00'
    },
    {
        id: 6,
        title: 'Pulp Fiction',
        description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        movie_year: 1994,
        director: "Quentin Tarantino",
        actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis", "Ving Rhames"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg',
        price: '80.00'
    },
    {
        id: 7,
        title: 'The Dark Knight',
        description: 'When the menace known as The Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham. The Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
        movie_year: 2008,
        director: "Christopher Nolan",
        actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine", "Maggie Gyllenhaal", "Gary Oldman", "Morgan Freeman"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
        price: '100.00'
    },
    {
        id: 8,
        title: 'Fight Club',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        movie_year: 1999,
        director: "David Fincher",
        actors: ["Brad Pitt", "Edward Norton", "Meat Loaf", "Jared Leto", "Helena Bonham Carter"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg',
        price: '70.00'
    },
    {
        id: 9,
        title: 'The Shawshank Redemption',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
        movie_year: 1994,
        director: "Frank Darabont",
        actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler", "Clancy Brown"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
        price: '85.00'
    },
    {
        id: 10,
        title: 'Forrest Gump',
        description: 'The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        movie_year: 1994,
        director: "Robert Zemeckis",
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field", "Mykelti Williamson"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
        price: '80.00'
    },
    {
        id: 11,
        title: 'The Godfather',
        description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
        movie_year: 1972,
        director: "Francis Ford Coppola",
        actors: ["Marlon Brando", "Al Pacino", "James Caan", "Richard S. Castellano", "Robert Duvall"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg',
        price: '120.00'
    },
    {
        id: 12,
        title: 'Star Wars: Episode IV - A New Hope',
        description: 'Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire\'s world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.',
        movie_year: 1977,
        director: "George Lucas",
        actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher", "Peter Cushing", "Alec Guinness"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
        price: '95.00'
    },
    {
        id: 13,
        title: 'Schindler\'s List',
        description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        movie_year: 1993,
        director: "Steven Spielberg",
        actors: ["Liam Neeson", "Ben Kingsley", "Ralph Fiennes", "Caroline Goodall", "Jonathan Sagall"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/c8Ass7acuOe4za6DhSattE359gr.jpg',
        price: '110.00'
    },
    {
        id: 14,
        title: 'The Lord of the Rings: The Return of the King',
        description: 'Gandalf and Aragorn lead the World of Men against Sauron\'s army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        movie_year: 2003,
        director: "Peter Jackson",
        actors: ["Elijah Wood", "Viggo Mortensen", "Ian McKellen", "Orlando Bloom", "Liv Tyler"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
        price: '105.00'
    },
    {
        id: 15,
        title: 'The Silence of the Lambs',
        description: 'A young FBI cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.',
        movie_year: 1991,
        director: "Jonathan Demme",
        actors: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn", "Ted Levine", "Anthony Heald"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qjAy5Yjc4XmuBsBz9gQFoLHrRPB.jpg',
        price: '85.00'
    },
    {
        id: 16,
        title: 'The Lion King',
        description: 'Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.',
        movie_year: 1994,
        director: "Roger Allers, Rob Minkoff",
        actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones", "Whoopi Goldberg", "Rowan Atkinson"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2uNW4WbgBXL25BAbXGLnLqX71Sw.jpg',
        price: '70.00'
    },
    {
        id: 17,
        title: 'Gladiator',
        description: 'A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.',
        movie_year: 2000,
        director: "Ridley Scott",
        actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen", "Oliver Reed", "Richard Harris"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pR858ihc6Ls9xohpdRJVjV787ml.jpg',
        price: '80.00'
    },
    {
        id: 18,
        title: 'Titanic',
        description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
        movie_year: 1997,
        director: "James Cameron",
        actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane", "Kathy Bates", "Frances Fisher"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/kHXEpyfl6zqn8a6YuozZUujufXf.jpg',
        price: '85.00'
    },
    {
        id: 19,
        title: 'Avatar',
        description: 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.',
        movie_year: 2009,
        director: "James Cameron",
        actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang", "Giovanni Ribisi"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg',
        price: '95.00'
    },
    {
        id: 20,
        title: 'Saving Private Ryan',
        description: 'Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.',
        movie_year: 1998,
        director: "Steven Spielberg",
        actors: ["Tom Hanks", "Matt Damon", "Tom Sizemore", "Edward Burns", "Barry Pepper"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1wY4psJ5NVEhCuOYROwLH2XExM2.jpg',
        price: '100.00'
    },
    {
        id: 21,
        title: 'The Green Mile',
        description: 'The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder and rape, yet who has a mysterious gift.',
        movie_year: 1999,
        director: "Frank Darabont",
        actors: ["Tom Hanks", "Michael Clarke Duncan", "David Morse", "Bonnie Hunt", "James Cromwell"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/velWPhVMQeQKcxggNEU8YmIo52R.jpg',
        price: '75.00'
    },
    {
        id: 22,
        title: 'Braveheart',
        description: 'Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.',
        movie_year: 1995,
        director: "Mel Gibson",
        actors: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan", "Angus Macfadyen", "Catherine McCormack"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/or1gBugydmjToAEq7OZY0owwFk.jpg',
        price: '85.00'
    },
    {
        id: 23,
        title: 'The Avengers',
        description: 'Earth\'s mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity.',
        movie_year: 2012,
        director: "Joss Whedon",
        actors: ["Robert Downey Jr.", "Chris Evans", "Scarlett Johansson", "Chris Hemsworth", "Mark Ruffalo"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg',
        price: '95.00'
    },
    {
        id: 24,
        title: 'Avatar: The Way of Water',
        description: 'Jake Sully and Neytiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.',
        movie_year: 2022,
        director: "James Cameron",
        actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver", "Stephen Lang", "Kate Winslet"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
        price: '100.00'
    },
    {
        id: 25,
        title: 'The Wolf of Wall Street',
        description: 'Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption, and the federal government.',
        movie_year: 2013,
        director: "Martin Scorsese",
        actors: ["Leonardo DiCaprio", "Jonah Hill", "Margot Robbie", "Matthew McConaughey", "Kyle Chandler"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pWHf4khOloNVfCxscsXFj3jj6gP.jpg',
        price: '95.00'
    },
    {
        id: 26,
        title: 'Mad Max: Fury Road',
        description: 'In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the aid of a group of female prisoners, a psychotic worshiper, and a drifter named Max.',
        movie_year: 2015,
        director: "George Miller",
        actors: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult", "Hugh Keays-Byrne", "Rosie Huntington-Whiteley"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg',
        price: '90.00'
    },
    {
        id: 27,
        title: 'Interstellar',
        description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
        movie_year: 2014,
        director: "Christopher Nolan",
        actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Bill Irwin", "Ellen Burstyn"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg',
        price: '95.00'
    },
    {
        id: 28,
        title: 'Django Unchained',
        description: 'With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation-owner in Mississippi.',
        movie_year: 2012,
        director: "Quentin Tarantino",
        actors: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio", "Kerry Washington", "Samuel L. Jackson"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2oZklIzUbvZXXzIFzv7Hi68d6xf.jpg',
        price: '85.00'
    },
    {
        id: 29,
        title: 'Whiplash',
        description: 'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student\'s potential.',
        movie_year: 2014,
        director: "Damien Chazelle",
        actors: ["Miles Teller", "J.K. Simmons", "Melissa Benoist", "Paul Reiser", "Austin Stowell"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lIv1QinFqz4dlp5U4lQ6HaiskOZ.jpg',
        price: '75.00'
    },
    {
        id: 30,
        title: 'The Grand Budapest Hotel',
        description: 'A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel\'s glorious years under an exceptional concierge.',
        movie_year: 2014,
        director: "Wes Anderson",
        actors: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric", "Adrien Brody", "Willem Dafoe"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg',
        price: '80.00'
    },
    {
        id: 31,
        title: 'The Imitation Game',
        description: 'During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians.',
        movie_year: 2014,
        director: "Morten Tyldum",
        actors: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode", "Rory Kinnear", "Allen Leech"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/noUp0XOqIcmgefRnRZa1nhtRvWO.jpg',
        price: '85.00'
    },
    {
        id: 32,
        title: 'The Social Network',
        description: 'As Harvard student Mark Zuckerberg creates the social networking site that would become known as Facebook, he is sued by the twins who claimed he stole their idea and by the co-founder who was later squeezed out of the business.',
        movie_year: 2010,
        director: "David Fincher",
        actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake", "Armie Hammer", "Max Minghella"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg',
        price: '80.00'
    },
    {
        id: 33,
        title: 'Parasite',
        description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
        movie_year: 2019,
        director: "Bong Joon-ho",
        actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik", "Park So-dam"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg',
        price: '90.00'
    },
    {
        id: 34,
        title: 'The Irishman',
        description: 'A mob hitman recalls his possible involvement with the slaying of Jimmy Hoffa.',
        movie_year: 2019,
        director: "Martin Scorsese",
        actors: ["Robert De Niro", "Al Pacino", "Joe Pesci", "Harvey Keitel", "Ray Romano"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/bkYFIWvMaHX3PH6peqnrmwUq6mX.jpg',
        price: '85.00'
    },
    {
        id: 35,
        title: 'Joker',
        description: 'In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his infamous alter-ego: the Joker.',
        movie_year: 2019,
        director: "Todd Phillips",
        actors: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz", "Frances Conroy", "Brett Cullen"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
        price: '90.00'
    },
    {
        id: 36,
        title: 'Get Out',
        description: 'A young African-American visits his white girlfriend\'s parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
        movie_year: 2017,
        director: "Jordan Peele",
        actors: ["Daniel Kaluuya", "Allison Williams", "Bradley Whitford", "Catherine Keener", "Caleb Landry Jones"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg',
        price: '80.00'
    },
    {
        id: 37,
        title: 'La La Land',
        description: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
        movie_year: 2016,
        director: "Damien Chazelle",
        actors: ["Ryan Gosling", "Emma Stone", "John Legend", "Rosemarie DeWitt", "J.K. Simmons"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg',
        price: '75.00'
    },
    {
        id: 38,
        title: 'The Revenant',
        description: 'A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team.',
        movie_year: 2015,
        director: "Alejandro G. Iñárritu",
        actors: ["Leonardo DiCaprio", "Tom Hardy", "Will Poulter", "Domhnall Gleeson", "Forrest Goodluck"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/oXUWEc5i3wYyFnL1Ycu8ppxxPvs.jpg',
        price: '85.00'
    },
    {
        id: 39,
        title: 'The Truman Show',
        description: 'An insurance salesman discovers his whole life is actually a reality TV show.',
        movie_year: 1998,
        director: "Peter Weir",
        actors: ["Jim Carrey", "Ed Harris", "Laura Linney", "Noah Emmerich", "Natascha McElhone"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/hVkvp99G3Z3C9A1ESwRbfuvPs5J.jpg',
        price: '70.00'
    },
    {
        id: 40,
        title: 'A Beautiful Mind',
        description: 'After John Nash, a brilliant but asocial mathematician, accepts secret work in cryptography, his life takes a turn for the nightmarish.',
        movie_year: 2001,
        director: "Ron Howard",
        actors: ["Russell Crowe", "Ed Harris", "Jennifer Connelly", "Christopher Plummer", "Paul Bettany"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zwzWCmH72OSC9NA0ipoqw5Zjya8.jpg',
        price: '80.00'
    },
    {
        id: 41,
        title: '12 Years a Slave',
        description: 'In the antebellum United States, Solomon Northup, a free black man from upstate New York, is abducted and sold into slavery.',
        movie_year: 2013,
        director: "Steve McQueen",
        actors: ["Chiwetel Ejiofor", "Michael Kenneth Williams", "Michael Fassbender", "Brad Pitt", "Benedict Cumberbatch"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xdANQijuNrJaw1HA61rDccME4Tm.jpg',
        price: '90.00'
    },
    {
        id: 42,
        title: 'The Shining',
        description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        movie_year: 1980,
        director: "Stanley Kubrick",
        actors: ["Jack Nicholson", "Shelley Duvall", "Danny Lloyd", "Scatman Crothers", "Barry Nelson"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9fgh3Ns1iRzlQNYuJyK0ARQZU7w.jpg',
        price: '85.00'
    },
    {
        id: 43,
        title: 'Fight Club',
        description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
        movie_year: 1999,
        director: "David Fincher",
        actors: ["Brad Pitt", "Edward Norton", "Meat Loaf", "Zach Grenier", "Holt McCallany"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg',
        price: '85.00'
    },
    {
        id: 44,
        title: 'Schindler\'s List',
        description: 'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        movie_year: 1993,
        director: "Steven Spielberg",
        actors: ["Liam Neeson", "Ralph Fiennes", "Ben Kingsley", "Caroline Goodall", "Jonathan Sagall"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg',
        price: '95.00'
    },
    {
        id: 45,
        title: 'Forrest Gump',
        description: 'The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.',
        movie_year: 1994,
        director: "Robert Zemeckis",
        actors: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field", "Mykelti Williamson"],
        poster_url: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/saHP97rTPS5eLmrLQEcANmKrsFl.jpg',
        price: '85.00'
    }
];

function renderFilmCard(film) {
    // create htmlElement
    const card = document.createElement('div');
    card.classList.add('card', 'film-card');
    // render title section
    card.appendChild(renderTitleSection(film.title));
    // render main section
    card.appendChild(renderFilmMainCardSection(film));
    // render description section
    card.appendChild(renderFilmDescriptionSection(film.description));
    // render comments section
    card.appendChild(renderCommentsSection(film.comments || []));
    // render comment form section
    card.appendChild(renderCommentForm());
    return card;
}

function renderTitleSection(title){
    const titleSectionWrapper = document.createElement('div');
    titleSectionWrapper.classList.add('card-section', 'film-title-section');

    // Render title
    titleSectionWrapper.appendChild(renderTitle(title));
    return titleSectionWrapper;
}

function renderFilmMainCardSection(film) {
    // render section wrapper
    const mainSectionWrapper = document.createElement('div');
    mainSectionWrapper.classList.add('card-section', 'film-main-section');
    // render thumbnail
    mainSectionWrapper.appendChild(renderCardThumbnail(film.poster_url));
    // render info column
    mainSectionWrapper.appendChild(renderCardInfo(film));

    return mainSectionWrapper;
}

function renderCardThumbnail(imageURL) {
    // add column wrapper
    const thumbnailWrapper = document.createElement('div');
    thumbnailWrapper.classList.add('section-column', 'film-poster');
    // add image
    const image = document.createElement('img');
    image.src = imageURL;
    thumbnailWrapper.appendChild(image);

    return thumbnailWrapper;
}

function renderCardInfo(film) {
    // Add column wrapper
    const infoWrapper = document.createElement('div');
    infoWrapper.classList.add('section-column', 'film-info');
    // Render year
    infoWrapper.appendChild(renderYear(film.movie_year));
    // Render director
    infoWrapper.appendChild(renderDirector(film.director));
    // Render actors
    infoWrapper.appendChild(renderActors(film.actors));
    // Render price
    infoWrapper.appendChild(renderPrice(film.price));

    return infoWrapper;
}


function renderTitle(title) {
    const titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.classList.add('film-info-line', 'film-title');
    return titleElement;
}

function renderYear(year) {
    const yearElement = document.createElement('div');
    yearElement.innerHTML = `<span>Year</span>: ${year}`;
    yearElement.classList.add('film-info-line', 'film-year');
    return yearElement;
}

function renderDirector(director) {
    const directorElement = document.createElement('div');
    directorElement.innerHTML = `<span>Director</span>: ${director}`;
    directorElement.classList.add('film-info-line', 'film-director');
    return directorElement;
}

function renderActors(actors) {
    const actorsElement = document.createElement('div');
    actorsElement.innerHTML = `<span>Actors</span>: ${actors.join(', ')}`;
    actorsElement.classList.add('film-info-line', 'film-actors');
    return actorsElement;
}

function renderPrice(price) {
    const priceElement = document.createElement('div');
    priceElement.innerHTML = `<span>Price</span>: $${price}`;
    priceElement.classList.add('film-info-line', 'film-price');
    return priceElement;
}


function renderFilmDescriptionSection(description) {
    const descriptionSection = document.createElement('div');
    descriptionSection.classList.add('card-section', 'film-description-section');
    descriptionSection.textContent = description;
    return descriptionSection;
}

function renderCommentsSection(comments) {
    const commentsSection = document.createElement('div');
    commentsSection.classList.add('card-section', 'film-comments-section');
    // render comments subtitle
    commentsSection.appendChild(renderSectionTitle('Comments'))
    // render comments wrapper
    commentsSection.appendChild(renderCommentsWrapper(comments || []));
    return commentsSection;
}

function renderCommentsWrapper(comments) {
    const wrapper = document.createElement('div');
    wrapper.classList.add('comments-wrapper');
    wrapper.id = "comments-list";

    comments.forEach(comment => {
        appendComment(comment);
    });

    return wrapper;
}

function appendComment(comment) {
    const commentWrapper = document.createElement('div');
    commentWrapper.classList.add('comment-wrapper');
    // Render comment meta column
    commentWrapper.appendChild(renderCommentMeta(comment));

    // Render comment data column
    commentWrapper.appendChild(renderCommentData(comment.message));

    const commentsContainer = document.getElementById('comments-list');
    commentsContainer.appendChild(commentWrapper);
}

function renderCommentMeta(comment) {
    const metaWrapper = document.createElement('div');
    metaWrapper.classList.add('comment-meta-wrapper');

    // Render user row
    metaWrapper.appendChild(commentUserRow(comment.username));

    // Render time row
    metaWrapper.appendChild(commentTimeRow(comment.timestamp));

    return metaWrapper;
}

function commentUserRow(author) {
    const userRow = document.createElement('div');
    userRow.classList.add('comment-user-row');
    userRow.innerHTML = `<span>Author:</span><br> ${author}`;
    return userRow;
}

function commentTimeRow(timestamp) {
    const timeRow = document.createElement('div');
    timeRow.classList.add('comment-time-row');
    timeRow.innerHTML = `<span>Posted on:</span><br> ${new Date(timestamp).toLocaleString()}`;
    return timeRow;
}


function renderCommentData(commentText) {
    const dataWrapper = document.createElement('div');
    dataWrapper.classList.add('comment-data-wrapper');
    dataWrapper.textContent = commentText;
    return dataWrapper;
}


function renderCommentForm() {
    const newCommentSection = document.createElement('div');
    newCommentSection.classList.add('card-section', 'film-new-comment-section');
    // render add new comment subtitle
    newCommentSection.appendChild(renderSectionTitle('Add new comment'))
    // render form
    // Render comment form
    const commentForm = renderCommentFormElement();
    newCommentSection.appendChild(commentForm);

    // Handle form submission
    commentForm.addEventListener('submit', handleFormSubmit);
    return newCommentSection;
}

function renderCommentFormElement() {
    const formElement = document.createElement('form');
    formElement.classList.add('comment-form');

    // Append username input
    formElement.appendChild(renderUsernameInput());

    // Append message textarea
    formElement.appendChild(renderMessageTextarea());

    // Append submit button
    formElement.appendChild(renderSubmitButton());

    return formElement;
}

function renderUsernameInput() {
    const usernameInput = document.createElement('input');
    usernameInput.type = 'text';
    usernameInput.name = 'username';
    usernameInput.placeholder = 'Write your name here...';
    usernameInput.required = true;
    return usernameInput;
}

function renderMessageTextarea() {
    const messageTextarea = document.createElement('textarea');
    messageTextarea.name = 'message';
    messageTextarea.placeholder = 'Write your comment here...';
    messageTextarea.required = true;
    return messageTextarea;
}

function renderSubmitButton() {
    const submitButton = document.createElement('button');
    submitButton.classList.add('submit')
    submitButton.type = 'submit';
    submitButton.textContent = 'Add comment';
    return submitButton;
}

function renderSectionTitle(title) {
    const sectionTitleElement = document.createElement('div');
    sectionTitleElement.textContent = title;
    sectionTitleElement.classList.add('section-title');
    return sectionTitleElement;
}

function handleFormSubmit(event) {
    event.preventDefault();

    // Collect form data using FormData
    const formData = new FormData(event.target);
    // convert formData into Comments structure(object)
    const comment = {
        username: formData.get('username'),
        message: formData.get('message'),
        timestamp: new Date().toISOString() // Generate timestamp
    }
    appendComment(comment);
}

function renderMovieCards(movies){
    const main = document.querySelector('#main');
    main.innerHTML = ''; //clear content
    movies.forEach(movie => main.appendChild(renderFilmCard(movie)));
}

renderMovieCards(listOfMovies);

// Search form
function renderSearchMoviesForm(){
    const searchBar = document.getElementById('search-bar');
    const form = document.createElement('form');
    form.classList.add('form');
    form.appendChild(renderSearchMoviesFormInput());
    form.appendChild(renderSearchMoviesFormButton());
    searchBar.appendChild(form);
}

function renderSearchMoviesFormInput(){
    const input = document.createElement('input');
    input.classList.add('input', 'search-input');
    input.type = 'search';
    input.placeholder = 'Start typing to search...';

    return input;
}

function renderSearchMoviesFormButton(){
    const searchButton = document.createElement('button');
    searchButton.type = "submit";
    searchButton.textContent = "Search";
    searchButton.classList.add('btn', 'search-btn');

    return searchButton;
}

renderSearchMoviesForm();

function searchMovie(keyword){
    const lowerCaseKeyword = keyword.toLowerCase().trim();
    return listOfMovies.filter(movie =>
        movie.title.toLowerCase().includes(lowerCaseKeyword)
    );
}

function addSearchMoviesHandler(){
    const searchButton = document.querySelector('.search-btn');
    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        const searchInput = document.querySelector('.search-input');
        const keyword = searchInput.value.trim();
        const searchResults = searchMovie(keyword);
        renderMovieCards(searchResults);
    })}

addSearchMoviesHandler()

// Sort movie

