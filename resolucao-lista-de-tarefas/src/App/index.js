import React from 'react';
import { Provider } from "react-redux";
import store from "../store";
import styled from "styled-components";
import NewTodoInput from "../containers/NewTodoInput"


const PageWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

function App() {
    return (
        <Provider store={store}>
            <PageWrapper>
                <NewTodoInput>Input de texto</NewTodoInput>
                <p>Lista de tarefas</p>
                <p>Filtro</p>
            </PageWrapper>
        </Provider>
    );
}

export default App;