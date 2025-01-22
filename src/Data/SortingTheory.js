export const bubbleData = {
    description: "Bubble Sort Algorithm is the simplest sorting algorithm that works by repeatedly swapping the adjacent elements if they are in the wrong order. It is often used to introduce the concept of a sorting and is particularly suitable for sorting small datasets.",
    steps: [
        "Start by comparing the first two elements. If they are in the wrong order, swap them.",
        "Continue this process for all elements moving from left to right. After the first pass, the largest element will be at the end.",
        "In the next pass, skip the last element since it’s already sorted and repeat the above steps. The second-largest element will move to the second-last position.",
        "Repeat the steps until the entire array is sorted."
    ],
    timeComplexity: `O(n * n)`,
    spaceComplexity: "O(1)",
    code: [
        {
            tag: "C++",
            value: ["for(int i=0;i<n-1;i++){",
                    `   for(int j=0;j<n-i-1;j++){`,
                    "       if(v[j] > v[j + 1]){",
                    "         swap(v[j], v[j + 1]);",
                    "       }",
                    "    }",
                    "}"]
        }
    ]
}

export const selectionData = {
    description: `The selection sort algorithm sorts an array by repeatedly finding the minimum element (considering ascending order) from unsorted part and putting it at the beginning. 
    The algorithm maintains two subarrays in a given array\.
    The subarray which is already sorted\. 
    Remaining subarray which is unsorted\. 
    In every iteration of selection sort, the minimum element (considering ascending order) from the unsorted subarray is picked and moved to the sorted subarray\.`,
    steps: [
        "It occurs in 'n' iterations.",
        "In each iteration find the minimum element from the un-sorted array.",
        "After finding it swap it with first element of un-sorted array.",
        "Repeat this step untill array is sorted."
    ],
    timeComplexity: `O(n * n)`,
    spaceComplexity: `O(n * n)`,
    code: [
        {
            tag: "C++",
            value: [
                "for(int i=0;i<n;i++){",
                "   int min_index = i;",
                "   for(int j=i;j<n;j++){",
                "       if(array[j] < array[min_index]){",
                "           min_index = j;",
                "       }",
                "   }",
                "   if(min_index != i){",
                "       swap(array[min_index], array[i]);",
                "   }",
                "}"
            ]
        }
    ]
}

export const insertionData = {
    description: "Insertion sort is a simple sorting algorithm that works by dividing the array into two parts, sorted and unsorted part. In each iteration, the first element from the unsorted subarray is taken and it is placed at its correct position in the sorted array.",
    steps: [
        "The first element of the array is assumed to be a sorted subarray.",
        "Start with the element at index 1 and store it in a variable key.",
        "Compare the current element key with the elements in the sorted subarray from right to left (elements at indices from j = i-1 to j = 0).",
        "Shift elements greater than the key one position to the right to make space for the current element until it finds a smaller element than the key and j is not zero.",
        "When the correct position for the key is found, it is inserted at arr[j + 1].",
        "Repeat these steps for the remaining elements of the unsorted subarray until the complete array is sorted."
    ],
    timeComplexity: `O(n * n)`,
    spaceComplexity: "O(1)",
    code: [
        {
            tag: "C++",
            value: [
                "for(int i=1;i<n;i++){",
                "   int key = array[i];",
                "   int j = i - 1;",
                "   while(j >= 0 && array[j] > key){",
                "       array[j + 1] = array[j];",
                "       j--;",
                "   }",
                "   array[j + 1] = key;",
                "}"
            ]
        }
    ]
}

export const mergeData = {
    description: "Merge Sort is a comparison-based sorting algorithm that uses divide and conquer paradigm to sort the given dataset. It divides the dataset into two halves, calls itself for these two halves, and then it merges the two sorted halves.",
    steps: [
        "First calculate the midpoint of the array.",
        "Then divide the whole array into equal halves using this midpoint.",
        "For both the subarrays, calculate the mid-point again.",
        "Further divide these two subarrays into further halves, until the atomic (single element) subarray is reached, and further division is not possible.",
        "Start combining the elements again using merge process",
        "In merge process, compare the element for each list and then combine them into another list in a sorted manner.",
    ],
    timeComplexity: "O(n * log(n))",
    spaceComplexity: "O(n)",
    code: [
        {
            tag: "C++",
            value: [
                "void merge(vector<int>& array, int left, int mid, int right){",
                "   int i = low;",
                "   int j = mid + 1",
                "",
                "   vector<int> temp;",
                "   while(i <= mid && j <= high){",
                "       if(array[i] <= array[j]){",
                "           temp.push_back(array[i]);",
                "           i++;",
                "       }else{",
                "           temp.push_back(array[j]);",
                "           j++;",
                "       }",
                "   }",
                "   while(i <= mid){",
                "       temp.push_back(array[i]);",
                "       i++;",
                "   }",
                "   while(j <= high){",
                "       temp.push_back(array[j]);",
                "       j++;",
                "   }",
                "",
                "   for(int i=0;i<temp.size();i++){",
                "       array[i + low] = temp[i];",
                "   }",
                "}",
                "",
                "void mergeSort(vector<int>& array, int low, int high){",
                "   if(low < high){",
                "       int mid = low + (high - low)/2;",
                "       mergeSort(array, low, mid);",
                "       mergeSort(array, mid + 1, high);",
                "       merge(array, low, mid, high);",
                "   }",
                "}"
            ]
        }
    ]
}

export const quickData = {
    description: `QuickSort is a comparison-based sorting algorithm that uses the divide-and-conquer approach to sort an array or list of elements. It can be implemented using two functions:
    partition(): It is the key process in the quicksort algorithm. It involves selecting a pivot element and rearranging the array so that all elements smaller than the pivot are placed to its left, and the elements greater than the pivot are placed to its right. The point where the pivot is placed is called the partitioning index and it is returned to its caller quickSort().
    quickSort(): It is the main recursive function that implements the divide-and-conquer strategy. It divides the given array into two subarrays based on the partitioning index returned by partition() function. Then it keeps calling itself for these two subarrays until the whole array is sorted.`,
    steps: [
        "Select a pivot element from the array (commonly the first element).",
        "Rearrange the array so elements smaller than the pivot are on its left, and elements larger are on its right. Place the pivot in its correct position.",
        "Recursively apply Quick Sort to the subarray of elements left of the pivot.",
        "Recursively apply Quick Sort to the subarray of elements right of the pivot.",
        "Combine the sorted left subarray, pivot, and sorted right subarray to form the final sorted array.",
    ],
    timeComplexity: "O(n * log(n))",
    spaceComplexity: "O(1)",
    code: [
        {
            tag: "C++",
            value: [
                "int partition(vector<int>& array, int low, int high){",
                "   int pivot = array[low];",
                "   int i = low;",
                "   int j = high",
                "",
                "   while(i < j){",
                "       while(i <= high - 1 && array[i] <= pivot){",
                "           i++;",
                "       }",
                "       while(j >= low + 1 && array[j] > pivot){",
                "           j--;",
                "       }",
                "       if(i < j){",
                "           swap(array[i], array[j]);",
                "       }",
                "   swap(array[j], array[low]);",
                "   return j;",
                "}",
                "",
                "void quickSort(vector<int>& array, int low, int high){",
                "   if(low < high){",
                "       int part = partition(array, low, high);",
                "       quickSort(array, low, part - 1);",
                "       quickSort(array, part + 1, high);",
                "   }",
                "}"
            ]
        }
    ]
}