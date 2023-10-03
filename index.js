function myEach(collection, callback){
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            callback(collection[i]);
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
            callback(collection[key]);
    }
}
return collection;
}
function myMap(collection, callback){
const arr = []

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            arr.push(callback(collection[i]));
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
            arr.push(callback(collection[key]))
    }}
return arr;
}
function myFind(collection, predicate){


    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                return collection[i];
        }
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
        if (predicate(collection[key])){
            return collection[key]
        }
    }
}
return undefined;}

function myFilter(collection, predicate){
const arr = [];

    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
                arr.push(collection[i]);
        }
            
        }
    }else if (typeof collection === 'object') {
        for (let key in collection) {
        if (predicate(collection[key])){
            arr.push(collection[key])
        }
    }
}
return arr;}

function mySize(collection){
    if (Array.isArray(collection)) {
    return collection.length    
        
    }else if (typeof collection === 'object') {
        
return Object.keys(collection).length
}
    
}   

function myFirst(array, n) {
    if (n === undefined) {
    return array[0];
    } else {
    return array.slice(0, n);
    }
}

function myLast(array, n) {
    if (n === undefined) {
    return array[array.length - 1]
    } else {
    return array.slice(array.length - n);
    }
}


function myKeys(object){  return Object.keys(object)}   
function myValues(object){ return Object.values(object)}   
function myReduce(collection, callback, acc) {
    let index = 0;

    if (acc === undefined) {
    acc = collection[Object.keys(collection)[0]];
    index = 1;
    }

    if (Array.isArray(collection)) {
    for (let i = index; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection);
    }
    } else if (typeof collection === 'object') {
    const keys = Object.keys(collection);
    for (let i = index; i < keys.length; i++) {
        acc = callback(acc, collection[keys[i]], collection);
    }
    }

    return acc;
}