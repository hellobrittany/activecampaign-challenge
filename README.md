This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


I tried to demonstrate how I'd structure a component library while also making the prototype semi-functional

If there are any errors or missed best-practices, I'm all ears as I'm more familiar with Angular than React.

There are a few assumptions I made when creating this donation form:

1) This is a prototype and not meant to be fully functional

2) Only allowing for whole-dollar donations greater than $5

3) The tooltip appears on hover of the progress bar instead of being fixed to the top of the card, and having the arrow move left/right

4) Initializing at 0 donations would not make sense to see other donors, so I've entered a little blurb about being the first to donate - and if the user did hit submit, they'd still be the only donor.  With more time, I'd have implemented a little pseudo-counter for that dynamic text.

5) I'd set up the heading on a timer to "count-down" to the end date

6) Y'all were testing me on accessibility standards with the colors chosen, I modified accordingly



