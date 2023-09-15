import { Link } from 'react-router-dom';
import { exampleList } from '../data/exampleList';

const Page2 = () => {
  return (
    <div className='w-full h-screen flex flex-col items-center justify-center space-y-10'>
      <p>PAGE 2</p>
      <div className='flex space-x-10'>
        <Link
          className='bg-violet-500 text-white px-8 py-2'
          to={exampleList[0].route}
        >
          {exampleList[0].text}
        </Link>
        <Link
          className='bg-violet-500 text-white px-8 py-2'
          to={exampleList[1].route}
        >
          {exampleList[1].text}
        </Link>
      </div>
    </div>
  );
};

export default Page2;
