/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 * https://leetcode.com/problems/course-schedule-ii/
 */
 var findOrder = function(numCourses, prerequisites) {
    const result = [];
    
    let adj = {};
    
    // Create adjacency list
    if(numCourses > 0){
        for(let i = 0; i < numCourses; i++){
            if(prerequisites[i] && prerequisites.length > 0){
                const [secondCourse, firstCourse] = prerequisites[i];
                if(firstCourse in adj){
                    adj[firstCourse].push(secondCourse);
                } else {
                    adj[firstCourse] = [secondCourse];
                }
            } else {
                adj[i - 1] = [i];
            } 
        }
    }
    console.log(adj)
    // traverse list
    const dfs = (curr) => {
        
        let visited = adj[curr];
        while(visited?.length > 0){  
            dfs(visited.shift());
        }
        if(!result.includes(curr)){
            result.unshift(curr)
        }
    }
 if( prerequisites.length <= 1 ){
     dfs(0)
 } else {
    dfs(prerequisites[0][1])
 }
    return result
};
/*
Approach: 
 - 0 > numCourses.length - 1
 - prerequisites[i] = [ai, bi] must course a before course b
 - Return list of courses in order needed to finish all courses if none return empty []
 - Create an adjacency list and create a new list that represents the traversal 
[1,0],[2,0],[3,1],[3,2]

 { 
     '0': [ 1, 2 ], 
     '1': [ 3 ], 
     '2': [ 3 ], 
     '3': [2]
 }
 
 0

*/