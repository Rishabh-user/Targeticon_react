import React, { useEffect } from "react";

function HelmetWrapper({ title, component: Component }) {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return <Component />;
}

export default HelmetWrapper;
