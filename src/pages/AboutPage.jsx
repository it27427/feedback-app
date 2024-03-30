import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import { FaArrowLeft } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <Card>
      <div className='about'>
        <h1 className='text-2xl font-bold'>About This Project</h1>
        <p className='text-md text-slate-600'>
          This is a React app to leave feedback for product or service
        </p>
        <p className='text-sm text-slate-800'>Version: 1.0.0</p>

        <p className='mt-3'>
          <Link
            className='text-sm inline-flex items-center gap-2 transition-colors hover:text-sky-500'
            to='/'
          >
            <FaArrowLeft className='mt-0.5' />
            Back to Home
          </Link>
        </p>
      </div>
    </Card>
  );
};

export default AboutPage;
