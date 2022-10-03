import type React from 'react';
interface Props<T> {
  renderItem: (key: T) => string;
  keyExtractor: (key: T) => string;
  data: T[];
}

const Lists = ({
  renderItem,
  keyExtractor,
  data,
}: Props<{ [key: string]: any }>) => {
  return (
    <div>
      <ul>
        {data.map(each => (
          <li key={keyExtractor(each)}>{renderItem(each)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lists;
