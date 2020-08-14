/*
CROSS-website Sync Badge Endpoint
Author: Matthew Suntup
Date: 14 August 2020

This file is hosted on runkit.com to provide an endpoint for one of the badges on the CROSS-website GitHub respostiory. The script checks the most recent git hash on the www.crossstartracker.com website and compares with the most recent hash on the GitHub repository to check if they are synchronised and produces a JSON file which shields.io uses to produce the badge graphic. 

Currently the website hash is retrieved by storing it in a text file. I modified the post-receive git hook on the webb server so that everytime a commit is pushed to the website it will automatically update a text file with the corresponding hash. 

The GitHub hash is retrieved by using the octonode module and identifying the most recent commit in the repository from the retrieved JSON file.
*/

const endpoint = require("@runkit/runkit/json-endpoint/1.0.0")
const request = require("request") // peer dependency
const requestPromise = require("request-promise")
const github = require("octonode")

const websiteCommitUrl = "http://crossstartracker.com/commit.txt";

// Initialise match with an error value
var match = -1;

endpoint(module.exports, async function(req, done)
{       
    try {
        // Get the most recent commit from Website repository
        var websiteCommit = await requestPromise(websiteCommitUrl);
        console.log("Website commit: " + websiteCommit);
        
        // Get the most recent commit from  GitHub repository
        var client = github.client();
        var githubCommit = "test";
        
        client.get('/repos/MatthewSuntup/CROSS-website/commits', {}, function (err, status, body, headers) {
            
            // Extract the most recent commit from the JSON object
            githubCommit = body['0']['sha'];
            console.log("GitHub commit: " + githubCommit);
            
            // Compare the commits
            if (websiteCommit == githubCommit){
                match = 1;
            }
            else {
                match = 2;
            }
            
            // Return JSON objects for shields.io
            if(match == 1){
                done({
                    "schemaVersion": 1,
                    "label": "sync",
                    "message": "site synced with GitHub" ,
                    "color": "success",
                })
            } else if(match == 2) {
                done({
                    "schemaVersion": 1,
                    "label": "sync",
                    "message": "site out of sync with GitHub" ,
                    "color": "important",
                })
            } else {
                done({
                    "schemaVersion": 1,
                    "label": "sync",
                    "message": "error" ,
                        "color": "critical",
                    })
            }
            
        });
    } catch(e) {
        done({error: "some error occured"})
    }
})
