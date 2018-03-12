Instructions:
- "$ npm start" to host locally

Git Workflow:
Feature Branch Code-Along
https://www.youtube.com/watch?v=oFYyTZwMyAg

Common Workflow 
- Begin by doing a git pull to get the latest content on your master branch
- Run "git branch your-feature-name" to make a git branch
- Code in your changes, add and commit the files
- Pull the master branch again and merge it with your new branch
- Push the branch up to github and submit it as a pull request
- That pull request can now receive comments and code discussion, as well as accept new commits before being merged in with the master branch

$ git branch
- shows all available branches on a repo

$ git branch branch_name
- creates new branch

$ git checkout branch_name
- switches you to another branch
- code in changes

$ git pull
- checkout Master branch
- pulls down latest changes from master

$ git merge master
- checkout Feature branch
- Takes any changes or updates to master, and tries to merge them into feature branch
- May be merge conflicts, fix in text editor, can review branches 

$ git push 
- then select “—set-upstream origin branch_name”
- go to GitHub and create pull request