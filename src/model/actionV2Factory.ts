import { ActionV2, IActionV2 } from './actionV2';

/** The shape premium must provide: a class with the expected statics. */
type ActionV2Static = {
  
    /**
     * Builds an array of ActionV2 instances from a list of plain objects.
     * @param objs The list of plain objects representing actions.
     * @returns An array of constructed ActionV2 instances.
     */
  fromObjects<InputContext, Args, OutputContext>(objs: any): IActionV2<any, InputContext, Args, OutputContext>[];
};

export class ActionV2Factory {
    private static classAction: ActionV2Static | null;

    /**
     * Register a premium ActionV2 class instead of the default one.
     * @param cls ActionV2 class to implement
     */
    static register(cls: ActionV2Static): void {
        ActionV2Factory.classAction = cls;
    }

    /**
     * Builds an array of ActionV2 instances from a list of plain objects.
     * @param objs The list of plain objects representing actions.
     * @returns An array of constructed ActionV2 instances.
     */
    static fromObjects<InputContext, Args, OutputContext>(objs: any): IActionV2<any, InputContext, Args, OutputContext>[] {
      const cls = ActionV2Factory.classAction;
      if (!cls) {
          return ActionV2.fromObjects(objs);
      }
      return cls.fromObjects(objs); // ← the static, called through the class reference
    }
}
