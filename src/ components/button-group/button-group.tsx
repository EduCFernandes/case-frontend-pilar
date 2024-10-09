import { cn } from '@/helpers/cn';
import clsx from 'clsx';

export type ButtonData = {
  label: string;
  value: string;
};

interface ButtonGroupProps {
  buttonsData: ButtonData[];
  selectedValue: string;
  onButtonClick: (value: string) => void;
}

function ButtonGroup({
  buttonsData = [],
  onButtonClick,
  selectedValue = ''
}: ButtonGroupProps) {
  return (
    <div className="flex rounded-lg border border-slate-200 w-fit overflow-hidden">
      {buttonsData.map((data: ButtonData) => {
        return (
          <button
            key={data.value}
            className={cn(
              'px-2 text-sm',
              clsx({ 'bg-slate-800 text-white': selectedValue === data.value })
            )}
            onClick={() => onButtonClick(data.value)}
          >
            {data.label}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonGroup;
