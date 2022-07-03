import type { NextComponentType } from 'next';

export const Footer: NextComponentType = () => {
  return (
    <div className="flex flex-col-reverse justify-center pt-5 pb-10 border-t lg:flex-row sticky top-0">
      <p className="text-sm text-gray-600">
        © Copyright 2020 Lorem Inc. All rights reserved.
      </p>
    </div>
  );
};
