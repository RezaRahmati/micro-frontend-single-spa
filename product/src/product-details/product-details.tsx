import './product-details.css';

import { Button } from 'devextreme-react/button';
import Gallery from 'devextreme-react/gallery';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export const ProductDetails = () => {
    const { id } = useParams();
    const [ product, setProduct ] = useState( null );
    let navigate = useNavigate();

    useEffect( () => {
        fetch( `http://localhost:4000/api/product/${ id }` )
            .then( ( response ) => response.json() )
            .then( ( data ) => {
                setProduct( data );
            } )
            .catch( ( err ) => {
                console.error( err.message );
            } );
    }, [ id ] );

    function backClick () {
        navigate( "/product/list" )
    }

    return <section className='product-details'>
        { product && <>
            <div className='title'>
                <Button icon='chevronleft' onClick={ () => backClick() } ></Button>
                { product?.brand } - { product?.title }</div>
            <section className='row'>
                <section className='column'>
                    <section className='details'>
                        <div className='info category'>
                            <p className='sub-title'>Category</p>
                            <p className='sub-value'>{ product?.category }</p>
                        </div>
                        <div className='info description'>
                            <p className='sub-title'>Description</p>
                            <p className='sub-value'>{ product?.description }</p>
                        </div>
                        <div className='info price'>
                            <p className='sub-title'>Price</p>
                            <p className='sub-value'>CA${ product?.price }</p>
                        </div>
                        <div className='info discount'>
                            <p className='sub-title'>Discount</p>
                            <p className='sub-value'>{ product?.discountPercentage }%</p>
                        </div>
                        <div className='info rating'>
                            <p className='sub-title'>Rating</p>
                            <p className='sub-value'>{ product?.rating }</p>
                        </div>
                        <div className='info stock'>
                            <p className='sub-title'>Stock</p>
                            <p className='sub-value'>{ product?.stock }</p>
                        </div>
                    </section>
                </section>
                <section className='column gallery'>
                    <Gallery
                        id="gallery"
                        dataSource={ product?.images }
                        height={ 'auto' }
                        slideshowDelay={ 0 }
                        loop={ true }
                        showNavButtons={ true }
                        showIndicator={ true } />
                </section>
            </section>
        </>
        }
    </section>
}
