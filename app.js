function Datatype(){

    let myobject={name:"Madras"};
    let newobject=myobject; //assigning object
    let myarray=["a","e","i","o"];
    myarray.push("u");
    let vowelarray=myarray; //assigning new array
    myobject.name="Chennai";
    const Hi= ()=>{alert('Check the console output')}
    console.log(myarray);
    console.log(myobject);
    // console.log(vowelarray);
    // console.log(newobject);
    return <div><h2>Hello World</h2><button onClick={Hi}>Reference Data Types and call the function</button></div>
}
// document.write("Reference Data Types use same memory")
ReactDOM.render(<Datatype/>, document.getElementById('mydiv'));