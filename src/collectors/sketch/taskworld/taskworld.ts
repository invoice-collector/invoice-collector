
import { SketchCollector } from '../../sketchCollector';

export class TaskworldCollector extends SketchCollector {

    static CONFIG = {
        id: "taskworld",
        name: "Taskworld",
        description: "i18n.collectors.taskworld.description",
        version: "0",
        website: "https://europe-enterprise.taskworld.com/msg-beauty/#/workspace/workspace-plan",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/53197.jpg",
        params: {
            email: {
                type: "email",
                name: "i18n.collectors.all.email",
                placeholder: "i18n.collectors.all.email.placeholder",
                mandatory: true
            },
            password: {
                type: "password",
                name: "i18n.collectors.all.password",
                placeholder: "i18n.collectors.all.password.placeholder",
                mandatory: true
            }
        },
        entryUrl: "https://europe-enterprise.taskworld.com/msg-beauty/#/workspace/workspace-plan",
    }

    constructor() {
        super(TaskworldCollector.CONFIG);
    }
}
