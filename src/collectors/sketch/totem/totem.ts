
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class TotemCollector extends SketchCollector {

    static CONFIG = {
        id: "totem",
        name: "TOTEM",
        description: "i18n.collectors.totem.description",
        version: "0",
        website: "https://totem.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/778238.jpg",
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
        entryUrl: "https://totem.co/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(TotemCollector.CONFIG);
    }
}
