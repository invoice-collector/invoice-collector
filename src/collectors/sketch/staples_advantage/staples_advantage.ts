
import { SketchCollector } from '../../sketchCollector';

export class StaplesAdvantageCollector extends SketchCollector {

    static CONFIG = {
        id: "staples_advantage",
        name: "Staples Advantage",
        description: "i18n.collectors.staples_advantage.description",
        version: "0",
        website: "http://www.staplesadvantage.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8635.jpg",
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
        entryUrl: "http://www.staplesadvantage.com",
    }

    constructor() {
        super(StaplesAdvantageCollector.CONFIG);
    }
}
