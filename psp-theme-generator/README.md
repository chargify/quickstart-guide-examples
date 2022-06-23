# psp-theme-generator.js

> Easy-to-edit script for customizing a Chargify Public Signup Page.

## Info

**psp-theme-generator.js** is a Javascript file that can be edited and pasted into a PSP's settings page in Chargify. If the script is left unedited, the PSP will not be changed.

Below is a list of the parameters that can be edited, and the accepted values for each.

## Debug

| Attribute      | Accepted Values | Description
| - | - | -
| `sendLogMessages` | 'true', 'false' | If enabled, log messages will be sent to the console for debug purposes 

## Layout & color theme

| Attribute | Accepted Values | Description
| - | - | -
| `darkMode` | 'true', 'false' | Toggles dark mode color adjustments. Dark mode works for each page layout. 
| `layout` | 'default', 'minimal' | Adjusts the page's layout by injecting CSS. Each theme can be adjusted futher by defining accent/hover/background colors.
| `accentColor` | Valid hex code with a leading "#".<br><br>Example: `'#0063ff'` | Sets the accent color to be applied to buttons and highlighted text. If left blank, the default is used.
| `hoverColor` | Valid hex code with a leading "#".<br><br>Example: `'#0063ff'` | Sets the mouse-hover color to be applied to buttons on the page. If left blank, the value of `accentColor` is used.
| `backgroundColor` | Valid hex code with a leading "#".<br><br>Example: `'#0063ff'` | Sets the outermost background color for the page. If left blank, a default value will be used.
| `googleFontName` | Any valid Google Font family name<br><br>Example: `'Roboto Slab'` | Sets the page font family to the Google Font provided. If left blank, the default font will be used.

## Form validations

| Attribute | Accepted Values | Description
| - | - | -
| `requireOrg` | 'true', 'false' | Sets the 'Organization' field as required 
| `requirePhone` | 'true', 'false' | Sets the 'Phone' field as required. A valid phone number must include at least 10 digits. Symbols and letters are ignored in the validation.
| `requiredCustomFields` | Type: 'customer', 'subscription'<br><br>ID: {custom field ID}<br><br>Example: `[{ "type": "customer", "id": "12345" }]` | Sets custom fields as required. A field type and field ID must be provided for each custom field, in the form of a hash array.

## Hiding items

| Attribute | Accepted Values | Description
| - | - | -
| `hideRecurringFee` | 'true', 'false' | Hides the Recurring Fee from the summary section.
| `hideComponentFee` | 'true', 'false' | Hides the Component Fee from the summary section.
| `hidePhone` | 'true', 'false' | Hides the 'Phone' field.
| `hideOrg` | 'true', 'false' | Hides the 'Organization' field.
| `hideHeader` | 'true', 'false' | Hides the page header.
| `hiddenCustomFieldIDs` | Type: 'customer', 'subscription'<br><br>ID: {custom field ID}<br><br>Example: `[{ "type": "customer", "id": "12345" }]` | Hides custom fields from the page. A field type and field ID must be provided for each custom field, in the form of a hash array.
| `removeNoneOption` | 'true', 'false' | Removes the default "None" option from all *dropdown* custom fields.

## Change page text

| Attribute | Accepted Values | Description
| - | - | -
| `textToReplace` | A string array containing the text to search and the replacement text, separated by a pipe ("\|")<br><br>Example: `['Customer Information\|Account Info']` | Finds/replaces element text on the page. Search is case sensitive, and only the last matching element on the page is changed.<br><br>Does not work in the page summary section.

