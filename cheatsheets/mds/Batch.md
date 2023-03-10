# Batch Cheatsheet

```bash
echo Hello World
echo %username%
echo %userprofile%
whoami
net user/users
net user <username> *
net user <username> <password> /add
net localgroup
net localgroup administrators
net localgroup administrators <username> /add
wmic useraccount
wmic useraccount list full
netplwiz
sfc /scannow
DISM /online /Cleanup-Image /CheckHealth
DISM /online /Cleanup-Image /ScanHealth
DISM /online /Cleanup-Image /RestoreHealth
```
