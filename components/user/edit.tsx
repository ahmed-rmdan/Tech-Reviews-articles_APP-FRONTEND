


import {
  Tabs,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

import { NameEdit } from "./nameedit"
import { PassEdit } from "./passwordedit"


export function Edit() {


  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger className="hover: cursor-pointer" value="account">Account</TabsTrigger>
          <TabsTrigger value="password" className="hover: cursor-pointer" >Password</TabsTrigger>
        </TabsList>
         <NameEdit></NameEdit>
         <PassEdit></PassEdit>
      </Tabs>
    </div>
  )
}