import * as moment from 'moment'
import * as dateFormat from 'dateformat'
import { ListProvider } from '../../../providers/list/list';

/*** Defines the structure of a List */

export class listInfo {
    listName: string;
    listDescription:string;
    listCreatedDate:string;
    listType:string;
    listStatus:string;

    constructor(listName:string, listDescription:string, listType:string, listStatus:string){
        this.listName = listName,
        this.listDescription = listDescription,
        this.listCreatedDate = dateFormat(moment(), 'yyyy-mm-dd hh:mm:ss'),
        this.listType = listType,
        this.listStatus = listStatus
    }
}

/*** Defines the structure of list content */

export class listContent {
    listItemName:string;
    listItemDescription:string;
    listItemCreatedDate:string;
    listItemStatus:string;
    listItemReminder:boolean;
    listItemReminderDate:string;
    listItemIsFlagged:boolean

    constructor(private _listService: ListProvider, listItemName:string, listItemDescription:string, 
                    listItemStatus:string, listItemReminder:boolean, listItemReminderDate:string, listItemIsFlagged:boolean
                ){

        this.listItemName = listItemName,
        this.listItemDescription = listItemDescription,
        this.listItemCreatedDate = dateFormat(moment(), 'yyyy-mm-dd hh:mm:ss'),
        this.listItemReminder = listItemReminder,
        this.listItemReminderDate = listItemReminderDate || null,
        this.listItemIsFlagged = listItemIsFlagged || false
    }
}