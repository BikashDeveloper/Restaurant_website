import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DialogContent,
  DialogOverlay,
  DialogClose,
} from "@radix-ui/react-dialog";

import { Loader2, Plus, X } from "lucide-react";
import React, { FormEvent, useState } from "react";
import EditMenu from "./EditMenu";
import { MenuFormSchema, menuSchema } from "@/schema/menuSchema";

const menus = [
  {
    name: "Biriyani",
    description: "Create a menu that will make your restaurant stand out.",
    price: 60,
    image:
      "https://c.ndtvimg.com/2021-02/5on486jg_raita-biryani_625x300_01_February_21.jpg",
  },
  {
    name: "Chicken Tandoori",
    description:
      "Create a menu that will make your restaurant stand out chicken recipe.",
    price: 10,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLrvzSV8_QfPrLkv8-ORnbbOPLnTTKiUKqog&s",
  },
];

const AddMenu = () => {
  const [input, setInput] = useState<MenuFormSchema>({
    name: "",
    description: "",
    price: 0,
    image: undefined,
  });
  const [open, setOpen] = useState<boolean>(false);
  const [editOpen, setEditOpen] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<any>();
  const [error, setError] = useState<Partial<MenuFormSchema>>({});
  const loading = false;

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setInput({ ...input, [name]: type === "number" ? Number(value) : value });
  };

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = menuSchema.safeParse(input);
    if (!result.success) {
      const fieldErrors = result.error.formErrors.fieldErrors;
      setError(fieldErrors as Partial<MenuFormSchema>);
      return;
    }
    //api start
  };

  return (
    <div className="max-w-6xl mx-auto my-10">
      {/* Page Header */}
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menus
        </h1>

        {/* Dialog for Adding Menu */}
        <Dialog open={open} onOpenChange={setOpen}>
          {/* Trigger Button */}
          <DialogTrigger>
            <Button className="bg-orange hover:bg-hoverOrange">
              <Plus className="mr-2" />
              Add Menus
            </Button>
          </DialogTrigger>

          {/* Overlay to Dim Background */}
          <DialogOverlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />

          {/* Dialog Content */}
          <DialogContent className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-6 w-full max-w-md bg-white rounded-lg shadow-lg border-2 border-[#D19254]">
            {/* Close Button */}
            <DialogClose asChild>
              <button
                className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black"
                aria-label="Close"
              >
                <X size={20} />
              </button>
            </DialogClose>

            {/* Dialog Header */}
            <DialogHeader>
              <DialogTitle className="text-xl font-extrabold mb-4">
                Add A New Menu
              </DialogTitle>
              <DialogDescription className="text-sm text-gray-600">
                Create a menu that will make your restaurant stand out.
              </DialogDescription>
            </DialogHeader>

            {/* Form Section */}
            <form onSubmit={submitHandler} className="space-y-4">
              <div className="mb-4">
                <Label>Name</Label>
                <Input
                  type="text"
                  name="name"
                  value={input.name}
                  onChange={changeEventHandler}
                  placeholder="Enter menu name"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.name}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={input.description}
                  onChange={changeEventHandler}
                  placeholder="Enter menu description"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.description}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <Label>Price in (Rupees)</Label>
                <Input
                  type="text"
                  name="price"
                  value={input.price}
                  onChange={changeEventHandler}
                  placeholder="Enter menu price"
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.price}
                  </span>
                )}
              </div>
              <div className="mb-4">
                <Label>Upload Menu Image</Label>
                <Input
                  type="file"
                  name="image"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      image: e.target.files?.[0] || undefined,
                    })
                  }
                />
                {error && (
                  <span className="text-xs font-medium text-red-600">
                    {error.image?.name}
                  </span>
                )}
              </div>
              <DialogFooter className="mt-5">
                {loading ? (
                  <Button disabled className="bg-orange hover:bg-hoverOrange">
                    <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                    Please wait
                  </Button>
                ) : (
                  <Button className="bg-orange hover:bg-hoverOrange">
                    Submit
                  </Button>
                )}
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {menus.map((menu: any, idx: number) => (
        <div className="mt-6 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 md:p-4 p-2 shadow-md rounded-lg border">
            <img
              src={menu.image}
              alt=""
              className="md:h-24 md:w-24 h-16 w-full object-cover rounded-lg"
            />
            <div className="flex-1">
              <h1 className="text-lg font-semibold text-gray-800">
                {menu.name}
              </h1>
              <p className="text-sm tex-gray-600 mt-1">{menu.description}</p>
              <h2 className="text-md font-semibold mt-2">
                Price: <span className="text-[#D19254]">80</span>
              </h2>
            </div>
            <Button
              onClick={() => {
                setSelectedMenu(menu);
                setEditOpen(true);
              }}
              size={"sm"}
              className="bg-orange hover:bg-hoverOrange mt-2"
            >
              Edit
            </Button>
          </div>
        </div>
      ))}

      <EditMenu
        selectedMenu={selectedMenu}
        editOpen={editOpen}
        setEditOpen={setEditOpen}
      />
    </div>
  );
};

export default AddMenu;
