import { linkedList } from "./linkedlist.js";
//------- HASHMAP ------//

function HashMap() {
  let capacity = 16;
  let loadfactor = .75;
  const buckets = []
  let keyLength = 0;
  resize();
  buckets.length = capacity;
  function hash(key) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % capacity;
    }

    return hashCode;
  }
  function resize(){
    for (let i = 0; i < capacity; i++) {
      buckets.push(linkedList());
    }
  }
  function set(key, value) {
    
    const hashCode = hash(key);
    const pair = { key, value };
    const loc = buckets[hashCode].find(key);
    if (loc === false) {
      keyLength++;
      buckets[hashCode].append(pair);
    }
    else buckets[hashCode].at(loc).data.value = value;

  }
  function outOfBounds(index) {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
  function entries() {
    for (let i = 0; i < capacity; i++) {
      if(buckets[i].size()>0){
        console.log(buckets[i].toString())
      }
    }
  }
  function keys() {
    for (let i = 0; i < capacity; i++) {
      if(buckets[i].size()>0){
        const ar = buckets[i].toString();
        ar.forEach(element => {
          console.log(element[0])
        });
      }
    }
  }
  function values() {
    for (let i = 0; i < capacity; i++) {
      if(buckets[i].size()>0){
        const ar = buckets[i].toString();
        ar.forEach(element => {
          console.log(element[1])
        });
      }
    }
  }
  function get(key) {
    const loc = buckets[hash(key)].find(key);
    if (!loc) return buckets[hash(key)].at(loc).data.value;
    else return null;
    
  }
  function has(key){
    const loc = buckets[hash(key)].contains(key);
    return loc;
  }
  function remove(key){
    
    const loc = buckets[hash(key)].find(key);
    if (!loc){
      keyLength--;
      buckets[hash(key)].removeAt(loc);
    }
    else return false;
  }
  function length(){
    return keyLength;
  }
  function clear(){
    buckets.splice(0,capacity);
    resize();
  }
  return { set, entries,get,has,remove, length,resize,clear,keys,values}
}

const bill = HashMap();
bill.set("bob", "dsax");
bill.set("bob", "ascv3");
bill.set("jack", "axd");
bill.set("jill", "ghf");
bill.set("tim", "6ugh");
bill.set("jam", "bhj");
bill.set("bob", "llll");
bill.keys();
bill.clear();
bill.values();
