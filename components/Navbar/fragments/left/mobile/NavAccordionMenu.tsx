import NavCardMobile from "@/components/Navbar/fragments/left/mobile/NavCardMobile";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionThemeItem,
  AccordionThemeTrigger,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { NavContentLinks } from "@/types/product";

const AccordionNavMenu = ({
  navContentLinks,
}: {
  navContentLinks: NavContentLinks;
}) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionThemeItem value="item-1">
        <AccordionThemeTrigger>Shop</AccordionThemeTrigger>
        <AccordionContent>
          <Accordion type="multiple" className="w-full">
            {Object.entries(navContentLinks).map(([key, { text, cards }]) => (
              <AccordionItem key={key} value={key}>
                <AccordionTrigger>{text}</AccordionTrigger>
                <AccordionContent>
                  <div className="grid-cols-3 gap-2 grid">
                    {cards.map((card, j) => (
                      <NavCardMobile key={j} {...card} />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </AccordionContent>
      </AccordionThemeItem>
    </Accordion>
  );
};

export default AccordionNavMenu;
