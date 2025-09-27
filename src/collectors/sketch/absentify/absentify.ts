
import { SketchCollector } from '../../sketchCollector';

export class AbsentifyCollector extends SketchCollector {

    static CONFIG = {
        id: "absentify",
        name: "absentify",
        description: "i18n.collectors.absentify.description",
        version: "0",
        website: "https://app.absentify.com/de/settings/organisation/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2075463.jpg",
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
        entryUrl: "https://app.absentify.com/de/settings/organisation/billing",
    }

    constructor() {
        super(AbsentifyCollector.CONFIG);
    }
}
