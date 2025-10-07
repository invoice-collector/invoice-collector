
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class WoodpeckerCoCollector extends SketchCollector {

    static CONFIG = {
        id: "woodpecker_co",
        name: "Woodpecker.co",
        description: "i18n.collectors.woodpecker_co.description",
        version: "0",
        website: "https://app.woodpecker.co/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/43178.jpg",
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
        entryUrl: "https://app.woodpecker.co/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(WoodpeckerCoCollector.CONFIG);
    }
}
