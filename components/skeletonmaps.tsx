import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col items-center">
            <Skeleton className="h-10 w-[210px] m-6" />
            <Skeleton className="h-[260px] w-[450px] rounded-xl" />
        </div>
    )
}
