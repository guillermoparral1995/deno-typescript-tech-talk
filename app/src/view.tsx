import * as React from 'react';

type Props = {
  landingName: string;
}

const View: (props: Props) => React.ReactElement = (props) => <div className={`${props.landingName}-container`}>
  hola!!! soy un div! :D 
</div>

export default View;