
import { SketchCollector } from '../../sketchCollector';

export class RunboxNoCollector extends SketchCollector {

    static CONFIG = {
        id: "runbox_no",
        name: "Runbox.no",
        description: "i18n.collectors.runbox_no.description",
        version: "0",
        website: "https://runbox.com/mail",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9580.jpg",
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
        entryUrl: "https://runbox.com/mail",
    }

    constructor() {
        super(RunboxNoCollector.CONFIG);
    }
}
