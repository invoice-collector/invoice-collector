
import { SketchCollector } from '../../sketchCollector';

export class AlsoCollector extends SketchCollector {

    static CONFIG = {
        id: "also",
        name: "ALSO",
        description: "i18n.collectors.also.description",
        version: "0",
        website: "https://weblogin.also.com/auth/realms/also-customers/protocol/openid-connect/auth?response_type=code&scope=edit&client_id=pegasos-shop-1010&kc_locale=de&redirect_uri=https%3A%2F%2Fwww.also.com%2Fec%2Fcms5%2Fde_1010%2F1010%2Finformationen%2Fneukundenanmeld",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/27054.jpg",
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
        entryUrl: "https://weblogin.also.com/auth/realms/also-customers/protocol/openid-connect/auth?response_type=code&scope=edit&client_id=pegasos-shop-1010&kc_locale=de&redirect_uri=https%3A%2F%2Fwww.also.com%2Fec%2Fcms5%2Fde_1010%2F1010%2Finformationen%2Fneukundenanmeld",
    }

    constructor() {
        super(AlsoCollector.CONFIG);
    }
}
