
import { SketchCollector } from '../../sketchCollector';

export class MojoPowerCollector extends SketchCollector {

    static CONFIG = {
        id: "mojo_power",
        name: "Mojo Power",
        description: "i18n.collectors.mojo_power.description",
        version: "0",
        website: "https://portal.mojopower.com.au/auth/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/9349.jpg",
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
        entryUrl: "https://portal.mojopower.com.au/auth/login",
    }

    constructor() {
        super(MojoPowerCollector.CONFIG);
    }
}
