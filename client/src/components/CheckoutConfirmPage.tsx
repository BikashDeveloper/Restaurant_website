import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogClose,
  DialogOverlay,
} from "@radix-ui/react-dialog";
import { Label } from "@radix-ui/react-menubar";
import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { Input } from "./ui/input";
import { Loader2, X } from "lucide-react";
import { Button } from "./ui/button";
import { DialogFooter } from "./ui/dialog";

const CheckoutConfirmPage = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
    address: "",
    city: "",
    country: "",
  });

  const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const checkoutHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(input);
    // API implementation starts from here
  };

  const loading = false;

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {/* Dark overlay for dimming background */}
      <DialogOverlay className="fixed inset-0 bg-black bg-opacity-40 transition-opacity" />

      {/* Bright Dialog Content */}
      <DialogContent className="relative z-50 p-6 rounded-lg shadow-lg bg-white max-w-xl border-2 border-[#D19254] mx-auto">
        {/* Close Button */}
        <DialogClose asChild>
          <button
            className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black"
            aria-label="Close"
          >
            <X size={20} />
          </button>
        </DialogClose>

        {/* Dialog Title and Description */}
        <DialogTitle className="font-extrabold text-lg mb-4">
          Review Your Order
        </DialogTitle>
        <DialogDescription className="text-xs mb-4">
          Double-check your delivery details and ensure everything is in order.
          When you are ready, hit the confirm button to finalize your order.
        </DialogDescription>

        {/* Form Section */}
        <form
          onSubmit={checkoutHandler}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <div>
            <Label className="block mb-1">Fullname</Label>
            <Input
              type="text"
              name="name"
              value={input.name}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="block mb-1">Email</Label>
            <Input
              type="email"
              name="email"
              value={input.email}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="block mb-1">Contact</Label>
            <Input
              type="text"
              name="contact"
              value={input.contact}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="block mb-1">Address</Label>
            <Input
              type="text"
              name="address"
              value={input.address}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="block mb-1">City</Label>
            <Input
              type="text"
              name="city"
              value={input.city}
              onChange={changeEventHandler}
            />
          </div>
          <div>
            <Label className="block mb-1">Country</Label>
            <Input
              type="text"
              name="country"
              value={input.country}
              onChange={changeEventHandler}
            />
          </div>

          <DialogFooter className="col-span-2 pt-5">
            {loading ? (
              <Button disabled className="bg-orange hover:bg-hoverOrange">
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please wait
              </Button>
            ) : (
              <Button className="bg-orange hover:bg-hoverOrange">
                Continue To Payment
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutConfirmPage;





// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogTitle,
//   DialogClose,
//   DialogOverlay,
// } from "@radix-ui/react-dialog";
// import { Label } from "@radix-ui/react-menubar";
// import { Dispatch, FormEvent, SetStateAction, useState } from "react";
// import { Input } from "./ui/input";
// import { Loader2, X } from "lucide-react";
// import { Button } from "./ui/button";
// import { DialogFooter } from "./ui/dialog";

// const CheckoutConfirmPage = ({
//   open,
//   setOpen,
// }: {
//   open: boolean;
//   setOpen: Dispatch<SetStateAction<boolean>>;
// }) => {
//   const [input, setInput] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     address: "",
//     city: "",
//     country: "",
//   });

//   const changeEventHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setInput({ ...input, [name]: value });
//   };

//   const checkoutHandler = async (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(input);
//     // API implementation starts from here
//   };

//   const loading = false;

//   return (
//     <Dialog open={open} onOpenChange={setOpen}>
//       {/* Dark overlay for dimming background */}
//       <DialogOverlay className="fixed inset-0 bg-black bg-opacity-10 transition-opacity" />

//       {/* Bright Dialog Content */}
//       <DialogContent className="relative z-50 p-6 rounded-lg shadow-lg bg-white max-w-xl border-2 border-[#D19254] mx-auto">
//         {/* Close Button */}
//         <DialogClose asChild>
//           <button
//             className="absolute top-2 right-2 p-1 text-gray-500 hover:text-black"
//             aria-label="Close"
//           >
//             <X size={20} />
//           </button>
//         </DialogClose>

//         {/* Dialog Title and Description */}
//         <DialogTitle className="font-semibold text-lg">
//           Review Your Order
//         </DialogTitle>
//         <DialogDescription className="text-xs mb-4">
//           Double-check your delivery details and ensure everything is in order.
//           When you are ready, hit the confirm button to finalize your order.
//         </DialogDescription>

//         {/* Form Section */}
//         <form
//           onSubmit={checkoutHandler}
//           className="grid grid-cols-1 md:grid-cols-2 gap-4"
//         >
//           <div>
//             <Label className="block mb-1">Fullname</Label>
//             <Input
//               type="text"
//               name="name"
//               value={input.name}
//               onChange={changeEventHandler}
//             />
//           </div>
//           <div>
//             <Label className="block mb-1">Email</Label>
//             <Input
//               type="email"
//               name="email"
//               value={input.email}
//               onChange={changeEventHandler}
//             />
//           </div>
//           <div>
//             <Label className="block mb-1">Contact</Label>
//             <Input
//               type="text"
//               name="contact"
//               value={input.contact}
//               onChange={changeEventHandler}
//             />
//           </div>
//           <div>
//             <Label className="block mb-1">Address</Label>
//             <Input
//               type="text"
//               name="address"
//               value={input.address}
//               onChange={changeEventHandler}
//             />
//           </div>
//           <div>
//             <Label className="block mb-1">City</Label>
//             <Input
//               type="text"
//               name="city"
//               value={input.city}
//               onChange={changeEventHandler}
//             />
//           </div>
//           <div>
//             <Label className="block mb-1">Country</Label>
//             <Input
//               type="text"
//               name="country"
//               value={input.country}
//               onChange={changeEventHandler}
//             />
//           </div>

//           <DialogFooter className="col-span-2 pt-5">
//             {loading ? (
//               <Button disabled className="bg-orange hover:bg-hoverOrange">
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                 Please wait
//               </Button>
//             ) : (
//               <Button className="bg-orange hover:bg-hoverOrange">
//                 Continue To Payment
//               </Button>
//             )}
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };

// export default CheckoutConfirmPage;
