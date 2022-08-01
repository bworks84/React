import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import NavBar from "./components/navBar.jsx";
import LoginForm from "./components/loginForm"
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <main className="container">
          <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/movies/:id" element={<MovieForm />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/rentals" element={<Rentals />} />
            <Route path="/not-found" element={<NotFound />} />
            <Route path="/" to="/movies" />
            <Route to="/not-found" />
          </Routes>
        </main>
      </>
    );
  }
}

export default App;
