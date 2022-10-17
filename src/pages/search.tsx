import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import volume from '@/api/books';
import Title from '@/components/title/Title';
import { Item } from '@/typings/books';

const Home: NextPage = () => {
  const { query } = useRouter();

  const [data, setData] = useState<Item[]>([]);

  useEffect(() => {
    if (query.search) fetchData(query.search as string);
  }, [query.search]);

  const fetchData = async (q: string) => {
    volume
      .getAll({
        params: {
          q,
        },
      })
      .then(({ data }) => {
        setData(data.items ?? []);
      });
  };

  return (
    <div>
      {data.length === 0 && (
        <div
          style={{
            height: '75vh',
          }}
          className="flex justify-center items-center"
        >
          Data not found
        </div>
      )}
      {data.length > 0 ? <h2 className="text-xl mb-4 font-bold">Book Search</h2> : ''}
      {data.map((item) => {
        return (
          <div className="w-full mb-4 flex rounded-md py-2" key={item.id}>
            <img
              alt="apaan"
              className="w-32 h-48 object-cover rounded-md"
              src={item.volumeInfo.imageLinks?.smallThumbnail}
            />
            <div className="ml-6 flex-1">
              <Title itemId={item.id} title={item.volumeInfo.title} />
              {item.volumeInfo.publisher && (
                <div className="text-sm text-gray-600">Published by {item.volumeInfo.publisher}</div>
              )}

              <div className="text-sm text-indigo-600">{item.volumeInfo.categories?.map((category) => category)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
