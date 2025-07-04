import React, { Suspense, useEffect, useState } from 'react';

// const TopBar = React.lazy(() => import('../Topbar'));
// const Footer = React.lazy(() => import('../Footer'));
// const RightSidebar = React.lazy(() => import('../RightSideBar'));

const loading = () => <div className='text-center'></div>

interface VerticalLayoutProps {
    children?: any;
}

const TwoColumnLayout = ({ children }: VerticalLayoutProps) => {
    // const { dispatch, appSelector } = useRedux();

    // const { layoutType,
    //     layoutTheme,
    //     layoutWidth,
    //     leftSidebarTheme,
    //     isOpenRightSidebar,
    //     topbarTheme,
    //     leftSideBarType,
    // } = appSelector(LayoutState);
}