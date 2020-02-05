- [ ] Explain what a token is used for.

        a token is used to un-encrypt the data that the server is holding,
        a token is like a key, it is a string of characters that the server
        check to see if a user should be able to see content on the screen 
        or in the database 

- [ ] What steps can you take in your web apps to keep your data secure?

        encript sensitive data, dont put a token in the main app or docs
        make the token dynamic 

- [ ] Describe how web servers work.

    web servers are used to hold data used in web application, 
    also they can pass and post data to web apps

- [ ] Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.

    C   create

        axios.post can be used to create data on the server

    R   read

        axios.get is used to read data off the server

    U  update

        axios.put is used to update data on the server

    D   delete

        axios.delete is used to delete data off the server
