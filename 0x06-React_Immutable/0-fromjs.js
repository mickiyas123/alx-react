import { fromJS } from "immutable";
export default function getImmutableObject(objectArg) {
    console.log(fromJS(objectArg));
    return fromJS(objectArg);
}
