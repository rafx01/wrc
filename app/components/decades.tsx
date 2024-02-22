import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export function Decades() {
  return (
    <div className="flex w-full bg-red-100">
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>50's</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
