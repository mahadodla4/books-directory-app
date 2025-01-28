import React,{useState} from "react";
import ListBooks from "./Components/ListBooks";
import CreateBook from "./Components/CreateBook";
import UpdateBook from "./Components/UpdateBook";
import DeleteBook from "./Components/DeleteBook";

function App() {
    const [activeTab,setActiveTab] =  useState('list');

    return (
      <div style={{padding: '20px'}} >
        <h1>Books Directory</h1>
        <nav>
          <button onClick={() => setActiveTab('list')}> List All Books </button>
          <button onClick={() => setActiveTab('create')}> Create a Book </button>
          <button onClick={() => setActiveTab('update')}> Update a Book </button>
          <button onClick={() => setActiveTab('delete')}> Delete a Book </button>
        </nav>

        {activeTab === 'list' && <ListBooks/>}
        {activeTab === 'create' && <CreateBook/>}
        {activeTab === 'update' && <UpdateBook/>}
        {activeTab === 'delete' && <DeleteBook/>}

      </div>
    )
}

export default App;