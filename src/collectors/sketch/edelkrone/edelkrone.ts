
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class EdelkroneCollector extends SketchCollector {

    static CONFIG = {
        id: "edelkrone",
        name: "edelkrone",
        description: "i18n.collectors.edelkrone.description",
        version: "0",
        website: "https://edelkrone.eu/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/60023.jpg",
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
        entryUrl: "https://edelkrone.eu/account/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(EdelkroneCollector.CONFIG);
    }
}
