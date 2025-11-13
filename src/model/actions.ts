import { Action } from "./action";

export class Actions {
    static fromObject(obj: any): Actions {
        const actions: Actions = new Actions();
        for (const key in obj) {
            actions[key] = obj[key].map((actionObj: any) => Action.fromObject(actionObj));
        }
        return actions;
    }
}