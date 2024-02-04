import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="max-w-[260px] max-h-[400px]" />
        </div>
    )
}
