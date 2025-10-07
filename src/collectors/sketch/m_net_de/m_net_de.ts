
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MNetDeCollector extends SketchCollector {

    static CONFIG = {
        id: "m_net_de",
        name: "M-net.de",
        description: "i18n.collectors.m_net_de.description",
        version: "0",
        website: "https://kundenportal.m-net.de/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9250.jpg",
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
        entryUrl: "https://kundenportal.m-net.de/login/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MNetDeCollector.CONFIG);
    }
}
