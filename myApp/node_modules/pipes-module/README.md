pipes-module
=====
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Pipes list](#list)
5. [Git repository](#git)
6. [Build](#build)
7. [Publish to npm](#publish)
8. [Version](#version)

### <a name="description"></a>1. Description
angular2+ module which exposes a list of pipes. 
  
  
### <a name="installation"></a>2. Installation
Install the module into your application and save it as a 
dependency in your `package.json` file  
```
npm install pipes-module --save
```
  
  
### <a name="usage"></a>3. Usage
```typescript
import { PipesModule } from 'pipes-module';

@NgModule({
  //...
  imports: [
	//...
	PipesModule // <<--- HERE
  ],
  //...
})
```
  
..and use the pipes in your application.
  
  
### <a name="list"></a>4. Pipes list
- [trust-html-pipe](https://github.com/tvicpe/trust-html-pipe)  
- [nl2br-pipe](https://github.com/tvicpe/nl2br-pipe)
  
### <a name="git"></a>5. Git repository
[https://github.com/tvicpe/pipes-module](https://github.com/tvicpe/pipes-module)
  
### <a name="build"></a>6. Build
To build the final package run this command:
```
ng build pipes
```
The build process will generate the packed sources into the `dist` folder.  

### <a name="publish"></a>7. Publish to npm
To publish the new version to `npm`, go into the `dist` folder:
```
cd ./dist/pipes
```
and publish it to npm:
```
npm publish
```

### <a name="version"></a>8. Version
1.0.1
