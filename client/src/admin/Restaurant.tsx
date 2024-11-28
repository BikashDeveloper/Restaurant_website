import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-menubar";
import { Loader2 } from "lucide-react";

const Restaurant = () => {
   const loading = false;
   const restaurant = false;
  return (
    <div className="max-w-6xl mx-auto my-10">
      <div>
        <div>
          <h1 className="font-extrabold text-2xl mb-5">Add Restaurants</h1>
          <form action="">
            <div className="md:grid grid-cols-2 gap-6 space-y-2 md:space-y-0">
              {/* Restaurant Name  */}
              <div>
                <Label>Restaurant Name</Label>
                <Input
                  type="text"
                  name="restaurantName"
                  //   value={input.restaurantName}
                  //   onChange={changeEventHandler}
                  placeholder="Enter your restaurant name"
                />
              </div>
              <div>
                <Label>City</Label>
                <Input
                  type="text"
                  name="city"
                  //   value={input.restaurantName}
                  //   onChange={changeEventHandler}
                  placeholder="Enter your city name"
                />
              </div>
              <div>
                <Label>Country</Label>
                <Input
                  type="text"
                  name="country"
                  //   value={input.restaurantName}
                  //   onChange={changeEventHandler}
                  placeholder="Enter your country name"
                />
              </div>
              <div>
                <Label>Delivery Time</Label>
                <Input
                  type="text"
                  name="deliveryTime"
                  //   value={input.restaurantName}
                  //   onChange={changeEventHandler}
                  placeholder="Enter your DeliveryTime"
                />
              </div>
              <div>
                <Label>Cuisines</Label>
                <Input
                  type="text"
                  name="cuisines"
                  //   value={input.restaurantName}
                  //   onChange={changeEventHandler}
                  placeholder="Enter your cuisines"
                />
              </div>
              <div>
                <Label>Upload Restaurant Banner</Label>
                <Input
                  type="file"
                  name="image"
                  accept="image/*"
                  //   value={input.restaurantName}
                  //   onChange={changeEventHandler}
                  placeholder="Enter your restaurant name"
                />
              </div>
            </div>
            <div className="my-5 w-fit">
              {loading ? (
                <Button disabled className="bg-orange hover:bg-hoverOrange">
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Please wait
                </Button>
              ) : (
                <Button className="bg-orange hover:bg-hoverOrange">
                  {restaurant
                    ? "Update Your Restaurant"
                    : "Add Your Restaurant"}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
