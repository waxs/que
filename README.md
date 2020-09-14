# Que JS
![test](https://github.com/waxs/que/workflows/test/badge.svg?branch=master)

Que pasa? Que JS is a small helper to create and read URI queries with Javascript. Que JS will handle 
strings, numbers and arrays and parse them on your command. You can mask your query using the mask option using a 
base-64 conversion. It's simple and quick to setup and helps gaining control over data to be stored within the URL of
 your web page. So how does it work?

```javascript
const query = new Que();

query.set({
    name: 'Sander', 
    age: 31,
    hobbies: ['music, development']
});
```
Your URL will now look something like this `?name="Sander"&age="31"&hobbies="music,development"`.

## Initiate Que JS
To use Que we initiate the class as follows, the class will have a default setup but can also be regulated 
with some configurable props. For instance preventing duplicate values within an array, masking the query using 
base-64 or disabling parsing. 
```javascript
const query = new Que({
    duplicate: false,
    mask: false,
    parse: true
});
```
Once Que is initiated you have some methods at your disposal to set, update or remove query data. Reading the data 
can be easily logged to your console using the `log()` method. A getter `query.data` will retrieve the information 
from the query. This data variable will be automatically updated once something changes. Just make sure to reevaluate
once the data has been changed. 
 
## Getting started
Que has been build taking intuitive use in account. There are multiple helpers to help you sort, retrieve or 
manipulate an array of contents. Let's dive a little deeper into the options you can use with Needle. 
 
**Handle Data** 
* `set()` set a new query to your URI
* `add()` add a query to your URI
* `remove()` remove a specific value
* `refresh()` remove and recreate the query
* `get()` retrieve the data object
* `value()` retrieve a specific value based on key
  
* **set(obj)** { object } - new values to be set
If (a valid) query was already initiated in the URL, the `set` method will extend upon the current 
query. The `set()` method will also replace any key that was already set, meaning it wont extend upon the given query. 
```javascript
query.set({
    name: 'Sander',
    age: 31,
    hobbies: ['music', 'development']
});
```
This query will result in the following query added to your URL: `?name="Sander"&age="31"&hobbies="music,
development"`. Let's say that `?name="Sander"&age="25"` was already present in the URL before the `set()` method was 
called. This would replace the age and add hobbies as a key. 

* **add(obj)** { object } - new values to be added
Need to add a new value to an excising query, use the `add()` method, it will add the new value to an excising array,
 or replace the current value with an array and push the new value. Meaning if we already had Peter with an age of 42
  present in the query, it will now look like this `?name="Peter"&age="42"&city="Amsterdam"`. 
```javascript
query.add({
    city: 'Berlin'
});
```
This would result in the following URL `?name="Peter"&age="42"&city="Amsterdam,Berlin"`.

* **remove(string)**
Remove a specific key from the dataset or multiple keys at once using either a string value or an array of values. 
You can also remove specific values from an array list. The following call will remove a specific value from a key, 
in this case an array holding hobbies. 
```javascript
query.set({
    hobbies: 'music'
});
```

* **refresh(obj)**
Using the `refresh()` method will reinstate the query and remove the present information by updating it with 
the newly added information. All the information in the URL will be replaced. 
```javascript
query.set({
    name: 'Sander',
    age: 31
});
```
This would result in `?name="Sander"&age="25"` everytime the function is called. 

* **value(string)**
If you need to retrieve a specific value from the data set use the `value()` method. It takes a string that will 
reflect the key name of the data set. If you need all the data to be returned use `this.data` or the `get()` method. 
```javascript
query.value('name');
```
You can create a similar effect using a getter `this.data.name`.

## Development
When to use Que JS? If you need to store a filter setup that should be sharable over the web, initiating the query 
makes sure that data can be easily retrieved once the visitor returns to the page. If you need to save some simple 
configuration that was set on the page. The are numerous situations where Que JS can be helpful. 
    
### Examples
This repository holds multiple examples of using Que JS with a simple `index.html` that will visualise the results in
 the console. Starting with Que JS can be easily done using these examples to get a better understanding of 
 implementing it within your own project. 

### Testing
Que methods can be tested using Jest, running the `npm run test` command will execute a number of test to make 
sure basic functionality is working as expected. Test scripts can be found in the `test` folder.  

### Roadmap
- [ ] Optimize codebase
- [ ] Refactor
- [ ] 100% testing coverage

## About
This repository is mainly intended as an experiment and to have some fun, a folder with examples is available within 
this repo showing multiple examples as documented above. Check out my [personal website](http://sanderhidding.nl) for 
more information. That's all folks! Cheers. 