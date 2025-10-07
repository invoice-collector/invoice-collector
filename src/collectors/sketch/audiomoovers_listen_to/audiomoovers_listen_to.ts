
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AudiomooversListenToCollector extends SketchCollector {

    static CONFIG = {
        id: "audiomoovers_listen_to",
        name: "Audiomoovers/ Listen.to",
        description: "i18n.collectors.audiomoovers_listen_to.description",
        version: "0",
        website: "https://audiomovers.com/wp/account/#billing_history",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1349587.jpg",
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
        entryUrl: "https://audiomovers.com/wp/account/#billing_history",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AudiomooversListenToCollector.CONFIG);
    }
}
