
import { SketchCollector } from '../../sketchCollector';

export class CopytrackCollector extends SketchCollector {

    static CONFIG = {
        id: "copytrack",
        name: "COPYTRACK",
        description: "i18n.collectors.copytrack.description",
        version: "0",
        website: "https://app.copytrack.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/107796.jpg",
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
        entryUrl: "https://app.copytrack.com/login",
    }

    constructor() {
        super(CopytrackCollector.CONFIG);
    }
}
