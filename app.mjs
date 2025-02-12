import http from "http";
import { TodolistService } from "./todolist-services.mjs";

const service = new TodolistService();
const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");
    if (request.method === "GET") {
        service.getTodolist(request, response);
    } else if (request.method === "POST") {
        service.createTodolist(request, response);
    } else if (request.method === "PUT") {
        service.updateTodo(request, response);
    }else if (request.method === "DELETE"){
        service.deteleTodo(request, response);
    }
});

server.listen(3000);
