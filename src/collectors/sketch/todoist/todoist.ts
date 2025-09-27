
import { SketchCollector } from '../../sketchCollector';

export class TodoistCollector extends SketchCollector {

    static CONFIG = {
        id: "todoist",
        name: "todoist",
        description: "i18n.collectors.todoist.description",
        version: "0",
        website: "https://de.todoist.com/Users/viewPrefs?page=payments",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19499.jpg",
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
        entryUrl: "https://de.todoist.com/Users/viewPrefs?page=payments",
    }

    constructor() {
        super(TodoistCollector.CONFIG);
    }
}
