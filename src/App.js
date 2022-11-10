
import './App.css';
const seedrandom = require("seedrandom");

    const familyMembers = [
      {name:"Dan", spouse: "Rebecca"},
      {name:"Rebecca", spouse: "Dan"},
      {name:"Paul", spouse: "Heather"},
      {name:"Heather", spouse: "Paul"},
      {name:"Kathleen", spouse: "Dean"},
      {name:"Dean", spouse: "Kathleen"},
      {name:"Laura", spouse: "Craig"},
      {name:"Craig", spouse: "Laura"},
    ];

    const familyMembersAgain = [...familyMembers];

    console.log(familyMembers);

    const generateMatches = (arr1, arr2) => {
      const matches = {};
      arr1.forEach(({name, spouse}, i) => {
        let seed = name + i.toString();
        const generator = seedrandom(seed);
        // console.log(targetIndex)
        let match = name;
        console.log("match ", match)
        let count = 0;
        while (match === name) {
          const randNum = generator();
          const targetIndex = Math.floor(randNum * arr2.length);
          console.log("match", arr2[targetIndex]["name"])
          if (arr2[targetIndex]["name"] !== name && arr2[targetIndex]["name"] !== spouse) {
            match = arr2.splice(targetIndex, 1);
            matches[name] = match[0]["name"];
          } else {
            count++;
            seed = count.toString() + seed;
            //console.log(seed)
          }
          //console.log(match)
        }
      });
      return matches;
    };

    const secretSantaPairs = generateMatches(familyMembers, familyMembersAgain);
    console.log(secretSantaPairs)
    const pairsArr = Object.entries(secretSantaPairs);
    console.log("pairsArr", pairsArr);



const Reveal = () => {

   return pairsArr.map((pair) => {
      console.log("pair log", pair[0], pair[1]);
      return (
        <div>
          <details>
            <summary>{pair[0]}</summary>
            {pair[1]}
          </details>
        </div>
      );
    });
}

function App() {





  return (
    <div className="App">
      <header className="App-header">
        <h1>Miller Family Secret Santa</h1>
        <h4>a Secret Santa Generator that WON'T sell your personal data</h4>
        <h3>(click on your name to see your match)</h3>
      <Reveal/>
      </header>

      
    </div>
  );
}

export default App;
