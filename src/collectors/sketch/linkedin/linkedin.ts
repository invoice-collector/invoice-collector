
import { SketchCollector } from '../../sketchCollector';

export class LinkedinCollector extends SketchCollector {

    static CONFIG = {
        id: "linkedin",
        name: "LinkedIn",
        description: "i18n.collectors.linkedin.description",
        version: "0",
        website: "https://www.linkedin.com/uas/login?goback=&trk=hb_signin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/331.jpg",
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
        entryUrl: "https://www.linkedin.com/uas/login?goback=&trk=hb_signin",
    }

    constructor() {
        super(LinkedinCollector.CONFIG);
    }
}
