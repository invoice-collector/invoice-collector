
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class YammerCollector extends SketchCollector {

    static CONFIG = {
        id: "yammer",
        name: "Yammer",
        description: "i18n.collectors.yammer.description",
        version: "0",
        website: "https://www.yammer.com/login?locale=en-US&locale_type=standard",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/6418.jpg",
        type: CollectorType.SKETCH,
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
        entryUrl: "https://www.yammer.com/login?locale=en-US&locale_type=standard",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(YammerCollector.CONFIG);
    }
}
