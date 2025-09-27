
import { SketchCollector } from '../../sketchCollector';

export class HmdNetarchivCollector extends SketchCollector {

    static CONFIG = {
        id: "hmd_netarchiv",
        name: "HMD Netarchiv",
        description: "i18n.collectors.hmd_netarchiv.description",
        version: "0",
        website: "https://netarchiv.aprocons.de",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/3200692.jpg",
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
        entryUrl: "https://netarchiv.aprocons.de",
    }

    constructor() {
        super(HmdNetarchivCollector.CONFIG);
    }
}
