# Blind75 software interview questions

[post]: https://www.techinterviewhandbook.org/coding-interview-study-plan/
[leetcode]: https://leetcode.com/list/9pg1ipdh/

These are problems from [the famous post][post] and [in leetcode][leetcode]

## 1. Two Sum

Given an array of integers <code>nums</code> and an integer `target`,
return indices of the two numbers such that they add up to
<code>target</code>. You may assume that each input would have exactly one
solution, and you may not use the same element twice.

You can return the answer in any order.

Follow-up: Can you come up with an algorithm that is less than
<code>O(n<sup>2</sup>)</code> time complexity?

## 2. Longest Substring Without Repeating Characters

## 3. Longest Palindromic Substring

## 4. Container With Most Water

You are given an integer array <code>height</code> of length n. There are `n`
vertical lines drawn such that the two endpoints of the
<code>i<sup>th</sup></code> line are <code>(i,0)</code> and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that
the container contains the most water.

Return _the maximum amount of water a container can store_.

**Notice** that you may not slant the container.

## 5. 3Sum

Given an integer array nums, return all triplets
<code>[nums[i], nums[j], nums[k]]</code> such that <code>i !=j, i!=k</code>
and <code>j!=k</code>, and <code>nums[i] + nums[j] + nums[k] == 0</code>.

**Notice** that the solution set must not contain duplicate triplets.

## 6. Remove Nth Node from end of list

Given the <code>head</code> of a linked list, remove the `n<sup>th</sup>`
node from the end of the list and return its head.

## 7. Valid parentheses

Given a string <code>s</code> containig just the characters
<code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>,
<code>'['</code>, and <code>']'</code>, determine if the input string is
valid.

An input string is valid if:

- Open brackets must be closed by the same type of brackets.
- Open brackets must be closed in the correct order.
- Every close bracket has a corresponding open bracket of the same type.

## 8. Merge two sorted lists

You are given the heads of two sorted linked lists <code>list1</code> and
<code>list2</code>.

Merge the two lists in a **one sorted list**. The list should be made by
splicing together the nodes of the first two lists.

Return _the head of the merged linked list_.

## 9. Merge k sorted lists

You are given an array of <code>k</code> linked-lists <code>lists</code>,
each linked-list is sorted in ascending order.

_Merge all the linked-lists into \*\*one sorted_ linked-list and return it\*.

## 10. Search in rotated sorted array

There is an integer array <code>nums</code> sorted in ascending order (with
**distinct** values).

Prior to being passed to your function, <code>nums</code> is **possibly
rotated** at an unknown pivot index <code>k</code>
(<code>1 <= k < nums.length</code>) such that the resulting array is
<code>[nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]]
</code> (**0-indexed**). For example,<code>[0,1,2,4,5,6,7]</code>might be
rotated at pivot index <code>3</code> and become <code>[4,5,6,7,0,1,2]</code>.

Given the array <code>nums</code> after the possible rotation and an integer
<code>target</code>, return the _index_ of <code>target</code> if it is in
<code>nums</code>, or <code>-1</code> if it is not in <code>nums</code>.

You must write an algorithm with <code>O(log n)</code> runtime complexity.

- <code>1 <= nums.length <= 5000</code>
- <code>-10^4 <= target <= 10^4</code>
- All values of <code>nums</code> are **unique**.
- <code>nums</code> is an ascending array that is **possibly** rotated.
- <code>-10^4 <= target <= 10^4</code>

## 11. Combination sum

Given an array of **distinct** integers <code>candidates</code> and a target
integer <code>target</code>, return a list of all **unique combinations** of
<code>candidates</code> where the _chosen numbers sum to_ <code>target</code>.
You may return the combinations in **any order**.

The **same** number may be chosen from <code>candidates</code> an **unlimited
number of times**. Two combinations are unique if the frequency of at least one
of the chosen numbers is different.

The test cases are generated such that the number of unique combinations that
sum up to <code>target</code> is less than `150` combinations for the given
input.

- <code>1 <= candidates.length <= 30</code>
- <code>2 <= candidates[i] <= 40</code>
- All elements of candidates are **distinct**.
- <code>1 <= target <= 40</code>

## 12. Rotate Image

You are given an <code>n x n</code> 2D `matrix` representing an image, rotate
the image by **90** degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the
input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the
rotation.

- <code>n == matrix.length == matrix[i].length</code>
- <code>1 <= n <= 20</code>
- <code>-1000 <= matrix[i][j] <= 1000</code><!-- markdownlint-disable MD052 -->
