# TT Challenge REST-API Service 

#### Technologies:
1. [Nodejs](https://nodejs.org/en/)
2. [Expressjs](https://expressjs.com/)
3. [Mocha](https://mochajs.org/)

#### Endpoints
     1. http://localhost:3000/jukebox/1/settings
        1.1 [GET] => Returns an array of configurable Settings for the given JukeboxId.

#### Run the Project in Docker
    cd [root directory of repository]
    chmod +x ./rundocker.sh
    ./rundocker.sh
    curl http://localhost:3000/jukebox/1/settings
     
#### Run the Project
 Note: Requires node.js and npm to be installed.

    cd [root directory of repository]
    npm i
    npm start
    curl http://localhost:3000/jukebox/1/settings

##### Docker image
![Docker image](/tests/docker.png?raw=true "Docker Image")

### Testing
#### Unit Tests
     cd [root directory of repository]
     npm run unit-tests

#### Integration Tests
     cd [root directory of repository]
     npm start&
     npm run integration-tests

##### Unit Tests Result
 
![Test Results](/tests/utests.png?raw=true "Unit Test Results")

##### Integration Tests Result
 
![Test Results](/tests/tests.png?raw=true "Unit Test Results")

     


    


