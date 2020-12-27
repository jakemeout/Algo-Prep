//https://leetcode.com/problems/accounts-merge/

/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
        let result = [];
        let graph = {};
        let nameDict = {};
    
        for (let account of accounts) {
            const [name, firstEmail, ...emails] = account;
            nameDict[firstEmail] = name;
            if (!graph[firstEmail]) {
                graph[firstEmail] = new Set();
            }
            for (let email of emails) {
                if (!graph[email]) {
                    graph[email] = new Set();
                }
                nameDict[email] = name;
                graph[firstEmail].add(email);
                graph[email].add(firstEmail);
            }
        }
        
        /* graph
        {
          'johnsmith@mail.com': Set(2) { 'john_newyork@mail.com', 'john00@mail.com' },
          'john_newyork@mail.com': Set(1) { 'johnsmith@mail.com' },
          'john00@mail.com': Set(1) { 'johnsmith@mail.com' },
          'mary@mail.com': Set(0) {},
          'johnnybravo@mail.com': Set(0) {}
        }
        */
        /* nameDict 
        {
          'johnsmith@mail.com': 'John',
          'john_newyork@mail.com': 'John',
          'john00@mail.com': 'John',
          'mary@mail.com': 'Mary',
          'johnnybravo@mail.com': 'John'
        }
        */
    
        let visited = new Set();
        let dfs = (key) => {
            visited.add(key);
            let emails = [key];
            graph[key].forEach((e)=>{
                if (!visited.has(e)) {
                    emails.push(...dfs(e));
                }
            })
            return emails;
        }
        
        for (let key in graph) {
            if (!visited.has(key)) {
                let temp = dfs(key);
                temp.sort();
                temp.unshift(nameDict[temp[0]]);
                result.push(temp);
            }
        }
       
        return result;
    };

  let accounts = [["John","johnsmith@mail.com","john_newyork@mail.com"],["John","johnsmith@mail.com","john00@mail.com"],["Mary","mary@mail.com"],["John","johnnybravo@mail.com"]]
  accountsMerge(accounts)
  
  