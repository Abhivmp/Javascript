export default function UsingPropsComponent(props) {
    debugger;
    props.details.userName = "Random Name";
    return <h1>Hello {props.userName}...</h1>
}