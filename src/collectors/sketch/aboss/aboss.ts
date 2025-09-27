
import { SketchCollector } from '../../sketchCollector';

export class AbossCollector extends SketchCollector {

    static CONFIG = {
        id: "aboss",
        name: "ABOSS",
        description: "i18n.collectors.aboss.description",
        version: "0",
        website: "https://agency.a-boss.net/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/820550.jpg",
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
        entryUrl: "https://agency.a-boss.net/",
    }

    constructor() {
        super(AbossCollector.CONFIG);
    }
}
