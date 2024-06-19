"use client";

import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Link from "next/link";

const FormSchema = z.object({
  eventname: z.string().min(1, "Event Name is required").max(30),
  description: z.string().min(1, "Description is required").max(50),
  contact: z.string().min(1, "Contact Details is required").max(30),
  link: z.string().min(1, "Faculty Name is required").max(30),
  points: z.string().min(1, "Activity Points is required").max(30),
  clubname: z.string().min(1, "Club name  is required").max(30),
  addimage: z.string().min(1, "Event Banner is required").max(30),
});

const AddEvent = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
        <div className="space-y-2">
          <FormField
            control={form.control}
            name="eventname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Event Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Description" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Details</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Contact Details" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="link"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Registration Link</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Registration link" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="points"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Points </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Activity points" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="clubname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Club Name </FormLabel>
                <FormControl>
                  <Input placeholder="Enter Club Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="addimage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Add Image </FormLabel>
                <FormControl>
                  <Input placeholder="Upload Image " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button className="w-full mt-6" type="submit">
          Create Club
        </Button>
      </form>
    </Form>
  );
};

export default AddEvent;
