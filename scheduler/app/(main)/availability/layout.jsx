import { Suspense } from "react";

export default function AvailabilityLayout({ Children }) {
    return (
        <div>
            <Suspense fallback={<div>Loading Events...</div>}>
                {Children}
            </Suspense>
        </div>
    );
}