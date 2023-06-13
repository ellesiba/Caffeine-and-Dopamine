// let choices = [
//     {
//       choices: [
//         {
//           store: "petDog",
//           routeBegins: "petDog",
//           content: "Pet dog. Dog is good boy. No. BEST boy.",
//         },
//         {
//           routeBegins: "monster",
//           content: "Don't pet dog. (You monster.)",
//         },
//       ]
      
//     }
//   ];
  
//   export default choices;
  


let choices = [
    {
      choices: [
        {
          routeBegins: "showEffects",
          content: "Effects",
          nextIndex: 0
        },
        {
          routeBegins: "showTransitions",
          content: "Transitions",
          nextIndex: 0
        },
  
        {
          routeBegins: "showStoringChoices",
          content: "Storing choices for future use",
          resetStore: "true"
        },
        {
          routeBegins: "leave",
          content: "Leave"
        }
      ]
    },
    {
      choices: [
        {
          store: "blockAffection",
          routeBegins: "helpBlock",
          content: "Help Block."
        },
        {
          routeBegins: "noHelpBlock",
          content: "Don't help. He's too far."
        }
      ]
    },
    {
      choices: [
        {
          store: "blockAffection",
          routeBegins: "hangOutWithBlock",
          content: "Yep.",
          nextIndex: 0
        },
        {
          routeBegins: "noHangOutWithBlock",
          content: "Nope.",
          nextIndex: 0
        }
      ]
    }
  ];
  
  export default choices;
  