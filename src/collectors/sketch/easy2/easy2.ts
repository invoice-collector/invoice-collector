
import { SketchCollector } from '../../sketchCollector';

export class Easy2Collector extends SketchCollector {

    static CONFIG = {
        id: "easy2",
        name: "Easy2",
        description: "i18n.collectors.easy2.description",
        version: "0",
        website: "https://easy2.de/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2509872.jpg",
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
        entryUrl: "https://easy2.de/login",
    }

    constructor() {
        super(Easy2Collector.CONFIG);
    }
}
