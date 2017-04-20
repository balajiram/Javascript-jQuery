function getPath(maze){
  var row = maze.length-1;
  var col= (maze[0]).length-1;
  var path = [];
  var failurePath ={}
  if(isPathExists(maze,row,col,path,failurePath)){
    return path;
  }
  return null;
}


function isPathExists(maze, row, col, path,failurePath){
   if(row<0 || col <0 || !maze[row][col]){
    return false;
   }
   
  var isAtOrgin = row === 0 && col === 0;
  if(failurePath[row+''+col]){
    return false;
  }
  else if(isAtOrgin || isPathExists(maze,row-1,col,path, failurePath) || isPathExists(maze,row,col-1,path,failurePath)){
     path.push([row,col]);
   return true;
  }
  failurePath[row+''+col] = true;
  return false;
}
