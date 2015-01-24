# Bilevel

[![NPM version](http://img.shields.io/npm/v/bilevel.svg)](https://www.npmjs.org/package/bilevel) 
[![Build Status](https://secure.travis-ci.org/Akshit-/bilevel.png?branch=master)](http://travis-ci.org/Akshit-/bilevel) 

> 

## Documentation

## Description
A bilevel partition uses a radial layout for depicting hierarchies. The root node of the tree is at the center, with leaves on the circumference. The area (or angle, depending on implementation) of each arc corresponds to its value. 

## Getting Started
Install the module with: `npm install bilevel`

#### How to have a new Bilevel with different .json file?
- In the simple.js replace the flare.json with a new one.
```javascript
var app = require("bilevel");
var instance = new app({el: yourDiv, flareJSON: '../data/flare.json'});
```
- JSON file should be in a structure/formatted as shown below

```javascript
{name : "F",
  children: [
    {name: "A", size: 0.1},
    {name: "B", size: 0.2},
    {
      name: "E",
      length: 0.5,
      children: [
        {name: "C", size: 0.3},
        {name: "D", size: 0.4}
      ]
    }
  ]
}
```
-	If JSON is not in the above structure, you can make use of **BioJS Newick Parser** for parsing a string into JSON.
-	Cutomize the bilevellike height,width,...etc. by changing the values.
```javascript
var opts =  {
  
  top: 350, 
  right: 480, 
  bottom: 350, 
  left: 480
};
```

With all the parameters, you have to change them accordingly. Here are the descriptions:
- **"json"** : the .json file that you would like to visulaize.
- **"top"** : the top position of the visualization component.
- **"right"** : the right position of the visualization component.
- **"left"** : the left position of the visualization component.
- **"bottom"** : the bottom position of the visualization component.


Additionally, by "click" on each arc, the particular object gets zoomed and the corresponding hierarchy is displayed.

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/Akshit-/bilevel/issues).

## License 

The MIT License

Copyright (c) 2015, akshit, vinod

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
