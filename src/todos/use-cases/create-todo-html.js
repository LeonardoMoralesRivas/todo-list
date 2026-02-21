import { Todo } from "../models/todo.model";


/**
 *          
 * @param {Todo} todo 
 */
export const createTodoHTML = (todo) =>{
    if (!todo) throw new Error('A TODO object is required')

    const html = `
                <div class="view">
                    <input class="toggle" type="checkbox" ${todo.done ? 'checked' : ''}>
                    <label>${todo.description}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template">`
    const liEelement = document.createElement('li');
    liEelement.innerHTML = html;
    liEelement.setAttribute('data-id', todo.id);
    
    if(todo.done)
        liEelement.classList.add('completed')

    return liEelement;
}