import { Action } from "./action";

export class Actions {
    static fromObject(obj: any): Actions {
        const actions: Actions = new Actions();
        for (const key in obj) {
            try {
                actions[key] = obj[key].map((actionObj: any) => Action.fromObject(actionObj));
            }
            catch (e) {
                throw new Error(`Failed to parse actions for ${key}`, { cause: e });
            }
        }
        return actions;
    }
}