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


//creating the relations in a db, is a way to describe the relation between nodes


// a trail have steps

//query for knowing if the relation already exist

// creating a relation
CREATED(ciencia_computacao:TRAIL{id:`{specificTrail}`}) - [:HAVE] -> (p1:STEP {id: `${specificStep}`}); 

// a theme have tracks
CREATED(computacao:THEME{id:`specificTheme`}) - [:HAVE] -> (ciencia_computacao:TRAIL{id: `${specificTrail}`});

//an academy have themes
CREATED(comp_academy:ACADEMY{id:`specificAcademy`}) - [:HAVE] -> (ciencia_computacao:THEME{id: `${specificTheme}`});

