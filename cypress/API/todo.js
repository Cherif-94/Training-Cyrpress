class Todo {


    addNewTodo = (token) => {

        return cy.request({
            url: '/api/v1/tasks',
            method: 'POST',
            headers: {
                Authorization: `bearer ${token}`,
            },
            body: {
                isCompleted: false,
                item: '13h - Seance Musculatiojn',
            },
        })
    }



}

export default Todo;