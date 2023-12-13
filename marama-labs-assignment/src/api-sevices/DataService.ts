import { BackendData } from "@/data";
import { GetDataResult } from "@/pages/api/data";
import axios from "axios";

// A simple service used to fetch data from the /data API endpoint
export namespace DataService {
    export async function get(): Promise<BackendData[]> {
        try {
            let res = await axios.get<GetDataResult>("/api/data");
            if (res.data.status == "success") {
                return res.data.result;
            } else {
                // We will never hit this, since the result can only be success for now
                throw "Error";
            }
        } catch (e) {
            // Should do better error handling, i.e. give meaningful feedback to the enduser
            console.error("An error occurred");
            throw e;
        }
    }
}