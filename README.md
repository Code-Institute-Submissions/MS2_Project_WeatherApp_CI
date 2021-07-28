# Weather Search Service

Include one or two paragraphs providing an overview of project. Sales pitch. Describe what the project hopes to accomplish, who it is intended to target and how it will be useful to the target audience. 


![Responsice Mockup](https://github.com/''png)

## Features 

Go over the different parts of your project, and describe each in a sentence or so. Explain what value each of the features provides for the user, focusing on who this website is for, what it is that they want to achieve and how this project is the best way to help them achieve these things.

### Existing Features


- __The landing page__

  - The landing includes a photograph with text overlay to allow the user to see exactly which location this site would be applicable to. 
  - This section introduces the user with simple layout to grab their attention
  - No navigationbar included

![Landing Page](https://github.com/''.png)


- __Search section__

  - This section will allow the user to search weather by city name, for quick information.
  - Code will clear userinput in the searchbox after submission, for ease of use in case user wishes to perform another search for another city directly after. 
  - Only a searchbox is initially displayed. Once the user enters a cityname, and clicks the button to generate results, an infocard will appear with weather data, see next section. 

  ![Search](https://github.com''.png)
  
- __Weather section__

- Once user has clicked the submit button, following weather results for city are generated:
  - Weather icon (connected to data for description result, i.e if description is "partly cloudy", an icon will display two clouds). See an image below.
  - Cityname
  - Temperature (rounded number)
  - Description

![Result](https://github.com''.png)

- __The Footer__ 

  - The footer section includes links to the Openweathermap site, provider of the API service and a link to GitHub page.
  - The footer's purpose is to provide additional resources shuld the user wish to gain more information about this project and its resources used. 

![Footer](https://github.com/''png)


### Features Left to Implement

- Instead of a search field, the developer could opt to use geolocation to provide current weather for user's area, without the user having to type in a city. A geolocation feature is outside the scope of this project, as I wish to dmonstrate that the user can search for any major city or town with the help of this app. 

## Testing 

Go over all of project’s features, make sure that they all work as intended. How can user easily achieve their goals when using the service.
- API tests 1 (different, easier API) and API 2 sharp test generated expected results. 

Include functionality in different browsers and screen sizes.

Bugs or problems during testing: script placement (ok), alert box(ongoing), math.round(ok).


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.o.''html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator''.''s)

### Unfixed Bugs

If unfixed bugs remain, give reason why and what tried. 

## Deployment

Deployment of project to a hosting platform (e.g. GitHub) 

- The site was deployed to GitHub pages. The steps to deploy are as follows: 
  - In the GitHub repository, navigate to the Settings tab 
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment. 

The live link can be found here - https://''.''.html 


## Credits 

- Code Institute Diploma in Software Development programme modules JavaScript Essentials and Interactive Front End Development for valuable learning experiences and teaching the concepts required to create a simple webpage utilising JavaScript.  

References:

### Content 

- Template Bootstrap (although heavily modified, include link to original template).
- API Service and key from [Openweathermap](https://''/).
- Instructions on correct math.round syntax for rendered temperature from [Blog Post](https://''.com/).
- Instructions on "document.getElementById results to null even if API call successful" fix ( move script from top to near end of body tag) from [Stackoverflow](https''''/)
- The icons in the search results from [Openweathermap](https://''/)
- Code Institute Diploma in Software Development modules Javascript Essentials and Interactive Front End Development, generally all lessons in these modules, for learning about vanilla JavaScript, jQuery and working with external resources such as APIs. 

### Media

- No images used for this project. See "icons" in section above for icons. 

## Other Misc Info

- If something to add that does not fit into categories above, put it here.