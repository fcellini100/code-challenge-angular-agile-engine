# Code Challenge on Angular for Agile Engine - by Fernando Cellini


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.
## How to run 
1. Run `npm install`
2. Run `ng serve` and then navigate to `http://localhost:4200/`.

## Missing points
1. No navigation from one photo to the next. I had a few ideas, but it would have taken a little more time.
2. No invalid token validation. Token handling is still something I need to learn better, for now it only checks if the current user is unauthorized, gets the token and retries, otherwise, it shows an error on the console
3. Share buttons. The only thing I've used in the pass was https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share but It has its limitations. I might have to search for a compatible library, learned how to use it, and it would have taken more time, so I decided to leave the feature out for now.
4. Image zoom. I still had the chance to work with images like that, and a timed challenge was not the best time to learn it. Although now I'm actually curious, so I will check that out. Probably it can be a good addition to project I'm currently working on!

## Things I'm not happy with
1. The mat dialog on mobile looks hideous, I might need to spend a little more time to make it look good. Work with the image inside most likely
2. The paginator it's rather simple and has some minor glitches when you scroll all the way down. It also looks kind of bad on a portrait tablet with high resolution.
3. I'm not sure if storing the apikey on a service it's the best practice. I would think there is a more secure way to do it.

