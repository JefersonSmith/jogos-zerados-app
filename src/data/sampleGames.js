const sampleGames = [
  {
    id: 1,
    title: "Tavern Master",
    summary: "Um jogo de gerenciamento onde você deve construir e administrar sua própria taverna, atendendo clientes e expandindo seus negócios.",
    platform: "PC",
    dateCompleted: "2025-05-06",
    rating: 4,
    imageUrl: "https://img.itch.zone/aW1nLzUxNTQ5ODEuanBn/508x254%23mb/mQ93Eo.jpg" // Placeholder, será substituído
  },
  {
    id: 2,
    title: "Final Fantasy VII Rebirth",
    summary: "A continuação da aclamada reinterpretação do clássico RPG, onde Cloud e seus amigos enfrentam novos desafios e revelações.",
    platform: "PC",
    dateCompleted: "2025-05-24",
    rating: 5,
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202401/1809/f094b684796f1e7cd2ba10ea62e45f69b52b4782a38e2aa4.png" // Placeholder, será substituído
  },
  {
    id: 3,
    title: "Monster Train",
    summary: "Um jogo de cartas estratégico onde você deve defender o último vestígio do inferno contra anjos e criaturas celestiais.",
    platform: "PC",
    dateCompleted: "2025-04-05",
    rating: 5,
    imageUrl: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjb7xooTctKc1aGv5sG6gaxudTTEKLBCShkwqtX8XUBZ4ZCOoj8Fdk_hjvT-MFftMNi-ZSqWm3BD-AGXLV2ZyquG2JQGO6RQwx-m8s78wMGKca_s63Mw-_Xam8HMuzVPumU2jngFVS6KHKaAq0sx9x5_ZjV1qj_c4csCjjINU4Wtwq49cJ-gHNawgYVbrxF/w640-h360/monster-train-2-capa.jpg" // Placeholder, será substituído
  },
  {
    id: 4,
    title: "Final Fantasy VII Remake",
    summary: "Uma reimaginação do clássico RPG, onde Cloud Strife e seus aliados lutam contra a corporação Shinra em Midgar.",
    platform: "PC",
    dateCompleted: "2025-01-31",
    rating: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/0/09/Final_Fantasy_VII_Remake_capa.png" // Placeholder, será substituído
  },
  {
    id: 5,
    title: "God of War: Ragnarok",
    summary: "A continuação da jornada de Kratos e Atreus, explorando os reinos nórdicos e enfrentando novos deuses e monstros.",
    platform: "PC",
    dateCompleted: "2025-01-07",
    rating: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/a/a5/God_of_War_Ragnar%C3%B6k_capa.jpg" // Placeholder, será substituído
  },
  {
    id: 6,
    title: "Jedi Fallen Order",
    summary: "Um jogo de ação e aventura ambientado no universo Star Wars, onde você assume o papel de Cal Kestis, um jovem Jedi fugindo do Império.",
    platform: "PC",
    dateCompleted: "2024-12-17",
    rating: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/d/d6/Star_Wars_Jedi_Fallen_Order_capa.png" // Placeholder, será substituído
  },
  {
    id: 7,
    title: "Diablo 4",
    summary: "Um RPG de ação onde você deve enfrentar Lilith e as forças do mal em um mundo aberto e sombrio.",
    platform: "PC",
    dateCompleted: "2024-12-04",
    rating: 4,
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202405/3123/218ac4e34bf15f7cdfa24f7e452cadf2ebb378c765d242fe.jpg" // Placeholder, será substituído
  },
  {
    id: 8,
    title: "Final Fantasy XVI",
    summary: "Um RPG de ação ambientado em um mundo de fantasia, onde Clive Rosfield busca vingança após a destruição de sua casa.",
    platform: "PC",
    dateCompleted: "2024-11-30",
    rating: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/f/f9/Final_Fantasy_16_capa.png" // Placeholder, será substituído
  },
  {
    id: 9,
    title: "Assassin's Creed Mirage",
    summary: "Um jogo de ação e aventura que leva os jogadores a Bagdá durante a Idade de Ouro Islâmica, onde você assume o papel de Basim, um ladrão astuto.",
    platform: "PC",
    dateCompleted: "2024-11-24",
    rating: 4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/44/Assassin%27s_Creed_Mirage_Xbox_Series_X_capa_digital.png/330px-Assassin%27s_Creed_Mirage_Xbox_Series_X_capa_digital.png" // Placeholder, será substituído
  },
  {
    id: 10,
    title: "Dave the Diver",
    summary: "Um jogo de aventura e gerenciamento onde você mergulha para coletar peixes e depois os serve em seu restaurante.",
    platform: "PC",
    dateCompleted: "2024-08-20",
    rating: 5,
    imageUrl: "https://notadogame.com/uploads/game/cover/250x/64a9bbca47942.jpg" // Placeholder, será substituído
  },
  {
    id: 11,
    title: "Like a Dragon: The Man Who Erased His Name",
    summary: "Um RPG de ação onde você assume o papel de Ichiban Kasuga, um ex-yakuza que busca descobrir a verdade por trás de sua traição.",
    platform: "PS5",
    dateCompleted: "2025-04-12",
    rating: 5,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/d/d0/Like_a_Dragon_Gaiden_The_Man_Who_Erased_His_Name_PlayStation_5_capa_digital.png" // Placeholder, será substituído
  },
  {
    id: 12,
    title: "Kena: Bridge of Spirits",
    summary: "Um jogo de ação e aventura onde você joga como Kena, uma jovem guia espiritual que deve ajudar almas perdidas a encontrar paz.",
    platform: "PS5",
    dateCompleted: "2025-04-04",
    rating: 5,
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202102/2307/5DwFII1MYsBn48HjmvUu0TEd.jpg" // Placeholder, será substituído
  },
  {
    id: 13,
    title: "Marvel`s Spiderman Miles Morales",
    summary: "Um jogo de ação e aventura onde você assume o papel de Miles Morales, um jovem super-herói que deve proteger Nova York.",
    platform: "PS5",
    dateCompleted: "2025-03-15",
    rating: 4,
    imageUrl: "https://upload.wikimedia.org/wikipedia/pt/7/74/Spider-Man_Miles_Morales_capa.png" // Placeholder, será substituído
  },
  {
    id: 14,
    title: "Ratchet & Clank: Em Outra Dimensão",
    summary: "Um jogo de ação e aventura onde Ratchet e Clank viajam por dimensões alternativas para salvar o multiverso.",
    platform: "PS5",
    dateCompleted: "2025-03-06",
    rating: 5,
    imageUrl: "https://image.api.playstation.com/vulcan/ap/rnd/202101/2921/HHqeOk9wBe6majuatZsmuFmZ.jpg" // Placeholder, será substituído
  }
];

export default sampleGames;
