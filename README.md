# zeroanalys-frontend

## Locations:

1. (`http://host:port/`) this link goes to **LOGIN COMPONENT**
2. (`http://host:port/dashboard`) this link goes to **DASHBOARD COMPONENT**

---

## Instructions:

- Make sure you install all the dependencies by typing:

```bash
# For Linux and Mac users
cd zeroanalyst-front
sudo npm install

# For Windows
cd zeroanalyst-front
npm install
```

In case of any errors, try following:

```bash
# For Linux and Mac users
cd zeroanalyst-front
sudo yarn install

# For Windows
cd zeroanalyst-front
yarn install
```

- All the Main Activities are handled within :
  `zeroanalyst-front/src/private/components/MainContent.jsx` >> This Component is a part of LeftBar component in the nav section.

- to run the development server:

```bash
cd zeroanalyst-front

# if you don't have yarn
npm start

# if you have yarn
yarn start
```

---

## Changelog:

- Dashboard Framework designed
- Hotswap Logos for testing >> just change the logo locations in `zeroanalyst-front/src/App.js`

#### 9th August 2020:

- Data Population Arrangement done: `src/handlers/handlers/dataHandler/handleData.jsx`
  1. JSON Format to be fed in is => array of JSONs `[ {} , {} , {} ]`
  2. All table modifiers must be operated on the data that is fed in: e.g. the status modifier converts `"Status"` to `<div>Status</div>` type object once the data is passed through the modifier. (can be found in the table Component's constructor)
  3. Table Rerendering is almost immediate even with larger number of entries. Still the runtime for the filtering should be managed once developed.
