# <img src="public_html/assets/CROSS-website.png?raw=true" height="70">

<p align = center>
  <a href="http://crossstartracker.com/">
    <img src="https://img.shields.io/website?down_message=offline&label=website&up_message=online&url=http%3A%2F%2Fcrossstartracker.com%2F" /></a>
  <img src="https://img.shields.io/github/last-commit/MatthewSuntup/CROSS-website"/>

  <img src="https://img.shields.io/endpoint?url=https%3A%2F%2Funtitled-z2hgetxqicjh.runkit.sh%2F" />
</p>

<p align = center>
  <img src="https://img.shields.io/badge/-HTML-E34F26?logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Bootstrap-563D7C?logo=bootstrap&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Node.js-339933?logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Markdown-000000?logo=markdown&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Sublime%20Text-DB6204?logo=sublime-text&logoColor=white"/>
  <img src="https://img.shields.io/badge/-RunKit-491757?logo=runkit&logoColor=white"/>
  <img src="https://img.shields.io/badge/-cPanel-DB6204?logo=cpanel&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Git-D51007?logo=git&logoColor=white"/>
  <img src="https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white"/>
  <img src="https://img.shields.io/badge/-Gimp-5C5543?logo=gimp&logoColor=white"/>
</p>

## About
CROSS is a research project developing a star tracker for use in small satellites. This repository is connected to the [CROSS website](http://crossstartracker.com/) and used for automated deployments. The code is largely generated through the Pingendo Bootstrap 4 builder, in conjunction with manual modifications.

## Features
### Deployment
I used cPanel to implement git hooks which automatically deploy the ```public_html``` directory when I push a commit from my local machine to a remote repo hosted on the website. I can also push the code to this remote GitHub repo when desired.

### Sync Badge
I wanted to put a badge on this GitHub repository which indicates when the two remote repos (described in [Deployment](#deployment)) are up to date with the same commits.

To provide public access to the most recent commit hash from the website, I used a git post-receive hook which allows me to automate shell commands to run whenever I push code to the deployment repository. The script updates a simple [text file on the website](http://crossstartracker.com/commit.txt) with the commit hash of the new most recent commit on the deployed repository.

The badge is linked to an [endpoint I wrote](https://runkit.com/matthewsuntup/5f36498d66513e001a0e8ee9), hosted on RunKit. In this Node.js script, I used [octonode](https://github.com/pksunkara/octonode) to access the GitHub API and retrieve the most recent commit on this repository. I got the website hash by simply reading the automatically updated text file hosted on the website. These two hashes are compared and the badge displays whether the corresponding repos are in sync or not.

### Responsive Design
The website uses BootStrap 4 to provide a responsive web page. However, it was largely designed desktop-first and I'm still working on improving the mobile experience.

## Lessons
One of the most interesting parts of this project for me was actually creating the [Sync Badge](#sync-badge) for this README. I didn't have any prior experience with Node.js or web development in general so it was a great learning experience. In the future I definitely want to take advantage of tools like RunKit and do more extensive web development.

Additionally, I hadn't previously set up a local git repo with multiple remote repositories or utilised git hooks and learnt a lot while researching those.

## Website

<p align="center">
  <a href="http://crossstartracker.com/" target="_blank">
    <img src="preview.png?raw=true" width="80%">
  </a>
</p>
