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
import React, { useState } from 'react';
import { Pagination } from 'tailwind-paginate';

const MyComponent = () => {
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageChange(pageNumber) {
    setCurrentPage(pageNumber);
  }
  const data = [...]; // Your data
  const options = {...}; // Your pagination options

  return (
    <>
      {data.slice(options.offset, options.offset + options.perPage).map(item => (
        // Render your items
      ))}
      <Pagination
        currentPage={currentPage}
        totalItems={data.length}
        pageSize={options.perPage}
        onPageChange={handlePageChange}
      />
    </>
  );
};

```
In this example, the `Paginate` component is rendered after the items in your data array. The `pageCount` prop specifies the total number of pages to display, while currentPage specifies the currently selected page. The `onPageChange` prop is called when the user clicks a new page, and it should update the pagination options and re-render your data with the new offset.
## props
Tailwind Paginate is highly customizable, and you can adjust its appearance and behavior to suit your needs. You can do this by passing various props to the `Paginate` component, such as:
| Prop name              | Type     | Default Value | Description                                                                             |
|------------------------|----------|---------------|-----------------------------------------------------------------------------------------|
| currentPage            | number   | -             | The current page number                                                                  |
| pageCount              | number   | 5             | The total number of pages to display                                                     |
| pageRangeDisplayed     | number   | 3             | The number of page numbers to display on either side of the current page                 |
| marginPagesDisplayed   | number   | 1             | The number of page numbers to display at the beginning and end of the page range          |
| previousLabel          | Node     | '<'           | The label for the previous button                                                        |
| nextLabel              | Node     | '>'           | The label for the next button                                                            |
| breakLabel             | Node     | '...'         | The label for the break between page numbers when there are gaps in the displayed range  |
| breakClassName         | string   |      | The class name for the break element                                                      |
| breakLinkClassName     | string   |    | The class name for the break link element                                                 |
| onPageChange           | function | -             | Callback function for when a new page is selected                                          |
| containerClassName     | string   |  - | The class name for the container element                                                  |
| pageClassName          | string   | - | The class name for the page element                                                       |                                            |
| activeClassName       | string   |  -    | The class name for the active page element                                                |                                          |
| previousClassName      | string   |   -   | The class name for the previous button element                                            |
| previousLinkClassName  | string   |  -  | The class name for the previous button link element                                       |
| nextClassName          | string   |   -    | The class name for the next button element                                                |
| nextLinkClassName      | string   |  -  | The class name for the next button link element                                           |
| disabledClassName      | string   |  -   | The class name for the disabled page element                                              |
| disabledLinkClassName  | string   | - | The class name for the disabled page link element                                         |
| hideLegand           | boolean  | false         | Whether to hide disabled page elements or not                                             |
| pageSize               | number   | -             | The number of items to display per page                                                   |
| totalItems             | number   | -             | The total number of items to paginate through                                             |

<!-- ## Customization
Tailwind Paginate is highly customizable, and you can adjust its appearance and behavior to suit your needs. You can do this by passing various props to the `Paginate` component, such as:
- `className`: A custom class name to apply to the pagination container.
- `nextLabel`: The label to display for the "next" button.
- `prevLabel`: The label to display for the "previous" button.
- `marginPagesDisplayed`: The number of pages to display at the beginning and end of the pagination range.
- `pageRangeDisplayed`: The number of pages to display around the current page.
   -->
<!-- For a full list of props and customization options, please refer to the documentation. -->