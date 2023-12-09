// import React, { createContext, useContext, useState, ReactNode } from "react";
// import { SavedNamesProps } from "@/shared/types";

// interface SectionContextData {
//   isEditing: boolean;
//   savedNames: SavedNamesProps;
//   setSavedNames: React.Dispatch<React.SetStateAction<SavedNamesProps>>;
//   setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const SectionContext = createContext<SectionContextData | undefined>(undefined);

// interface SectionProviderProps {
//   children: ReactNode;
// }

// export const SectionProvider: React.FC<SectionProviderProps> = ({
//   children,
// }) => {
//   const [isEditing, setIsEditing] = useState<boolean>(false);

//   const [savedNames, setSavedNames] = useState<SavedNamesProps>({
//     education: [],
//     experience: [],
//     projects: [],
//     skills: [],
//     certificates: [],
//   });

  

//   return (
//     <SectionContext.Provider
//       value={{
//         isEditing,
//         savedNames,       
//         setIsEditing,
//         setSavedNames,
//       }}
//     >
//       {children}
//     </SectionContext.Provider>
//   );
// };

// export const useSection = (): SectionContextData => {
//   const context = useContext(SectionContext);
//   if (!context) {
//     throw new Error("useSection must be used within a SectionProvider");
//   }
//   return context;
// };
