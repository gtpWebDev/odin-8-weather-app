import './styles.css';

import { attachImages, addLocInputListener } from './dom-generation.js';

/*
To do list:
- Changing text size in location input box widens grid, not sure why as yet.
- clear location text after drop down selected
- Add error handling for API requests
- Add a C/F switch to update display
- Possibly add a miles and inch  / metric ?
- tidy up current weather temperature and wind
- overall page structure improvement to deal with thin window
- also possibly move location input 
*/

attachImages();
addLocInputListener();
