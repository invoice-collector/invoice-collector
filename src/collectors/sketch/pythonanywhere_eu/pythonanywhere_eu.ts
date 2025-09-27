
import { SketchCollector } from '../../sketchCollector';

export class PythonanywhereEuCollector extends SketchCollector {

    static CONFIG = {
        id: "pythonanywhere_eu",
        name: "PythonAnywhere EU",
        description: "i18n.collectors.pythonanywhere_eu.description",
        version: "0",
        website: "https://eu.pythonanywhere.com/login/?next=/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3004341.jpg",
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
        entryUrl: "https://eu.pythonanywhere.com/login/?next=/",
    }

    constructor() {
        super(PythonanywhereEuCollector.CONFIG);
    }
}
