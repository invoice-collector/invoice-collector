
import { SketchCollector } from '../../sketchCollector';

export class PapershiftCollector extends SketchCollector {

    static CONFIG = {
        id: "papershift",
        name: "Papershift",
        description: "i18n.collectors.papershift.description",
        version: "0",
        website: "https://app.papershift.com/signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/19657.jpg",
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
        entryUrl: "https://app.papershift.com/signin",
    }

    constructor() {
        super(PapershiftCollector.CONFIG);
    }
}
