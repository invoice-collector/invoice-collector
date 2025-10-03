
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class PythonanywhereCollector extends SketchCollector {

    static CONFIG = {
        id: "pythonanywhere",
        name: "PythonAnywhere",
        description: "i18n.collectors.pythonanywhere.description",
        version: "0",
        website: "https://www.pythonanywhere.com/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/31242.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.pythonanywhere.com/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(PythonanywhereCollector.CONFIG);
    }
}
