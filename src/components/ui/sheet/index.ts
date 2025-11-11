import { SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetRoot, SheetTitle, SheetTrigger } from './sheet';

export type Sheet = typeof SheetRoot & {
  Trigger: typeof SheetTrigger;
  Close: typeof SheetClose;
  Content: typeof SheetContent;
  Header: typeof SheetHeader;
  Title: typeof SheetTitle;
  Description: typeof SheetDescription;
  Footer: typeof SheetFooter;
};

const Sheet = SheetRoot as Sheet;
Sheet.Trigger = SheetTrigger;
Sheet.Close = SheetClose;
Sheet.Content = SheetContent;
Sheet.Header = SheetHeader;
Sheet.Title = SheetTitle;
Sheet.Description = SheetDescription;
Sheet.Footer = SheetFooter;

export default Sheet;
