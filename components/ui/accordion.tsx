"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/utils/utils";
import { cva } from "class-variance-authority";

function Accordion({
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Root>) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />;
}

function AccordionItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-b last:border-b-0 mx-3 border-border ", className)}
      {...props}
    />
  );
}

function AccordionThemeItem({
  className,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Item>) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "bg-secondary rounded-3xl overflow-hidden border border-border",
        className
      )}
      {...props}
    />
  );
}

export const accordionTriggerstyle = cva(
  "flex flex-1 items-start justify-between gap-4 py-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45 cursor-pointer text-lg font-semibold group/accordiontrigger focus:outline-none bg-secondary z-50"
);

function AccordionTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(accordionTriggerstyle(), className)}
        {...props}
      >
        <span className="after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-black after:transition-[width] after:duration-500 group-hover/accordiontrigger:after:w-full group-focus/accordiontrigger:after:w-full inline-block relative">
          {children}
        </span>
        <Plus className="text-muted-foreground pointer-events-none size-7 shrink-0 translate-y-0.5 transition-transform duration-200 p-1" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}
function AccordionThemeTrigger({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Trigger>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex flex-1 items-start justify-between gap-4 py-4 text-left transition-all outline-none disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-45 bg-secondary cursor-pointer text-2xl font-semibold px-3 group/accordionthemetrigger",
          className
        )}
        {...props}
      >
        <span className="after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-black after:transition-[width] after:duration-500 group-hover/accordionthemetrigger:after:w-full group-focus/accordionthemetrigger:after:w-full inline-block relative">
          {children}
        </span>
        <Plus className="text-muted-foreground pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200 bg-primary size-7 text-primary-foreground rounded-full p-1" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({
  className,
  children,
  ...props
}: React.ComponentProps<typeof AccordionPrimitive.Content>) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down transition-[height,opacity] text-sm"
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionThemeItem,
  AccordionThemeTrigger,
};
