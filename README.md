# Blind75 software interview questions

1. Two Sum
2. Longest Substring Without Repeating Characters
3. Longest Palindromic Substring
4. Container With Most Water
    You are given an integer array `height` of length n. There are `n`
    vertical lines drawn such that the two endpoints of the `i<sup>ith</sup>`
    line are `(i,0)` and `(i, height[i])`.

    Find two lines that together with the x-axis form a container, such that
    the container contains the most water.

    Return *the maximum amount of water a container can store*.

    **Notice** that you may not slant the container.
5. 3Sum
    Given an integer array nums, return all triplets `[nums[i], nums[j],
    nums[k]]` such that `i !=j, i!=k` and `j !=k`, and `nums[i] + nums[j] +
    nums[k] == 0`.

    **Notice** that the solution set must not contain duplicate triplets.
6. Remove Nth Node from end of list
    Given the `head` of a linked list, remove the `n<super>th</super>` node
    from the end of the list and return its head.
7. Valid parentheses
    Given a string `s` containig just the characters `'('`, `')'`, `'{'`,
    `'}'`, `'['`, and `']'`, determine if the input string is valid.

    An input string is valid if:

    Open brackets must be closed by the same type of brackets.

    Open brackets must be closed in the correct order.

    Every close bracket has a corresponding open bracket of the same type.
8. Merge two sorted lists

    You are given the heads of two sorted linked lists `list1` and `list2`.

    Merge the two lists in a **one sorted list**. The list should be made by
    splicing together the nodes of the first two lists.

    Return *the head of the merged linked list*.
9. Merge k sorted lists
    You are given an array of `k` linked-lists `lists`, each linked-list is
    sorted in ascending order.

    *Merge all the linked-lists into **one sorted* linked-list and return it*.
10. There is an integer array `nums` sorted in ascending order (with
    **distinct** values).

    Prior to being passed to your function, `nums` is **possibly rotated** at
    an unknown pivot index `k` (`1 <= k < nums.length`) such that the resulting
    array is `[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ...,
    nums[k-1]]` (**0-indexed**). For example, `[0,1,2,4,5,6,7]` might be
    rotated at pivot index `3` and become `[4,5,6,7,0,1,2]`.

    Given the array `nums` after the possible rotation and an integer `target`,
    return the *index* of `target` if it is in `nums`, or `-1` if it is not in
    `nums`.

    You must write an algorithm with `O(log n)` runtime complexity.

    - `1 <= nums.length <= 5000`
    - `-10^4 <= target <= 10^4`
    - All values of `nums` are **unique**.
    - `nums` is an ascending array that is **possibly** rotated.
    - `-10^4 <= target <= 10^4`
11. Given an array of **distinct** integers `candidates` and a target integer
    `target`, return a list of all **unique combinations** of `candidates`
    where the *chosen numbers sum to* `target`. You may return the combinations
    in **any order**.

    The **same** number may be chosen from `candidates` an **unlimited number
    of times**. Two combinations are unique if the frequency  of at least one
    of the chosen numbers is different.

    The test cases are generated such that the number of unique combinations
    that sum up to `target` is less than `150` combinations for the given input.

    - `1 <= candidates.length <= 30`
    - `2 <= candidates[i] <= 40`
    - All elements of candidates are **distinct**.
    - `1 <= target <= 40`
