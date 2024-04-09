import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Chat() {
  return (
    <ScrollArea className="max-w-sm mx-auto bg-[#1a1a1a] text-white p-4 rounded-lg h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <div className="flex items-center justify-between pb-4 border-b border-gray-600">
        <div className="flex items-center space-x-3">
          <Avatar>
            <AvatarImage alt="NumeDePersoana" src="/placeholder.svg?height=40&width=40" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-semibold">NumeDePersoana</div>
            <div className="text-gray-400 text-sm">NumeDePersoana@example.com</div>
          </div>
        </div>
        <PlusIcon className="text-gray-400" />
      </div>
      <div className="flex flex-col space-y-2 py-4">
        <div className="flex items-center justify-start">
          <div className="bg-gray-700 rounded-full px-4 py-2 text-sm max-w-xs">Ce faci boss?!</div>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-orange-500 rounded-full px-4 py-2 text-sm max-w-xs">
            Bine boss!! Tu?
          </div>
        </div>
        <div className="flex items-center justify-start">
          <div className="bg-gray-700 rounded-full px-4 py-2 text-sm max-w-xs">Uite stau!</div>
        </div>
        <div className="flex items-center justify-end">
          <div className="bg-orange-500 rounded-full px-4 py-2 text-sm max-w-xs">Aa.. Tare frate!</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <Input
          className="flex-1 bg-gray-800 rounded-full px-4 py-2 text-sm placeholder-gray-400"
          placeholder="Aici poti sa scrii daca vrei..."
        />
        <Button className="bg-orange-500 rounded-full p-2">
          <SendIcon className="text-white" />
        </Button>
      </div>
    </ScrollArea>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SendIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}