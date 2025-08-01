"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"; // adjust path as needed
import { Plus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  addBtnTitle: string;
  isDialog?: boolean;
  dialogContent?: React.ReactNode;
}

const AddButton = ({ addBtnTitle, isDialog = false, dialogContent }: Props) => {
  const pathname = usePathname();
  const href = `${pathname}/add`;
  const [open, setOpen] = useState(false);

  const ButtonContent = (
    <Button variant="button">
      <Plus />
      <span className="hidden sm:inline-block capitalize">{`Add ${addBtnTitle}`}</span>
    </Button>
  );

  if (isDialog && dialogContent) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{ButtonContent}</DialogTrigger>
        <DialogContent className=" max-h-[500px] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add {addBtnTitle}</DialogTitle>
            {/* <DialogDescription>
              Add a new {addBtnTitle} to the system.
            </DialogDescription> */}
          </DialogHeader>
          {dialogContent}
        </DialogContent>
      </Dialog>
    );
  }

  return <Link href={href}>{ButtonContent}</Link>;
};

export default AddButton;
