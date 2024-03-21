import './styles.css';

import { attachImages, addLocInputListener } from './dom-generation.js';

/*
To do list:
- Changing text size in location input box widens grid, not sure why as yet.
- drop down location options styling
- Add error handling for API requests
- Add a C/F switch to update display
- Possibly add a miles and inch  / metric ?
*/

attachImages();
addLocInputListener();
