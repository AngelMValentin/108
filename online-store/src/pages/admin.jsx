import { useState } from 'react';
import "./styles/admin.css";


function Admin() {



    const [coupon, setCoupon] = useState({
        code: '',
        discount: ''
    });

    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;
    
        console.log(name, text);

        let copy = {...coupon};
        if (name == 'code') {
            copy.code = text;
        }else if (name == 'discount') {
            copy.discount = text;
        }
        
        setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [product, setProduct] = useState({
        title: '',
        image: '',
        price: '',
        category: ''
    });

    function handleProduct(e) {
        const text = e.target.value;
        const name = e.target.name;

        console.log(name, text);

        let copy = {...product};

        if (name == 'title') {
            copy.title = text;
        }else if (name == 'image') {
            copy.image = text;
        }else if(name == 'price') {
            copy.price = text;
        }else if (name == 'category') {
            copy.category = text;
        }
        setProduct(copy);
    }

    function saveProduct(e) {
        console.log(product, e);

        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

    return (
        <div className="admin">
            <div className='form-container'>
                <div className='form1'>
                    <h3>Register Product</h3>
                    <form>
                        <div className="mb-3">
                            <label for="productTitle" className="form-label">Title:</label>
                            <input type="text" name='title' onBlur={handleProduct} className="form-control" id="productTitle" aria-describedby="redemptionCode" />
                        </div>
                        <div className="mb-3">
                            <label for="productImage" className="form-label">Image:</label>
                            <input type="text" name='image' onBlur={handleProduct} className="form-control" id="productImage" />
                        </div>
                        <div className="mb-3">
                            <label for="productPrice" className="form-label">Price:</label>
                            <input type="text" name='price' onBlur={handleProduct} className="form-control" id="productPrice" />
                        </div>
                        <div className="mb-3">
                            <label for="productCategory" className="form-label">Category:</label>
                            <input type="text" name='category' onBlur={handleProduct} className="form-control" id="productCategory" />
                        </div>
                        <div className="couponBtnDiv">
                            <button type="button" onClick={saveProduct}className="btn btn-primary couponBtn">Submit</button>
                        </div>

                        <ul>
                            {allProducts.map(prod =>
                                <li>{prod.title} - {prod.price} - {prod.category} - {prod.image}</li>
                                )
                        }
                        </ul>

                    </form>
                </div>
                <div className='form2'>
                    <h3>Register Coupon</h3>
                    <form>
                        <div className="mb-3">
                            <label for="redemptionCode" className="form-label">Code:</label>
                            <input type="text" className="form-control"
                            onBlur={handleCoupon} name='code' id="redemptionCode" aria-describedby="redemptionCode" />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Discount:</label>
                            <input type="number" onBlur={handleCoupon} name='discount' className="form-control" id="exampleInputPassword1" />
                        </div>
                        <div className="couponBtnDiv">
                            <button onClick={saveCoupon} type='button' className="btn btn-primary couponBtn">Submit</button>
                        </div>
                        <ul>
                            {allCoupons.map(cp => <li>{cp.code} - {cp.discount}%</li>)}
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Admin;