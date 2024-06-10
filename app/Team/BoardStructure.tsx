'use client'
import Card from "./Card"
import axios from "axios"
import { Member } from "@/Types/team";
import { useEffect, useState } from "react"

function BoardStructure() {
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() =>{
        const fetchMembers = async () =>{
            const result = await axios.get<Member[]>("http://localhost:5000/team");
            setMembers(result.data);
        };

        fetchMembers();

    },[])

    const renderRows = (level : number) => {
        return members.filter(member => member.hierarchyLevel === level)
        .map(member => (
                <Card
                key={member._id}
                name={member.name}
                image={member.image}
                post={member.post}
                />
          ));
      };
    
      const maxHierarchyLevel = Math.max(...members.map(member => member.hierarchyLevel));
    
      return (
        <div className="board-structure w-full mt-24">
            <div className="flex flex-col gap-y-14">
          {Array.from({ length: maxHierarchyLevel }, (_, i) => (
            <div className="row flex flex-wrap gap-6 justify-center" key={i}>
              {renderRows(i + 1)}
            </div>
          ))}
          </div>
        </div>
      );
}

export default BoardStructure