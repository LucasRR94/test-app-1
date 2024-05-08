// Create example nodes
CREATE (:Person {name: 'Alice', age: 30});
CREATE (:Person {name: 'Bob', age: 25});

// Create relationships
MATCH (alice:Person {name: 'Alice'}), (bob:Person {name: 'Bob'})
CREATE (alice)-[:FRIENDS]->(bob);

// creation of a node Step
CREATE (s:Step { 
	id: 'step-1', 
	title: 'O primeiro passo', 
	content: 'O conteúdo do primeiro passo' 
})
// Creation of a trail
CREATE (t:Trail {
	id: 'trail-1',
	title: 'A primeira trilha'
})  
// creation of a theme
CREATE (tm:Theme {
	id: 'theme-1',
	title: 'O primeiro tema'
})
// creation of a theme
CREATE (a:Academy {
	id: 'academy-1',
	title: 'A primeira academia'
})