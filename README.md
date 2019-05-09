# restaurants
This project demonstrates a restaurants page in which several elements like reviews,maps etc exist. I have used ES 6 functionalities  for the compatibility with modern web browser.
# Mobile Web Specialist Certification Course

* * *

#### _Three Stage Course Material Project - Restaurant Reviews_

## Project Overview: Stage 1

For the **Restaurant Reviews** projects, you will incrementally convert a static webpage to a mobile-ready web application. In **Stage One**, you will take a static design that lacks accessibility and convert the design to be responsive on different sized displays and accessible for screen reader use. You will also add a service worker to begin the process of creating a seamless offline experience for your users.

### Specification

You have been provided the code for a restaurant reviews website. The code has a lot of issues. It’s barely usable on a desktop browser, much less a mobile device. It also doesn’t include any standard accessibility features, and it doesn’t work offline at all. Your job is to update the code to resolve these issues while still maintaining the included functionality.

### Project Rubric

Your project will be evaluated by a Udacity code reviewer according to the [Restaurant Reviews project rubric](https://review.udacity.com/#!/rubrics/1090/view). Please review for detailed project requirements. The rubric should be a resource you refer to periodically to make sure your project meets specifications.

## Leaflet.js and Mapbox:

This repository uses [leafletjs](https://leafletjs.com/) with [Mapbox](https://www.mapbox.com/). You need to replace `<your MAPBOX API KEY HERE>` with a token from [Mapbox](https://www.mapbox.com/). Mapbox is free to use, and does not require any payment information.

### Note about ES6

Most of the code in this project has been written to the ES6 JavaScript specification for compatibility with modern web browsers and future-proofing JavaScript code. As much as possible, try to maintain use of ES6 in any additional JavaScript you write.

### What do I do from here?

1.  In this particular folder, now we enable a simple HTTP server for the site files on local PC. We use Python, Because it has many simple tools.
    -   In a terminal, we have to check the current version of python via : `python -V`. If we are using Python 2.x, connect the server with  the following command in the command prompt :`python -m SimpleHTTPServer 8000` (or any other port, if port 8000 is already in use.) For Python 3.x, we should use the following command in the command prompt `python3 -m http.server 8000 or py -m http.server 8090`. if we are not having Python, we can visit the python.org site [website](https://www.python.org/) to download as well as install the software.
    -   Note -  For Windows, Python 3.x will installed as `python` by default. To start a Python 3.x server, we can also use the command: `python -m http.server 8000`.
2.  As your server is running, we should visit the site: `http://localhost:8000`, and check how your experience will be.  It is preferred to visit the site in incognito window, so that we can ensure that no caches are getting stored.
3. According to Udacity, I integrate the markers along with map-box token.
      - I signed-up for map-box `https://www.mapbox.com/` and I used map-box token in my application
4.  By viewing the provided code, we plan to implement the features in the following three phases : responsive design, accessibility, offline use.
5. I am using service-worker to work on offline also.
6.  Now we write the code for the purpose of update so that our site can also function as mobile-ready website.

# Conclusion:-

  I am able to understand ES6 functionalities for the compatibility with modern web browser after doing this project.  
