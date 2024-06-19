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
  clubname: z.string().min(1, "Club name  is required").max(30),
  activityname: z.string().min(1, "Activity Name is required").max(30),
  date: z.string().min(1, "Date is required").max(50),
  points: z.string().min(1, "Activity Points is required").max(30),
  usn: z.string().min(1, "USN is required").max(30),
  
});

const AddPoints = () => {
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
            name="activityname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Activity Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Activity Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select Date</FormLabel>
                <FormControl>
                  <Input placeholder="Select Date " {...field} />
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
                <FormLabel>Activity Points</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Activity Points" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="usn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>USN</FormLabel>
                <FormControl>
                  <Input placeholder="Enter USN" {...field} />
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

export default AddPoints;
