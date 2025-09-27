
import { SketchCollector } from '../../sketchCollector';

export class VodafoneKabelDeutschlandCollector extends SketchCollector {

    static CONFIG = {
        id: "vodafone_kabel_deutschland",
        name: "Vodafone Kabel Deutschland",
        description: "i18n.collectors.vodafone_kabel_deutschland.description",
        version: "0",
        website: "https://www.vodafone.de/meinvodafone/account/login",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/329.jpg",
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
        entryUrl: "https://www.vodafone.de/meinvodafone/account/login",
    }

    constructor() {
        super(VodafoneKabelDeutschlandCollector.CONFIG);
    }
}
