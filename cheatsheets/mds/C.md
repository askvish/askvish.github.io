```c
#include <stdio.h>
int main()
{
    printf("Tata!!");
    return 0;
}

```

```
Pointers -- %p
The pointer of x -- &x

String
char s[100];
scanf("%[^\n]%\*c", &s);
printf("Hello, World!\n%s",s);

Characters
a character, a string and a sentence as input in C.
char ch;
scanf("%c", &ch);
printf("%c", ch);

a string as input in C using scanf(“%s”, s). But, it accepts string only until it finds the first space.
to take a line as input, you can use scanf("%[^\n]%*c", s); where s is defined as char s[MAX_LEN] where MAX_LEN is the maximum size of s. Here, [] is the scanset character. ^\n stands for taking input until a newline isn't encountered. Then, with this %*c, it reads the newline character and here, the used \* indicates that this newline character is discarded.

Functions
return_type function_name(arg_type_1 arg_1, arg_type_2 arg_2, ...) {
...
...
...
[if return_type is non void]
return something of type `return_type`;
}
+= : Add and assignment operator. It adds the right operand to the left operand and assigns the result to the left operand.

a += b is equivalent to a = a + b;

Logical Bitwise Operator:

#include<limits.h>
<math.h>
<stdlib.h>
<string.h>

```

```c
/* C program for Merge Sort, Bubble Sort and Insertion Sort */
#include <stdio.h>
#include <stdlib.h>
#include <math.h>

// Merges two subarrays of arr[].
// First subarray is arr[l..m]
// Second subarray is arr[m+1..r]
void merge(int arr[], int l, int m, int r)
{
	int i, j, k;
	int n1 = m - l + 1;
	int n2 = r - m;

	/* create temp arrays */
	int L[n1], R[n2];

	/* Copy data to temp arrays L[] and R[] */
	for (i = 0; i < n1; i++)
		L[i] = arr[l + i];
	for (j = 0; j < n2; j++)
		R[j] = arr[m + 1 + j];

	/* Merge the temp arrays back into arr[l..r]*/
	i = 0; // Initial index of first subarray
	j = 0; // Initial index of second subarray
	k = l; // Initial index of merged subarray
	while (i < n1 && j < n2)
	{
		if (L[i] <= R[j])
		{
			arr[k] = L[i];
			i++;
		}
		else
		{
			arr[k] = R[j];
			j++;
		}
		k++;
	}

	/* Copy the remaining elements of L[], if there
	are any */
	while (i < n1)
	{
		arr[k] = L[i];
		i++;
		k++;
	}

	/* Copy the remaining elements of R[], if there
	are any */
	while (j < n2)
	{
		arr[k] = R[j];
		j++;
		k++;
	}
}

/* l is for left index and r is right index of the
sub-array of arr to be sorted */
void mergeSort(int arr[], int l, int r)
{
	if (l < r)
	{
		// Same as (l+r)/2, but avoids overflow for
		// large l and h
		int m = l + (r - l) / 2;

		// Sort first and second halves
		mergeSort(arr, l, m);
		mergeSort(arr, m + 1, r);

		merge(arr, l, m, r);
	}
}

void swap(int *xp, int *yp)
{
	int temp = *xp;
	*xp = *yp;
	*yp = temp;
}

/* Function to sort an array using insertion sort*/
void insertionSort(int arr[], int n)
{
	int i, key, j;
	for (i = 1; i < n; i++)
	{
		key = arr[i];
		j = i - 1;

		/* Move elements of arr[0..i-1], that are
		greater than key, to one position ahead
		of their current position */
		while (j >= 0 && arr[j] > key)
		{
			arr[j + 1] = arr[j];
			j = j - 1;
		}
		arr[j + 1] = key;
	}
}

/* UTILITY FUNCTIONS */
/* Function to print an array */
void printArray(int A[], int size)
{
	int i;
	for (i = 0; i < size; i++)
		printf("%d ", A[i]);
	printf("\n");
}

// A function to implement bubble sort
void bubbleSort(int arr[], int n)
{
	int i, j;
	for (i = 0; i < n - 1; i++)

		// Last i elements are already in place
		for (j = 0; j < n - i - 1; j++)
			if (arr[j] > arr[j + 1])
				swap(&arr[j], &arr[j + 1]);
}

/* Driver code */
int main()
{
	int n = 1000;
	int arr[n], arr1[n], arr2[n];
	int number;

	for (int i = 0; i < n; i++)
	{
		number = rand();
		arr[i] = number;
		arr1[i] = number;
		arr2[i] = number;
	}

	// printf("Given array is: \n");
	// printArray(arr, n);

	mergeSort(arr, 0, n - 1);
	// printf("Merge Sorted array is: \n");
	// printArray(arr, n);

	// printf("Given array is: \n");
	// printArray(arr, n);

	bubbleSort(arr1, n);
	// printf("Bubble Sorted array is: \n");
	// printArray(arr, n);

	// printf("Given array is: \n");
	// printArray(arr, n);

	insertionSort(arr2, n);
	// printf("Insertion Sorted array is: \n");
	// printArray(arr, n);

	bubbleSort(arr, n);
	// printf("Bubble Sorted array is: \n");
	// printArray(arr, n);

	// printf("Given array is: \n");
	// printArray(arr, n);

	return 0;
}
```
