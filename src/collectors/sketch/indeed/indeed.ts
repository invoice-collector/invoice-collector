
import { SketchCollector } from '../../sketchCollector';

export class IndeedCollector extends SketchCollector {

    static CONFIG = {
        id: "indeed",
        name: "indeed",
        description: "i18n.collectors.indeed.description",
        version: "0",
        website: "https://secure.indeed.com/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/11493.jpg",
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
        entryUrl: "https://secure.indeed.com/account/login",
    }

    constructor() {
        super(IndeedCollector.CONFIG);
    }
}
