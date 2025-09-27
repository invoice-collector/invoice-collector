
import { SketchCollector } from '../../sketchCollector';

export class VhvVersicherungenCollector extends SketchCollector {

    static CONFIG = {
        id: "vhv_versicherungen",
        name: "VHV- Versicherungen",
        description: "i18n.collectors.vhv_versicherungen.description",
        version: "0",
        website: "https://sso.vhv.de/auth/realms/kundenportal/protocol/openid-connect/auth?client_id=kundenportal-web&redirect_uri=https%3A%2F%2Fkundenportal.vhv.de%2F&state=b187b06b-b65b-482d-9e04-31119433fa26&response_mode=fragment&response_type=code&scope=openid&nonce=c",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2549182.jpg",
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
        entryUrl: "https://sso.vhv.de/auth/realms/kundenportal/protocol/openid-connect/auth?client_id=kundenportal-web&redirect_uri=https%3A%2F%2Fkundenportal.vhv.de%2F&state=b187b06b-b65b-482d-9e04-31119433fa26&response_mode=fragment&response_type=code&scope=openid&nonce=c",
    }

    constructor() {
        super(VhvVersicherungenCollector.CONFIG);
    }
}
