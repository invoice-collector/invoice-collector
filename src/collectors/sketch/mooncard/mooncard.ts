
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class MooncardCollector extends SketchCollector {

    static CONFIG = {
        id: "mooncard",
        name: "Mooncard",
        description: "i18n.collectors.mooncard.description",
        version: "0",
        website: "https://www.mooncard.co/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/618942.jpg",
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
        entryUrl: "https://www.mooncard.co/",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(MooncardCollector.CONFIG);
    }
}
