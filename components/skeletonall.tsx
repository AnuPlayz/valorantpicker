import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-row items-center justify-center">
            <div className="flex flex-col items-center p-3">
                <Skeleton className="h-10 w-[210px] m-6" />
                <Skeleton className="h-[435px] w-[250px] rounded-xl" />
            </div>
            <div className="flex flex-col items-center p-3">
                <Skeleton className="h-10 w-[210px] m-6" />
                <Skeleton className="h-[260px] w-[450px] rounded-xl" />
            </div>
            <div className="flex flex-col items-center p-3">
                <Skeleton className="h-10 w-[210px] m-6" />
                <Skeleton className="h-[450px] w-[450px] rounded-xl" />
            </div>
        </div>
    )
}
