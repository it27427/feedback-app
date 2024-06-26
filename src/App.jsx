import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '@/components/Header';
import FeedbackList from '@/components/FeedbackList';
import FeedbackStats from '@/components/FeedbackStats';
import FeedbackForm from '@/components/FeedbackForm';
import AboutIconLink from '@/components/AboutIconLink';

import { FeedbackProvider } from '@/context/FeedbackContext';

import AboutPage from '@/pages/AboutPage';

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />

        <div className='container pt-4'>
          <Routes>
            <Route
              exact
              path='/'
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </div>

        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}

export default App;
