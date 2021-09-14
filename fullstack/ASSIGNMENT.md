# Brief

A client has a couple of Intel NUCs that are being monitored and the status shown on a page. The data exists in Elasticsearch, the API is provided in Python, and the web interface is served by a React TypeScript application.

You have been tasked with implementing an additional table that will list the services that are running on a particular host. Specifically, the client wants to be able to click on a row in the existing table and see the list of running services. You should be able to gather this data from the API. When it's all done, wrap it up in a `docker-compose.yaml` to run everything.

Check out each project's `README.md` for details about how to get them set up.

The complete solution should have a valid `docker-compose.yaml` that runs all services is accessible on http://localhost:8080

It is expected that completing this work should take no longer than 6 hours. You may spend longer if you wish but it is recommended to submit what you've completed at the six hour mark.

# Components

The directory contains three sub-directories, each containing part of the stack.

`./db` contains a Docker image with an elastic-search instance preloaded with two tables worth of hardcoded data - `hosts` and `services`. You have to build this manually.

`./backend` contains a Python project with an API that connects to Elasticsearch and forwards the data, implemented as a Flask application. It implements a couple of API endpoints, most notably the one to get a list of `hosts`.

`./frontend` contains a React project that consumes the API from the backend and renders one table containing information about the NUC hosts, and only NUC hosts.

# Goals

* Create the DB docker image
* Run the DB in terminal 
* Run the existing backend in terminal
* Run the existing frontend in terminal
* Verify existing solution works 
* Create new API in backend
* Create new Table in frontend
* Link from a row on the existing table (hosts) to new table (services on that host)
* Make a docker image of backend
* Make a docker image of frontend
* Run the whole system from `docker-compose.yaml`

# Assessment criteria

This is what we are looking to assess with this assignment:

- Competence in full-stack activities
- Code quality and error handling
- Ability to make discrete and reusable components
- State handling
- Responsive design
- Structuring frontend code in a reasonable manner (i.e., it follows common conventions, is easy to understand, is extensible if that seems useful, etc.)

Things that are not being assessed and will not be penalised:

- Code testing
- Code documentation (please do provide a `README` explaining how to run your code however)
- Minor bugs in the functionality of your solution (if you know of some bugs that you won't be able to fix in time, feel free to mention them to us)
- Little mistakes, typos, etc.
- Sending us any questions or comments via email

---

Best of luck! If you have any questions or comments, we'd love to hear it. Shoot your contact an email and we'll see what we can do.
