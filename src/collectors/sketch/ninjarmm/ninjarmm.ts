
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class NinjarmmCollector extends SketchCollector {

    static CONFIG = {
        id: "ninjarmm",
        name: "ninjaRMM",
        description: "i18n.collectors.ninjarmm.description",
        version: "0",
        website: "https://eu.ninjarmm.com/auth/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/860256.jpg",
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
        entryUrl: "https://eu.ninjarmm.com/auth/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(NinjarmmCollector.CONFIG);
    }
}
