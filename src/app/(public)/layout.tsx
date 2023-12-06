const PublicLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="h-screen">
        {children}
      </div>
     );
  }
   
  export default PublicLayout;