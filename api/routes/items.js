// items.js
var express = require('express');
var router = express.Router();

let items = [
  {
    id: 1,
    name: 'Item 1',
    address: 'url.string.fr',
    subitems: [
      { id: 1, name: 'Subitem 1' },
      { id: 2, name: 'Subitem 2' },
    ],
  },
  {
    id: 2,
    name: 'Item 2',
    address: 'String.fr',
    subitems: [
      { id: 3, name: 'Subitem 3' },
      { id: 4, name: 'Subitem 4' },
    ],
  },
];


let model = {
    description: 'Structure of items and subitems',
    item: {
        id: 'Number',
        name: 'String',
        address: 'String',
        subitems: [
        {
            id: 'Number',
            name: 'String'
        }
        ]
    }
};

router.get('/', function(req, res, next) {
  res.json(items);
});

router.get('/model', function(req, res, next) {
    res.json(model);
});

module.exports = router;