# Tailwind Paginate
Tailwind Paginate is a React component that makes it easy to add pagination to your TailwindCSS-powered web applications. It provides a customizable, responsive pagination component that is easy to integrate with your existing React codebase.

## Installation
To install Tailwind Paginate, simply run:
```bash
npm install tailwind-paginate
```
Or, if you're using Yarn:
```bash
yarn add tailwind-paginate
```
## Usage
To use Tailwind Paginate in your React application, simply import the `Paginate` component and pass it your data and any desired options:

```javascript
import React from 'react';
import { Pagination } from 'tailwind-paginate';

const MyComponent = () => {
  const data = [...]; // Your data
  const options = {...}; // Your pagination options

  return (
    <>
      {data.slice(options.offset, options.offset + options.perPage).map(item => (
        // Render your items
      ))}
      <Pagination
        pageCount={Math.ceil(data.length / options.perPage)}
        currentPage={options.currentPage}
        onChange={({ selected }) => {
          // Update your options with the selected page
        }}
      />
    </>
  );
};

```
In this example, the `Paginate` component is rendered after the items in your data array. The `pageCount` prop specifies the total number of pages to display, while currentPage specifies the currently selected page. The `onPageChange` prop is called when the user clicks a new page, and it should update the pagination options and re-render your data with the new offset.

## Customization
Tailwind Paginate is highly customizable, and you can adjust its appearance and behavior to suit your needs. You can do this by passing various props to the `Paginate` component, such as:
- `className`: A custom class name to apply to the pagination container.
- `nextLabel`: The label to display for the "next" button.
- `prevLabel`: The label to display for the "previous" button.
- `marginPagesDisplayed`: The number of pages to display at the beginning and end of the pagination range.
- `pageRangeDisplayed`: The number of pages to display around the current page.
  
For a full list of props and customization options, please refer to the documentation.