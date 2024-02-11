import { Chapter } from "@/types/chapter";

// Could be extended to include generic types to be passed instead of chapters
// e.g. generic type for the list, generic itemKey (el[itemKey]) and generic parentKey (elem[parentKey])
export function getNestedArray(list: Chapter[]){
    const nestedArray: Chapter[] = [];

    const hashedList: {[key:string]: Chapter} = {};
    list.forEach(item => {
        const itemId = item.id;
        
        hashedList[itemId] = item;
        hashedList[itemId].children = [];
    });
    
    list.forEach((item) => {
        const mappedElem = hashedList[item.id];

        if (item.parent_id) {
            hashedList[item.parent_id].children?.push(item);
        } else {
            nestedArray.push(mappedElem);
        }
    });

    return nestedArray;
}