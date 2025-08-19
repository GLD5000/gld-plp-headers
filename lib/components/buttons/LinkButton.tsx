import React from 'react';
import { classMerge } from '../../utils/twUtils';

export function LinkButton({ className, ...props }: React.ComponentProps<'a'>) {
    return (
        <a
            style={{ color: 'unset' }}
            {...props}
            className={classMerge(
                'border border-solid text-lg border-gray-300 rounded-lg px-4 py-2 w-max shrink-0',
                className
            )}
        />
    );
}
