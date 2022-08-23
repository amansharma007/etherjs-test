const { getEtherBalance } = require("./helpers");

let a = `async function (helpers) {
    let etherBal = await helpers.getEtherBalance(
      "0xeba750764Be59e9B1c30ee52a0e2395D725Da7Ee"
    );
  
    // Your eth balance is your voting power. Rounded off to two digits below.
    let votingPower = Math.round(parseFloat(etherBal) * 100) / 100;
  
    // Vote not allowed if you have no eth balance
    let isAllowedVote = parseFloat(etherBal) !== 0;
  
    return {
      votingPower,
      isAllowedVote,
    };
  };`;
let b = new Function("return " + a);

b()({ getEtherBalance }).then((output) => {
  console.log(output);
});
