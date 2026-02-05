
import { SketchCollector } from '../../sketchCollector';
import { CollectorCaptcha, CollectorState, CollectorType } from '../../abstractCollector';

export class PacketstreamCollector extends SketchCollector {

    static CONFIG = {
        id: "packetstream",
        name: "PacketStream",
        description: "i18n.collectors.packetstream.description",
        version: "0",
        website: "https://packetstream.io/dashboard/account",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/779629.jpg",
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
        loginUrl: "https://packetstream.io/dashboard/account",
        captcha: CollectorCaptcha.NONE,
        enableInteractiveLogin: true,
        state: CollectorState.PLANNED
    }

    constructor() {
        super(PacketstreamCollector.CONFIG);
    }
}
