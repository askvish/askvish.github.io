# ![Bash](https://upload.wikimedia.org/wikipedia/commons/8/82/Gnu-bash-logo.svg "Bash")

# Bash Scripting Cheatsheet (.sh)

## Printing

```bash
#!/bin/bash
echo "Hello World"                               #=> Hello World

# printf
printf "Hello %s, I'm %s\n" Ashok Vish           #=> Hello Ashok, I'm Vish
printf "10 + 10 = %d\n" 20                       #=> 1 + 1 = 2
printf "This is how you print a float: %f\n" 2   #=> This is how you print a float: 2.000000
```

## Comments

```bash
#!/bin/bash
# This is a single line comment
: '(space is important)
This is a
multi line
comment
'
```

## Variables

```bash
#!/bin/bash
name="Ashok" #no spaces
age=23
echo "Hello $name, your age is ${age}" #=> Hello Ashok, your age is 23
echo 'Hello $name, your age is ${age}' #=> Hello $name, your age is ${age}
```

> ```bash
> Note: For literal printing use single quotes ''
> Note: name="Ashok" == name='Ashok'
> Note: echo $name == echo "$name" == echo "${name}"
> > name="Ashok"
> > echo "Hi $name"      #=> Hi Ashok
> > echo 'Hi $name'      #=> Hi $name
> > echo "I'm in $(pwd)" #=> I'm in /path/to/your/sh/file
> Note: pwd is a special variable, pwd = present working directory
> Note: $(pwd) == `pwd` # Only for special variables
> ```

## Input from user

```bash
#!/bin/bash
echo "Hello User! Please enter your name: "
read name
echo "Enter your rollnumber: "
read rollnum
echo "Hello $name, your roll number is $rollnum"
```

## Brace expansion

```bash
#!/bin/bash
echo {A,B}      #=> A B
echo {A,B}.js   #=> A.js B.js
echo {1..5}     #=> 1 2 3 4 5
```

## Numeric calculations

```bash
echo $((a + 200))      # Add 200 to $a
echo $(($RANDOM%200))  # Random number 0..199
```

## String Basics

```bash
#!/bin/bash
name="Ashok"
echo ${name}
echo ${#name}	      #=> 5       (Length of name)
echo ${name/A/a}      #=> "ashok" (substitution)
echo ${name:0:2}      #=> "As"    (slicing)
echo ${name::2}       #=> "As"    (slicing)
echo ${name::-1}      #=> ""      (slicing)
echo ${name:(-1)}     #=> "Ashok" (slicing from right)
echo ${name:(-2):1}   #=> "k"     (slicing from right)
echo ${food:-Cake}    #=> $food or "Cake"

length=2
echo ${name:0:length} #=> "As"

# Substitution
name="prefix Ashok suffix"
echo ${name#prefix}	        #=> Ashok suffix      (Remove prefix)
echo ${name%suffix}	        #=> prefix Ashok      (Remove suffix)
echo ${name##prefix}	    #=> Ashok suffix      (Remove long prefix)
echo ${name%%suffix}	    #=> prefix Ashok      (Remove long suffix)
echo ${name/suffix/Vish}	#=> prefix Ashok Vish (Replace first match)
echo ${name//suffix/Vish}	#=> prefix Ashok Vish (Replace all matches)
echo ${name/#prefix/Mr.}	#=> Mr. Ashok suffix  (Replace prefix)
echo ${name/%suffix/Vish}	#=> prefix Ashok Vish (Replace suffix)


# Substrings
str="Hello"
echo ${str:0:3}	    #=> Hel  [Substring (position, length)]
echo ${str:(-3):3}	#=> llo  [Substring from the right]

# Manipulation
STR="HELLO WORLD!"
echo ${STR,}   #=> "hELLO WORLD!" (lowercase 1st letter)
echo ${STR,,}  #=> "hello world!" (all lowercase)

STR="hello world!"
echo ${STR^}   #=> "Hello world!" (uppercase 1st letter)
echo ${STR^^}  #=> "HELLO WORLD!" (all uppercase)
```

## Conditionals

```bash
#!/bin/bash
a=1
if [ $a == 1 ]; then   # spaces are must
    echo "Hello"
elif [[ $a == 2 ]]; then
    echo "World"
else
    echo "Hello World"
fi
```

## Loops

```bash
#!/bin/bash

# Basic for loop
arr=(1 2 3 4 5)
for i in ${arr[*]}; do
    echo $i
done
#=> 1 2 3 4 5

# C-like for loop
for ((i = 0; i < 5; i++)); do
    echo $i
done
#=> 0 1 2 3 4

# Ranges
for i in {1..5}; do
    echo "$i"
done
#=> 1 2 3 4 5

# With step size
for i in {5..20..5}; do
    echo "$i"
done
#=> 5 10 15 20

# while loop
while true; do
  echo "I'm immortal"
done


# Reading lines
# file.txt must be present in the same directory as bash script.
# Or, provide ful path of file.
cat file.txt | while read line; do
  echo $line
done
```

## Functions

```bash
#!/bin/bash
function get_name() {
    echo "Ashok"
}
# Or, Same as above (alternate syntax)
get_msg() {
    echo "Good Morning, Ashok"
}

get_name                   #=> Ashok
get_msg                    #=> Good Morning, Ashok
echo "You are $(get_name)" #=> You are Ashok
echo "You are `get_name`"  #=> You are Ashok

myfunc() {
    echo "Hello $1"
}

myfunc "Ashok"    #=> Hello Ashok

# Returning values
myfunc() {
    local myresult='some value'
    echo $myresult
}
result="$(myfunc)"
echo $result      #=> some value

# Raising errors
myfunc() {
  return 1
}
if myfunc; then
  echo "success"
else
  echo "failure"
fi
```

> ```bash
> Note: $1 is the first command line argument. Similarly, $2 is the second command line argument and so on.
> ```

## Arrays

### Defining arrays

```bash
#!/bin/bash
Fruits=('Apple' 'Banana' 'Orange')
echo ${Fruits[0]} #=> Apple
echo ${Fruits[1]} #=> Banana
echo ${Fruits[2]} #=> Orange
echo $Fruits      #=> Apple

# Iteration
for i in "${Fruits[*]}"; do Or, # ${Fruits[@]}
  echo $i
done
#=> Apple Banana Orange

# Working with arrays
echo ${Fruits[0]}           #=> Apple               (Element at index 0)
echo ${Fruits[-1]}          #=> Orange              (Last element)
echo ${Fruits[@]}           #=> Apple Banana Orange (All elements, space-separated)
echo ${Fruits[*]}           #=> Apple Banana Orange (All elements, space-separated)
echo ${#Fruits[@]}          #=> 3                   (Number of elements)
echo ${#Fruits}             #=> 5                   (String length of 1st element)
echo ${#Fruits[2]}          #=> 6                   (String length of N-1th element)
echo ${Fruits[@]:1:2}       #=> Banana Orange       (Range from position 3, length 2)
echo ${!Fruits[@]}          #=> 0 1 2               (Keys of all elements)

# Operations
Fruits=('Apple' 'Banana' 'Orange')
Veggies=('Potato' 'Tomato')

Fruits=("${Fruits[@]}" "Peach")         #=> Apple Banana Orange Peach       (Push/Add Element)
Fruits+=('Mango')                       #=> Apple Banana Orange Peach Mango (Also, Push/Add)
Fruits=( ${Fruits[@]/Ap*/} )            #=> Banana Orange Peach Mango       (Remove by regex match)
unset Fruits[2]                         #=> Banana Orange Mango             (Remove one item)
Fruits=("${Fruits[@]}" "${Veggies[@]}") #=> Banana Orange Mango Mango Potato Tomato (Concatenate)
lines=(`cat "logfile"`)                 #=> content of the file             (Read from file)
```
