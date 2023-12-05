import { Navbar } from "./_components/navbar";

const MarketingLayout = ({
  children
}: {
  children: React.ReactNode;
}) => {
  return ( 
    <div className="h-screen ">
     

        {children}
    
    </div>
   );
}
 
export default MarketingLayout;