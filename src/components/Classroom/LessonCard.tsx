import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function LessonCard() {
  return (
    <Card className="w-[200px] h-[400px] flex flex-col">
      <CardContent className="flex flex-1 flex-col items-start p-6 gap-4">
        <img
          alt="Product Image"
          className="aspect-square object-cover border border-gray-200 rounded-lg overflow-hidden dark:border-gray-800"
          height={150}
          src="/placeholder.svg"
          width={150}
        />
        <div className="flex-1 grid text-sm text-center/1.5 items-start gap-1.5">
          <div className="font-bold text-center"> ### </div>
          <div className="font-bold">Description:</div>
          AICI SE DESCRIE
        </div>
        <Button className="w-full" size="sm">
          Add to cart
        </Button>
      </CardContent>
    </Card>
  )
}
/*
<div className="flex gap-3 mb-4">
    <LessonCard></LessonCard>
    <LessonCard></LessonCard>
    <LessonCard></LessonCard>
    <LessonCard></LessonCard>
</div>
*/