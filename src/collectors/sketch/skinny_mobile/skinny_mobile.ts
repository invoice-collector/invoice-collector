
import { SketchCollector } from '../../sketchCollector';

export class SkinnyMobileCollector extends SketchCollector {

    static CONFIG = {
        id: "skinny_mobile",
        name: "Skinny Mobile",
        description: "i18n.collectors.skinny_mobile.description",
        version: "0",
        website: "https://www.skinny.co.nz/Security/login/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/8704.jpg",
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
        entryUrl: "https://www.skinny.co.nz/Security/login/",
    }

    constructor() {
        super(SkinnyMobileCollector.CONFIG);
    }
}
