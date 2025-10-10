
 
import { useCountContext } from '../../../context/appSearchResultCount';

const ResultCount = () => {
    const {count} = useCountContext()
    return (

        <p className='text-xl font-semibold'>
            {count + " Apps Found"}
        </p>

    );
};

export default ResultCount;