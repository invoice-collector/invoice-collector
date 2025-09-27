
import { SketchCollector } from '../../sketchCollector';

export class AhveasyCollector extends SketchCollector {

    static CONFIG = {
        id: "ahveasy",
        name: "AHVeasy",
        description: "i18n.collectors.ahveasy.description",
        version: "0",
        website: "https://www.eadminportal.ch/portal/Portal.do?embed=/zl/svasg/igseaagap/agap/",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/2732573.jpg",
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
        entryUrl: "https://www.eadminportal.ch/portal/Portal.do?embed=/zl/svasg/igseaagap/agap/",
    }

    constructor() {
        super(AhveasyCollector.CONFIG);
    }
}
