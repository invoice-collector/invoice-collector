import { ActionV2, IActionV2 } from './actionV2';

/** The shape premium must provide: a class with the expected statics. */
type ActionV2Static = {
  fromObjects<InputContext, Args, OutputContext>(objs: any): IActionV2<any, InputContext, Args, OutputContext>[];
};

export class ActionV2Factory {
    private static classAction: ActionV2Static | null;

    /** Called by the premium submodule to install its class. */
    static register(cls: ActionV2Static): void {
        ActionV2Factory.classAction = cls;
    }

  static fromObjects<InputContext, Args, OutputContext>(objs: any): IActionV2<any, InputContext, Args, OutputContext>[] {
    const cls = ActionV2Factory.classAction;
    if (!cls) {
        return ActionV2.fromObjects(objs);
    }
    return cls.fromObjects(objs); // ← the static, called through the class reference
  }
}
