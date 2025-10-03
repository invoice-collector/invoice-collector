
import { SketchCollector } from '../../sketchCollector';
import { CollectorState, CollectorType } from '../../abstractCollector';

export class AllianzDirectCollector extends SketchCollector {

    static CONFIG = {
        id: "allianz_direct",
        name: "Allianz Direct",
        description: "i18n.collectors.allianz_direct.description",
        version: "0",
        website: "https://login.allianzdirect.com/allianzdirect.onmicrosoft.com/b2c_1a_allianz_signin_username_de/oauth2/v2.0/authorize?client_id=9d490b29-d96c-493b-91cf-65203fcf446d&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fwww.allianzdirect.de%2F",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1487108.jpg",
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
        entryUrl: "https://login.allianzdirect.com/allianzdirect.onmicrosoft.com/b2c_1a_allianz_signin_username_de/oauth2/v2.0/authorize?client_id=9d490b29-d96c-493b-91cf-65203fcf446d&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fwww.allianzdirect.de%2F",
        state: CollectorState.DEVELOPMENT
    }

    constructor() {
        super(AllianzDirectCollector.CONFIG);
    }
}
