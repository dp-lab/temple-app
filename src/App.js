// src/App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./redux/store";
import Dashboard from "./components/Dashboard";
import TempleServices from "./components/TempleServices";

function App() {
    return (
        <Provider store={store}>
            <ToastContainer />
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route
                            path="/temple/:id"
                            element={<TempleServices />}
                        />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
