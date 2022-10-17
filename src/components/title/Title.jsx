import { useRouter } from 'next/router';

// eslint-disable-next-line import/prefer-default-export
const Title = ({ itemId, title }) => {
  const router = useRouter();

  return (
    <button type="button" tabIndex={0} onClick={() => router.push(`/books/${itemId}`)}>
      <h2 className="text-lg mb-2 font-bold text-gray-900 hover:text-indigo-600 cursor-pointer">{title}</h2>
    </button>
  );
};

export default Title;
