"use client";
import BooleanStateVariables from "./BooleanStateVariables";
import ClickEvent from "./ClickEvent";
import Counter from "./Counter";
import DateStateVariable from "./DateStateVariable";
import PassingDataOnEvent from "./PassingDataOnEvent";
import PassingFunctions from "./PassingFunctions";
import StringStateVariables from "./StringStateVariables";
import ObjectStateVariable from "./ObjectStateVariable";
import ArrayStateVariable from "./ArrayStateVariable";
import ParentStateComponent from "./ParentStateComponent";
import Link from "next/link";
import { Provider } from "react-redux";
import store from "./store"


  function sayHello() {
    alert("Hello");
  }


export default function lab4() {
    return (
            <Provider store={store}>
    <div id="wd-lab4">
        <h3>Lab 4</h3>
        <ClickEvent/>
        <PassingDataOnEvent/>
        <PassingFunctions theFunction={sayHello} />
        <Counter/>
        <BooleanStateVariables/>
        <StringStateVariables/>
        <DateStateVariable/>
        <ObjectStateVariable/>
        <ArrayStateVariable/>
        <ParentStateComponent/>
        <Link href="./lab4/redux">Redux Examples</Link>
    </div>
    </Provider>
    );}