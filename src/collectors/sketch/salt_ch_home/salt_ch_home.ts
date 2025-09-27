
import { SketchCollector } from '../../sketchCollector';

export class SaltChHomeCollector extends SketchCollector {

    static CONFIG = {
        id: "salt_ch_home",
        name: "Salt.ch Home",
        description: "i18n.collectors.salt_ch_home.description",
        version: "0",
        website: "https://my.salt.ch/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/1643201.jpg",
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
        entryUrl: "https://my.salt.ch/",
    }

    constructor() {
        super(SaltChHomeCollector.CONFIG);
    }
}
