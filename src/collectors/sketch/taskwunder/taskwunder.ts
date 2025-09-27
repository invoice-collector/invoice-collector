
import { SketchCollector } from '../../sketchCollector';

export class TaskwunderCollector extends SketchCollector {

    static CONFIG = {
        id: "taskwunder",
        name: "TaskWunder",
        description: "i18n.collectors.taskwunder.description",
        version: "0",
        website: "http://www.taskwunder.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/46343.jpg",
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
        entryUrl: "http://www.taskwunder.com",
    }

    constructor() {
        super(TaskwunderCollector.CONFIG);
    }
}
