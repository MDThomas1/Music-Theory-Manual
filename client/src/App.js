import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

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
    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Home />
        }
        
        if (currentPage === 'Login') {
            return <Login />
        }

        if (currentPage === 'Profile') {
            return <Profile />
        }
        if (currentPage === 'Signup') {
            return <Signup />
        }

        if (currentPage === 'Chords') {
            return <Chords />
        }

        if (currentPage === 'Intervals') {
            return <Intervals />
        }

        if (currentPage === 'Intro') {
            return <Intro />
        }

        if (currentPage === 'Notation') {
            return <Notation />
        }

        if (currentPage === 'Rhythm') {
            return <Rhythm />
        }

        if (currentPage === 'Scales') {
            return <Scales />
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <ApolloProvider client={client}>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <Navbar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer />

        </ApolloProvider>
    )
}

export default App
  
