
import { SketchCollector } from '../../sketchCollector';

export class PitneyBowesCollector extends SketchCollector {

    static CONFIG = {
        id: "pitney_bowes",
        name: "Pitney Bowes",
        description: "i18n.collectors.pitney_bowes.description",
        version: "0",
        website: "https://www.pitneybowes.us/signin/logon.go?request_locale=en_US#/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8843.jpg",
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
        entryUrl: "https://www.pitneybowes.us/signin/logon.go?request_locale=en_US#/account/login",
    }

    constructor() {
        super(PitneyBowesCollector.CONFIG);
    }
}
