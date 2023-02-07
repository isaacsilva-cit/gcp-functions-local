1. Instale o functions framework:

    ```sh
    npm install @google-cloud/functions-framework
    ```

1. Copie e cole a function que deseja testar local dentro do functions.http

1. instale as dependencias necessarias

1. Use `npm start` para inciar o servidor:

    ```sh
    npm start
    ...
    Serving function...
    Function: helloWorld
    URL: http://localhost:8080/
    ```

1. mande uma solicitação ao servidor e veja o resultado :) :

    ```sh
    curl localhost:8080
    # Output: Hello, World
    ```