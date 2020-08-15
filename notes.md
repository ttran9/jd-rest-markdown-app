# Integrating Django and React


Video 2 Notes below:

1. Existing project - HTML rendered with Django backend. Pick one "page" / "feature" and you build out that feature in its own project.
	- For this one page/feature you will move all the related react static files into one Django template and this Django template references all the necessary static files.

2. One React project inside of Django Project.
	- Example: "sentry"
	- When you run tests your frontend and backend must be sychronized and this can cause problems when you are trying to push to a production server where the frontend and backend don't sit on the same server.

3. Separate them -> hosted on different machines.
	a. Django API (hosted on api.facebook.com)
	b. React frontend app. (hosted on facebook.)
	- these two apps are run on separate sub-domains
	- you have separated "concerns" and this can help when working with dev teams where we don't have to worry about when devs are pushing changes.
	- The React frontend can be hosted on netlify (one of the easiest ways to host the app).
	- Allow React frontend to make queries to the Django API, so you must set up proper CORS configuration.



 
