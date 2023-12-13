import { BackendData } from "@/data";
import TreeViewItem from "./TreeViewItem";

interface ITreeViewProps {
    data: BackendData[]
}
export default function TreeView(props: ITreeViewProps) {

    return (
        <div className="flex flex-col gap-1 items-start">
            {props.data.map(d => <TreeViewItem key={d.id} data={d} />)}
        </div>
    );
}