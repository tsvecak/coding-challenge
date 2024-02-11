import { Chapter } from "@/types/chapter";

// Could be extended to include generic types to be passed instead of chapters
// e.g. generic type for the list, generic itemKey (el[itemKey]) and generic parentKey (elem[parentKey])
// This could also be replaced with usage of lodash or similar libraries
export function getNestedArray(list: Chapter[]){
    const nestedArray: Chapter[] = [];

    // Create a hashed list and add children key/value pair to each item
    const hashedList: {[key:string]: Chapter} = {};
    list.forEach(item => {
        const itemId = item.id;
        
        hashedList[itemId] = item;
        hashedList[itemId].children = [];
    });
    
    // Loop through the list and move children to their parents
    list.forEach((item) => {
        const mappedElem = hashedList[item.id];

        // If it has a parent_id push to children list of it's parent
        if (item.parent_id) {
            hashedList[item.parent_id].children?.push(item);
        } else {
            // otherwise push it to the array
            nestedArray.push(mappedElem);
        }
    });

    return nestedArray;
}