/**
 * https://www.lintcode.com/en/old/problem/meeting-rooms-ii/
 * Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
 * minMeetingRooms
 *
 *
 * [(0,30),(5,10),(15,20)]
 *  0-5-10-15-20-25-30
 *  0---------------30 (1 room)
 *    5-10             (2 rooms)|
 *         15-20                |
 * Steps:
 * - Set the meeting room minimum to the difference of the min and max of all the rooms.
 * - Count the overlapping intervals, increment the count at start and decrement the count at ending overlap time
 * - Get the max that the count was up to
 *  start =  [0,5,15]
 *
 *  end =   [10,20,30]
 * is 0 < 5
 *
 * Big O
 *    - Time O(n * logn) n is the length of input
 *    - Space O(n)
 */
const minMeetingRooms = (intervals) => {
  let start = [];
  let end = [];
  let i = 0;
  let j = 0;
  let count = 0;
  let res = 0;

  for (const int of intervals) {
    start.push(int[0]);
    end.push(int[1]);
  }

  start.sort((a, b) => a - b);
  end.sort((a, b) => a - b);

  while (i < intervals.length) {
    if (start[i] < end[j]) {
      i++;
      count += 1;
    } else {
      j++;
      count -= 1;
    }
    res = Math.max(res, count);
  }
  return res;
};

const intervals = [
  [0, 30],
  [5, 10],
  [15, 20],
];
console.log(minMeetingRooms(intervals));
