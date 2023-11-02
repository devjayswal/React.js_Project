import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasklist, setTasklist] = useState(["Sleep", "Bath", "Hug", "Code", "Eat"]);
  const [tasktext, setTasktext] = useState('');
  const [removeTaskText, setRemoveTaskText] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);

  const addTask = () => {
    if (tasktext === "") {
      alert("Please enter a task");
      return;
    }

    setTasklist([...tasklist, tasktext]);
    setTasktext('');
    setShowPopup(false);
  }

  const removeTask = () => {
    if (removeTaskText === "") {
      alert("Please enter a task");
      return;
    }

    const taskIndexToRemove = tasklist.indexOf(removeTaskText);
    if (taskIndexToRemove !== -1) {
      const updatedTasklist = [...tasklist];
      updatedTasklist.splice(taskIndexToRemove, 1);
      setTasklist(updatedTasklist);
    }

    setShowRemovePopup(false);
  }

  return (
    <>
      <h1 id="title">TO DO LIST</h1>
      <ol id="tasklist">
        {tasklist.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ol>
      <button id="showPopup" onClick={() => setShowPopup(true)}>Add Task</button>
      <button id="removetask" onClick={() => setShowRemovePopup(true)}>Remove Task</button>

      {showPopup && (
        <div id="popup" className="popup">
          <h2>Enter Data</h2>
          <input
            type="text"
            id="input1"
            placeholder="What"
            value={tasktext}
            onChange={(e) => setTasktext(e.target.value)}
          />
          <br />
          <br />
          <button id="saveButton" onClick={addTask}>
            Save
          </button>
          <button id="cancelButton" onClick={() => setShowPopup(false)}>Cancel</button>
        </div>
      )}

      {showRemovePopup && (
        <div id="removepopup" className="removepopup">
          <input
            type="text"
            id="input5"
            placeholder="Variable 5"
            value={removeTaskText}
            onChange={(e) => setRemoveTaskText(e.target.value)}
          />
          <br />
          <br />
          <button id="removeButton" onClick={removeTask}>
            Remove
          </button>
          <button id="cancelButton2" onClick={() => setShowRemovePopup(false)}>Cancel</button>
        </div>
      )}
    </>
  );
}

export default App;
