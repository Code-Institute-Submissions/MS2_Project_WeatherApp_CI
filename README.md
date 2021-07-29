# Weather Search Service

This project aims to provide any user with a quick service to search for current weather in any city. This project hopes to provide a simple and rapid method for the user to get information on any current weather in any major city in the world, with the help of Openweathermap API (free plan). 

The overall website look and feel is kept crispy and simple, as the main aim is to provide weather information in a weather card after the user has submitted a cityname via the searchbox. 

API calls in this project were made using XHR XMLHttpRequest. Whilst this method is now older, and there are newer methods such as Fetch which can be used, for the purpose of this project and my learning outcome the older XMLHttpRequest method was used, and a general personal learning outcome purpose was to keep the script code as short and simple as possible. The XMLHttpRequest method does have its limitations but there might also be instances where this method would be the preferred option, for more information on this method please visit ![JavaScriptInfo](https://javascript.info/xmlhttprequest#the-basics) or another resource. 

This project has been created to be submitted as a milestone project for CodeInstitute's Diploma in Software Development course. 

![Responsive Mockup](https://github.com/''png)

## Features 

Go over the different parts of your project, and describe each in a sentence or so. Explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how this project is the best way to help them achieve these things.

### Existing Features


- __The landing page__

  - The landing page comprises of a simple website layout, with a webpage title in the upper lefthand corner and a header "Weather Search Service, with a subheader "Search for current weather".  
  - This section introduces the user with simple layout to grab their attention.
  - A simple searchbox with a search bar is located underneath the subheader. The aim of the simple overall layout of this page is to provide a "clean", quick way for the user to enter a cityname in the searchbox and get information on current weather for this particular city. The main purpose of this webpage is to provide information on current weather, and therefore any other content is kept to minimum in order not to "distract" the user from the overall purpose.  
  - No navigation bar included.
  - For this project the developer opted to use a free Bootstrap template for index and css files to ensure that JavaScript learning was prioritised, although for the purpose of this project the index file was heavily modified and many elements from the original template were removed or elements were added to it.  See "Content" section below for examples.

![Landing Page](https://github.com/''.png)


- __Search section__

  - This section will allow the user to search weather by city name, for quick information.
  - Upon loading the page, the user is presented with a simple searchbox, with a clickable button and short introductions on how to use the search function.
  - Code will clear userinput in the searchbox after submission, for ease of use in case user wishes to perform another search for another city directly after. 
  - Only a searchbox is initially displayed. Once the user enters a cityname, and clicks the button to generate results, an infocard with weather information will appear, see next section. 

  ![Search](https://github.com''.png)
  
- __Weather section__

  - Once user has clicked the submit button, following weather results for a city are generated, accroding to which cityname has been submitted:
  - Weather icon (connected to data for description result, i.e if description is "partly cloudy", an icon will display two clouds). See an image below.
  - Cityname (same as the user has typd in the searchbox)
  - Temperature (rounded up number, celsius).
  - Description: Example: Sunny, partly cloudy, clouds etc.

![Result](https://github.com''.png)

- __The Footer__ 

  - The footer section includes links to the Openweathermap site, provider of the API service and a link to GitHub page. Anyone hoping to replicate this project is strongly recommended and instructed to sign up and get their own key, as this is a requirement from Openweathermap that all keys are personal. Find out more and how to do this here: ![Openweathermap] (https://openweathermap.org/api) 
  - The footer's purpose is to provide additional resources should the user wish to gain more information about this project and its resources used. 
  - Disclaimer section: as this project has been created for a school/educational purposes only, the user is informed to seek accurate data from other sources also, and not only to rely on this app. 

![Footer](https://github.com/''png)


### Features Left to Implement

- Instead of a searchbox field, the developer could opt to use geolocation to provide current weather for user's area, without the user having to type in a city. A geolocation feature is outside the scope of this project, as I wish to demonstrate that the user can search for any major city or town with the help of this app. Geolocation feature can be accomplished with the help of an other JavaScript function in the script file. 

## Testing 

- API tests carried out: Test nr 1 (initially conducted with a different, easier API in order to not use up calls on the free Openweathermap API and risk the provider throttling the key) and API 2 sharp test with the actual Openweathermap API key generated expected results. 

Bugs or problems during testing: 
- Placement of script tag at the top of the page in the index.html file: Initially an error message for document.getElemenById null was received once the actual searchbox function had been set up. Upon further investigation, a recommendation from a forum in Stackoverflow recommended that the script tag should be moved to the end of the html file, close to the closing body tag. The script tag should be located at the bottom of the html file, otherwise the html file will not have enough time to load.
- Alert box: an alert box was set up in the script file in order to catch any mistyped cityname which the user might type in and submit (resulting in no information being displayed in the infocard). The aim was to generate an error alert box propting th user to type in a valid city name after an incorrect submission. During th development phase the error box "fired up" when the submission button was clicked, even if the cityname was correct, results for the city were then displayed correctly so the issue had to be the alert function. Upon further investigation, it was found that the correct placement for this else if - statement was below the actual API call if-function, and in order to work properly it needed to "fire" if the response from the onreadystatechange was 404. The issue with the alertbox is now rectified and the function is working correctly, but there might be an other, more correct way to initialise the alert function. 
- Temperature data from the API: Results for the temperature are returned with 2 decimals, which is not optimal. For this project a temperature displaying a whole number was chosen. In order to achieve this, a  math.round command would need to be used in the infocard temperature result section. Unfortunately the developer was unable to get the syntax order right and had to Google the problem. This syntax is now correct and returning a whole number (ie. 25, or 18 etc) with the temperature results. 


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.o.''html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator''.''s)

### Unfixed Bugs

At the time of writing there are no known bugs, however load time for the infocard is a few seconds which might be due to internet connectivity issues during development. It could be beneficial to look into this further to establish that the call function is working optimally.  

## Deployment

Deployment of project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://''.''.html 


## Credits 

- Code Institute Diploma in Software Development programme modules JavaScript Essentials and Interactive Front End Development for valuable learning experiences and teaching the basic and advanced concepts required to create a simple webpage utilising JavaScript.  

References:

### Content 

- Template Bootstrap [Bootstrap](https://getbootstrap.com/docs/4.0/examples/).
- API Service and key from ![Openweathermap] (https://openweathermap.org/api). For anyone replicating or looking to make their own project it is required that you sign up to the service (choose free subscription) and get your own key fron the provider. Follow link above. 
- Instructions on correct math.round syntax for rendered temperature from [Alan](https://alan.app/docs/server-api/built-in-javascript-libraries).
- Instructions on "document.getElementById results to null even if API call successful" fix ( move script from top to near end of body tag) from [Stackoverflow](https://stackoverflow.com/questions/26107125/cannot-read-property-addeventlistener-of-null)
- The icons in the search results from ![Openweathermap] (https://openweathermap.org/weather-conditions)
- Code Institute Diploma in Software Development modules Javascript Essentials and Interactive Front End Development, generally all lessons in these modules, for learning about vanilla JavaScript, jQuery and working with external resources such as APIs. 

### Media

- No images used for this project. See "icons" in section above for icons. 

## Other Misc Info

- If something to add that does not fit into categories above, put it here.