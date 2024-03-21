import './styles.css';

import { attachImages, addLocInputListener } from './dom-generation.js';

/*
To do list:

- improve API error handling to give UI information, and revisit generally when have better experience
- Changing text size in location input box widens grid, not sure why as yet.
- Add Cent/Fahrenheit switch functionality
- tidy up current weather temperature and wind
- overall page structure improvement to deal with changing window sizes

*/

attachImages();
addLocInputListener();
