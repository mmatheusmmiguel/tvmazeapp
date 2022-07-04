import React, {createContext, Dispatch, ReactNode, SetStateAction} from 'react';
import useDetails from '../hooks/useDetails';
import {IGetCast} from '../services/Cast';
import {IGetDetails} from '../services/Details';

type AppContextProps = {
  children: ReactNode;
};

type AppContextType = {
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  list: IGetDetails;
  setList: Dispatch<SetStateAction<IGetDetails>>;
  castList: Dispatch<SetStateAction<IGetCast>>;
  setCastList: IGetCast;
};

export const useAppContext = () => useContext(AppContext);

const AppContext = createContext<AppContextType>({} as AppContextType);

function AppProvider({children}: AppContextProps) {
  const {loaded, setLoaded, list, setList, castList, setCastList} =
    useDetails();

  return (
    <AppContext.Provider
      value={{loaded, setLoaded, list, setList, castList, setCastList}}>
      {children}
    </AppContext.Provider>
  );
}

export {AppContext, AppProvider};
