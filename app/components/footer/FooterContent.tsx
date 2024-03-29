interface FooterContentProps{
    children: React.ReactNode;
}

const FooterContent: React.FC<FooterContentProps>= ({children}) => {
    return ( <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/6 mb-6 flex flex-col ">
        
         {children} </div> );


}
 
export default FooterContent;