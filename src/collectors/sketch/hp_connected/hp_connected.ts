
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class HpConnectedCollector extends SketchCollector {

    static CONFIG = {
        id: "hp_connected",
        name: "HP Connected",
        description: "i18n.collectors.hp_connected.description",
        version: "0",
        website: "https://instantink.hpconnected.com",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/20874.jpg",
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
        entryUrl: "https://instantink.hpconnected.com",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(HpConnectedCollector.CONFIG);
    }
}
