import { useState, useCallback, useMemo } from "react";

const useImageOnLoad = (): [boolean, () => void] => {
    const [loaded, setLoaded] = useState(false);

    const onLoad = useCallback(() => {
        setLoaded(true);
    }, [loaded]);

    return useMemo(() => ([loaded, onLoad]), [loaded, onLoad]);
};

export default useImageOnLoad;
