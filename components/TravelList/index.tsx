import React from 'react';
import TravelListItem from "@/components/TravelListItem";
import {Bus} from "@prisma/client"
import EmptyState from "@/components/EmptyState";

interface Props {
    expeditions: Bus[] | null
}


const TravelList: React.FC<Props> = ({expeditions}) => {

    if (expeditions?.length === 0) {
        return (
            <EmptyState title="Sefer Bulunamadı" description="Aradığınız Kriterlere göre Sefer Bulunamadı" label="Reset"/>
    )
    }

    return (
        <div>
            <ul role="list" className="space-y-3">
                {expeditions?.map((item) => (
                    <TravelListItem key={item.id} items={item}  />
                ))}
            </ul>
        </div>
    );
};

export default TravelList;
