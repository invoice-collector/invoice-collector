
import { SketchCollector } from '../../sketchCollector';

export class FortrabbitCollector extends SketchCollector {

    static CONFIG = {
        id: "fortrabbit",
        name: "fortrabbit",
        description: "i18n.collectors.fortrabbit.description",
        version: "0",
        website: "https://dashboard.fortrabbit.com/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/22662.jpg",
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
        entryUrl: "https://dashboard.fortrabbit.com/login",
    }

    constructor() {
        super(FortrabbitCollector.CONFIG);
    }
}
