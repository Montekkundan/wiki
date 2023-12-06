/* eslint-disable react/display-name */
// Page.tsx
"use client";

import React, { useState, useCallback, memo, forwardRef } from 'react';
import { Responsive, WidthProvider, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ResponsiveGridLayout = WidthProvider(Responsive);

interface GridItemProps {
  item: Layout;
  onRemove: (id: string) => void;
}

const GridItem = memo(forwardRef<HTMLDivElement, GridItemProps>(({ item, onRemove }, ref) => {
  return (
    <div ref={ref} className="bg-blue-500 relative overflow-hidden" style={{ height: '100%' }}>
      <span className="text-xs">{item.i}</span>
      <button
        className="absolute top-0 right-0 bg-red-500 text-white p-1 z-10"
        onClick={(e) => {
          e.stopPropagation();
          onRemove(item.i);
        }}
      >
        remove
      </button>
    </div>
  );
}));

const MyFirstGrid = () => {
  const [layout, setLayout] = useState<Layout[]>([]);

  const addItem = useCallback(() => {
    const newItemId = `n${layout.length}`;
    const newItem: Layout = {
      i: newItemId,
      x: layout.length % (12 / 2), // Adjusted for x position
      y: Infinity, // Automatically adds to the bottom
      w: 2,
      h: 4, // Increased default height
    };
    setLayout(prevLayout => [...prevLayout, newItem]);
  }, [layout.length]);

  const removeItem = useCallback((itemId: string) => {
    setLayout(prevLayout => prevLayout.filter(item => item.i !== itemId));
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <div className="border-4 h-full border-dashed border-gray-400 w-screen max-w-full px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <button className="bg-green-500 text-white py-2 px-4 mb-4" onClick={addItem}>
          Add Box
        </button>
        <ResponsiveGridLayout
          className="layout"
          layouts={{ lg: layout }}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
          rowHeight={50} // Adjust row height as needed
          isDraggable={true}
          isResizable={true}
          resizeHandles={['se', 'ne', 'sw', 'nw']}
          isBounded={true}
          containerPadding={[0, 0]}
          onLayoutChange={newLayout => setLayout(newLayout)}
          maxRows={24}
          autoSize={true}
        >
          {layout.map(item => (
            <div key={item.i} className="grid-item">
              <GridItem item={item} onRemove={removeItem} />
            </div>
          ))}
        </ResponsiveGridLayout>
      </div>
    </div>
  );
};

export default MyFirstGrid;
