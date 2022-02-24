export function ConceptOfInterpolation() {

    var userName = "Mayank";

    function getTime() {
        return new Date().getHours() + " : " +  new Date().getMinutes() + " : " + new Date().getSeconds();
    }

    return (
        <div>
            <h1>The Current Time for { userName } is Given Below:</h1>
            <h2>Time: { getTime() }</h2>
        </div>
    )
}