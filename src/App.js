
import './App.css';
const seedrandom = require("seedrandom");

    const familyMembers = [
      "Dan",
      "Rebecca",
      "Paul",
      "Heather",
      "Kathleen",
      "Dean",
      "Laura",
      "Craig",
    ];

    const familyMembersAgain = [...familyMembers];

    console.log(familyMembers);

    const generateMatches = (arr1, arr2) => {
      const matches = {};
      arr1.forEach((person, i) => {
        let seed = person + "i";
        const generator = seedrandom(seed);
        // console.log(targetIndex)
        let match = person;
        let count = 0;
        while (person === match) {
          const randNum = generator();
          const targetIndex = Math.floor(randNum * arr2.length);
          if (arr2[targetIndex] !== person) {
            match = arr2.splice(targetIndex, 1);
            matches[person] = match[0];
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
