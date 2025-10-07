
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AtoutBoxCollector extends SketchCollector {

    static CONFIG = {
        id: "atout_box",
        name: "Atout Box",
        description: "i18n.collectors.atout_box.description",
        version: "0",
        website: "https://espace-client.atout-box.fr/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/776449.jpg",
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
        entryUrl: "https://espace-client.atout-box.fr/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AtoutBoxCollector.CONFIG);
    }
}
