# Que JS
![Testing](https://github.com/waxs/que/workflows/Testing/badge.svg)

Que pasa? Que JS is a small helper to create and read URI queries with Javascript. Que JS will handle strings, numbers, booleans and arrays and parse them on your command. You can mask your query using the mask option using a base-64 conversion. It's simple and quick to setup and helps gaining some extra control over query management. That said, how does it work in a nutshell?

```javascript
const query = new Que();

query.set({
    name: 'Sander', 
    age: 31,
    hobbies: ['music, development']
});
```
Your URL will now look something like this `?name="Sander"&age="31"&hobbies="music,development"`. Easy does it!

## Initiate Que JS
To use Que we initiate the class as follows, the class will have a default setup but can also be regulated with some configurable props. For instance preventing duplicate values within an array, masking the query using base-64 and parsing values. 
```javascript
const query = new Que({
    duplicate: false,
    mask: false,
    parse: true
});
```
Once Que is initiated you have some methods at your disposal to set, update or remove query data. Reading the data can be easily logged to your console using the `log()` method. A getter `query.data` will retrieve the information from the query. This data variable will be automatically updated once something changes. Just make sure to reevaluate once the data has been changed. 

🚧 Package is currently in beta.

#### Settings
| type      	| default 	| description                                                                                |
|-----------	|---------	|--------------------------------------------------------------------------------------------	|
| duplicate 	| `false` 	| Will make sure that once new values are set duplicates are ignored                         	|
| mask      	| `false` 	| Will set the query using base-64 encoding and masking it for the common man.       	|
| parse     	| `true`  	| Will parse the data to matching data types, if `false` all values will be of type `string` 	|
 
## Getting started
Que is as simple, pick a method to manipulate that query to your heart's content. Some examples can be found below showing off the usage of Que. 
 
**Handle Data** 
* `set()` set a new query to your URL
* `add()` add a key value pair to the  query of your URL
* `remove()` remove a specific value
* `refresh()` remove and recreate the query
* `get()` retrieve the data object
* `value()` retrieve a specific value based on key
* `parse()` parse an excising URL to an object
* `stringify()` parse an object to a query
  
## Examples
#### set(obj)
If (a valid) query was already initiated in the URL, the `set` method will extend upon the current query. The `set()` method will also replace any key that was already set, meaning it wont extend upon the given query. 
```javascript
query.set({
    name: 'Sander',
    age: 31,
    hobbies: ['music', 'development']
});
```
This query will result in the following query added to your URL: `?name="Sander"&age="31"&hobbies="music,development"`. Let's say that `?name="Sander"&age="25"` was already present in the URL before the `set()` method was called. This would replace the age and add hobbies as a key. 

👀 Using set will extend upon any excising queries in your URL.

#### add(obj)
Need to add a new value to an excising query, use the `add()` method, it will add the new value to an excising array, or replace the current value with an array and push the new value. Meaning if we already had Peter with an age of 42 present in the query, it will now look like this `?name="Peter"&city="Amsterdam"`. 
```javascript
query.add({
    city: 'Amsterdam'
});
```
The example above would result in the following URL `?name="Peter"&city="Amsterdam,Berlin"`.

👀 Add wil extend upon a available key or create the key if it's not present yet. 

#### remove(string | array | obj)
Remove a specific key from the query using the name of the key. If a key holds an array all values will be removed.
```javascript
query.remove('hobbies');
```
...or remove multiple keys at once using an array. This will completely remove hobbies and name from the query.
```javascript
query.remove(['hobbies', 'name']);
```
You can also remove specific values from an array list. in this case an array holding hobbies. The following call will remove a specific value from a key, in this case an array holding hobbies. 
```javascript
query.remove({
    hobbies: 'music'
});
```
👀 If you use and object as an argument the value should always match the value inside the data set (query) for a given key. Meaning if you want to remove a string value, it should match the exact value.

Based on the following query `name="Sander"&city="Deventer"&hobbies="music,development"` we could manipulate the content of the data set like so:

| type   	| usage                                               	| description                              	| output                                         	|
|--------	|-----------------------------------------------------	|------------------------------------------	|------------------------------------------------	|
| string 	| query.remove('name')             	| remove key `name` from query             	| `city="Deventer"&hobbies="music,development"` 	|
| array  	| query.remove(['name', 'city'])   	| remove keys `name` and `city` from query 	| `hobbies="music,development"`                 	|
| object 	| query.remove({ hobbies: 'music' }	| remove value `music` from `hobbies` key  	| `city="Deventer"&hobbies="music,development"` 	|

#### refresh(obj)
Using the `refresh()` method will reinstate the query and remove the present information by updating it with the newly added information. All the information in the URL will be replaced. This is especially handy if you want to initiate the query with a preset default configuration or need a simple way of rebuilding the query. 
```javascript
query.refresh({
    name: 'Sander',
    age: 31
});
```
This would result in `?name="Sander"&age="31"` each time the function is called. 

#### value(string)
If you need to retrieve a specific value from the data set use the `value()` method. It takes a string that will reflect the key name of the data set. If you need all the data to be returned use `this.data` or the `get()` method. 
```javascript
query.value('name');
```
👀 Bonus: You can create a similar effect using a getter `this.data.name`.

## Development
When to use Que JS? For instance if you need to store a filter setup that should be sharable over the web, initiating the query makes sure that data can be easily retrieved once the visitor returns to the page. If you need to restore some information from a shared URL. The are numerous situations where Que JS can be helpful. Let's get creative.
    
### Mocks
This repository holds multiple examples of using Que JS with a simple `index.html` that will visualise the results in the console. Starting with Que JS can be easily done using these examples to get a better understanding of  implementing it within your own project. 

### 🚧 Testing
Que methods can be tested using Jest, running the `npm run test` command will execute a number of test to make sure basic functionality is working as expected. Test scripts can be found in the `test` folder.  

### Roadmap
- [ ] Optimize codebase
- [ ] Refactor
- [ ] 100% testing coverage

## About
This repository is mainly intended as an experiment and to have some fun, a folder with examples is available within this repo showing multiple examples as documented above. Check out my [personal website](http://sanderhidding.nl) for more information. That's all folks! Cheers. 