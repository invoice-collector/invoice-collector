
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class IngramMicroCloudDeCollector extends SketchCollector {

    static CONFIG = {
        id: "ingram_micro_cloud_de",
        name: "Ingram Micro Cloud (.de)",
        description: "i18n.collectors.ingram_micro_cloud_de.description",
        version: "0",
        website: "https://cp.de.eu.cloud.im/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1811868.jpg",
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
        loginUrl: "https://cp.de.eu.cloud.im/",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(IngramMicroCloudDeCollector.CONFIG);
    }
}
