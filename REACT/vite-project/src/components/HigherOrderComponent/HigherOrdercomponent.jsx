//Higher Order Component (HOC) with functional component

import MyComponent from "./Component";


const withUpperCase = (WrappedComponent) => {
    return function ({text,...restProps}) {
        const upperCaseText = text.toUpperCase();
        return <WrappedComponent {...restProps} text={upperCaseText} />
    }
}

//Component
// const MyComponent = ({text}) => <div>{text}</div>;

//Usage of HOC
const MyComponentWithUpperCase = withUpperCase(MyComponent);

export default MyComponentWithUpperCase;