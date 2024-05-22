// subitems.js
var express = require('express');
var router = express.Router();

let subitems = [
  {
    id: 1,
    name: 'subItem 1',
    date: new Date(),
    itemId: 1
  },
  {
    id: 2,
    name: 'subItem 2',
    date: new Date(2024, 5, 25),
    itemId: 1
  },
  {
    id: 3,
    name: 'subItem 3',
    date: new Date(2024, 5, 31),
    itemId: 2
  },
  {
    id: 4,
    name: 'subItem 4',
    date: new Date(2024, 6, 5),
    itemId: 2
  },
];


let model = {
    description: 'Structure of subitems and parent items',
    subitem: {
        id: 'Number',
        name: 'String',
        date: 'Date',
        itemId: 'Number',
    }
};

router.get('/', function(req, res, next) {
  res.json(subitems);
});

router.get('/model', function(req, res, next) {
    res.json(model);
});

module.exports = router;