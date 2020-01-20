# help-desk
Help desk application for interview coding exercise.

Uses javascript with React/Redux to build responsive web application.
Check package.json for tech stack. 

Steps to run locally:

- Clone Git Repo
``` git clone $help-desk ```
- Install node packages (node -v (13.6) and npm -v (6.13.4))
``` npm i ```
- Run local dev on port 3000
``` npm start ```
- Run tests
``` npm run test ```
- Run prod build
``` npm run build ```

- View prod build (configured on github hosting)
``` https://kylehagemann.github.io/help-desk/ ```

Application Usage Instructions (also available on page)
Instructions: Click on the filter checkboxes below to toggle by Organizations, Tickets and Users.
To toggle between a filtering search (narrowing results that are similar such as "th" resulting
in the, there, etc...) and an exact search, click on the exact match checkbox. Filtering can be 
done independently on the search key and/or value. When using exact search, a key must be entered 
first before entering a value (as indicated by the required text). Empty value matching is possible 
in exact match, just enter your key filter first and if it has an empty value, there is no need to 
enter anything in the value field (ex: filter key: "details", filter value: "").
