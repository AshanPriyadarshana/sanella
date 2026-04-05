import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

// Components
import VehicleManagement from './components/VehicleManagement';
import InventoryTracking from './components/InventoryTracking';
import WorkPlanning from './components/WorkPlanning';
import SalaryManagement from './components/SalaryManagement';

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const App = () => {
    return (
        <Router>
            <div>
                <h1>Ichikawa Recycle Hub Management System</h1>
                <Switch>
                    <Route path="/vehicles" component={VehicleManagement} />
                    <Route path="/inventory" component={InventoryTracking} />
                    <Route path="/work-planning" component={WorkPlanning} />
                    <Route path="/salaries" component={SalaryManagement} />
                    <Route path="/" exact>
                        <h2>Welcome to the Ichikawa Recycle Hub!</h2>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
};

export default App;