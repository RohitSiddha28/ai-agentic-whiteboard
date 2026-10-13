"use client"
import { Button } from "@/components/ui/button";
import { Folder } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const ProjectList = () => {
  const [projectList, setProjectList] = useState<any>([]);
  return <div>
    {projectList.length === 0 ? (
        <div className="flex flex-col items-center p-10 border rounded-xl mt-10 gap-2">
            <Folder size={80} className="text-blue-500" fill="currentColor"/>
            <h2 className="text-xl font-bold">No Boards Found</h2>
            <p className="text-muted-foreground">
              Get started by creating a new board!
            </p>
            <Button>+ Create New Board</Button>
        </div>
    ): <div>

    </div> }
  </div>;
};

export default ProjectList;
