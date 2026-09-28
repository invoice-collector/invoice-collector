import { Action } from './action';

export class Actions {

    /**
     * Builds an Actions instance from a plain object.
     * @param obj The plain object containing actions data.
     * @returns An instance of the Actions class populated with the data from the plain object.
     */
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