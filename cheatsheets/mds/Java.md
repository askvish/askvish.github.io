# Java Cheatsheet

## Boiler Plate Code

```java
class Main{
  public static void main(String arg[]){
    Systen.out.print("Hello World");
  }
}
```

## Output

```java
System.out.print("Print on the Screen: Hello World");
```

## Main Class

```java
public class Main{
    public static void main(String[] args){
        System.out.print("Print on the Screen\n");
        System.out.println("Print on the Screen");
    }

}
```

## Data Types

Primitive Data types

- int
- float
- long
- double
- char
- boolean
- short
- byte

Non-primitive datatypes

- String
- Array
- Class
- Object
- Interface

```java
public class Main{
    public static void main(String[] args){
        //Constants
        final pi = 3.14;
        System.out.print("pi\n");
        System.out.println("Print on the Screen");
    }
}
```

```java
returnType functionName(parameters: type arg1, type arg2, ..){
            //operations
        }
```

## Array

```java
type[] arrayName = new type[size];
type arrayName[] = new type[size];

type[][] arrayName = new type[row][column];
type arrayName[][] = new type[row][column]
```

## Strings

```java
String fullName = firstName + " " + lastName; // concatenation
int len = array.length(); // length
array.charAt(i); // character at i'th position
name1.compare(name2) //compare
// = 0 if name1==name2
// > 0 if name1 > name2
// < 0 if name1 < name2

name1 == name2 // some cases are failed
new String("Tony")== new String("Tony") // => false
sentence.substring(begin idx, ending idx);
// Strings are immutabe
```

## String Builder

```java
StringBuilder sb = new StringBuilder("Tony");
        // find
        sb.charAt(0);
        // replace
        sb.setCharAt(0, 'A');
        // insert
        sb.insert(2, 'S');
        // delete
        sb.delete(1, 3);
        // append
        sb.append('A'); // str = str + 'A'
        sb.length();
```

## Sorting

- Bubble Sort
- Selection Sort
- Insertion Sort

- Merge Sort
- Quick Sort

## OOPS

-
