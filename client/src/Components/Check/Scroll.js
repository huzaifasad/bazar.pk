import React from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import { Badge } from 'antd';

function Scroll() {
  const parent = 'w-60 h-full'; // Use Tailwind CSS classes

  const cards = [
    { id: 1, title: 'Card 1', content: 'This is the content of Card 1' },
    { id: 2, title: 'Card 2', content: 'This is the content of Card 2' },
    { id: 3, title: 'Card 3', content: 'This is the content of Card 3' },
    { id: 4, title: 'Card 4', content: 'This is the content of Card 4' }, // Added an extra card
    {
      id: 5,
      imageSrc: 'path-to-your-image.jpg', // Replace with the actual image path
      category: 'Category Name',
      name: 'Product Name',
      price: '$19.99',
    }, // New card
  ];

  return (
    <div className={parent}>
      <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
        {cards.map(({ id, imageSrc, category, name, price }) => (
          <Card
            itemId={id} // NOTE: itemId is required for tracking items
            key={id}
            imageSrc={imageSrc}
            category={category}
            name={name}
            price={price}
          />
        ))}
      </ScrollMenu>
    </div>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <button
      disabled={isFirstItemVisible}
      onClick={() => scrollPrev()}
    >
      Left
    </button>
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return (
    <button
      disabled={isLastItemVisible}
      onClick={() => scrollNext()}
    >
      Right
    </button>
  );
}

function Card({ itemId, imageSrc, category, name, price }) {
  const visibility = React.useContext(VisibilityContext);

  return (
    <div
      style={{
        width: '160px',
      }}
      tabIndex={0}
    >
      <div className='col-span-1'>
        <div className='w-42 h-60 border border-2 text-white mt-10 relative'>
          <Badge.Ribbon text="50%" color='cyan'>
            <img src={imageSrc} alt='..' className='h-44 border border-2'/>
            <p className='pl-2'>{category}</p>
            <div className='flex justify-between'>
              <h1 className='pl-2'>{name}</h1>
              <h1 className='pr-2'>{price}</h1>
            </div>
          </Badge.Ribbon>
        </div>
      </div>
      <div
        style={{
          height: '200px',
        }}
      />
    </div>
  );
}

export default Scroll;
