
import { SketchCollector } from '../../sketchCollector';

export class AutodeskCollector extends SketchCollector {

    static CONFIG = {
        id: "autodesk",
        name: "Autodesk",
        description: "i18n.collectors.autodesk.description",
        version: "0",
        website: "https://accounts.autodesk.com/Authentication/LogOn#username",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/32960.jpg",
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
        entryUrl: "https://accounts.autodesk.com/Authentication/LogOn#username",
    }

    constructor() {
        super(AutodeskCollector.CONFIG);
    }
}
