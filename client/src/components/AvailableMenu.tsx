import { Button } from "./ui/button";
import { Card, CardContent, CardFooter } from "./ui/card";

const AvailableMenu = () => {
  return (
    <div className="md:p-4">
      <h1 className="text-xl md:text-2xl font-extrabold mb-6">AvailableMenu</h1>
      <div className="grid md:grid-cols-3 space-y-4 md:space-y-0">
        <Card className="max-w-xs mx-auto shadow-lg rounded-lg overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhrqk6iNKl-Zj9jgpVaMN_G0Hscmj3SZbOw&s"
            alt=""
            className="w-full h-40 object-cover"
          />
          <CardContent className="p-4">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Full Non-Veg Thali
            </h2>
            <p className="text-sm text-gray-600 mt-2">
              A wholesome platter featuring a variety of flavorful non-veg
              dishes, served with rice, bread, and sides for a complete meal
              experience.
            </p>
            <h3 className="text-lg font-semibold mt-4">
              Price: <span className="text-[#D19254]">₹100</span>
            </h3>
          </CardContent>
          <CardFooter className="p-4">
            <Button
            //   onClick={() => {
            //     addToCart(menu);
            //     navigate("/cart");
            //   }}
              className="w-full bg-orange hover:bg-hoverOrange"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default AvailableMenu;
