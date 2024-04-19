import React, { ReactNode } from 'react';
import { cn } from 'lib/utils';

interface AspectRatioProps {
  ratio: number;
  children: ReactNode;
  className?: string;
}

const AspectRatio: React.FC<AspectRatioProps> = ({
  ratio,
  children,
  className,
}) => {
  const paddingBottom = `${(1 / ratio) * 100}%`;

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden',
        className
      )}
      style={{ paddingBottom }}
    >
      <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center">
        {children}
      </div>
    </div>
  );
};

export default AspectRatio;