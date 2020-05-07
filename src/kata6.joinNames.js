const joinNames = namesObj => {
let jointNames = '';
let chrDef = '';

for (let i=0; i<namesObj.length; i+=1) {

    if (i === namesObj.length - 1) {
        chrDef = ''
    } 
    else if (i === namesObj.length - 2) {
        chrDef = ' & '
    }
    else {
        chrDef = ', '
    };
    jointNames += namesObj[i].name + chrDef;

  };
  return jointNames;

};

module.exports = joinNames;
