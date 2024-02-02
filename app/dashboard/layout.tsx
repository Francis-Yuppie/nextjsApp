import SideNav from '@/app/ui/dashboard/sidenav';
import TopNav from '@/app/ui/dashboard/top-nav';

 
// export default function Layout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
//       <div className="w-full flex-none md:w-64">
//         <SideNav />
//       </div>
//       <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
//     </div>
//   );
// }



export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      {/* TopNav component */}
      <TopNav />
      
      {/* Main content layout */}
      <div className="flex flex-col md:flex-row flex-grow">
        {/* SideNav */}
        <div className="w-full md:w-64">
          <SideNav />
        </div>
        
        {/* Content area */}
        <div className="flex-grow p-6 md:p-12 md:overflow-y-auto md:mt-20">
          {children}
        </div>
      </div>
    </div>
  );
}
