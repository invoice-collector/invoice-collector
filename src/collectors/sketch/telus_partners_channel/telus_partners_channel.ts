
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class TelusPartnersChannelCollector extends SketchCollector {

    static CONFIG = {
        id: "telus_partners_channel",
        name: "Telus Partners Channel",
        description: "i18n.collectors.telus_partners_channel.description",
        version: "0",
        website: "https://channelpartners.telus.com/cws/orderManager#!/search",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1323399.jpg",
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
        loginUrl: "https://channelpartners.telus.com/cws/orderManager#!/search",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(TelusPartnersChannelCollector.CONFIG);
    }
}
