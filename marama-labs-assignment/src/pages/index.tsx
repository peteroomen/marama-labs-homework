import { Roboto } from 'next/font/google'
import { useEffect, useState } from 'react'
import { BackendData } from '@/data'
import TreeView from '@/components/TreeView'
import { DataService } from '@/api-sevices/DataService'

const roboto = Roboto({ weight: ["500", "700"], subsets: ["latin"] })

export default function Home() {

  const [data, setData] = useState<BackendData[]>()

  useEffect(() => {
    const fetchData = async () => {
      let data = await DataService.get();
      console.log("Data loaded", data);
      setData(data);
    }

    // On error just log for now, should handle errors better
    // i.e. provide meaningful feedback to enduser
    fetchData().catch(console.error);
  }, [])

  return (
    <main
      className={`flex min-h-screen flex-col bg-slate-100 items-center justify-between p-24 ${roboto.className}`}
    >
      <div className='flex flex-col items-start gap-6'>
        <div className='flex flex-col items-start gap-2'>
          <h1 className='text-2xl font-bold'>Marama Labs Assignment</h1>
          <p className='text-md font-medium'>A simple Web App which loads some hard-coded data from an endpoint, then displays it in a tree-view.</p>
        </div>
        {!data &&
          <p className='text-gray-400 text-md font-medium'>Loading...</p>
        }
        {data &&
          <TreeView data={data} />
        }
      </div>
    </main>
  )
}
