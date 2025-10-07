
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class GandiNetCollector extends SketchCollector {

    static CONFIG = {
        id: "gandi_net",
        name: "gandi.net",
        description: "i18n.collectors.gandi_net.description",
        version: "0",
        website: "https://admin.gandi.net/billing",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8697.jpg",
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
        entryUrl: "https://admin.gandi.net/billing",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(GandiNetCollector.CONFIG);
    }
}
