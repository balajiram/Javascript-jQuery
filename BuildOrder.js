/**
 * BuildOrder : build order of projects with dependencies
 **/

function buildOrder(projects, dependencies){

	var graph = {};
	
  for(let project of projects){
	  graph[project] = [];
	}
	
	for(let dependent of dependencies){
	  graph[dependent[1]].push(dependent[0]);
	}

	var buildOrder = [];
	var builtLength = 0;
	
	while(buildOrder.length !== projects.length){
	  
	  for(var project in graph){
		  var dependencies = graph[project];
		  if(dependencies.length == 0){
			buildOrder.push(project);
			delete graph[project];
			removeDependent(graph, project);
		  }
	  }
	  //no change in build order after visiting all projects in graph, than cyclic
	  if(builtLength === buildOrder.length){
	   return false;
	  }
	  else{
	   builtLength = buildOrder.length;
	  }
	}
	
	return buildOrder;
}





function removeDependent(graph, dependent){
 for(var project in graph){
   var dependencies = graph[project];
   if(dependencies.length > 0){
     var position = dependencies.indexOf(dependent);
	 if(position !== -1){
	  dependencies.splice(position,1);
	  graph[project] = dependencies;
	 }
   }
 }
}

//sample
var projects = [a,b,c,d,e,f];
var dependencies = [ [a,d], [f,b], [b,d], [f,a], [d,c] ];
buildOrder(projects, dependencies);

