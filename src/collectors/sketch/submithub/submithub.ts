
import { SketchCollector } from '../../sketchCollector';

export class SubmithubCollector extends SketchCollector {

    static CONFIG = {
        id: "submithub",
        name: "SubmitHub",
        description: "i18n.collectors.submithub.description",
        version: "0",
        website: "https://www.submithub.com/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776396.jpg",
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
        entryUrl: "https://www.submithub.com/account",
    }

    constructor() {
        super(SubmithubCollector.CONFIG);
    }
}
