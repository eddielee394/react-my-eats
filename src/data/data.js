export const demoData = {
  recipes: [
    {
      uuid: "e80ea521-4d42-48fe-a7a6-ac8952bc0de4",
      title: "Queso Brat Scramble",
      description: "A delicious breakfast, fit for a crowd.",
      images: {
        full: "/img/queso_brat_scramble.jpg",
        medium: "/img/queso_brat_scramble--m.jpg",
        small: "/img/queso_brat_scramble--s.jpg",
        gallery: [
          { id: 1, test: "test", path: "/img/queso_brat_scramble--m.jpg" }
        ]
      },
      servings: 5,
      prepTime: 10,
      cookTime: 20,
      postDate: "01/20/2018 05:15:03 PM",
      editDate: "02/05/2018 11:56:29 PM",
      ingredients: [
        {
          uuid: "62798278-2fbc-4c31-98de-b7959c191688",
          amount: 1,
          measurement: "package (19 oz)",
          name: "queso brats",
          image: "https://loremflickr.com/100/100/food"
        }
      ],
      directions: [
        {
          instructions:
            "Cook brats according to package directions. Cool slightly and halve and slice.",
          optional: false
        },
        {
          instructions:
            "In a large skillet, over medium heat, heat 1/2 cup oil in a skillet, add tortilla squares; fry until crisp.",
          optional: false
        },
        {
          instructions:
            "With a slotted spoon remove tortilla to a paper-towel lined plate to drain.",
          optional: false
        },
        {
          instructions:
            "In another skillet, sauté the onion, pepper, jalapeno and garlic in the remaining 1 tablespoon oil.",
          optional: false
        },
        {
          instructions: "Remove from pan and keep warm.",
          optional: false
        },
        {
          instructions:
            "In a bowl, combine the eggs, cream, chili powder, salt and hot sauce. ",
          optional: false
        },
        {
          instructions:
            "Pour into skillet; cook, stirring occasionally until set.",
          optional: false
        },
        {
          instructions:
            "Add the brats, tomatoes, black beans and tortillas; heat through.",
          optional: false
        },
        {
          instructions: "Sprinkle with cheese.",
          optional: true
        },
        {
          instructions: "Serve immediately.",
          optional: false
        }
      ],
      specialsCount: 3
    }
  ],
  specials: [
    {
      uuid: "233d8582-141a-460d-b7e1-d623afd69e7d",
      ingredientId: "62798278-2fbc-4c31-98de-b7959c191688",
      type: "event",
      title: "Bratmas Party",
      geo: "43.032446,-87.908098",
      text: "<p>Join us at Sweet Diner for this Special Holiday Event!</p>"
    }
  ],
  users: [
    {
      id: 1,
      firstName: "Richard",
      lastName: "Hendricks",
      userName: "PiedPiper",
      avatarUrl: "https://i.pravatar.cc/100?img=15",
      stats: {
        followers: 455,
        following: 142,
        likesCount: 2300,
        recipes: 10,
        savedRecipes: 55
      }
    },
    {
      id: 2,
      firstName: "Bertram",
      lastName: "Gilfoyle",
      userName: "SonOfAnton",
      avatarUrl: "https://i.pravatar.cc/100?img=18",
      stats: {
        followers: 5000,
        following: 1,
        likesCount: 4200,
        recipes: 1,
        savedRecipes: 1
      }
    },
    {
      id: 3,
      firstName: "Donald",
      lastName: "Dunn",
      userName: "Jared33",
      avatarUrl: "https://i.pravatar.cc/100?img=9",
      stats: {
        followers: 10300,
        following: 10000,
        likesCount: 34000,
        recipes: 50,
        savedRecipes: 75
      }
    }
  ],
  user: {
    id: 1,
    firstName: "Richard",
    lastName: "Hendricks",
    userName: "PiedPiper",
    avatarUrl: "https://i.pravatar.cc/100?img=15",
    stats: {
      followers: 455,
      following: 142,
      likesCount: 2300,
      recipes: 10,
      savedRecipes: 55
    }
  }
};
