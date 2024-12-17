"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useRouter, useSearchParams } from "next/navigation";
import EventForm from "./event-form";

export default function CreateEventDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const route = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const create = searchParams.get("create");
    if (create === "true") {
      setIsOpen(true);
    }
  }, [searchParams]);

  const handleClose = () => {
    setIsOpen(false);
    if (searchParams.get("create") === "true") {
      route.replace(window?.location?.pathname);
    }
  };

  return (
    <Drawer open={isOpen} close = {handleClose}>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Create Event</DrawerTitle>
          <DrawerDescription>Set up your event details below.</DrawerDescription>
        </DrawerHeader>
        <div className="p-4 pb-0">
          <EventForm onSubmitForm = { () => {handleClose();}}/>
        </div>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline" onClick={handleClose}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
