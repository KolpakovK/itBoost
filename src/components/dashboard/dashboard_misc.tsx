import * as React from "react"
import { format, setDefaultOptions } from 'date-fns';
import { ru } from 'date-fns/locale'
setDefaultOptions({ locale: ru })

import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

import { Badge } from "@/components/ui/badge"


interface ScheduleSimpleItemInterface{
    image?:string,
    short_name:string,
    name:string,
    teacher:string,
    date:Date,
}

export const ScheduleSimpleItem:React.FC<ScheduleSimpleItemInterface> = ({image="",short_name,name,teacher,date}) => {
    return (
        <div className="flex gap-2 pb-2 items-center p-2 bg-transparent hover:bg-gray-200 duration-150 rounded">

            <Avatar>
                <AvatarImage src={image} alt="@shadcn" />
                <AvatarFallback>{short_name}</AvatarFallback>
            </Avatar>

            <div className="flex flex-col flex-1">
                <p className="text-base text-gray-950 font-bold">{name}</p>
                <p className="text-sm text-gray-600">{teacher}</p>
            </div>

            <div className="flex gap-2">
                <Badge >{format(date, 'kk:mm')}</Badge>
            </div>

        </div>
    )
}



interface GroupScheduleItemsIterface{
    items:ScheduleSimpleItemInterface[]
}

export const GroupScheduleItems:React.FC<GroupScheduleItemsIterface> = ({items}) => {

    function groupByDay(data:ScheduleSimpleItemInterface[]) {
        const groupedData:any = {};
      
        data.forEach(item => {
          const dateKey = format(item.date, 'dd/MM/yyyy'); // Format date as a string for key
      
          if (!groupedData[dateKey]) {
            groupedData[dateKey] = [];
          }
      
          groupedData[dateKey].push(item);
        });
      
        return groupedData;
    }

    const mappedItems = groupByDay(items);

    return (
        <div className="flex flex-col gap-2">

            {Object.keys(mappedItems).map((keyName,index) => (
                <div className="flex p-4 rounded border border-gray-200 flex-col gap-2 bg-white hover:bg-gray-50 duration-150" key={'mappedDay'+index}>
                    <div className="flex justify-between items-center">
                        <p className="flex-1 text-lg font-light text-gray-600">{format(keyName, 'dd MMMM yyyy - EEEE')}</p>
                    </div>
                    <hr />
                    
                    {mappedItems[keyName].map((rowItem:any,itemIndex:any) => (
                        <ScheduleSimpleItem key={'mappedDay'+index+"Item"+itemIndex} name={rowItem.name} image={rowItem.image} short_name={rowItem.short_name} teacher={rowItem.teacher} date={rowItem.date}/>
                    ))}
                </div>
            ))}

        </div>
    )
}