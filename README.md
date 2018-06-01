# GraphQL-JSONplaceholder
Inspired by [jsonplaceholder](https://github.com/typicode/jsonplaceholder) from typicode.

## Getting Started 
The API is available on [Now](https://jsonplaceholder-graphql-jcnfbipxsf.now.sh/). 

for now you can queries users and todos 
```javascript
// example of user query
{
  users {
   name
   posts(title: "lib") {
    body
    comments {
     title
    }
   }
   albums {
    photos {
     url
    }
   }
  }
}
```

more to come. 

## Todo 
- [ ] comments
- [ ] photos
- [ ] albums
- [ ] posts
- [ ] mutations
- [ ] Subscriptions ?


made with :hearts: 
