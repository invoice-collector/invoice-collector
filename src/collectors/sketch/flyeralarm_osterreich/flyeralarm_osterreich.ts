
import { SketchCollector } from '../../sketchCollector';

export class FlyeralarmOsterreichCollector extends SketchCollector {

    static CONFIG = {
        id: "flyeralarm_osterreich",
        name: "flyeralarm Osterreich",
        description: "i18n.collectors.flyeralarm_osterreich.description",
        version: "0",
        website: "https://login.flyeralarm.com/auth/realms/flyeralarm_at/protocol/openid-connect/auth?client_id=flyshop&scope=openid&response_type=code&redirect_uri=https://www.flyeralarm.com/at/auth/openid/token&kc_locale=de-at",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/111682.jpg",
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
        entryUrl: "https://login.flyeralarm.com/auth/realms/flyeralarm_at/protocol/openid-connect/auth?client_id=flyshop&scope=openid&response_type=code&redirect_uri=https://www.flyeralarm.com/at/auth/openid/token&kc_locale=de-at",
    }

    constructor() {
        super(FlyeralarmOsterreichCollector.CONFIG);
    }
}
