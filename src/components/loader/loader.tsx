import { Loader2 as LoaderIcon } from 'lucide-react';

function Loader() {
  return (
    <div className="flex items-center justify-center mx-auto my-20 w-full">
      <LoaderIcon className="animate-spin" size={55} color="#61c4ba" />
    </div>
  );
}

export default Loader;
