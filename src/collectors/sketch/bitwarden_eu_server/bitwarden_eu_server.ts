
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class BitwardenEuServerCollector extends SketchCollector {

    static CONFIG = {
        id: "bitwarden_eu_server",
        name: "Bitwarden EU server",
        description: "i18n.collectors.bitwarden_eu_server.description",
        version: "0",
        website: "https://vault.bitwarden.eu/#/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2420789.jpg",
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
        entryUrl: "https://vault.bitwarden.eu/#/login",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(BitwardenEuServerCollector.CONFIG);
    }
}
