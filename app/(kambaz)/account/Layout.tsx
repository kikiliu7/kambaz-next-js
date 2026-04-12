import { ReactNode } from "react";
import AccountNavigation from "./Navigation";

export default function AccountLayout({ children }: Readonly<{ children: ReactNode }>) {
 return (
   <div id="wd-kambaz">
     <table>
       <tbody>
         <tr>
      <td valign="top" style={{ width: "200px", padding: "10px" }}>
          <AccountNavigation />
        </td>
           <td valign="top" width="100%"> {children}            </td>
         </tr>
       </tbody>
     </table>
  </div>
);}
