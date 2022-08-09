# angular-practice
## Rabbit Holes
1. `Property '...' has no initializer and is not definitely assigned in the constructor`
This error occurs because Angular has strict proprty initialization turned on. To change this strict initialization, go to `tsconfig.json` and add `"strictPropertyInitialization": false`

Alternatively, for the given property, you can initialize it by using `!` ie `id!:number` This is not the best approach since it may not always work in edge cases.

