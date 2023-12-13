import { BackendData, fetchData } from '@/data'
import type { NextApiRequest, NextApiResponse } from 'next'

type Status = "success" | "failure"; //more status could be added
export type GetDataResult = {
  status: Status,
  result: BackendData[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<GetDataResult>
) {
  // In the future, this data should be fetched from a DB Service/Other Service
  let data = await fetchData();
  res.status(200).json({
    status: "success",
    result: data,
  })
}
