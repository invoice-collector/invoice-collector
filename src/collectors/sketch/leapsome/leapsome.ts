
import { SketchCollector } from '../../sketchCollector';

export class LeapsomeCollector extends SketchCollector {

    static CONFIG = {
        id: "leapsome",
        name: "Leapsome",
        description: "i18n.collectors.leapsome.description",
        version: "0",
        website: "https://www.leapsome.com/app/#/team/settings/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/202959.jpg",
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
        entryUrl: "https://www.leapsome.com/app/#/team/settings/",
    }

    constructor() {
        super(LeapsomeCollector.CONFIG);
    }
}
