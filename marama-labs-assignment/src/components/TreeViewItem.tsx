import { BackendData } from "@/data";
import { useState } from "react";
import TreeView from "./TreeView";

interface ITreeViewItemProps {
    data: BackendData
}
export default function TreeViewItem(props: ITreeViewItemProps) {

    const [expanded, setExpanded] = useState<boolean>(false);

    const data = props.data;
    const itemClasses = "flex flex-row gap-1 p-1 items-center  cursor-pointer rounded transition-all";

    return (
        <div className="flex flex-col gap-1 items-start" key={data.id}>
            <div className={`${itemClasses} ${data.children != undefined ? " hover:bg-sky-200" : ""}`} key={data.id} onClick={() => setExpanded(!expanded)}>
                {data.children != undefined &&
                    <span
                        className={`w-[18px] text-center transition-all transform ${expanded ? "rotate-90" : ""}`}
                    >
                        ▶
                    </span>
                }
                {!data.children && 
                    <span className={"w-[18px] text-center"}>•</span>
                }
                <span>{data.name}</span>
            </div>
            <div className="pl-[24px]">
                {data.children != undefined && expanded &&
                    <TreeView data={data.children} />
                }
            </div>
        </div>
    );
}