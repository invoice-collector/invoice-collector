
import { SketchCollector } from '../../sketchCollector';

export class VestasOnlineCollector extends SketchCollector {

    static CONFIG = {
        id: "vestas_online",
        name: "Vestas Online",
        description: "i18n.collectors.vestas_online.description",
        version: "0",
        website: "https://vestasb2c.b2clogin.com/vestasb2c.onmicrosoft.com/b2c_1a_vestas_vo_app_signup_signin/oauth2/v2.0/authorize?client_id=b6af5e79-c2e7-42e1-8f16-6ba222c204d1&scope=openid%20offline_access%20openid%20https%3A%2F%2FVestasB2C.onmicrosoft.com%2Fvestasonlin",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2588182.jpg",
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
        entryUrl: "https://vestasb2c.b2clogin.com/vestasb2c.onmicrosoft.com/b2c_1a_vestas_vo_app_signup_signin/oauth2/v2.0/authorize?client_id=b6af5e79-c2e7-42e1-8f16-6ba222c204d1&scope=openid%20offline_access%20openid%20https%3A%2F%2FVestasB2C.onmicrosoft.com%2Fvestasonlin",
    }

    constructor() {
        super(VestasOnlineCollector.CONFIG);
    }
}
