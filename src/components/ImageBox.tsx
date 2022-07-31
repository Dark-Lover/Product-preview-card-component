import productImg from "./../assets/images/image-product-mobile.jpg";
function ImageBox() {
  return (
    <div className=" overflow-hidden h-52 sm:flex-1 sm:h-96">
      <img src={productImg} className="object-cover  sm:h-96 " alt="product" />
    </div>
  );
}

export default ImageBox;
