import * as _ from 'loadsh';

const names = ['alonzo church', 'Haskell curry', 'stephen_kleene', 'John Von Neumann', 'stephen_kleene'];

const sortArr = _.chain(names).sort().value();

console.log(sortArr)
