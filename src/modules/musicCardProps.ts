import { Item } from "./trackModule";

export interface MCProps {
    track: Item,
    onTrackItemClick(track: Item): void,
    selectedList: boolean,
}

