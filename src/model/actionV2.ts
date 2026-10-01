import * as utils from '../utils';

/**
 * Public contract of an action. This is what core code consumes.
 * Note: `_perform` (protected) is deliberately absent — an interface
 * can only describe public members. It stays on the abstract class.
 */
export interface IActionV2<ActionType, InputContext, Args, OutputContext> {
  id: string;
  action: ActionType;
  pageUrlRegex: string;
  description: string;
  objectiveId: string | null;
  lastUsed: string | null;
  args: Args;
  destinationIds: string[];

  _perform(context: InputContext): Promise<OutputContext | OutputContext[]>;
  perform(context: InputContext): Promise<OutputContext | OutputContext[]>;
  canPerform(context: InputContext): Promise<boolean>;
  canFollow(
    actions: ActionType[],
    previousAction: ActionType | null,
    secondPreviousAction: ActionType | null,
  ): boolean;
}

export class ActionV2<InputContext, Args, OutputContext> implements IActionV2<any, InputContext, Args, OutputContext> {
    /**
     * Builds an array of ActionV2 instances from a list of plain objects.
     * @param objs The list of plain objects representing actions.
     * @returns An array of constructed ActionV2 instances.
     */
    static fromObjects<InputContext, Args, OutputContext>(objs: any): ActionV2<InputContext, Args, OutputContext>[] {
        // If objs is null or undefined or not an array, return empty array
        if (objs === null || objs === undefined || !Array.isArray(objs)) {
            return [];
        }

        const actions: ActionV2< InputContext, Args, OutputContext>[] = [];
        for (const obj of objs) {
            try {
                actions.push(ActionV2.fromObject(obj));
            }
            catch (e) {
                throw new Error(`Failed to parse actions for ${JSON.stringify(obj)}`, { cause: e });
            }
        }
        return actions;
    }

    /**
     * Builds an ActionV2 instance from a plain object.
     * @param obj The plain object representing the action.
     * @returns The constructed ActionV2 instance.
     */
    static fromObject<InputContext, Args, OutputContext>(obj: any): ActionV2<InputContext, Args, OutputContext> {
        // If obj is null or undefined, return null
        if (obj === null || obj === undefined) {
            throw new Error(`Cannot convert object to ActionV2: input is not a valid object: ${JSON.stringify(obj)}`);
        }

        return new ActionV2(
            obj.id,
            obj.description,
            obj.pageUrlRegex,
            obj.objectiveId,
            obj.lastUsed,
            obj.args,
            obj.destinationIds,
        );
    }

    id: string;
    action: any;
    pageUrlRegex: string;
    description: string;
    objectiveId: string | null;
    lastUsed: string | null;
    args: any;
    destinationIds: string[];

    /**
     * Constructs a new ActionV2 instance.
     * @param id The unique identifier of the action.
     * @param action The type of action.
     * @param description A description of the action.
     * @param pageUrlRegex The URL regex pattern associated with the action.
     * @param objectiveId The objective ID associated with the action.
     * @param lastUsed The timestamp of when the action was last used.
     * @param args The arguments required to perform the action.
     * @param destinationIds The destination IDs associated with the action.
     */
    constructor(
        id: string | null,
        action: any,
        description: string,
        pageUrlRegex: string,
        objectiveId: string | null,
        lastUsed: string | null,
        args: Args,
        destinationIds: string[] = [],
    ) {
        this.id = id || utils.hash_string(`${action}|${pageUrlRegex}|${objectiveId}|${JSON.stringify(args)}`, 'md5');
        this.action = action;
        this.pageUrlRegex = pageUrlRegex;
        this.description = description;
        this.objectiveId = objectiveId;
        this.lastUsed = lastUsed;
        this.args = args;
        this.destinationIds = destinationIds;
    }

    /**
     * Performs the action in the given context.
     * @param context The context in which to perform the action.
     * @returns The output context resulting from performing the action. It can be a single context or an array of contexts.
     */
    _perform(context: InputContext): Promise<OutputContext | OutputContext[]>{
        throw new Error('Not implemented');
    }

    /**
     * Performs the action in the given context.
     * @param context The context in which to perform the action.
     * @returns The output context resulting from performing the action. It can be a single context or an array of contexts.
     */
    perform(context: InputContext): Promise<OutputContext | OutputContext[]>{
        throw new Error('Not implemented');
    }

    /**
     * Checks whether this action can be performed in the given context.
     * @param context The context in which to check if the action can be performed.
     * @returns A boolean indicating whether the action can be performed.
     */
    canPerform(context: InputContext): Promise<boolean>{
        throw new Error('Not implemented');
    }

    /**
     * Checks whether this action can follow the given sequence of actions.
     * @param actions The sequence of actions to check against.
     * @param previousAction The action immediately preceding this one.
     * @param secondPreviousAction The action two steps before this one.
     */
    canFollow(actions: any[], previousAction: any | null, secondPreviousAction: any | null): boolean{
        throw new Error('Not implemented');
    }
}
