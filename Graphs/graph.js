const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

const routes = [
  ["PHX", "LAX"],
  ["PHX", "JFK"],
  ["JFK", "OKC"],
  ["JFK", "LOS"],
  ["MEX", "LAX"],
  ["MEX", "BKK"],
  ["MEX", "LIM"],
  ["MEX", "EZE"],
  ["LIM", "BKK"],
];

// create the adjacency list graph
const adjacencyList = new Map();

const addNode = (airport) => {
  adjacencyList.set(airport, []);
};

const addEdge = (origin, destination) => {
  adjacencyList.get(origin).push(destination);
  adjacencyList.get(destination).push(origin);
};

airports.forEach((airport) => addNode(airport));
routes.forEach((route) => addEdge(...route));

// Breadth First Search ( find the airport the interviewer asks) finding all possible routes

// Map(11) {
//   'PHX' => [ 'LAX', 'JFK' ],
//   'BKK' => [ 'MEX', 'LIM' ],
//   'OKC' => [ 'JFK' ],
//   'JFK' => [ 'PHX', 'OKC', 'LOS' ],
//   'LAX' => [ 'PHX', 'MEX' ],
//   'MEX' => [ 'LAX', 'BKK', 'LIM', 'EZE' ],
//   'EZE' => [ 'MEX' ],
//   'HEL' => [],
//   'LOS' => [ 'JFK' ],
//   'LAP' => [],
//   'LIM' => [ 'MEX', 'BKK' ]
// }

const bfs = (start) => {
  const queue = [start];
  const visited = new Set();
  while (queue.length > 0) {
    // remove the first item in it and mutate the queue
    const airport = queue.shift();
    const destinations = adjacencyList.get(airport);

    for (const destination of destinations) {
      if (destination === "BKK") {
        console.log(`found it ${destination}`);
      }
      if (!visited.has(destination)) {
        visited.add(destination);
        queue.push(destination);
        console.log(destination);
      }
    }
  }
};

bfs("PHX");

// O(V+E) Time complexity
const dfs = (start, visited = new Set()) => {
  console.log(start);

  visited.add(start);

  const destinations = adjacencyList.get(start);

  for (const destination of destinations) {
    if (destination === "BKK") {
      console.log("DFS FOUND IN STEPS");
      return;
    }
    if (!visited.has(destination)) {
      dfs(destination, visited);
    }
  }
};

dfs("PHX")


// create a unique array of airports
airports = new Set()
for(const routes of tickets){
    let origin = routes[0]
    let destination = routes[1]
    airports.add(origin)
    airports.add(destination)
}
airports = [...airports]

// Create adjacencyList
adjacencyList = new Map();

const addNode = (airport) => {
    adjacencyList.set(airport, []);
};

const addEdge = (origin, destination) => {
    adjacencyList.get(origin).push(destination);
    adjacencyList.get(destination).push(origin);
};

    airports.forEach((airport) => addNode(airport));
    tickets.forEach((route) => addEdge(...route)); 

const dfs = (start, visited = new Set()) => {
    return [start]
    visited.add(start);
    const destinations = adjacencyList.get(start);
   
    for (const destination of destinations) {
        if (!visited.has(destination)) {
          dfs(destination, visited);
        
        }
    }
 
}

return dfs("JFK")

