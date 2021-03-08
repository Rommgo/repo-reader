import React, {FC} from 'react';

// components
import CircularProgress from "@material-ui/core/CircularProgress";
import Header from "../../../organisms/Header";
import Footer from "../../../organisms/Footer";
import UserInfo from "../../../organisms/UserInfo";
import Tabs from "../../../organisms/InfoTabs";

// styles
import './style.scss';

type MainTemplateType = {
    children: React.ReactNode;
}

const MainTemplate: FC<MainTemplateType> = (props: MainTemplateType) => {
    const component = props.children ? props.children :
        <div className="loader-wrapper-g">
            <CircularProgress color="primary"/>
        </div>;

    return (
        <>
            <div className="wrapper">
                <Header/>
                <main>
                    <Tabs/>
                    <div className="flex-wrapper">
                        <UserInfo/>
                        {component}
                    </div>
                </main>
                <Footer/>
            </div>
        </>
    );
};

export default MainTemplate;
