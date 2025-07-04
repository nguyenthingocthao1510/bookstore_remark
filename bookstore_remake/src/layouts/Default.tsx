import { Suspense } from "react";

const loading = () => {
    return (
        <div className=""></div>
    )
}

interface DefaultLayoutProps {
    layout: {
        layoutType?: string,
        layoutWidth?: string,
        leftSidebarTheme?: string,
        leftSidebarType?: string,
        showRightSidebar?: boolean,
    },
    children?: any,
}

const DefaultLayout = (props: DefaultLayoutProps) => {
    const children = props['children'] || null;

    return (
        <>
            <Suspense fallback={loading()}>{children}</Suspense>
        </>
    )
}

export default DefaultLayout;