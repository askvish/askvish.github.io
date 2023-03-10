# Git Cheatsheet

| Commands                                            | Functions                                                              |
| --------------------------------------------------- | ---------------------------------------------------------------------- |
| `git --version`                                     |                                                                        |
| `git config --list or -l`                           | Shows all properties                                                   |
| `git config --list --show-origin`                   | Shows all properties with file loactions                               |
| `git config --global user.name "Ashok Vishwakarma"` | set a name that is identifiable for credit when review version history |
| `git config --global user.email askvish@iitk.ac.in` | set an email address that will be associated with each history marker  |
| `git config --global core.editor "code --wait"`     |                                                                        |
| `git config --global color.ui auto`                 | set automatic command line coloring for Git                            |
| `git config --get user.name`                        |                                                                        |
| `git config --get user.email`                       |                                                                        |
| `git config --get core.editor`                      |                                                                        |
| `git config --global -e`                            |                                                                        |
| `git config --global core.autocrlf true`            | For Windows                                                            |
| `git config --global core.autocrlf true`            | For Mac                                                                |
| `git init`                                          |                                                                        |
| `git init [project name]`                           |                                                                        |
| `git clone [project url]`                           |                                                                        |
| `git add <file> <file1>...`                         |                                                                        |
| `git commit -m "message"`                           |                                                                        |
| `git commit -a -m (or, -am) "commit message"`       |                                                                        |
| `git status`                                        |                                                                        |
| `git status -s`                                     |                                                                        |
| `git ls-files`                                      |                                                                        |
| `git rm <file> <file1>`                             |                                                                        |
| `git mv <file to> <file from>`                      | Unlike linux commad                                                    |
| `git diff`                                          |                                                                        |
| `git diff --staged`                                 |                                                                        |
| `git log`                                           |                                                                        |
| `git log --oneline`                                 |                                                                        |
| `git log --oneline --reverse`                       |                                                                        |
| `git show <commit-id>`                              |                                                                        |
| `git show HEAD~2`                                   |                                                                        |
| `git show HEAD~2:README.md`                         |                                                                        |
| `git ls-tree HEAD~2`                                |                                                                        |
| `git show HEAD~2:README.md`                         |                                                                        |

```
1. git init : it will create the initialize directory
2. (.git to perform various operations )
3. git status : display the state of the working directory
4. git add . : moves changes from the working directory to the staging area.
5. git commit : takes the staged snapshot and commits it to the project history.
6. git log : view the previous revisions of a project.
7. git remote -v : It will check the connection between gitBash and Remote Repo
```

<!-- git config --global credential.helper cache -->
<!-- git log -p -->
<!-- git log --stat -->
<!-- git checkout filename -->
<!-- git checkout filename -->
<!-- git revert HEAD -->
<!-- git revert comit_id_here -->
<!-- git branch branch_name -->
<!-- git checkout branch_name -->
<!-- git branch -->
<!-- git checkout -b branch_name -->
<!-- git branch -d branch_name -->
<!-- git merge branch_name -->
<!-- git log --graph --oneline -->
<!-- git log --graph --oneline --all -->
<!-- git merge --abort -->
<!-- git add remote https://repo_here -->
<!-- git remote -v -->
<!-- git remote show origin -->
<!-- git push -->
<!-- git pull -->
<!-- git fetch -->
