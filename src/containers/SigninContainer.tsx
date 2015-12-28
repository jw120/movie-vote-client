import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import actionCreators, { join, startSetup } from "../actionCreators";
import { signinSelector, ISigninPropData } from "../selectors/signin";

import Signin from "../components/Signin";

interface ISigninContainerProps {
  signin: ISigninPropData;
  dispatch: Dispatch;
}

class SigninContainer extends React.Component<ISigninContainerProps, {}> {
  render(): JSX.Element {
    return (
      <Signin
        { ...this.props.signin }
        onJoin={ (name: string) => this.props.dispatch(join(name)) }
        onStartSetup={ (name: string) => this.props.dispatch(startSetup(name)) }
       />
    );
  }
}

export default connect(signinSelector, actionCreators)(SigninContainer) as any as () => React.Component<{}, {}>;
