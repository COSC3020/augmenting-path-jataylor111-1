function augmentingPath(graph, start, end) {
    // Empty Graph
    if(graph.length == 0) {
        return [];
    }

    // Make lists for the start of the path, and the visited nodes
    let verts = [[start]];
    let visited = new Set();

    while(verts.length > 0) { // Verts is based on the nodes, worst case all nodes, complexity V
        // console.log("Loop Start")
        let path = verts.shift();
        let node = path[path.length - 1];

        // Skip iteration if node is in the visited array
        if(visited.has(node)) {
            continue;
        }

        visited.add(node);

        // Return if we've reached the end
        if (node === end) {
            return path;
        }

        // Check paths 
        for (let node2 in graph[node]) { // Based on the edges, Complexity E
            // console.log("For Loop Start")
            if(!visited.has(node2)) {
                let path2 = path.slice();
                path2.push(node2);
                verts.push(path2);
            }
        }
        
    }


    return [];
}


// var graph = {'foo': {'boo': 7},
//              'boo': {'foo': 3, 'bar': 2},
//              'bar': {'boo': 4}};
// console.log(augmentingPath(graph, 'foo', 'bar')); // should be ['foo', 'boo', 'bar']
