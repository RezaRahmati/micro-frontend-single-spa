
import './product-list.css';

import { Column, DataGrid, GroupPanel, HeaderFilter, Pager, Paging, SearchPanel } from 'devextreme-react/data-grid';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const ProductList = () => {
    const priceFormat = { style: 'currency', currency: 'CAD', useGrouping: true, minimumSignificantDigits: 3 };

    const [ products, setProducts ] = useState( [] );

    useEffect( () => {
        fetch( 'http://localhost:4000/api/product' )
            .then( ( response ) => response.json() )
            .then( ( data ) => {
                setProducts( data.products );
            } )
            .catch( ( err ) => {
                console.error( err.message );
            } );
    }, [] );

    function titleCellRender ( data ) {
        return <Link to={ `/product/details/${ data.data.id }` }>{ data.value }</Link>
    }


    return <section className='product-list'>
        <DataGrid
            dataSource={ products }
            keyExpr="id"
            showBorders={ true }
            allowColumnResizing={ true }
            allowColumnReordering={ true }
            columnAutoWidth={ true }
        >
            <GroupPanel visible={ true } />
            <HeaderFilter visible={ true } />
            <SearchPanel visible={ true } width={ 240 } placeholder="Search..." />
            <Paging defaultPageSize={ 10 } />
            <Pager
                visible={ true }
                allowedPageSizes={ [ 10, 25, 50, 100 ] }
                displayMode='full'
                showPageSizeSelector={ true }
                showInfo={ true }
                showNavigationButtons={ true } />
            <Column dataField="title" caption="Title" cellRender={ titleCellRender }></Column>
            <Column dataField="brand" caption="Brand" ></Column>
            <Column dataField="category" caption="Category" ></Column>
            <Column dataField="price" caption="Price" format={ priceFormat }></Column>
            <Column dataField="discountPercentage" caption="Discount %"></Column>
            <Column dataField="rating" caption="Rating"></Column>
            <Column dataField="stock" caption="Stock"></Column>
        </DataGrid>
   </section>
}