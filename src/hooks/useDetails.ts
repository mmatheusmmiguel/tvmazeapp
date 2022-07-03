import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import CastService, { IGetCast } from '../services/Cast';
import DetailsService, { IGetDetails } from '../services/Details';

export default function useDetails() { 
    const [loaded, setLoaded] = useState<boolean>(false);
    const [list, setList] = useState<IGetDetails>({});
    const [castList, setCastList] = useState<IGetCast>({});

    const fetchData = async () => {
        setLoaded(false);
        let response: IGetDetails = await DetailsService.get("6771", [{ name: "embed", value: "episodes" }]);
        let castResponse: IGetCast = await CastService.get();
        setList(response);
        setCastList(castResponse);
        setLoaded(true);
    }

    useEffect(() => {
        (async () => {
            try {
                await fetchData();
            } catch (e: any) {
                Alert.alert(e.message);
            }
        })()
    }, []);

    return { loaded, setLoaded, list, setList, castList, setCastList }
}