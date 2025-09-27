
import { SketchCollector } from '../../sketchCollector';

export class GotomeetingBusinessCollector extends SketchCollector {

    static CONFIG = {
        id: "gotomeeting_business",
        name: "GotoMeeting - Business",
        description: "i18n.collectors.gotomeeting_business.description",
        version: "0",
        website: "https://myaccount.logmeininc.com/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/120777.jpg",
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
        entryUrl: "https://myaccount.logmeininc.com/",
    }

    constructor() {
        super(GotomeetingBusinessCollector.CONFIG);
    }
}
