import React from 'react';
interface Props<T> {
  renderItem: (key: T) => string;
  keyExtractor: (key: T) => string;
  data: T[];
}

const Lists: React.FC<Props<{ [key: string]: any }>> = ({
  renderItem,
  keyExtractor,
  data,
}) => {
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
