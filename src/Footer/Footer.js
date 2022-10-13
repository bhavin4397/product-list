import './Footer.css'

const Footer=()=>{
return(
    <div className='footer'>
        <h2 className='Brand-Name'>Women Clothing Brand</h2>

        <div className="flex-Container">
            <div><h3>Cash on Delivery</h3></div>
            <div className='ver-line'></div>
            <div><h3>Free Shipping</h3></div>
            <div className='ver-line'></div>
            <div><h3>Easy Returns</h3></div>
        </div>
        <hr className='line'/>
        <table className='table-data'>
            <tr>
                <td>mob</td>
                <td>:</td>
                <td>8460316055</td>
            </tr>
            <tr>
                <td>email</td>
                <td>:</td>
                <td>bhavinpatidar4397@gmail.com</td>
            </tr>
            
        </table>
    </div>

)
}
export default Footer;