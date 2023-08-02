//Using Promise
console.log('person1 shows ticket');
console.log('person2 shows ticket');
const promiseWifeBringingTicks= new Promise((resolve,reject)=>{
    setTimeout(()=> {
        resolve('ticket');
    },3000)
});
const getPopcorn=promiseWifeBringingTicks.then((t)=>{
    console.log(`wife: i have the tics`);
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "i am hungry"`)
    return new Promise((resolve, reject)=> resolve(`${t} popcorn`));
});
 const getButter=getPopcorn.then((t)=>{
    console.log(`Husband: i got some popcorn`); 
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I need butter on my popcorn!"`);
    return new Promise((resolve, reject)=> resolve(`${t} butter`));
});
const getColdDrinks= getButter.then((t)=>{ 
    console.log(`Husband:we should go in now`);
    console.log(`Wife: "I need Colddrink yep!"`);
    return new Promise((resolve, reject)=> resolve(`${t} colddrinks`));
})
getColdDrinks.then((t)=> console.log(t));  

console.log('person4 shows ticket');
console.log('person5 shows ticket');



//Using Async and Await
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const addButter =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('butter'), 3000);
  });
  const getColdDrinks =  new Promise((resolve, reject) => {
    setTimeout(() => resolve('colddrinks'), 3000);
});
//await waits until a promise resolves before moving on with code execution
  let ticket = await person3PromiseToShowTicketWhenWifeArrives;

  console.log(`got the ${ticket}`);
  console.log(`Husband:we should go in now`);
  console.log(`Wife: "i am hungry"`);
  
  let popcorn = await getPopcorn;
  console.log(`Husband: here is ${popcorn}`);
	console.log(`Husband:we should go in now`);
  console.log(`Wife: "I dont like popcorn without butter!"`);
  
  let butter = await addButter;
  console.log(`added ${butter}`);
   
  console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preivew`);
  console.log(`Husband: thanks for the reminder *grin*`);
  console.log(`wife: One colddrink please`);
  let drink= await getColdDrinks;

  console.log(`I got ${drink}`);
  
  return ticket;
  
};

preMovie().then((t) => console.log(`person3 shows ${t}`));

console.log('person4 shows ticket');

// Promises.all
console.log('person1 shows ticket');
console.log('person2 shows ticket');

const preMovie = async () => {

  const person3PromiseToShowTicketWhenWifeArrives = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
  });
  const getPopcorn =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('popcorn'), 3000);
  });
  
  const getCandy =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('candy'), 3000);
  });
  
   const getCoke =  new Promise((resolve, reject) => {
		setTimeout(() => resolve('coke'), 3000);
  });

  let ticket = await person3PromiseToShowTicketWhenWifeArrives;
  
    let [ popcorn, candy, coke ] =
    await Promise.all([ getPopcorn, getCandy, getCoke  ]);

    console.log(`got ${popcorn}, ${candy}, ${coke}`);

  
  return ticket;
  
};

preMovie().then((t) => console.log(`person4 shows ${t}`));

console.log('person4 shows ticket');
//Convert the createPost , deletePost you wrote previously into async await completely.
let userPosts = [];

// creating a post
function createPost(post) {
  return new Promise((resolve) => {
    setTimeout(() => {
      userPosts.push(post);
      resolve();
    }, 1000);
  });
}

// updating last user activity time
function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const currentTimeStamp = new Date().getTime();
      resolve(currentTimeStamp);
    }, 1000);
  });
}

// deleting the last post
function deleteLastPost() {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (userPosts.length > 0) {
        userPosts.pop();
      }
      resolve();
    }, 1000);
  });
}

async function main() {
  // Create a post and update last user activity time
  await Promise.all([createPost("Post 1"), updateLastUserActivityTime()]);
  const lastActivityTime = await updateLastUserActivityTime();

  // Log all posts and last activity time
  console.log("All Posts:", userPosts);
  console.log("Last Activity Time:", new Date(lastActivityTime).toLocaleString());

  // Delete the last post
  await deleteLastPost();

  // Log the new set of posts
  console.log("New Posts after deletion:", userPosts);
}

// Call the main function
main().catch((error) => {
  console.error("Error:", error);
});
