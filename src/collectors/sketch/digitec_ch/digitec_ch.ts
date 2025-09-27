
import { SketchCollector } from '../../sketchCollector';

export class DigitecChCollector extends SketchCollector {

    static CONFIG = {
        id: "digitec_ch",
        name: "Digitec.ch",
        description: "i18n.collectors.digitec_ch.description",
        version: "0",
        website: "https://id.digitecgalaxus.ch/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dhybrid.monolith-ch%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520B2B%26state%3DOpenIdConnect.AuthenticationProp",
        logo: "https://portal-ui-images.s3.eu-central-1.amazonaws.com/logo/120x120/148968.jpg",
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
        entryUrl: "https://id.digitecgalaxus.ch/login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dhybrid.monolith-ch%26response_mode%3Dform_post%26response_type%3Dcode%2520id_token%26scope%3Dopenid%2520profile%2520B2B%26state%3DOpenIdConnect.AuthenticationProp",
    }

    constructor() {
        super(DigitecChCollector.CONFIG);
    }
}
