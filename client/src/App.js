import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';

import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
import Signup from './pages/Signup'

import Chords from './pages/Chords'
import Intervals from './pages/Intervals'
import Intro from './pages/Intro'
import Notation from './pages/Notation'
import Rhythm from './pages/Rhythm'
import Scales from './pages/Scales'

const httpLink = createHttpLink({
    uri: '/graphql',
});
  
const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});
  
const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Header />
                    <Navbar />
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/login' element={<Login />} />
                        <Route path='/profile' element={<Profile />} />
                        <Route path='/signup' element={<Signup />} />
                        <Route path='/chords' element={<Chords />} />
                        <Route path='/intervals' element={<Intervals />} />
                        <Route path='/intro' element={<Intro />} />
                        <Route path='/notation' element={<Notation />} />
                        <Route path='/rhythm' element={<Rhythm />} />
                        <Route path='/scales' element={<Scales />} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    )
}

export default App
  
