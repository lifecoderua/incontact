# Application “Contact manager”:

## Requirements:

- Contact model should contains: id, first name, last name, e-mail address, phone, favorite books, major skill-set (as JS, Java, c# etc.), birthday date in UTC format and the description
- The app should present two kind of views: as list and as grid
- Use the local storage for keeping the contacts
- The end user should has possibility to Add new contact, Edit existing one, Remove one and View detailed information about of any contacts
- Each operation with the contact model should be implemented by using  $resource service
- The app should provide the abilities to filter contacts by name, e-mail address and by major skill
- The “major skill” filter should be represent as dropdown (select control) with unique values
- Detailed contact view should provide full information
- Short contact view should provide first and last name with e-mail address when the grid view is chosen and just first and last names in list view
- Add and Edit views should contains all form fields as required but description filed should be an optional
- The app should validate required fields and provide a message when some required field is empty
- An item on grid or list view should change background color on hover state


## Usage

- `$ gulp connect` to run the server