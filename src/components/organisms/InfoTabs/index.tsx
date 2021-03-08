import React, {FC} from 'react';
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

// Components


// Styles
import "./style.scss";

const TabsContainer: FC = props => {
    return (
        <div id="tabs">tabs</div>
    );
};

const mapStateToProps = function (state: any) {
    return {
        app: state.app
    };
};

export default connect(mapStateToProps)(withRouter(TabsContainer));
