import cart from "./../assets/images/icon-cart.svg";

function InfoBox() {
  return (
    <div className=" h-full p-4 sm:flex sm:flex-col sm:justify-center sm:flex-1 ">
      <h2 className=" font-montserrat tracking-widest uppercase text-sm text-secondary-dar_g_blue">
        Perfume
      </h2>
      <h1 className="font-fraunces text-2xl font-bold my-2">
        Gabrielle Essense Eau De Parfum
      </h1>
      <p className="text-secondary-dar_g_blue text-sm">
        A floral,solar and voluptuous interpretation composed by Olivier Polge,
        Perfumer-Creator for the House of CHANEL.
      </p>
      <div>
        <div className="my-2 flex items-center">
          <div className="font-fraunces text-2xl font-bold text-primary-dark_cyan mr-4">
            $149.99
          </div>
          <div className="font-fraunces text-sm  text-secondary-dar_g_blue line-through">
            $169.99
          </div>
        </div>
        <button className="bg-primary-dark_cyan w-full rounded-md p-2 flex justify-center items-center gap-2 hover:bg-green-900">
          <img src={cart} alt="cart" />
          <h3 className="text-white font-montserrat ">Add to Cart</h3>
        </button>
      </div>
    </div>
  );
}

export default InfoBox;
