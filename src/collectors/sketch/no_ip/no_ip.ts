
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NoIpCollector extends SketchCollector {

    static CONFIG = {
        id: "no_ip",
        name: "No-IP",
        description: "i18n.collectors.no_ip.description",
        version: "0",
        website: "http://www.noip.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9887.jpg",
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
        entryUrl: "http://www.noip.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NoIpCollector.CONFIG);
    }
}
